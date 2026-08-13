export type BagCategory = 'crossbody' | 'clutch' | 'schoudertas'

export interface BagProduct {
  slug: string
  name: string
  category: BagCategory
  image: string
  styledImage: string
  tagline: string
  description: string
}

export const categoryInfo: Record<BagCategory, { name: string; intro: string }> = {
  crossbody: {
    name: 'Crossbody',
    intro: 'Handgemaakte kralentassen met een lange band, ontworpen om moeiteloos mee te bewegen.',
  },
  clutch: {
    name: 'Clutch',
    intro: 'Compacte statement bags met een elegante sluiting en schitterend kralenwerk.',
  },
  schoudertas: {
    name: 'Schoudertas',
    intro: 'Elegante modellen die comfortabel over de schouder vallen en iedere look bijzonder maken.',
  },
}

export const products: BagProduct[] = [
  {
    slug: 'emerald-chain',
    name: 'Emerald Chain',
    category: 'crossbody',
    image: '/images/products/crossbody/emerald.jpg',
    styledImage: '/images/products/styled/crossbody/emerald.png',
    tagline: 'Diep emerald, verfijnd en krachtig.',
    description: 'Een met de hand gemaakte crossbody van glanzende emeraldkleurige kralen. De lange ketting maakt haar perfect voor een diner, feest of bijzondere avond.',
  },
  {
    slug: 'royal-blue',
    name: 'Royal Blue',
    category: 'crossbody',
    image: '/images/products/crossbody/royal-blue.jpg',
    styledImage: '/images/products/styled/crossbody/royal-blue.png',
    tagline: 'Een koninklijk blauw statement.',
    description: 'Royal Blue combineert een uitgesproken kleur met een elegante, compacte vorm. Iedere kraal wordt zorgvuldig met de hand verwerkt.',
  },
  {
    slug: 'turquoise-fold',
    name: 'Turquoise Fold',
    category: 'crossbody',
    image: '/images/products/crossbody/turquoise.jpg',
    styledImage: '/images/products/styled/crossbody/turquoise.png',
    tagline: 'Fris turquoise met een speelse vouw.',
    description: 'Een frisse crossbody met een herkenbare gevouwen vorm. Licht, kleurrijk en handgemaakt voor dagen waarop je iets bijzonders wilt dragen.',
  },
  {
    slug: 'grey-statement',
    name: 'Grey Statement',
    category: 'clutch',
    image: '/images/products/clutch/grey-statement.jpg',
    styledImage: '/images/products/styled/clutch/grey-statement.png',
    tagline: 'Zacht grijs met maximale schittering.',
    description: 'Een verfijnde clutch in koele grijstinten. Het geometrische kralenwerk vangt het licht en maakt ieder exemplaar uniek.',
  },
  {
    slug: 'silver-crystal',
    name: 'Silver Crystal',
    category: 'clutch',
    image: '/images/products/clutch/silver-crystal.jpg',
    styledImage: '/images/products/styled/clutch/silver-crystal.png',
    tagline: 'Kristalhelder en tijdloos elegant.',
    description: 'Silver Crystal is een fonkelende handgemaakte clutch voor feestelijke momenten. Elegant van vorm en rijk aan subtiele details.',
  },
  {
    slug: 'crystal-duo',
    name: 'Crystal Duo',
    category: 'clutch',
    image: '/images/products/clutch/crystal-duo.jpg',
    styledImage: '/images/products/styled/clutch/crystal-duo.png',
    tagline: 'Een speels samenspel van kristaltinten.',
    description: 'Deze clutch combineert verschillende transparante kralen in een luxe patroon. Een handgemaakt statement dat overal bij past.',
  },
  {
    slug: 'pearl-white',
    name: 'Pearl White',
    category: 'schoudertas',
    image: '/images/products/crossbody/pearl-white.jpg',
    styledImage: '/images/products/styled/crossbody/pearl-white.png',
    tagline: 'Parelwit voor de mooiste momenten.',
    description: 'Een zachte, parelwitte schoudertas met een elegante glans. Bijzonder mooi voor een bruiloft, feest of als verfijnd accent.',
  },
  {
    slug: 'blush-pink',
    name: 'Blush Pink',
    category: 'schoudertas',
    image: '/images/products/crossbody/blush-pink.jpg',
    styledImage: '/images/products/styled/crossbody/blush-pink.png',
    tagline: 'Romantisch blush met een moderne vorm.',
    description: 'Een handgemaakte schoudertas in zacht roze, afgewerkt met glanzende kralen en een comfortabele band.',
  },
]

export function productPath(product: BagProduct) {
  return `/handtassen/${product.category}/${product.slug}`
}
