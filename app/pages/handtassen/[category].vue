<script setup lang="ts">
import { categoryInfo, products, type BagCategory } from '~/data/catalog'

const route = useRoute()
const category = computed(() => route.params.category as BagCategory)
const info = computed(() => categoryInfo[category.value])
const categoryProducts = computed(() => products.filter(product => product.category === category.value))

if (!info.value) throw createError({ statusCode: 404, statusMessage: 'Categorie niet gevonden' })

useSeoMeta({
  title: () => info.value.name,
  description: () => `${info.value.intro} Bekijk de ${info.value.name}-collectie van D'Nara Bags.`,
})
</script>

<template>
  <main>
    <section class="catalog-hero">
      <p class="eyebrow">Handtassen · {{ info.name }}</p>
      <h1>{{ info.name }}</h1>
      <p>{{ info.intro }}</p>
      <nav class="category-tabs" aria-label="Handtascategorieën">
        <NuxtLink v-for="(details, key) in categoryInfo" :key="key" :to="`/handtassen/${key}`">{{ details.name }}</NuxtLink>
      </nav>
    </section>
    <section class="catalog-grid" :aria-label="`${info.name} tassen`">
      <ProductCard v-for="product in categoryProducts" :key="product.slug" :product="product" />
    </section>
  </main>
</template>
