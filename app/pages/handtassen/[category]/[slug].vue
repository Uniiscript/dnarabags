<script setup lang="ts">
import { categoryInfo, productPath, products, type BagCategory } from '~/data/catalog'

const route = useRoute()
const product = computed(() => products.find(item => item.categories.includes(route.params.category as BagCategory) && item.slug === route.params.slug))
if (!product.value) throw createError({ statusCode: 404, statusMessage: 'Tas niet gevonden' })

const { openInquiry } = useInquiry()
const related = computed(() => products.filter(item => item.categories.some(category => product.value?.categories.includes(category)) && item.slug !== product.value?.slug).slice(0, 2))

useSeoMeta({ title: () => product.value!.name, description: () => product.value!.description })
</script>

<template>
  <main v-if="product">
    <section class="product-detail">
      <div class="detail-gallery">
        <img :src="product.image" :alt="product.name" />
        <img :src="product.styledImage" :alt="`${product.name} vrijstaand`" />
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
  </main>
</template>
