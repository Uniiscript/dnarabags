<script setup lang="ts">
const instagramUrl = 'https://www.instagram.com/dnarabags/'
const tiktokUrl = 'https://www.tiktok.com/@dnara.bags'
const handbagsOpen = ref(true)

const sprinkles = Array.from({ length: 18 }, (_, index) => ({
  left: `${8 + ((index * 17) % 84)}%`,
  top: `${7 + ((index * 29) % 86)}%`,
  delay: `${(index % 6) * 0.32}s`,
  size: `${3 + (index % 3) * 2}px`,
}))

const handbagCategories = [
  {
    id: 'clutch',
    number: '01',
    name: 'Clutch',
    description: 'Compacte statement bags met een elegante sluiting en schitterend handgemaakt kralenwerk.',
    products: [
      { image: '/images/products/clutch/grey-statement.jpg', name: 'Grey Statement' },
      { image: '/images/products/clutch/silver-crystal.jpg', name: 'Silver Crystal' },
      { image: '/images/products/clutch/crystal-duo.jpg', name: 'Crystal Duo' },
    ],
  },
  {
    id: 'crossbody',
    number: '02',
    name: 'Schoudertas / Crossbody',
    description: 'Grotere modellen met een lange band of ketting, ontworpen om stijlvol over de schouder te dragen.',
    products: [
      { image: '/images/products/crossbody/emerald.jpg', name: 'Emerald Chain' },
      { image: '/images/products/crossbody/royal-blue.jpg', name: 'Royal Blue' },
      { image: '/images/products/crossbody/pearl-white.jpg', name: 'Pearl White' },
      { image: '/images/products/crossbody/turquoise.jpg', name: 'Turquoise Fold' },
      { image: '/images/products/crossbody/blush-pink.jpg', name: 'Blush Pink' },
    ],
  },
]

const instagramPosts = [
  { image: '/images/instagram/post-01.jpg', href: 'https://www.instagram.com/dnarabags/reel/DabAeJIu9J8/' },
  { image: '/images/instagram/post-02.jpg', href: 'https://www.instagram.com/dnarabags/reel/DZlZXXFM0QM/' },
  { image: '/images/instagram/post-03.jpg', href: 'https://www.instagram.com/dnarabags/reel/DZAzbZzO01F/' },
  { image: '/images/instagram/post-04.jpg', href: 'https://www.instagram.com/dnarabags/reel/DYckytQsras/' },
  { image: '/images/instagram/post-05.jpg', href: 'https://www.instagram.com/dnarabags/reel/DXsMiTHDMoB/' },
  { image: '/images/instagram/post-06.jpg', href: 'https://www.instagram.com/dnarabags/reel/DXXX62QDq-H/' },
]

const carousel = ref<HTMLElement | null>(null)

type InquiryReason = 'price' | 'personal' | 'item'

const inquiryOpen = ref(false)
const inquiryStatus = ref<'idle' | 'sending' | 'success' | 'error'>('idle')
const inquiryError = ref('')
const inquiryForm = reactive({
  reason: 'price' as InquiryReason,
  product: '',
  name: '',
  email: '',
  phone: '',
  message: '',
  website: '',
})

const inquiryReasons: { value: InquiryReason; label: string; description: string }[] = [
  { value: 'price', label: 'Prijsaanvraag', description: 'Ontvang een prijsopgave voor een tas.' },
  { value: 'personal', label: 'Persoonlijke aanvraag', description: 'Bespreek kleuren, formaat of een eigen ontwerp.' },
  { value: 'item', label: 'Vraag over een item', description: 'Stel een vraag over een tas uit de collectie.' },
]

function openInquiry(reason: InquiryReason = 'personal', product = '') {
  inquiryForm.reason = reason
  inquiryForm.product = product
  inquiryStatus.value = 'idle'
  inquiryError.value = ''
  inquiryOpen.value = true
}

function closeInquiry() {
  if (inquiryStatus.value === 'sending') return
  inquiryOpen.value = false
}

async function submitInquiry() {
  inquiryStatus.value = 'sending'
  inquiryError.value = ''

  try {
    await $fetch('/api/contact', { method: 'POST', body: inquiryForm })
    inquiryStatus.value = 'success'
  }
  catch (error: any) {
    inquiryStatus.value = 'error'
    inquiryError.value = error?.data?.statusMessage || 'Versturen is niet gelukt. Probeer het later opnieuw.'
  }
}

watch(inquiryOpen, (isOpen) => {
  if (!import.meta.client) return
  document.body.classList.toggle('modal-open', isOpen)
})

onBeforeUnmount(() => {
  if (import.meta.client) document.body.classList.remove('modal-open')
})

function scrollCarousel(direction: -1 | 1) {
  if (!carousel.value) return
  const card = carousel.value.querySelector<HTMLElement>('.social-card')
  carousel.value.scrollBy({ left: direction * ((card?.offsetWidth ?? 320) + 16), behavior: 'smooth' })
}

useSeoMeta({
  title: "D'Nara Bags | Handmade beaded bags",
  description: 'Handmade beaded bags, met liefde gemaakt in Nederland. Ontdek D’Nara Bags op Instagram en TikTok.',
  ogTitle: "D'Nara Bags",
  ogDescription: 'Handmade beaded bags, met liefde gemaakt in Nederland.',
  ogType: 'website',
})
</script>

<template>
  <div class="site-shell">
    <header class="site-header">
      <NuxtLink class="wordmark" to="/" aria-label="D'Nara Bags home">
        <span class="wordmark-logo" aria-hidden="true">
          <img src="/icon-512.png" alt="" />
        </span>
        <span class="wordmark-name">D'Nara Bags</span>
      </NuxtLink>

      <nav class="main-nav" aria-label="Hoofdnavigatie">
        <a href="#collectie">Collectie</a>
        <a href="#socials">Socials</a>
        <button type="button" @click="openInquiry('personal')">Contact</button>
      </nav>
    </header>

    <main>
      <section class="hero" aria-labelledby="hero-title">
        <div class="hero-copy">
          <p class="eyebrow">Handmade beaded bags</p>
          <h1 id="hero-title">Made with love.<br /><em>Carried with style.</em></h1>
          <p class="intro">
            Bij D'Nara Bags wordt iedere tas met de hand en met liefde gemaakt. Unieke kralentassen voor momenten die gezien mogen worden.
          </p>
          <div class="hero-actions">
            <a class="button button-gold" href="#collectie">Bekijk de collectie</a>
            <a class="text-link" href="#socials">Ontdek D'Nara</a>
          </div>
        </div>

        <div class="hero-brand" aria-label="D'Nara Bags logo">
          <div class="hero-logo-frame">
            <img src="/images/dnara-logo.png" alt="D'Nara Bags — kroonlogo" />
          </div>
        </div>
      </section>

      <section id="collectie" class="collection-section" aria-labelledby="collection-title">
        <div class="collection-heading">
          <p class="section-number">01</p>
          <div>
            <p class="eyebrow">De collectie</p>
            <h2 id="collection-title">Kies jouw D'Nara.</h2>
          </div>
          <p>
            Van een verfijnde clutch tot een speelse mini bag. Iedere tas wordt met de hand gemaakt en kan op aanvraag worden afgestemd.
          </p>
        </div>

        <div class="collection-menu">
          <button
            class="collection-toggle"
            type="button"
            :aria-expanded="handbagsOpen"
            aria-controls="handbag-categories"
            @click="handbagsOpen = !handbagsOpen"
          >
            <span><small>Collectie</small>Handtassen</span>
            <b :class="{ open: handbagsOpen }" aria-hidden="true">+</b>
          </button>

          <Transition name="dropdown">
            <div v-if="handbagsOpen" id="handbag-categories" class="category-grid">
              <section v-for="category in handbagCategories" :key="category.id" class="bag-category">
                <div class="bag-category-heading">
                  <p><small>{{ category.number }}</small>{{ category.name }}</p>
                  <span>{{ category.description }}</span>
                </div>

                <div class="product-grid">
                  <article v-for="(product, productIndex) in category.products" :key="product.image" class="product-card">
                    <div class="collection-image product-image">
                      <img :src="product.image" :alt="`Echte D'Nara ${category.name}: ${product.name}`" loading="lazy" />
                      <span
                        v-for="(spark, index) in sprinkles"
                        :key="`${category.id}-${productIndex}-${index}`"
                        class="sprinkle"
                        :style="{ left: spark.left, top: spark.top, width: spark.size, height: spark.size, animationDelay: spark.delay }"
                        aria-hidden="true"
                      ></span>
                    </div>
                    <div class="product-meta">
                      <p>{{ product.name }}</p>
                      <button type="button" :aria-label="`Prijs aanvragen voor ${product.name}`" @click="openInquiry('price', product.name)">Prijs aanvragen</button>
                    </div>
                  </article>
                </div>
              </section>
            </div>
          </Transition>
        </div>

        <article class="kids-collection">
          <div class="kids-copy">
            <p class="eyebrow">Een bijzondere capsulecollectie</p>
            <h2>NayNay's Kids</h2>
            <p>
              Een vrolijke kidscollectie, geïnspireerd door haar nichtje NayNay. Kleine tassen met zachte kleuren, speelse details en dezelfde liefdevolle handgemaakte afwerking.
            </p>
            <a class="text-link" :href="instagramUrl" target="_blank" rel="noopener noreferrer">Ontdek NayNay's Kids</a>
          </div>
          <div class="collection-image kids-image">
            <img src="/images/products/crossbody/blush-pink.jpg" alt="Blush Pink kralentas uit NayNay's Kids Collectie" />
            <span
              v-for="(spark, index) in sprinkles"
              :key="`kids-${index}`"
              class="sprinkle sprinkle-kids"
              :style="{ left: spark.left, top: spark.top, width: spark.size, height: spark.size, animationDelay: spark.delay }"
              aria-hidden="true"
            ></span>
          </div>
        </article>
      </section>

      <section id="socials" class="social-section" aria-labelledby="social-title">
        <div class="social-heading">
          <div>
            <p class="eyebrow">Follow the making</p>
            <h2 id="social-title">Van kraal tot tas.</h2>
            <p class="social-intro">Volg het maakproces, nieuwe kleuren en de nieuwste D'Nara-creaties.</p>
          </div>

          <div class="carousel-controls" aria-label="Carousel bedienen">
            <button type="button" aria-label="Vorige Instagram-post" @click="scrollCarousel(-1)">←</button>
            <button type="button" aria-label="Volgende Instagram-post" @click="scrollCarousel(1)">→</button>
          </div>
        </div>

        <div ref="carousel" class="carousel" aria-label="Recente Instagram-posts">
          <a
            v-for="(post, index) in instagramPosts"
            :key="post.href"
            class="social-card"
            :href="post.href"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="`Bekijk Instagram-post ${index + 1}`"
          >
            <img :src="post.image" :alt="`D'Nara Bags Instagram-preview ${index + 1}`" loading="lazy" />
            <span class="card-label">Bekijk op Instagram <b>↗</b></span>
          </a>
        </div>

        <div class="social-footer">
          <div class="profile-copy">
            <img src="/images/dnara-logo.png" alt="" />
            <p><strong>@dnarabags</strong><span>Handmade Beaded Bags · The Netherlands</span></p>
          </div>
          <div class="social-links">
            <a :href="instagramUrl" target="_blank" rel="noopener noreferrer">Instagram ↗</a>
            <a :href="tiktokUrl" target="_blank" rel="noopener noreferrer">TikTok ↗</a>
          </div>
        </div>
      </section>
    </main>

    <footer>
      <img src="/images/dnara-logo.png" alt="D'Nara Bags" />
      <p>Handmade Beaded Bags<br />Made with love in the Netherlands</p>
      <div>
        <a :href="instagramUrl" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a :href="tiktokUrl" target="_blank" rel="noopener noreferrer">TikTok</a>
      </div>
      <span>© {{ new Date().getFullYear() }} D'Nara Bags</span>
    </footer>

    <button class="contact-bubble" type="button" aria-label="Snel contact opnemen" @click="openInquiry('personal')">
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
        <path d="M4 6.5h16v11H4z" />
        <path d="m5 7.5 7 5 7-5" />
      </svg>
      <span>Snel contact</span>
    </button>

    <Transition name="modal-fade">
      <div v-if="inquiryOpen" class="modal-backdrop" @click.self="closeInquiry" @keydown.esc="closeInquiry">
        <section class="contact-modal" role="dialog" aria-modal="true" aria-labelledby="contact-modal-title">
          <button class="modal-close" type="button" aria-label="Sluiten" @click="closeInquiry">×</button>

          <template v-if="inquiryStatus === 'success'">
            <div class="form-success">
              <span aria-hidden="true">✓</span>
              <p class="eyebrow">Aanvraag ontvangen</p>
              <h2 id="contact-modal-title">Bedankt, {{ inquiryForm.name }}.</h2>
              <p>Je bericht is verstuurd naar D'Nara Bags. We nemen zo snel mogelijk contact met je op.</p>
              <button class="button button-gold" type="button" @click="closeInquiry">Sluiten</button>
            </div>
          </template>

          <form v-else @submit.prevent="submitInquiry">
            <p class="eyebrow">Persoonlijk contact</p>
            <h2 id="contact-modal-title">Waar kunnen we je mee helpen?</h2>
            <p class="modal-intro">Vertel ons waar je naar op zoek bent. Je aanvraag komt rechtstreeks bij D'Nara Bags terecht.</p>

            <fieldset class="reason-options">
              <legend>Soort aanvraag</legend>
              <label v-for="reason in inquiryReasons" :key="reason.value" :class="{ selected: inquiryForm.reason === reason.value }">
                <input v-model="inquiryForm.reason" type="radio" name="reason" :value="reason.value" />
                <span><strong>{{ reason.label }}</strong><small>{{ reason.description }}</small></span>
              </label>
            </fieldset>

            <div v-if="inquiryForm.product" class="selected-product">
              <span>Geselecteerde tas</span>
              <strong>{{ inquiryForm.product }}</strong>
            </div>

            <div class="form-grid">
              <label>
                <span>Naam *</span>
                <input v-model.trim="inquiryForm.name" name="name" type="text" autocomplete="name" maxlength="80" required />
              </label>
              <label>
                <span>E-mailadres *</span>
                <input v-model.trim="inquiryForm.email" name="email" type="email" autocomplete="email" maxlength="160" required />
              </label>
              <label class="form-wide">
                <span>Telefoonnummer <small>(optioneel)</small></span>
                <input v-model.trim="inquiryForm.phone" name="phone" type="tel" autocomplete="tel" maxlength="40" />
              </label>
              <label class="form-wide">
                <span>Bericht *</span>
                <textarea v-model.trim="inquiryForm.message" name="message" rows="4" maxlength="2000" required placeholder="Vertel bijvoorbeeld welke tas, kleur of uitvoering je mooi vindt."></textarea>
              </label>
              <label class="honeypot" aria-hidden="true">
                <span>Website</span>
                <input v-model="inquiryForm.website" name="website" type="text" tabindex="-1" autocomplete="off" />
              </label>
            </div>

            <p v-if="inquiryError" class="form-error" role="alert">{{ inquiryError }}</p>
            <button class="button button-gold submit-button" type="submit" :disabled="inquiryStatus === 'sending'">
              {{ inquiryStatus === 'sending' ? 'Bezig met versturen…' : 'Aanvraag versturen' }}
            </button>
          </form>
        </section>
      </div>
    </Transition>
  </div>
</template>
