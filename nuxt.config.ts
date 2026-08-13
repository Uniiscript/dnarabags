export default defineNuxtConfig({
  compatibilityDate: '2026-08-13',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      htmlAttrs: { lang: 'nl' },
      title: 'D’nara Bags — Handgemaakte handtassen',
      meta: [
        {
          name: 'description',
          content: 'Ontdek unieke handgemaakte handtassen van D’nara Bags. Met aandacht ontworpen en in kleine oplage gemaakt.',
        },
        { name: 'theme-color', content: '#0b0b0a' },
        { property: 'og:url', content: 'https://dnarabags.noxxara.com/' },
      ],
      link: [{ rel: 'canonical', href: 'https://dnarabags.noxxara.com/' }],
    },
  },
})
