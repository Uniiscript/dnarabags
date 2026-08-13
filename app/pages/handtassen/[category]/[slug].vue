<script setup lang="ts">
import { categoryInfo, productPath, products, type BagCategory } from '~/data/catalog'

const route = useRoute()
const product = computed(() => products.find(item => item.categories.includes(route.params.category as BagCategory) && item.slug === route.params.slug))
if (!product.value) throw createError({ statusCode: 404, statusMessage: 'Tas niet gevonden' })

const { openInquiry } = useInquiry()
const related = computed(() => products.filter(item => item.categories.some(category => product.value?.categories.includes(category)) && item.slug !== product.value?.slug).slice(0, 2))
const lightboxOpen = ref(false)
const selectedImage = ref<'photo' | 'presentation'>('photo')

function openLightbox(image: 'photo' | 'presentation') {
  selectedImage.value = image
  lightboxOpen.value = true
}

function closeLightbox() {
  lightboxOpen.value = false
}

useSeoMeta({ title: () => product.value!.name, description: () => product.value!.description })
</script>

<template>
  <main v-if="product">
    <section class="product-detail">
      <div class="detail-gallery">
        <button type="button" class="gallery-image" :aria-label="`Bekijk ${product.name} groter`" @click="openLightbox('photo')">
          <img :src="product.image" :alt="product.name" />
          <span>Originele productfoto</span>
        </button>
        <button type="button" class="gallery-image" :aria-label="`Bekijk ${product.name} als draagvoorbeeld groter`" @click="openLightbox('presentation')">
          <img :src="product.presentationImage" :alt="`${product.name} als draagvoorbeeld`" />
          <span>Zo draag je haar</span>
        </button>
      </div>
      <div class="detail-copy">
        <NuxtLink class="back-link" :to="`/handtassen/${product.categories[0]}`">← {{ categoryInfo[product.categories[0]].name }}</NuxtLink>
        <p class="eyebrow">Handgemaakt · D'Nara Bags</p>
        <h1>{{ product.name }}</h1>
        <p class="detail-tagline">{{ product.tagline }}</p>
        <p>{{ product.description }}</p>
        <section class="bag-story" aria-label="Details over deze tas">
          <div><span>Op de foto</span><p>{{ product.photoDescription }}</p></div>
          <div><span>Manieren om te dragen</span><p>{{ product.wearing }}</p></div>
          <div><span>Sluiting</span><p>{{ product.closure }}</p></div>
          <div><span>De visie</span><p>{{ product.vision }}</p></div>
        </section>
        <button class="button button-gold" type="button" @click="openInquiry('price', product.name)">Prijs aanvragen</button>
      </div>
    </section>
    <section v-if="related.length" class="related-section">
      <p class="eyebrow">Misschien ook iets voor jou</p>
      <div class="related-grid">
        <NuxtLink v-for="item in related" :key="item.slug" :to="productPath(item)"><img :src="item.image" :alt="item.name" /><span>{{ item.name }} →</span></NuxtLink>
      </div>
    </section>

    <Transition name="modal-fade">
      <div v-if="lightboxOpen" class="product-lightbox-backdrop" @click.self="closeLightbox" @keydown.esc="closeLightbox">
        <section class="product-lightbox" role="dialog" aria-modal="true" :aria-label="`${product.name} productinformatie`" tabindex="-1">
          <button class="modal-close" type="button" aria-label="Sluiten" @click="closeLightbox">×</button>
          <div class="lightbox-image">
            <img :src="selectedImage === 'photo' ? product.image : product.presentationImage" :alt="selectedImage === 'photo' ? product.name : `${product.name} als draagvoorbeeld`" />
          </div>
          <div class="lightbox-copy">
            <p class="eyebrow">{{ selectedImage === 'photo' ? 'Originele productfoto' : 'Draaginspiratie' }}</p>
            <h2>{{ product.name }}</h2>
            <p>{{ product.description }}</p>
            <div class="lightbox-specs">
              <div><span>Dragen</span><p>{{ product.wearing }}</p></div>
              <div><span>Sluiting</span><p>{{ product.closure }}</p></div>
              <div><span>Visie</span><p>{{ product.vision }}</p></div>
            </div>
            <button class="button button-gold" type="button" @click="openInquiry('price', product.name); closeLightbox()">Prijs aanvragen</button>
          </div>
        </section>
      </div>
    </Transition>
  </main>
</template>
