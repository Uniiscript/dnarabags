<script setup lang="ts">
const { isOpen, preset, closeInquiry } = useInquiry()

watch(isOpen, (open) => {
  if (import.meta.client) document.body.classList.toggle('modal-open', open)
})

onBeforeUnmount(() => {
  if (import.meta.client) document.body.classList.remove('modal-open')
})
</script>

<template>
  <Transition name="modal-fade">
    <div v-if="isOpen" class="modal-backdrop" @click.self="closeInquiry" @keydown.esc="closeInquiry">
      <section class="contact-modal" role="dialog" aria-modal="true" aria-labelledby="contact-modal-title">
        <button class="modal-close" type="button" aria-label="Sluiten" @click="closeInquiry">×</button>
        <p class="eyebrow">Snel contact</p>
        <h2 id="contact-modal-title">Waar kunnen we je mee helpen?</h2>
        <p class="modal-intro">Je aanvraag komt rechtstreeks bij D'Nara Bags terecht.</p>
        <InquiryForm :reason="preset.reason" :product="preset.product" compact />
      </section>
    </div>
  </Transition>
</template>
