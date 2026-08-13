<script setup lang="ts">
import type { BagProduct } from '~/data/catalog'
import { productPath } from '~/data/catalog'

defineProps<{ product: BagProduct }>()
</script>

<template>
  <article class="catalog-card">
    <NuxtLink :to="productPath(product)" class="catalog-image">
      <img :src="product.image" :alt="`D'Nara ${product.name}`" loading="lazy" />
      <span>Bekijk de tas</span>
    </NuxtLink>
    <div class="catalog-meta">
      <div><small>{{ product.category }}</small><h2>{{ product.name }}</h2></div>
      <NuxtLink :to="productPath(product)" :aria-label="`Bekijk ${product.name}`">→</NuxtLink>
    </div>
  </article>
</template>
