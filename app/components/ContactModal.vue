<script setup lang="ts">
import type { InquiryReason } from '~/composables/useInquiry'

const { isOpen, preset, closeInquiry } = useInquiry()
const status = ref<'idle' | 'sending' | 'success' | 'error'>('idle')
const errorMessage = ref('')
const form = reactive({ reason: 'personal' as InquiryReason, product: '', name: '', email: '', phone: '', message: '', website: '' })
const reasons: { value: InquiryReason; label: string; description: string }[] = [
  { value: 'price', label: 'Prijsaanvraag', description: 'Ontvang een prijsopgave voor een tas.' },
  { value: 'personal', label: 'Persoonlijke aanvraag', description: 'Bespreek kleuren, formaat of een eigen ontwerp.' },
  { value: 'item', label: 'Vraag over een item', description: 'Stel een vraag over een tas uit de collectie.' },
]

watch(isOpen, (open) => {
  if (open) {
    form.reason = preset.value.reason
    form.product = preset.value.product
    status.value = 'idle'
    errorMessage.value = ''
  }
  if (import.meta.client) document.body.classList.toggle('modal-open', open)
})

onBeforeUnmount(() => {
  if (import.meta.client) document.body.classList.remove('modal-open')
})

async function submitInquiry() {
  status.value = 'sending'
  errorMessage.value = ''
  try {
    await $fetch('/api/contact', { method: 'POST', body: form })
    status.value = 'success'
  }
  catch (error: any) {
    status.value = 'error'
    errorMessage.value = error?.data?.statusMessage || 'Versturen is niet gelukt. Probeer het later opnieuw.'
  }
}
</script>

<template>
  <Transition name="modal-fade">
    <div v-if="isOpen" class="modal-backdrop" @click.self="status !== 'sending' && closeInquiry()" @keydown.esc="closeInquiry">
      <section class="contact-modal" role="dialog" aria-modal="true" aria-labelledby="contact-modal-title">
        <button class="modal-close" type="button" aria-label="Sluiten" @click="closeInquiry">×</button>
        <div v-if="status === 'success'" class="form-success">
          <span aria-hidden="true">✓</span>
          <p class="eyebrow">Aanvraag ontvangen</p>
          <h2 id="contact-modal-title">Bedankt, {{ form.name }}.</h2>
          <p>Je bericht is verstuurd naar D'Nara Bags. We nemen zo snel mogelijk contact met je op.</p>
          <button class="button button-gold" type="button" @click="closeInquiry">Sluiten</button>
        </div>
        <form v-else @submit.prevent="submitInquiry">
          <p class="eyebrow">Persoonlijk contact</p>
          <h2 id="contact-modal-title">Waar kunnen we je mee helpen?</h2>
          <p class="modal-intro">Je aanvraag komt rechtstreeks bij D'Nara Bags terecht.</p>
          <fieldset class="reason-options">
            <legend>Soort aanvraag</legend>
            <label v-for="reason in reasons" :key="reason.value" :class="{ selected: form.reason === reason.value }">
              <input v-model="form.reason" type="radio" name="reason" :value="reason.value" />
              <span><strong>{{ reason.label }}</strong><small>{{ reason.description }}</small></span>
            </label>
          </fieldset>
          <div v-if="form.product" class="selected-product"><span>Geselecteerde tas</span><strong>{{ form.product }}</strong></div>
          <div class="form-grid">
            <label><span>Naam *</span><input v-model.trim="form.name" type="text" autocomplete="name" maxlength="80" required /></label>
            <label><span>E-mailadres *</span><input v-model.trim="form.email" type="email" autocomplete="email" maxlength="160" required /></label>
            <label class="form-wide"><span>Telefoonnummer <small>(optioneel)</small></span><input v-model.trim="form.phone" type="tel" autocomplete="tel" maxlength="40" /></label>
            <label class="form-wide"><span>Bericht *</span><textarea v-model.trim="form.message" rows="4" maxlength="2000" required placeholder="Vertel ons waar je naar op zoek bent."></textarea></label>
            <label class="honeypot" aria-hidden="true"><span>Website</span><input v-model="form.website" type="text" tabindex="-1" autocomplete="off" /></label>
          </div>
          <p v-if="errorMessage" class="form-error" role="alert">{{ errorMessage }}</p>
          <button class="button button-gold submit-button" type="submit" :disabled="status === 'sending'">{{ status === 'sending' ? 'Bezig met versturen…' : 'Aanvraag versturen' }}</button>
        </form>
      </section>
    </div>
  </Transition>
</template>
