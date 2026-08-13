import { Resend } from 'resend'

type InquiryReason = 'price' | 'personal' | 'item'

interface ContactBody {
  reason?: InquiryReason
  product?: string
  name?: string
  email?: string
  phone?: string
  message?: string
  website?: string
}

const reasons: Record<InquiryReason, string> = {
  price: 'Prijsaanvraag',
  personal: 'Persoonlijke aanvraag',
  item: 'Vraag over een item',
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const requests = new Map<string, number[]>()

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;')
}

function enforceRateLimit(ip: string) {
  const now = Date.now()
  const recent = (requests.get(ip) || []).filter(timestamp => now - timestamp < 15 * 60 * 1000)
  if (recent.length >= 5) {
    throw createError({ statusCode: 429, statusMessage: 'Je hebt al meerdere aanvragen verstuurd. Probeer het over een kwartier opnieuw.' })
  }
  recent.push(now)
  requests.set(ip, recent)
}

export default defineEventHandler(async (event) => {
  const body = await readBody<ContactBody>(event)

  // Bots vullen dit verborgen veld vaak in. Doe alsof de aanvraag is gelukt.
  if (body.website) return { ok: true }

  const reason = body.reason
  const name = body.name?.trim() || ''
  const email = body.email?.trim().toLowerCase() || ''
  const phone = body.phone?.trim() || ''
  const product = body.product?.trim() || ''
  const message = body.message?.trim() || ''

  if (!reason || !reasons[reason]) {
    throw createError({ statusCode: 400, statusMessage: 'Kies een soort aanvraag.' })
  }
  if (name.length < 2 || name.length > 80) {
    throw createError({ statusCode: 400, statusMessage: 'Vul een geldige naam in.' })
  }
  if (!emailPattern.test(email) || email.length > 160) {
    throw createError({ statusCode: 400, statusMessage: 'Vul een geldig e-mailadres in.' })
  }
  if (phone.length > 40 || product.length > 120 || message.length < 3 || message.length > 2000) {
    throw createError({ statusCode: 400, statusMessage: 'Controleer je aanvraag en probeer het opnieuw.' })
  }

  enforceRateLimit(getRequestIP(event, { xForwardedFor: true }) || 'unknown')

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    throw createError({ statusCode: 503, statusMessage: 'De e-mailservice is nog niet ingesteld. Probeer het later opnieuw.' })
  }

  const reasonLabel = reasons[reason]
  const safe = {
    reason: escapeHtml(reasonLabel),
    product: escapeHtml(product || 'Niet opgegeven'),
    name: escapeHtml(name),
    email: escapeHtml(email),
    phone: escapeHtml(phone || 'Niet opgegeven'),
    message: escapeHtml(message).replaceAll('\n', '<br />'),
  }

  const resend = new Resend(apiKey)
  const recipient = process.env.DNARA_CONTACT_TO || 'dnarabags@hotmail.com'
  const { error } = await resend.emails.send({
    from: process.env.DNARA_RESEND_FROM || process.env.RESEND_FROM || "D'Nara Bags <dnarabags@kober.noxxara.com>",
    to: [recipient],
    replyTo: email,
    subject: `${reasonLabel}${product ? ` — ${product}` : ''} van ${name}`,
    text: [
      `Nieuwe ${reasonLabel.toLowerCase()} via dnarabags.noxxara.com`,
      '',
      `Naam: ${name}`,
      `E-mail: ${email}`,
      `Telefoon: ${phone || 'Niet opgegeven'}`,
      `Tas: ${product || 'Niet opgegeven'}`,
      '',
      'Bericht:',
      message,
    ].join('\n'),
    html: `
      <!doctype html>
      <html lang="nl">
        <body style="margin:0;padding:0;background:#050505;color:#f5efe3;font-family:Arial,sans-serif">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#050505;padding:32px 16px">
            <tr><td align="center">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:640px;border:1px solid #6e562d;background:#0d0c0a">
                <tr><td style="padding:34px 36px 28px;border-bottom:1px solid #3b2f1c;text-align:center">
                  <div style="color:#c59a4a;font-size:11px;letter-spacing:4px;text-transform:uppercase">Handmade beaded bags</div>
                  <div style="margin-top:10px;color:#f0d595;font-family:Georgia,serif;font-size:38px">D'Nara Bags</div>
                </td></tr>
                <tr><td style="padding:36px">
                  <div style="color:#c59a4a;font-size:11px;letter-spacing:2px;text-transform:uppercase">Nieuwe aanvraag</div>
                  <h1 style="margin:10px 0 24px;color:#f5efe3;font-family:Georgia,serif;font-size:34px;font-weight:normal;line-height:1.1">${safe.reason}</h1>
                  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse">
                    <tr><td style="padding:12px 0;border-top:1px solid #332b20;color:#938b7d;font-size:12px;width:135px">Naam</td><td style="padding:12px 0;border-top:1px solid #332b20;color:#f5efe3">${safe.name}</td></tr>
                    <tr><td style="padding:12px 0;border-top:1px solid #332b20;color:#938b7d;font-size:12px">E-mail</td><td style="padding:12px 0;border-top:1px solid #332b20"><a href="mailto:${safe.email}" style="color:#f0d595">${safe.email}</a></td></tr>
                    <tr><td style="padding:12px 0;border-top:1px solid #332b20;color:#938b7d;font-size:12px">Telefoon</td><td style="padding:12px 0;border-top:1px solid #332b20;color:#f5efe3">${safe.phone}</td></tr>
                    <tr><td style="padding:12px 0;border-block:1px solid #332b20;color:#938b7d;font-size:12px">Tas</td><td style="padding:12px 0;border-block:1px solid #332b20;color:#f0d595">${safe.product}</td></tr>
                  </table>
                  <div style="margin-top:28px;color:#c59a4a;font-size:11px;letter-spacing:2px;text-transform:uppercase">Bericht</div>
                  <div style="margin-top:10px;padding:20px;border-left:2px solid #c59a4a;background:#13110e;color:#ded5c8;font-size:15px;line-height:1.7">${safe.message}</div>
                  <a href="mailto:${safe.email}" style="display:inline-block;margin-top:28px;padding:15px 22px;background:#d5ae61;color:#100d08;font-size:11px;font-weight:bold;letter-spacing:2px;text-decoration:none;text-transform:uppercase">Beantwoord aanvraag</a>
                </td></tr>
                <tr><td style="padding:18px 36px;border-top:1px solid #3b2f1c;color:#736b60;font-size:11px;text-align:center">Verstuurd via dnarabags.noxxara.com</td></tr>
              </table>
            </td></tr>
          </table>
        </body>
      </html>
    `,
  })

  if (error) {
    console.error('Resend contact error:', error.name)
    throw createError({ statusCode: 502, statusMessage: 'De aanvraag kon niet worden verstuurd. Probeer het later opnieuw.' })
  }

  return { ok: true }
})
