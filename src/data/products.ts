
export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  shortDescription: string;
  category: 'lip-gloss' | 'lip-liner' | 'lip-mask' | 'face-mask' | 'lip-scrub' | 'accessories';
  images: string[];
  featured?: boolean;
  bestseller?: boolean;
  new?: boolean;
}

export const products: Product[] = [
  {
    id: "velvet-bloom",
    name: "VELVET BLOOM 💋🌸",
    price: 5000,
    shortDescription: "Our best-selling lip gloss with vitamin E and jojoba oil",
    description: "Add a pop of color and shine with our Juicy Berry gloss. Enriched with vitamin E and jojoba oil for that smooth, non-sticky finish. Perfect for everyday glam.",
    category: 'lip-gloss',
    images: ["/placeholder.svg"],
    featured: true,
    bestseller: true
  },
  {
    id: "crystal-bloom",
    name: "CRYSTAL BLOOM",
    price: 5000,
    shortDescription: "Ultra-smooth, long-lasting lip liner",
    description: "Define your pout with our ultra-smooth Velvet Nude liner. Long-lasting and blendable—pairs perfectly with any of our nude glosses.",
    category: 'lip-liner',
    images: ["/placeholder.svg"],
    featured: true
  },
  {
    id: "overnight-lip-mask",
    name: "Overnight Lip Mask",
    price: 3500,
    shortDescription: "Hydrating overnight treatment for plumper lips",
    description: "Wake up to softer, plumper lips. Our lip mask works while you sleep, hydrating deeply with shea butter and rosehip oil.",
    category: 'lip-mask',
    images: ["/placeholder.svg"]
  },
  {
    id: "rose-clay-beauty-mask",
    name: "Rose Clay Beauty Mask",
    price: 5000,
    shortDescription: "Detoxifying clay mask for all skin types",
    description: "Detox, glow, and feel fresh with our rose clay face mask. Infused with calming botanicals and perfect for all skin types.",
    category: 'face-mask',
    images: ["/placeholder.svg"],
    featured: true
  },
  {
    id: "sugar-rush-lip-scrub",
    name: "Sugar Rush Lip Scrub",
    price: 2000,
    shortDescription: "Exfoliating lip treatment for smooth, soft lips",
    description: "Buff away dryness with this sweet sugar scrub. Gently exfoliates while leaving your lips buttery soft and kissably smooth.",
    category: 'lip-scrub',
    images: ["/placeholder.svg"]
  },
  {
    id: "exfoliating-lip-brush",
    name: "Exfoliating Lip Brush",
    price: 1500,
    shortDescription: "Silicone brush for gentle lip exfoliation",
    description: "A gentle silicone brush to help boost your lip scrub results. Removes dead skin and preps your lips for gloss perfection.",
    category: 'accessories',
    images: ["/placeholder.svg"]
  },
  {
    id: "barbie-dreams",
    name: "BARBIE DREAMS",
    price: 5000,
    shortDescription: "Bright pink lip gloss with a high-shine finish",
    description: "Channel your inner Barbie with this vibrant pink gloss. Features a high-shine finish with a subtle pink shimmer. Non-sticky formula that lasts for hours.",
    category: 'lip-gloss',
    images: ["/placeholder.svg"],
    new: true
  },
  {
    id: "choco-luxe",
    name: "CHOCO LUXE 🍫",
    price: 5000,
    shortDescription: "Rich chocolate-tinted lip gloss with a sweet scent",
    description: "Indulge in this rich, chocolate-tinted lip gloss that smells as delicious as it looks. Perfect for adding depth and dimension to your lip look.",
    category: 'lip-gloss',
    images: ["/placeholder.svg"]
  },
  {
    id: "mood-magic",
    name: "MOOD MAGIC ✨",
    price: 5500,
    shortDescription: "Color-changing lip gloss that reacts to your pH level",
    description: "Our innovative lip gloss that adapts to your unique pH level, creating a custom shade just for you. Watch as it transforms from clear to your perfect pink.",
    category: 'lip-gloss',
    images: ["/placeholder.svg"],
    bestseller: true,
    new: true
  },
  {
    id: "lip-oil-crystal-kiss",
    name: "LIP-OIL CRYSTAL KISS",
    price: 6000,
    shortDescription: "Nourishing lip oil with shimmer particles",
    description: "The perfect blend of treatment and glam. Our nourishing lip oil is infused with tiny shimmer particles that catch the light beautifully. Hydrates while giving your lips that sought-after glossy finish.",
    category: 'lip-gloss',
    images: ["/placeholder.svg"],
    featured: true,
    new: true
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

export const getBestsellers = (): Product[] => {
  return products.filter(product => product.bestseller);
};

export const getNewArrivals = (): Product[] => {
  return products.filter(product => product.new);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};
