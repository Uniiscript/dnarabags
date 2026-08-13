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
      link: [
        { rel: 'canonical', href: 'https://dnarabags.noxxara.com/' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes: '512x512', href: '/icon-512.png' },
      ],
    },
  },
})
