<script setup lang="ts">
import { categoryInfo, productPath, products, type BagCategory } from '~/data/catalog'

const route = useRoute()
const product = computed(() => products.find(item => item.category === route.params.category && item.slug === route.params.slug))
if (!product.value) throw createError({ statusCode: 404, statusMessage: 'Tas niet gevonden' })

const { openInquiry } = useInquiry()
const related = computed(() => products.filter(item => item.category === product.value?.category && item.slug !== product.value?.slug).slice(0, 2))

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
        <NuxtLink class="back-link" :to="`/handtassen/${product.category}`">← {{ categoryInfo[product.category as BagCategory].name }}</NuxtLink>
        <p class="eyebrow">Handgemaakt · D'Nara Bags</p>
        <h1>{{ product.name }}</h1>
        <p class="detail-tagline">{{ product.tagline }}</p>
        <p>{{ product.description }}</p>
        <ul><li>Met de hand gemaakt in Nederland</li><li>Ieder exemplaar is uniek</li><li>Persoonlijke wensen zijn bespreekbaar</li></ul>
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
