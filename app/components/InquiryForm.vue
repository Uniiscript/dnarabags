<script setup lang="ts">
import type { InquiryReason } from '~/composables/useInquiry'

const props = withDefaults(defineProps<{ reason?: InquiryReason; product?: string; compact?: boolean }>(), {
  reason: 'personal',
  product: '',
  compact: false,
})
const emit = defineEmits<{ success: [] }>()

const status = ref<'idle' | 'sending' | 'success' | 'error'>('idle')
const errorMessage = ref('')
const form = reactive({ reason: props.reason, product: props.product, name: '', email: '', phone: '', message: '', website: '' })
const reasons: { value: InquiryReason; label: string; description: string }[] = [
  { value: 'price', label: 'Prijsaanvraag', description: 'Ontvang een prijsopgave voor een tas.' },
  { value: 'personal', label: 'Persoonlijke aanvraag', description: 'Bespreek kleuren, formaat of een eigen ontwerp.' },
  { value: 'item', label: 'Vraag over een item', description: 'Stel een vraag over een tas uit de collectie.' },
]

watch(() => [props.reason, props.product] as const, ([reason, product]) => {
  form.reason = reason
  form.product = product
  status.value = 'idle'
  errorMessage.value = ''
})

async function submitInquiry() {
  status.value = 'sending'
  errorMessage.value = ''
  try {
    await $fetch('/api/contact', { method: 'POST', body: form })
    status.value = 'success'
    emit('success')
  }
  catch (error: any) {
    status.value = 'error'
    errorMessage.value = error?.data?.statusMessage || 'Versturen is niet gelukt. Probeer het later opnieuw.'
  }
}
</script>

<template>
  <div v-if="status === 'success'" class="form-success">
    <span aria-hidden="true">✓</span>
    <p class="eyebrow">Aanvraag ontvangen</p>
    <h2>Bedankt, {{ form.name }}.</h2>
    <p>Je bericht is verstuurd naar D'Nara Bags. We nemen zo snel mogelijk contact met je op.</p>
  </div>
  <form v-else class="inquiry-form" :class="{ compact }" @submit.prevent="submitInquiry">
    <fieldset class="reason-options">
      <legend>Waar gaat je bericht over?</legend>
      <label v-for="option in reasons" :key="option.value" :class="{ selected: form.reason === option.value }">
        <input v-model="form.reason" type="radio" name="reason" :value="option.value" />
        <span><strong>{{ option.label }}</strong><small>{{ option.description }}</small></span>
      </label>
    </fieldset>
    <div v-if="form.product" class="selected-product"><span>Geselecteerde tas</span><strong>{{ form.product }}</strong></div>
    <div class="form-grid">
      <label><span>Naam *</span><input v-model.trim="form.name" type="text" autocomplete="name" maxlength="80" required /></label>
      <label><span>E-mailadres *</span><input v-model.trim="form.email" type="email" autocomplete="email" maxlength="160" required /></label>
      <label class="form-wide"><span>Telefoonnummer <small>(optioneel)</small></span><input v-model.trim="form.phone" type="tel" autocomplete="tel" maxlength="40" /></label>
      <label class="form-wide"><span>Bericht *</span><textarea v-model.trim="form.message" rows="5" maxlength="2000" required placeholder="Vertel ons waar je naar op zoek bent."></textarea></label>
      <label class="honeypot" aria-hidden="true"><span>Website</span><input v-model="form.website" type="text" tabindex="-1" autocomplete="off" /></label>
    </div>
    <p v-if="errorMessage" class="form-error" role="alert">{{ errorMessage }}</p>
    <button class="button button-gold submit-button" type="submit" :disabled="status === 'sending'">{{ status === 'sending' ? 'Bezig met versturen…' : 'Aanvraag versturen' }}</button>
  </form>
</template>
