export type BagCategory = 'crossbody' | 'clutch' | 'schoudertas' | 'handtas'

export interface BagProduct {
  slug: string
  name: string
  categories: BagCategory[]
  image: string
  styledImage: string
  presentationImage: string
  clutchPresentationImage?: string
  tagline: string
  description: string
  photoDescription: string
  wearing: string
  closure: string
  vision: string
}

export const categoryInfo: Record<BagCategory, { name: string; intro: string }> = {
  crossbody: {
    name: 'Crossbody',
    intro: 'Crossbody-tasjes draag je schuin over het lichaam. De langere band laat de tas comfortabel rond heuphoogte vallen, zodat je handen vrij blijven.',
  },
  clutch: {
    name: 'Clutch',
    intro: 'Een clutch heeft geen lange draagband: je klemt haar elegant in de hand of onder de arm. Perfect als klein statement voor een avond uit.',
  },
  schoudertas: {
    name: 'Schoudertas',
    intro: 'Schoudertassen draag je los over één schouder. De band of het hengsel houdt de tas dichtbij en geeft een verfijnde, nonchalante uitstraling.',
  },
  handtas: {
    name: 'Handtas',
    intro: 'Een handtas draag je aan het korte hengsel in de hand of om de arm. Een compacte, feestelijke vorm die je look direct afmaakt.',
  },
}

export const products: BagProduct[] = [
  {
    slug: 'emerald-chain', name: 'Emerald Chain', categories: ['crossbody'],
    image: '/images/products/crossbody/emerald.jpg', styledImage: '/images/products/styled/crossbody/emerald.png', presentationImage: '/images/products/presentation/emerald-chain.png',
    tagline: 'Diep emerald, verfijnd en krachtig.',
    description: 'Een compact donkergroen model met een goudkleurige ketting en een gevlochten detail aan de voorzijde.',
    photoDescription: 'Op de foto zie je een donkergroene kralentas met een goudkleurig frame, een kliksluiting met twee bolletjes en een lange goudkleurige ketting.',
    wearing: 'Draag haar crossbody tot rond heuphoogte of korter over één schouder. De ketting geeft de tas ook een elegante avondlook.',
    closure: 'De tas sluit met een zichtbaar metalen knipslot met twee ronde bolletjes.',
    vision: 'Emerald Chain is gemaakt voor een rustige basislook die één rijk, groen accent kan gebruiken.',
  },
  {
    slug: 'royal-blue', name: 'Royal Blue', categories: ['crossbody', 'clutch'],
    image: '/images/products/crossbody/royal-blue.jpg', styledImage: '/images/products/styled/crossbody/royal-blue.png', presentationImage: '/images/products/presentation/royal-blue-crossbody.png', clutchPresentationImage: '/images/products/presentation/royal-blue-clutch.png',
    tagline: 'Koningsblauw, draagbaar op jouw manier.',
    description: 'Een helderblauwe kralentas met een rond handhengsel én een afneembaar ogende lange zilverkleurige ketting.',
    photoDescription: 'Op de foto zie je een intens blauwe, compacte tas met een stevig rond hengsel, zilverkleurige metalen details, een lange ketting en een bijpassend blauw accessoire aan de ketting.',
    wearing: 'Draag Royal Blue crossbody tot heuphoogte met de lange ketting, of als clutch/handtas aan het ronde hengsel.',
    closure: 'De tas heeft een metalen knipsluiting met twee bolletjes bovenaan.',
    vision: 'Royal Blue is bedoeld als het kleuraccent van je outfit: klein van formaat, maar uitgesproken in uitstraling.',
  },
  {
    slug: 'turquoise-fold', name: 'Turquoise Fold', categories: ['crossbody'],
    image: '/images/products/crossbody/turquoise.jpg', styledImage: '/images/products/styled/crossbody/turquoise.png', presentationImage: '/images/products/presentation/turquoise-fold.png',
    tagline: 'Fris turquoise met een speelse vouw.',
    description: 'Een levendige turquoise tas met een zachte, gevouwen vorm en een lange kralenband in dezelfde kleur.',
    photoDescription: 'Op de foto zie je een turquoise kralentas met twee metalen ringen aan de zijkant en een lange band die volledig uit turquoise kralen bestaat.',
    wearing: 'Draag haar schuin over het lichaam, zodat de tas op heuphoogte valt. De kralenband maakt ook korter over één schouder een mooi detail.',
    closure: 'De tas is afgewerkt met een metalen knipsluiting met twee bolletjes.',
    vision: 'Turquoise Fold brengt kleur en beweging samen: een vrolijk statement met een zachte, tactiele vorm.',
  },
  {
    slug: 'grey-statement', name: 'Grey Statement', categories: ['schoudertas'],
    image: '/images/products/clutch/grey-statement.jpg', styledImage: '/images/products/styled/clutch/grey-statement.png', presentationImage: '/images/products/presentation/grey-statement.png',
    tagline: 'Zacht grijs met maximale schittering.',
    description: 'Een grijze kralentas met een breed, rond hengsel dat rijk is afgewerkt met transparante kristalaccenten.',
    photoDescription: 'Op de foto zie je een ruimere grijze tas met ronde kralen, een opvallend booghengsel en een glinsterende kristalrand bovenaan.',
    wearing: 'Draag haar los over één schouder met het brede hengsel, of in de hand voor een meer uitgesproken look.',
    closure: 'De sluiting is op deze foto niet zichtbaar; de tas wordt later aangevuld met de definitieve specificaties.',
    vision: 'Grey Statement bewijst dat een neutrale kleur allesbehalve rustig hoeft te zijn: de structuur en glans doen het werk.',
  },
  {
    slug: 'silver-crystal', name: 'Silver Crystal', categories: ['handtas'],
    image: '/images/products/clutch/silver-crystal.jpg', styledImage: '/images/products/styled/clutch/silver-crystal.png', presentationImage: '/images/products/presentation/silver-crystal.png',
    tagline: 'Kristalhelder en feestelijk in de hand.',
    description: 'Een compacte zilverkleurige handtas met een rond kristallen hengsel en een helder fonkelende kralenstructuur.',
    photoDescription: 'Op de foto zie je een kleine zilverkleurige tas met transparante kristalachtige kralen, een rond hengsel en een metalen frame.',
    wearing: 'Draag Silver Crystal elegant aan het ronde hengsel in de hand of om de arm.',
    closure: 'De tas sluit met een metalen knipsluiting met twee bolletjes.',
    vision: 'Silver Crystal is ontworpen als een klein lichtpunt: een handtas die een avondlook meteen feestelijk maakt.',
  },
  {
    slug: 'crystal-duo', name: 'Crystal Duo', categories: ['crossbody'],
    image: '/images/products/clutch/crystal-duo.jpg', styledImage: '/images/products/styled/clutch/crystal-duo.png', presentationImage: '/images/products/presentation/crystal-duo.png',
    tagline: 'Twee kristaltinten, één sprankelend verhaal.',
    description: 'Een duo van fonkelende grijs-zilveren en helder witte kralentassen, beide met een lange zilverkleurige ketting.',
    photoDescription: 'Op de foto zie je twee compacte kralentassen naast elkaar: één rookgrijs en één helder wit. Beide hebben een metalen frame, knipsluiting en lange ketting.',
    wearing: 'Draag de tas crossbody zodat zij rond heuphoogte valt, of kort over de schouder voor een meer geklede uitstraling.',
    closure: 'Beide uitvoeringen zijn afgewerkt met een metalen knipsluiting met twee bolletjes.',
    vision: 'Crystal Duo speelt met licht: kies voor rookgrijs, helder wit of laat beide tinten naast elkaar spreken.',
  },
  {
    slug: 'pearl-white', name: 'Pearl White', categories: ['schoudertas'],
    image: '/images/products/crossbody/pearl-white.jpg', styledImage: '/images/products/styled/crossbody/pearl-white.png', presentationImage: '/images/products/presentation/pearl-white.png',
    tagline: 'Parelwit voor de mooiste momenten.',
    description: 'Een parelwitte tas met een rond tophengsel en een lange kralenband in dezelfde zachte tint.',
    photoDescription: 'Op de foto zie je een witte kralentas met parelglans, een rond hengsel, een lange kralenband en een klein goudkleurig merkplaatje.',
    wearing: 'Draag haar los over één schouder met de lange band of in de hand aan het ronde hengsel.',
    closure: 'De sluiting is op deze foto niet zichtbaar; de tas wordt later aangevuld met de definitieve specificaties.',
    vision: 'Pearl White is gemaakt voor zachte, feestelijke momenten en combineert moeiteloos met een lichte of ton-sur-ton look.',
  },
]

export function productPath(product: BagProduct) {
  return `/handtassen/${product.categories[0]}/${product.slug}`
}
