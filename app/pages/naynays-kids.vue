<script setup lang="ts">
const { openInquiry } = useInquiry()
useSeoMeta({ title: "NayNay's Kids", description: "Ontdek NayNay's Kids: een speelse capsulecollectie handgemaakte kralentassen voor kinderen." })
</script>

<template>
  <main>
    <section class="kids-page-hero">
      <div><p class="eyebrow">De kleine collectie met een groot verhaal</p><h1>NayNay's<br /><em>Kids</em></h1></div>
      <img src="/images/products/crossbody/blush-pink.jpg" alt="Blush Pink tas uit NayNay's Kids" />
    </section>
    <section class="kids-story">
      <p class="section-number">N</p>
      <div><p class="eyebrow">Ontstaan vanuit liefde</p><h2>Voor kleine persoonlijkheden.</h2></div>
      <div>
        <p>NayNay's Kids is geïnspireerd door haar nichtje NayNay: vrolijk, eigenzinnig en altijd vol kleur. Vanuit die energie ontstond een bijzondere capsulecollectie met kleine kralentassen.</p>
        <p>Elk exemplaar wordt met dezelfde aandacht gemaakt als de volwassen collectie. Zachte kleuren, speelse vormen en een formaat dat perfect past bij jonge tassenliefhebbers.</p>
        <button class="button button-gold" type="button" @click="openInquiry('personal', `NayNay's Kids`)">Vraag naar NayNay's Kids</button>
      </div>
    </section>
  </main>
</template>
