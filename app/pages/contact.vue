<script setup lang="ts">
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
      </div>
    </section>
  </main>
</template>
