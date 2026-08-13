<script setup lang="ts">
const mobileOpen = ref(false)
const bagsOpen = ref(false)
const route = useRoute()

watch(() => route.fullPath, () => {
  mobileOpen.value = false
  bagsOpen.value = false
})

</script>

<template>
  <header class="site-header">
    <NuxtLink class="wordmark" to="/" aria-label="D'Nara Bags home">
      <span class="wordmark-logo" aria-hidden="true"><img src="/icon-512.png" alt="" /></span>
      <span class="wordmark-name">D'Nara Bags</span>
    </NuxtLink>

    <button class="menu-toggle" type="button" :aria-expanded="mobileOpen" aria-controls="main-navigation" @click="mobileOpen = !mobileOpen">
      <span></span><span></span>
      <span class="sr-only">Menu</span>
    </button>

    <nav id="main-navigation" class="main-nav" :class="{ open: mobileOpen }" aria-label="Hoofdnavigatie">
      <div class="nav-dropdown" :class="{ open: bagsOpen }">
        <button type="button" :aria-expanded="bagsOpen" @click="bagsOpen = !bagsOpen">Handtassen <span>⌄</span></button>
        <div class="dropdown-panel">
          <NuxtLink to="/handtassen/crossbody">Crossbody</NuxtLink>
          <NuxtLink to="/handtassen/clutch">Clutch</NuxtLink>
          <NuxtLink to="/handtassen/schoudertas">Schoudertas</NuxtLink>
          <NuxtLink to="/handtassen/handtas">Handtas</NuxtLink>
        </div>
      </div>
      <NuxtLink to="/naynays-kids">NayNay's Kids</NuxtLink>
      <NuxtLink to="/contact">Contact</NuxtLink>
    </nav>
  </header>
</template>
