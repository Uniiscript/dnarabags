<script setup lang="ts">
import { categoryInfo, productPath, products } from '~/data/catalog'

const slides = products
const activeSlide = ref(0)
let autoplay: ReturnType<typeof setInterval> | undefined

function showSlide(index: number) {
  activeSlide.value = (index + slides.length) % slides.length
}

onMounted(() => {
  autoplay = setInterval(() => showSlide(activeSlide.value + 1), 4500)
})

onBeforeUnmount(() => clearInterval(autoplay))

useSeoMeta({ title: '', description: "Ontdek het verhaal van D'Nara Bags en NayNay's Kids. Handgemaakte kralentassen voor bijzondere momenten." })
</script>

<template>
  <main>
    <section class="home-hero">
      <div class="home-hero-copy">
        <p class="eyebrow">Handmade beaded bags</p>
        <h1>Made with love.<br /><em>Carried with style.</em></h1>
        <p>Iedere D'Nara tas wordt met de hand gemaakt. Geen massaproductie, maar kralenwerk met aandacht, karakter en een eigen verhaal.</p>
        <div class="hero-actions">
          <NuxtLink class="button button-gold" to="/handtassen/crossbody">Ontdek de handtassen</NuxtLink>
          <NuxtLink class="text-link" to="/naynays-kids">NayNay's Kids</NuxtLink>
        </div>
      </div>
      <div class="home-hero-mark"><img src="/images/dnara-logo.png" alt="D'Nara Bags kroonlogo" /></div>
    </section>

    <section class="story-section">
      <div class="story-image"><img src="/images/collections/naynays-kids.png" alt="NayNay's Kids handgemaakte kralentas" /></div>
      <div class="story-copy">
        <p class="eyebrow">Een verhaal met liefde</p>
        <h2>NayNay's Kids</h2>
        <p>Geïnspireerd door haar nichtje NayNay ontstond een vrolijke capsulecollectie voor kleine persoonlijkheden. Zachte kleuren, speelse details en dezelfde liefdevolle, handgemaakte afwerking als iedere D'Nara.</p>
        <p>Een bijzondere tas voor een verjaardag, feest of gewoon om iedere dag een beetje meer te laten stralen.</p>
        <NuxtLink class="text-link" to="/naynays-kids">Lees het verhaal</NuxtLink>
      </div>
    </section>

    <section class="bag-showcase" aria-labelledby="showcase-title">
      <div class="showcase-heading">
        <div><p class="eyebrow">Een glimp uit de collectie</p><h2 id="showcase-title">Vind jouw D'Nara.</h2></div>
        <p>Klik op een tas om alle details te bekijken of direct een prijs aan te vragen.</p>
      </div>
      <div class="slideshow" @mouseenter="clearInterval(autoplay)" @mouseleave="autoplay = setInterval(() => showSlide(activeSlide + 1), 4500)">
        <NuxtLink v-for="(slide, index) in slides" v-show="activeSlide === index" :key="slide.slug" class="slide" :to="productPath(slide)">
          <div class="slide-image"><img :src="slide.image" :alt="slide.name" /></div>
          <div class="slide-copy">
            <small>{{ categoryInfo[slide.categories[0]].name }}</small>
            <h3>{{ slide.name }}</h3>
            <p>{{ slide.tagline }}</p>
            <span>Bekijk deze tas →</span>
          </div>
        </NuxtLink>
        <div class="slide-controls">
          <button type="button" aria-label="Vorige tas" @click="showSlide(activeSlide - 1)">←</button>
          <div class="slide-dots" aria-label="Kies een tas">
            <button v-for="(slide, index) in slides" :key="slide.slug" type="button" :class="{ active: activeSlide === index }" :aria-label="`Toon ${slide.name}`" @click="showSlide(index)"></button>
          </div>
          <button type="button" aria-label="Volgende tas" @click="showSlide(activeSlide + 1)">→</button>
        </div>
      </div>
    </section>
  </main>
</template>
