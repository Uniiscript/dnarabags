export default defineNuxtConfig({
  compatibilityDate: '2026-08-13',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      htmlAttrs: { lang: 'nl' },
      title: "D'Nara Bags | Handmade beaded bags",
      meta: [
        {
          name: 'description',
          content: 'Handmade beaded bags, met liefde gemaakt in Nederland.',
        },
        { name: 'theme-color', content: '#0b0b0a' },
        { property: 'og:url', content: 'https://dnarabags.noxxara.com/' },
      ],
      link: [{ rel: 'canonical', href: 'https://dnarabags.noxxara.com/' }],
    },
  },
})
