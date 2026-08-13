<script setup lang="ts">
const instagramUrl = 'https://www.instagram.com/dnarabags/'
const tiktokUrl = 'https://www.tiktok.com/@dnara.bags'
const { openInquiry } = useInquiry()

useSeoMeta({
  titleTemplate: title => title ? `${title} | D'Nara Bags` : "D'Nara Bags | Handmade beaded bags",
  description: 'Handgemaakte kralentassen, met liefde gemaakt in Nederland.',
})
</script>

<template>
  <div class="site-shell">
    <SiteHeader />
    <NuxtPage />
    <footer>
      <img src="/images/dnara-logo.png" alt="D'Nara Bags" />
      <p>Handmade Beaded Bags<br />Made with love in the Netherlands</p>
      <div>
        <a :href="instagramUrl" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a :href="tiktokUrl" target="_blank" rel="noopener noreferrer">TikTok</a>
        <button type="button" @click="openInquiry('personal')">Contact</button>
      </div>
      <span>© {{ new Date().getFullYear() }} D'Nara Bags</span>
    </footer>
    <button class="contact-bubble" type="button" aria-label="Snel contact opnemen" @click="openInquiry('personal')">
      <span class="mail-icon" aria-hidden="true">✉</span><span>Snel contact</span>
    </button>
    <ContactModal />
  </div>
</template>
