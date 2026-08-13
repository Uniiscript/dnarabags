<template>
  <div class="dnara-page">
    <header class="dnara-header">
      <NuxtLink to="/" class="dnara-logo" aria-label="D'nara Bags home">
        <span class="dnara-logo-mark">D</span>
        <span>D’nara <em>Bags</em></span>
      </NuxtLink>

      <nav class="dnara-nav" aria-label="Hoofdnavigatie">
        <a href="#collectie">Collectie</a>
        <a href="#verhaal">Ons verhaal</a>
        <a href="#contact">Contact</a>
      </nav>

      <a href="#collectie" class="dnara-header-cta">
        Shop de collectie
        <Icon icon="mdi:arrow-right" />
      </a>
    </header>

    <main>
      <section class="dnara-hero">
        <div class="dnara-hero-copy">
          <p class="dnara-eyebrow"><span /> Handgemaakt in kleine oplage</p>
          <h1>Tassen met een verhaal, <em>gemaakt voor het jouwe.</em></h1>
          <p class="dnara-hero-intro">
            Unieke handtassen die met aandacht worden ontworpen en met de hand worden gemaakt. Tijdloos,
            persoonlijk en geen twee precies hetzelfde.
          </p>
          <div class="dnara-actions">
            <a href="#collectie" class="dnara-button dnara-button--dark">
              Ontdek de collectie
              <Icon icon="mdi:arrow-down-right" />
            </a>
            <a href="#verhaal" class="dnara-text-link">Lees ons verhaal <span>→</span></a>
          </div>
          <ul class="dnara-promises" aria-label="Onze beloftes">
            <li><Icon icon="mdi:hand-heart-outline" /> Met de hand gemaakt</li>
            <li><Icon icon="mdi:leaf-outline" /> Bewuste materialen</li>
            <li><Icon icon="mdi:diamond-stone" /> Unieke exemplaren</li>
          </ul>
        </div>

        <div class="dnara-hero-visual" aria-label="Handgemaakte handtas uit de D'nara collectie">
          <div class="dnara-arch">
            <span class="dnara-stitch dnara-stitch--one" />
            <span class="dnara-stitch dnara-stitch--two" />
            <div class="dnara-bag dnara-bag--hero">
              <span class="dnara-handle" />
              <span class="dnara-bag-flap" />
              <span class="dnara-bag-lock">D</span>
              <span class="dnara-bag-shadow" />
            </div>
            <p class="dnara-handwritten">made slowly,<br>carried proudly</p>
          </div>
          <div class="dnara-edition"><strong>01</strong><span>Limited<br>edition</span></div>
        </div>
      </section>

      <section id="collectie" class="dnara-collection">
        <div class="dnara-section-heading">
          <div>
            <p class="dnara-eyebrow"><span /> Favorieten</p>
            <h2>Ontdek de collectie</h2>
          </div>
          <p>Van dagelijkse draagtas tot elegante eyecatcher. Elk ontwerp wordt in kleine oplage gemaakt.</p>
        </div>

        <div class="dnara-products">
          <article v-for="product in products" :key="product.name" class="dnara-product-card">
            <div class="dnara-product-image" :class="`dnara-product-image--${product.color}`">
              <span v-if="product.badge" class="dnara-badge">{{ product.badge }}</span>
              <div class="dnara-bag" :class="[`dnara-bag--${product.style}`, `dnara-bag--${product.color}`]">
                <span class="dnara-handle" />
                <span class="dnara-bag-flap" />
                <span class="dnara-bag-lock">D</span>
                <span class="dnara-bag-shadow" />
              </div>
            </div>
            <div class="dnara-product-info">
              <div>
                <p>{{ product.type }}</p>
                <h3>{{ product.name }}</h3>
              </div>
              <span class="dnara-price">{{ product.price }}</span>
            </div>
            <a href="#contact" class="dnara-product-link" @click="selectedBag = product.name">
              Vraag naar dit model <Icon icon="mdi:arrow-top-right" />
            </a>
          </article>
        </div>
      </section>

      <section id="verhaal" class="dnara-story">
        <div class="dnara-story-art" aria-hidden="true">
          <div class="dnara-thread-line" />
          <Icon icon="mdi:needle" class="dnara-needle" />
          <p>Met liefde<br>gemaakt</p>
        </div>
        <div class="dnara-story-copy">
          <p class="dnara-eyebrow dnara-eyebrow--light"><span /> Het atelier</p>
          <h2>Mooi van buiten.<br><em>Bijzonder van binnen.</em></h2>
          <p>
            Bij D’nara Bags geloven we dat de mooiste dingen ontstaan wanneer je de tijd neemt. Iedere tas
            begint als een idee en groeit, steek voor steek, uit tot een uniek ontwerp dat jarenlang met je meegaat.
          </p>
          <div class="dnara-numbers">
            <div><strong>100%</strong><span>handgemaakt</span></div>
            <div><strong>1 van 1</strong><span>uniek karakter</span></div>
            <div><strong>∞</strong><span>liefde & aandacht</span></div>
          </div>
        </div>
      </section>

      <section id="contact" class="dnara-contact">
        <p class="dnara-eyebrow"><span /> Persoonlijk contact</p>
        <h2>Een tas gezien die bij je past?</h2>
        <p>
          Laat weten welk model je mooi vindt. We vertellen je graag meer over beschikbaarheid, kleuren en
          mogelijkheden voor een persoonlijk ontwerp.
        </p>
        <a :href="contactHref" class="dnara-button dnara-button--dark">
          Neem contact op
          <Icon icon="mdi:email-outline" />
        </a>
      </section>
    </main>

    <footer class="dnara-footer">
      <NuxtLink to="/" class="dnara-logo dnara-logo--light">
        <span class="dnara-logo-mark">D</span>
        <span>D’nara <em>Bags</em></span>
      </NuxtLink>
      <p>Handgemaakt met aandacht · Nederland</p>
      <p>© {{ year }} D’nara Bags</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'

const year = new Date().getFullYear()
const selectedBag = ref('')

const products = [
  { name: 'The Noor', type: 'Schoudertas', price: '€ 89', color: 'clay', style: 'rounded', badge: 'Bestseller' },
  { name: 'The Liva', type: 'Handtas', price: '€ 109', color: 'olive', style: 'classic', badge: 'Nieuw' },
  { name: 'The Amara', type: 'Crossbody', price: '€ 79', color: 'oat', style: 'mini', badge: '' },
]

const contactHref = computed(() => {
  const subject = selectedBag.value ? `Interesse in ${selectedBag.value}` : 'Interesse in een handgemaakte tas'
  return `mailto:noxxaraofficialplatform@gmail.com?subject=${encodeURIComponent(subject)}`
})

useSeoMeta({
  title: 'D’nara Bags — Handgemaakte handtassen',
  description: 'Ontdek unieke handgemaakte handtassen van D’nara Bags. Met aandacht ontworpen en in kleine oplage gemaakt.',
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=Italiana&family=La+Belle+Aurore&display=swap');

.dnara-page {
  --ink: #0b0b0a;
  --wine: #c8a45d;
  --sand: #2b271f;
  --cream: #141310;
  --paper: #0b0b0a;
  min-height: 100vh;
  overflow: hidden;
  background: var(--paper);
  color: #f6efdf;
  font-family: 'DM Sans', sans-serif;
}

.dnara-page :is(h1, h2, h3, p) { margin: 0; }
.dnara-page :is(h1, h2, h3), .dnara-logo { font-family: 'Italiana', Georgia, serif; }
.dnara-page a { color: inherit; text-decoration: none; }

.dnara-header {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  width: min(100% - 64px, 1380px);
  height: 92px;
  margin: auto;
  border-bottom: 1px solid rgba(200, 164, 93, .32);
}

.dnara-logo { display: inline-flex; align-items: center; gap: 11px; width: max-content; font-size: 23px; letter-spacing: .03em; }
.dnara-logo em { color: var(--wine); font-weight: 400; }
.dnara-logo-mark { display: grid; width: 36px; height: 36px; place-items: center; border: 1px solid var(--wine); border-radius: 50%; color: var(--wine); font-style: italic; }
.dnara-nav { display: flex; gap: 38px; font-size: 13px; font-weight: 500; }
.dnara-nav a { position: relative; padding: 8px 0; }
.dnara-nav a::after { position: absolute; right: 0; bottom: 1px; left: 0; height: 1px; background: var(--wine); content: ''; transform: scaleX(0); transition: transform .25s; }
.dnara-nav a:hover::after { transform: scaleX(1); }
.dnara-header-cta { display: flex; align-items: center; justify-self: end; gap: 8px; border-bottom: 1px solid var(--wine); padding: 9px 0; color: var(--wine) !important; font-size: 13px; font-weight: 600; }
.dnara-header-cta svg { width: 17px; height: 17px; }

.dnara-hero {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(420px, .9fr);
  align-items: center;
  width: min(100% - 64px, 1380px);
  min-height: 690px;
  margin: auto;
  padding: 50px 4vw 70px;
}

.dnara-hero-copy { max-width: 660px; }
.dnara-eyebrow { display: flex; align-items: center; gap: 12px; color: var(--wine); font-size: 11px; font-weight: 600; letter-spacing: .22em; text-transform: uppercase; }
.dnara-eyebrow span { width: 38px; height: 1px; background: currentColor; }
.dnara-hero h1 { margin-top: 28px; font-size: clamp(55px, 6vw, 92px); font-weight: 400; line-height: .98; letter-spacing: -.035em; }
.dnara-hero h1 em, .dnara-story h2 em { color: var(--wine); font-weight: 400; }
.dnara-hero-intro { max-width: 570px; margin-top: 28px !important; color: #bdb3a2; font-size: 17px; line-height: 1.75; }
.dnara-actions { display: flex; align-items: center; gap: 30px; margin-top: 38px; }
.dnara-button { display: inline-flex; align-items: center; justify-content: center; gap: 18px; min-height: 54px; padding: 0 25px; font-size: 13px; font-weight: 600; transition: transform .2s, background .2s; }
.dnara-button:hover { transform: translateY(-2px); }
.dnara-button--dark { border: 1px solid var(--wine); background: var(--wine); color: #0b0b0a !important; }
.dnara-button--dark:hover { background: #e0c078; }
.dnara-button svg { width: 19px; height: 19px; }
.dnara-text-link { border-bottom: 1px solid rgba(200,164,93,.65); padding-bottom: 5px; color: #e2d7c4 !important; font-size: 13px; font-weight: 600; }
.dnara-text-link span { margin-left: 8px; }
.dnara-promises { display: flex; flex-wrap: wrap; gap: 26px; margin: 52px 0 0; padding: 0; color: #a99f8f; font-size: 11px; list-style: none; }
.dnara-promises li { display: flex; align-items: center; gap: 7px; }
.dnara-promises svg { width: 18px; height: 18px; color: var(--wine); }

.dnara-hero-visual { position: relative; justify-self: end; width: min(100%, 560px); }
.dnara-arch { position: relative; display: grid; aspect-ratio: .79; place-items: center; overflow: hidden; border: 1px solid rgba(200,164,93,.42); border-radius: 48% 48% 4px 4px; background: radial-gradient(circle at 34% 24%, #3d372a 0%, #1b1915 42%, #0e0e0c 100%); }
.dnara-arch::before { position: absolute; inset: 4%; border: 1px solid rgba(200,164,93,.28); border-radius: 48% 48% 3px 3px; content: ''; }
.dnara-stitch { position: absolute; width: 54%; height: 54%; border: 1px dashed rgba(200,164,93,.28); border-radius: 50%; }
.dnara-stitch--one { top: -25%; left: -19%; }
.dnara-stitch--two { right: -24%; bottom: -25%; }
.dnara-handwritten { position: absolute; right: 7%; bottom: 5%; color: rgba(224,192,120,.72); font-family: 'La Belle Aurore', cursive; font-size: 22px; line-height: 1.1; transform: rotate(-5deg); }
.dnara-edition { position: absolute; bottom: -24px; left: -28px; display: flex; align-items: center; gap: 11px; width: 130px; height: 130px; padding: 19px; border: 1px solid #e0c078; border-radius: 50%; background: var(--wine); color: #0b0b0a; transform: rotate(-9deg); }
.dnara-edition strong { font-family: 'Italiana', serif; font-size: 29px; font-weight: 400; }
.dnara-edition span { border-left: 1px solid rgba(11,11,10,.35); padding-left: 10px; font-size: 9px; line-height: 1.5; letter-spacing: .13em; text-transform: uppercase; }

.dnara-bag { position: relative; z-index: 1; width: 62%; height: 38%; border: 1px solid #5c4b2d; border-radius: 16px 16px 28px 28px; background: #171612; box-shadow: inset -20px -22px 28px rgba(0,0,0,.48), 0 20px 38px rgba(0,0,0,.28); }
.dnara-handle { position: absolute; top: -45%; left: 26%; width: 48%; height: 65%; border: 14px solid #11110f; border-bottom: 0; border-radius: 80px 80px 0 0; box-shadow: inset 2px 0 rgba(200,164,93,.3); }
.dnara-bag-flap { position: absolute; inset: 0 0 auto; height: 57%; border-bottom: 1px solid rgba(200,164,93,.45); border-radius: 14px 14px 45% 45%; background: linear-gradient(145deg, #28251e, #14130f); box-shadow: 0 5px 10px rgba(0,0,0,.35); }
.dnara-bag-lock { position: absolute; z-index: 2; top: 47%; left: 50%; display: grid; width: 34px; height: 34px; place-items: center; border: 2px solid #e1c278; border-radius: 50%; background: #b18b44; color: #fff1c7; font-family: 'Italiana', serif; font-size: 16px; transform: translate(-50%, -50%); }
.dnara-bag-shadow { position: absolute; right: 8%; bottom: -18%; left: 8%; z-index: -1; height: 22%; border-radius: 50%; background: rgba(52,37,29,.28); filter: blur(12px); }
.dnara-bag--hero { width: 62%; height: 35%; transform: translateY(7%) rotate(-3deg); }

.dnara-collection { width: min(100% - 64px, 1280px); margin: auto; padding: 120px 0 130px; }
.dnara-section-heading { display: flex; align-items: end; justify-content: space-between; gap: 60px; }
.dnara-section-heading h2, .dnara-contact h2 { margin-top: 14px; font-size: clamp(42px, 5vw, 65px); font-weight: 400; }
.dnara-section-heading > p { max-width: 400px; color: #aaa091; font-size: 14px; line-height: 1.7; }
.dnara-products { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; margin-top: 50px; }
.dnara-product-card { min-width: 0; }
.dnara-product-image { position: relative; display: grid; aspect-ratio: .87; place-items: center; overflow: hidden; border: 1px solid rgba(200,164,93,.2); background: #191814; }
.dnara-product-image::after { position: absolute; inset: 0; background: radial-gradient(circle at 35% 20%, rgba(200,164,93,.18), transparent 42%); content: ''; }
.dnara-product-image--olive { background: #211f19; }
.dnara-product-image--oat { background: #29251d; }
.dnara-badge { position: absolute; top: 16px; left: 16px; z-index: 3; border: 1px solid rgba(200,164,93,.55); border-radius: 20px; background: #0b0b0a; padding: 8px 12px; color: var(--wine); font-size: 9px; font-weight: 600; letter-spacing: .15em; text-transform: uppercase; }
.dnara-product-image .dnara-bag { z-index: 2; width: 62%; height: 36%; transform: rotate(-3deg); transition: transform .4s ease; }
.dnara-product-card:hover .dnara-product-image .dnara-bag { transform: translateY(-7px) rotate(1deg); }
.dnara-product-image .dnara-handle { border-width: 10px; }
.dnara-bag--olive { border-color: #756138; background: #272319; box-shadow: inset -20px -22px 28px rgba(0,0,0,.4); }
.dnara-bag--olive .dnara-handle { border-color: #1b1913; }
.dnara-bag--olive .dnara-bag-flap { background: linear-gradient(145deg, #3c3424, #201d16); }
.dnara-bag--oat { border-color: #a78342; background: #9b793c; }
.dnara-bag--oat .dnara-handle { border-color: #705525; }
.dnara-bag--oat .dnara-bag-flap { background: linear-gradient(145deg, #c49c50, #88672f); }
.dnara-bag--classic { height: 40% !important; border-radius: 5px 5px 22px 22px; }
.dnara-bag--classic .dnara-bag-flap { height: 42%; border-radius: 3px 3px 45% 45%; }
.dnara-bag--mini { width: 55% !important; height: 32% !important; border-radius: 28px; }
.dnara-bag--mini .dnara-handle { top: -57%; left: 29%; width: 42%; height: 75%; }
.dnara-product-info { display: flex; align-items: end; justify-content: space-between; gap: 20px; padding: 20px 2px 13px; }
.dnara-product-info p { color: #9d927f; font-size: 10px; letter-spacing: .13em; text-transform: uppercase; }
.dnara-product-info h3 { margin-top: 5px; font-size: 25px; font-weight: 400; }
.dnara-price { font-family: 'Italiana', serif; font-size: 20px; white-space: nowrap; }
.dnara-product-link { display: flex; align-items: center; justify-content: space-between; border-top: 1px solid rgba(200,164,93,.3); padding: 12px 2px; color: #c8bda9 !important; font-size: 11px; font-weight: 600; }
.dnara-product-link svg { width: 17px; height: 17px; transition: transform .2s; }
.dnara-product-link:hover svg { transform: translate(3px, -3px); }

.dnara-story { display: grid; grid-template-columns: 1fr 1fr; min-height: 610px; border-block: 1px solid rgba(200,164,93,.28); background: #13120f; color: #f6efdf; }
.dnara-story-art { position: relative; display: grid; min-height: 480px; place-items: center; overflow: hidden; background: linear-gradient(145deg, #d0ac63, #9a7433); color: #15130f; }
.dnara-story-art::before, .dnara-story-art::after { position: absolute; border: 1px solid rgba(21,19,15,.25); border-radius: 50%; content: ''; }
.dnara-story-art::before { width: 480px; height: 480px; }
.dnara-story-art::after { width: 300px; height: 300px; }
.dnara-story-art p { z-index: 2; font-family: 'La Belle Aurore', cursive; font-size: clamp(44px, 6vw, 82px); line-height: .95; text-align: center; transform: rotate(-7deg); }
.dnara-thread-line { position: absolute; top: 26%; left: 8%; width: 35%; height: 24%; border-top: 2px dashed rgba(21,19,15,.5); border-radius: 50%; transform: rotate(18deg); }
.dnara-needle { position: absolute; top: 24%; right: 15%; width: 52px; height: 52px; transform: rotate(35deg); }
.dnara-story-copy { align-self: center; max-width: 620px; padding: 80px 7vw; }
.dnara-eyebrow--light { color: var(--wine); }
.dnara-story h2 { margin-top: 20px; font-size: clamp(43px, 5vw, 68px); font-weight: 400; line-height: 1.05; }
.dnara-story h2 em { color: var(--wine); }
.dnara-story-copy > p:not(.dnara-eyebrow) { margin-top: 28px; color: #bdb3a2; font-size: 15px; line-height: 1.8; }
.dnara-numbers { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; margin-top: 44px; border-top: 1px solid rgba(255,255,255,.2); padding-top: 28px; }
.dnara-numbers div { display: flex; flex-direction: column; gap: 6px; }
.dnara-numbers strong { font-family: 'Italiana', serif; font-size: 26px; font-weight: 400; }
.dnara-numbers span { color: #a99f8f; font-size: 9px; letter-spacing: .12em; text-transform: uppercase; }

.dnara-contact { display: flex; flex-direction: column; align-items: center; padding: 130px 24px; background: var(--cream); text-align: center; }
.dnara-contact > p:not(.dnara-eyebrow) { max-width: 650px; margin: 22px auto 30px; color: #aaa091; font-size: 15px; line-height: 1.8; }
.dnara-footer { display: grid; grid-template-columns: 1fr auto 1fr; align-items: center; gap: 20px; border-top: 1px solid rgba(200,164,93,.25); padding: 36px max(32px, calc((100vw - 1380px)/2)); background: #050505; color: #9d927f; font-size: 11px; }
.dnara-logo--light { color: white !important; }
.dnara-logo--light .dnara-logo-mark { border-color: #d9d0c9; }
.dnara-footer p:last-child { justify-self: end; }

@media (max-width: 900px) {
  .dnara-header { grid-template-columns: 1fr auto; width: min(100% - 40px, 1380px); }
  .dnara-nav { display: none; }
  .dnara-hero { grid-template-columns: 1fr; width: min(100% - 40px, 720px); padding: 70px 0 90px; }
  .dnara-hero-visual { justify-self: center; width: min(88%, 520px); margin-top: 70px; }
  .dnara-products { grid-template-columns: 1fr 1fr; }
  .dnara-product-card:last-child { grid-column: 1 / -1; width: calc(50% - 12px); margin: auto; }
  .dnara-story { grid-template-columns: 1fr; }
  .dnara-story-copy { max-width: 760px; }
}

@media (max-width: 620px) {
  .dnara-header { height: 76px; }
  .dnara-logo { font-size: 19px; }
  .dnara-logo-mark { width: 31px; height: 31px; }
  .dnara-header-cta { font-size: 0; }
  .dnara-header-cta svg { width: 22px; height: 22px; }
  .dnara-hero h1 { font-size: clamp(49px, 16vw, 68px); }
  .dnara-actions { align-items: flex-start; flex-direction: column; gap: 22px; }
  .dnara-promises { align-items: flex-start; flex-direction: column; gap: 12px; margin-top: 40px; }
  .dnara-edition { bottom: -30px; left: -14px; width: 105px; height: 105px; padding: 15px; }
  .dnara-edition strong { font-size: 23px; }
  .dnara-edition span { font-size: 7px; }
  .dnara-handwritten { font-size: 17px; }
  .dnara-collection { width: min(100% - 40px, 1280px); padding: 100px 0; }
  .dnara-section-heading { align-items: flex-start; flex-direction: column; gap: 20px; }
  .dnara-products { grid-template-columns: 1fr; }
  .dnara-product-card:last-child { grid-column: auto; width: auto; }
  .dnara-story-art { min-height: 400px; }
  .dnara-story-copy { padding: 70px 24px; }
  .dnara-numbers { grid-template-columns: 1fr 1fr; }
  .dnara-contact { padding: 95px 24px; }
  .dnara-footer { grid-template-columns: 1fr; justify-items: center; text-align: center; }
  .dnara-footer p:last-child { justify-self: center; }
}

@media (prefers-reduced-motion: reduce) {
  .dnara-page *, .dnara-page *::before, .dnara-page *::after { scroll-behavior: auto !important; transition: none !important; }
}
</style>
