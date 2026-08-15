<script setup lang="ts">
const showEmailPreview = ref(false)
const isLocalPreview = import.meta.dev

useSeoMeta({
  title: 'Contact',
  description: "Neem contact op met D'Nara Bags voor een prijsaanvraag, persoonlijke aanvraag of een vraag over een tas.",
})
</script>

<template>
  <main>
    <section class="contact-page">
      <div class="contact-page-copy">
        <p class="eyebrow">Persoonlijk contact</p>
        <h1>Vertel ons<br />jouw idee.</h1>
        <p>Heb je een tas gezien, wil je een persoonlijke uitvoering bespreken of heb je een andere vraag? Stuur ons een bericht. Je aanvraag komt direct bij D'Nara Bags terecht.</p>
        <div class="contact-details">
          <span>E-mail</span>
          <a href="mailto:dnarabags@hotmail.com">dnarabags@hotmail.com</a>
          <small>We reageren zo snel mogelijk.</small>
        </div>
      </div>
      <div class="contact-page-form">
        <InquiryForm />
        <button v-if="isLocalPreview" class="email-preview-trigger" type="button" @click="showEmailPreview = true">
          Bekijk dummy e-mail
        </button>
      </div>
    </section>

    <Teleport to="body">
      <div v-if="showEmailPreview" class="email-preview-backdrop" role="dialog" aria-modal="true" aria-label="Voorbeeld aanvraagmail" @click.self="showEmailPreview = false">
        <div class="email-preview-modal">
          <div class="email-preview-toolbar">
            <span>Lokale voorbeeldweergave</span>
            <button type="button" aria-label="Sluit voorbeeld" @click="showEmailPreview = false">×</button>
          </div>
          <article class="email-preview">
            <header><span>Handmade beaded bags</span><strong>D'Nara Bags</strong></header>
            <section>
              <small>Nieuwe aanvraag</small>
              <h2>Prijsaanvraag</h2>
              <dl>
                <div><dt>Naam</dt><dd>Sophie de Vries</dd></div>
                <div><dt>E-mail</dt><dd>sophie.devries@example.com</dd></div>
                <div><dt>Telefoon</dt><dd>+31 6 12345678</dd></div>
                <div><dt>Tas</dt><dd>Royal Blue</dd></div>
              </dl>
              <small>Bericht</small>
              <p class="email-preview-message">Hallo D’Nara Bags, ik ontvang graag een prijsopgave voor deze tas. Kunnen jullie mij ook vertellen wat de levertijd is?</p>
              <a href="mailto:sophie.devries@example.com?subject=Re%3A%20Prijsaanvraag%20voor%20Royal%20Blue">Beantwoord aanvraag</a>
            </section>
            <footer>Verstuurd via dnarabags.noxxara.com</footer>
          </article>
        </div>
      </div>
    </Teleport>
  </main>
</template>

<style scoped>
.email-preview-trigger { width: 100%; margin-top: 1rem; padding: .85rem 1rem; border: 1px dashed #a77d34; background: transparent; color: #a77d34; cursor: pointer; font: inherit; }
.email-preview-backdrop { position: fixed; inset: 0; z-index: 1000; display: grid; place-items: center; padding: 1rem; background: rgb(0 0 0 / 72%); }
.email-preview-modal { width: min(100%, 680px); max-height: min(90vh, 850px); overflow: auto; background: #eee8dc; box-shadow: 0 20px 80px rgb(0 0 0 / 50%); }
.email-preview-toolbar { display: flex; justify-content: space-between; align-items: center; padding: .75rem 1rem; background: #211d17; color: #eee0c5; font-size: .8rem; letter-spacing: .08em; text-transform: uppercase; }
.email-preview-toolbar button { border: 0; background: transparent; color: inherit; font-size: 1.8rem; line-height: 1; cursor: pointer; }
.email-preview { margin: 1rem; overflow: hidden; border: 1px solid #6e562d; background: #0d0c0a; color: #f5efe3; font-family: Arial, sans-serif; }
.email-preview header { padding: 2rem; border-bottom: 1px solid #3b2f1c; text-align: center; }
.email-preview header span, .email-preview section > small { display: block; color: #c59a4a; font-size: .68rem; letter-spacing: .18em; text-transform: uppercase; }
.email-preview header strong { display: block; margin-top: .6rem; color: #f0d595; font-family: Georgia, serif; font-size: 2rem; font-weight: 400; }
.email-preview section { padding: 2rem; }
.email-preview h2 { margin: .6rem 0 1.5rem; font-family: Georgia, serif; font-size: 2rem; font-weight: 400; }
.email-preview dl { margin: 0 0 1.75rem; }
.email-preview dl div { display: grid; grid-template-columns: 8rem 1fr; padding: .7rem 0; border-top: 1px solid #332b20; }
.email-preview dl div:last-child { border-bottom: 1px solid #332b20; }
.email-preview dt { color: #938b7d; font-size: .75rem; }.email-preview dd { margin: 0; }.email-preview-message { margin: .65rem 0 0; padding: 1.25rem; border-left: 2px solid #c59a4a; background: #13110e; color: #ded5c8; line-height: 1.65; }
.email-preview section > a { display: inline-block; margin-top: 1.75rem; padding: .9rem 1.2rem; background: #d5ae61; color: #100d08; font-size: .7rem; font-weight: 700; letter-spacing: .12em; text-decoration: none; text-transform: uppercase; }
.email-preview footer { padding: 1.1rem 2rem; border-top: 1px solid #3b2f1c; color: #736b60; font-size: .7rem; text-align: center; }
@media (max-width: 480px) { .email-preview { margin: .5rem; }.email-preview section, .email-preview header { padding: 1.4rem; }.email-preview dl div { grid-template-columns: 1fr; gap: .25rem; } }
</style>
