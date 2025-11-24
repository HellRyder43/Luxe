import { Product, NavItem, PaymentMethodOption, PaymentMethod } from "@/types";

// Malaysian States
export const MALAYSIAN_STATES = [
  "Johor",
  "Kedah",
  "Kelantan",
  "Melaka",
  "Negeri Sembilan",
  "Pahang",
  "Penang",
  "Perak",
  "Perlis",
  "Sabah",
  "Sarawak",
  "Selangor",
  "Terengganu",
  "Kuala Lumpur",
  "Labuan",
  "Putrajaya",
] as const;

// Payment Methods
export const PAYMENT_METHODS: PaymentMethodOption[] = [
  {
    id: "fpx" as PaymentMethod,
    name: "FPX",
    icon: "🏦",
    description: "All major Malaysian banks",
  },
  {
    id: "grabpay" as PaymentMethod,
    name: "GrabPay",
    icon: "💚",
    description: "Pay with GrabPay wallet",
  },
  {
    id: "tng" as PaymentMethod,
    name: "Touch 'n Go",
    icon: "💳",
    description: "TNG eWallet",
  },
  {
    id: "visa" as PaymentMethod,
    name: "Visa",
    icon: "💳",
    description: "Credit/Debit card",
  },
  {
    id: "mastercard" as PaymentMethod,
    name: "Mastercard",
    icon: "💳",
    description: "Credit/Debit card",
  },
];

// Navigation Structure
export const PRIMARY_NAV: NavItem[] = [
  {
    label: "NEW ARRIVALS",
    href: "/products?filter=new",
    children: [
      { label: "Just Landed", href: "/products?filter=new" },
      { label: "Coming Soon", href: "/products?filter=coming-soon" },
      { label: "Pre-Orders", href: "/products?filter=pre-order" },
      { label: "Editor's Picks", href: "/products?filter=editors-pick" },
    ],
  },
  {
    label: "WOMEN",
    href: "/products?category=women",
    children: [
      { label: "Dresses & Jumpsuits", href: "/products?category=women&sub=dresses" },
      { label: "Tops & Blouses", href: "/products?category=women&sub=tops" },
      { label: "Bottoms", href: "/products?category=women&sub=bottoms" },
      { label: "Outerwear", href: "/products?category=women&sub=outerwear" },
      { label: "Modest Wear", href: "/products?category=women&sub=modest" },
      { label: "Accessories", href: "/products?category=women&sub=accessories" },
      { label: "Footwear", href: "/products?category=women&sub=footwear" },
      { label: "Premium Collections", href: "/products?category=women&sub=premium" },
    ],
  },
  {
    label: "MEN",
    href: "/products?category=men",
    children: [
      { label: "Shirts", href: "/products?category=men&sub=shirts" },
      { label: "T-Shirts & Polos", href: "/products?category=men&sub=tshirts" },
      { label: "Pants & Trousers", href: "/products?category=men&sub=pants" },
      { label: "Outerwear", href: "/products?category=men&sub=outerwear" },
      { label: "Traditional Wear", href: "/products?category=men&sub=traditional" },
      { label: "Accessories", href: "/products?category=men&sub=accessories" },
      { label: "Footwear", href: "/products?category=men&sub=footwear" },
    ],
  },
  {
    label: "COLLECTIONS",
    href: "/collections",
    children: [
      { label: "Raya Edition", href: "/collections/raya" },
      { label: "Minimalist Essentials", href: "/collections/minimalist" },
      { label: "Office & Work", href: "/collections/office" },
      { label: "Weekend Casual", href: "/collections/weekend" },
      { label: "Special Occasions", href: "/collections/special" },
      { label: "Sustainable Line", href: "/collections/sustainable" },
    ],
  },
  {
    label: "SALE",
    href: "/products?filter=sale",
    children: [
      { label: "Up to 30% Off", href: "/products?filter=sale&discount=30" },
      { label: "Up to 50% Off", href: "/products?filter=sale&discount=50" },
      { label: "Final Clearance", href: "/products?filter=clearance" },
      { label: "Bundle Deals", href: "/products?filter=bundles" },
    ],
  },
];

// Mock Products
export const MOCK_PRODUCTS: Product[] = [
  {
    id: "prod-001",
    slug: "minimal-silk-blouse-ivory",
    name: "Minimal Silk Blouse",
    description:
      "Crafted from 100% mulberry silk, this minimal blouse epitomizes quiet luxury. The ivory shade complements all skin tones, while the relaxed fit ensures day-long comfort. Features mother-of-pearl buttons and French seams.",
    price: 899.0,
    compareAtPrice: 1299.0,
    images: [
      {
        id: "img-001-1",
        url: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=800&h=1067&fit=crop",
        alt: "Minimal Silk Blouse in Ivory - Front View",
        isPrimary: true,
      },
      {
        id: "img-001-2",
        url: "https://images.unsplash.com/photo-1534342122873-2e719b2b1ade?w=800&h=1067&fit=crop",
        alt: "Minimal Silk Blouse in Ivory - Detail",
        isPrimary: false,
      },
    ],
    category: "Women",
    subcategory: "Tops & Blouses",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      {
        name: "Ivory",
        hex: "#FDFBF7",
        images: [
          {
            id: "img-001-1",
            url: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=800&h=1067&fit=crop",
            alt: "Ivory Blouse",
            isPrimary: true,
          },
        ],
      },
    ],
    inStock: true,
    isFeatured: true,
    isNew: false,
    isSale: true,
    salePercentage: 31,
    rating: 4.8,
    reviewCount: 124,
    material: "100% Mulberry Silk",
    careInstructions: "Dry clean only. Do not bleach. Iron on low heat.",
    tags: ["Minimalist", "Premium", "Sustainable", "Bestseller"],
  },
  {
    id: "prod-002",
    slug: "tailored-wide-leg-trousers-charcoal",
    name: "Tailored Wide-Leg Trousers",
    description:
      "These wide-leg trousers in charcoal wool blend offer a sophisticated silhouette perfect for the modern Malaysian professional. Features an invisible zipper, Italian pockets, and a subtle break at the ankle.",
    price: 1299.0,
    images: [
      {
        id: "img-002-1",
        url: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&h=1067&fit=crop",
        alt: "Tailored Wide-Leg Trousers in Charcoal",
        isPrimary: true,
      },
      {
        id: "img-002-2",
        url: "https://images.unsplash.com/photo-1624378515195-6bbdb73dff1a?w=800&h=1067&fit=crop",
        alt: "Trousers Detail Shot",
        isPrimary: false,
      },
    ],
    category: "Women",
    subcategory: "Bottoms",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      {
        name: "Charcoal",
        hex: "#333333",
        images: [
          {
            id: "img-002-1",
            url: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&h=1067&fit=crop",
            alt: "Charcoal Trousers",
            isPrimary: true,
          },
        ],
      },
    ],
    inStock: true,
    isFeatured: true,
    isNew: false,
    isSale: false,
    rating: 4.9,
    reviewCount: 89,
    material: "70% Wool, 30% Polyester",
    careInstructions: "Dry clean recommended. Can be pressed with steam.",
    tags: ["Office", "Tailored", "Premium"],
  },
  {
    id: "prod-003",
    slug: "linen-midi-dress-sand",
    name: "Linen Midi Dress",
    description:
      "Embrace effortless elegance with this breathable linen midi dress in sand. Perfect for Malaysian weather, featuring adjustable straps and a relaxed A-line silhouette. Subtle side pockets add functionality.",
    price: 749.0,
    images: [
      {
        id: "img-003-1",
        url: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&h=1067&fit=crop",
        alt: "Linen Midi Dress in Sand",
        isPrimary: true,
      },
    ],
    category: "Women",
    subcategory: "Dresses & Jumpsuits",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      {
        name: "Sand",
        hex: "#E5E0D8",
        images: [
          {
            id: "img-003-1",
            url: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&h=1067&fit=crop",
            alt: "Sand Linen Dress",
            isPrimary: true,
          },
        ],
      },
    ],
    inStock: true,
    isFeatured: false,
    isNew: true,
    isSale: false,
    rating: 4.7,
    reviewCount: 52,
    material: "100% European Linen",
    careInstructions: "Machine wash cold. Tumble dry low. Iron while damp.",
    tags: ["Linen", "Summer", "Sustainable"],
  },
  {
    id: "prod-004",
    slug: "cotton-oxford-shirt-white",
    name: "Cotton Oxford Shirt",
    description:
      "A wardrobe essential: crisp white oxford shirt in premium Egyptian cotton. Button-down collar, chest pocket, and a relaxed fit make this perfect for both business and casual occasions.",
    price: 599.0,
    images: [
      {
        id: "img-004-1",
        url: "https://images.unsplash.com/photo-1602810318660-d2c5a7e0d8c7?w=800&h=1067&fit=crop",
        alt: "Cotton Oxford Shirt in White",
        isPrimary: true,
      },
    ],
    category: "Men",
    subcategory: "Shirts",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      {
        name: "White",
        hex: "#FFFFFF",
        images: [
          {
            id: "img-004-1",
            url: "https://images.unsplash.com/photo-1602810318660-d2c5a7e0d8c7?w=800&h=1067&fit=crop",
            alt: "White Oxford Shirt",
            isPrimary: true,
          },
        ],
      },
    ],
    inStock: true,
    isFeatured: true,
    isNew: false,
    isSale: false,
    rating: 4.8,
    reviewCount: 203,
    material: "100% Egyptian Cotton",
    careInstructions: "Machine wash cold. Iron on medium heat. Can be dry cleaned.",
    tags: ["Essential", "Menswear", "Classic"],
  },
  {
    id: "prod-005",
    slug: "merino-wool-cardigan-taupe",
    name: "Merino Wool Cardigan",
    description:
      "Ultra-soft merino wool cardigan in taupe. Features a relaxed fit, ribbed cuffs, and natural corozo buttons. Perfect layering piece for air-conditioned offices or cool evenings.",
    price: 1099.0,
    compareAtPrice: 1599.0,
    images: [
      {
        id: "img-005-1",
        url: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&h=1067&fit=crop",
        alt: "Merino Wool Cardigan in Taupe",
        isPrimary: true,
      },
    ],
    category: "Women",
    subcategory: "Outerwear",
    sizes: ["XS", "S", "M", "L"],
    colors: [
      {
        name: "Taupe",
        hex: "#A69F93",
        images: [
          {
            id: "img-005-1",
            url: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&h=1067&fit=crop",
            alt: "Taupe Cardigan",
            isPrimary: true,
          },
        ],
      },
    ],
    inStock: true,
    isFeatured: false,
    isNew: false,
    isSale: true,
    salePercentage: 31,
    rating: 4.9,
    reviewCount: 67,
    material: "100% Extra-Fine Merino Wool",
    careInstructions: "Hand wash cold or dry clean. Lay flat to dry.",
    tags: ["Wool", "Layering", "Premium"],
  },
  {
    id: "prod-006",
    slug: "slim-fit-chinos-navy",
    name: "Slim-Fit Chinos",
    description:
      "Modern slim-fit chinos in navy. Italian cotton twill construction with a hint of stretch for comfort. Features angled front pockets and welted back pockets. Perfect for smart casual wear.",
    price: 799.0,
    images: [
      {
        id: "img-006-1",
        url: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800&h=1067&fit=crop",
        alt: "Slim-Fit Chinos in Navy",
        isPrimary: true,
      },
    ],
    category: "Men",
    subcategory: "Pants & Trousers",
    sizes: ["29", "30", "31", "32", "33", "34", "36"],
    colors: [
      {
        name: "Navy",
        hex: "#1A2332",
        images: [
          {
            id: "img-006-1",
            url: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800&h=1067&fit=crop",
            alt: "Navy Chinos",
            isPrimary: true,
          },
        ],
      },
    ],
    inStock: true,
    isFeatured: false,
    isNew: true,
    isSale: false,
    rating: 4.6,
    reviewCount: 134,
    material: "97% Cotton, 3% Elastane",
    careInstructions: "Machine wash cold. Tumble dry low. Iron as needed.",
    tags: ["Chinos", "Smart Casual", "Menswear"],
  },
  {
    id: "prod-007",
    slug: "cashmere-blend-turtleneck-cream",
    name: "Cashmere-Blend Turtleneck",
    description:
      "Luxuriously soft cashmere-blend turtleneck in cream. Lightweight yet warm, with a refined slim fit. The perfect foundation piece for building elegant layered looks.",
    price: 1499.0,
    images: [
      {
        id: "img-007-1",
        url: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=800&h=1067&fit=crop",
        alt: "Cashmere-Blend Turtleneck in Cream",
        isPrimary: true,
      },
    ],
    category: "Women",
    subcategory: "Tops & Blouses",
    sizes: ["XS", "S", "M", "L"],
    colors: [
      {
        name: "Cream",
        hex: "#FDFBF7",
        images: [
          {
            id: "img-007-1",
            url: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=800&h=1067&fit=crop",
            alt: "Cream Turtleneck",
            isPrimary: true,
          },
        ],
      },
    ],
    inStock: true,
    isFeatured: true,
    isNew: true,
    isSale: false,
    rating: 5.0,
    reviewCount: 28,
    material: "70% Wool, 30% Cashmere",
    careInstructions: "Dry clean only. Store folded to prevent stretching.",
    tags: ["Cashmere", "Luxury", "Layering"],
  },
  {
    id: "prod-008",
    slug: "leather-loafers-black",
    name: "Italian Leather Loafers",
    description:
      "Handcrafted Italian leather loafers in black. Features a cushioned insole, leather lining, and rubber sole for durability. Timeless design that pairs with everything from suits to denim.",
    price: 1899.0,
    images: [
      {
        id: "img-008-1",
        url: "https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=800&h=1067&fit=crop",
        alt: "Italian Leather Loafers in Black",
        isPrimary: true,
      },
    ],
    category: "Men",
    subcategory: "Footwear",
    sizes: ["40", "41", "42", "43", "44", "45"],
    colors: [
      {
        name: "Black",
        hex: "#1A1A1A",
        images: [
          {
            id: "img-008-1",
            url: "https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=800&h=1067&fit=crop",
            alt: "Black Loafers",
            isPrimary: true,
          },
        ],
      },
    ],
    inStock: true,
    isFeatured: false,
    isNew: false,
    isSale: false,
    rating: 4.8,
    reviewCount: 91,
    material: "Full-Grain Italian Leather",
    careInstructions: "Clean with leather cleaner. Apply leather conditioner regularly.",
    tags: ["Leather", "Footwear", "Italian"],
  },
  {
    id: "prod-009",
    slug: "pleated-midi-skirt-sage",
    name: "Pleated Midi Skirt",
    description:
      "Flowing pleated midi skirt in sage green. Crafted from sustainable viscose with a comfortable elastic waistband. The soft pleats create beautiful movement with every step.",
    price: 649.0,
    compareAtPrice: 899.0,
    images: [
      {
        id: "img-009-1",
        url: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=800&h=1067&fit=crop",
        alt: "Pleated Midi Skirt in Sage",
        isPrimary: true,
      },
    ],
    category: "Women",
    subcategory: "Bottoms",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      {
        name: "Sage",
        hex: "#9CA69C",
        images: [
          {
            id: "img-009-1",
            url: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=800&h=1067&fit=crop",
            alt: "Sage Skirt",
            isPrimary: true,
          },
        ],
      },
    ],
    inStock: true,
    isFeatured: false,
    isNew: true,
    isSale: true,
    salePercentage: 28,
    rating: 4.7,
    reviewCount: 43,
    material: "100% Sustainable Viscose",
    careInstructions: "Machine wash cold. Hang to dry. Steam to refresh pleats.",
    tags: ["Sustainable", "Feminine", "Pleated"],
  },
  {
    id: "prod-010",
    slug: "ribbed-polo-shirt-graphite",
    name: "Ribbed Polo Shirt",
    description:
      "Contemporary ribbed polo in graphite grey. Made from breathable pima cotton with a modern slim fit. Features a three-button placket and contrast tipping on the collar.",
    price: 549.0,
    images: [
      {
        id: "img-010-1",
        url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800&h=1067&fit=crop",
        alt: "Ribbed Polo Shirt in Graphite",
        isPrimary: true,
      },
    ],
    category: "Men",
    subcategory: "T-Shirts & Polos",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      {
        name: "Graphite",
        hex: "#4A4A4A",
        images: [
          {
            id: "img-010-1",
            url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800&h=1067&fit=crop",
            alt: "Graphite Polo",
            isPrimary: true,
          },
        ],
      },
    ],
    inStock: true,
    isFeatured: false,
    isNew: true,
    isSale: false,
    rating: 4.5,
    reviewCount: 78,
    material: "100% Pima Cotton",
    careInstructions: "Machine wash cold. Tumble dry low. Do not bleach.",
    tags: ["Polo", "Smart Casual", "Breathable"],
  },
];

// Helper functions
export function getProductBySlug(slug: string): Product | undefined {
  return MOCK_PRODUCTS.find((product) => product.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  return MOCK_PRODUCTS.filter((product) => product.category.toLowerCase() === category.toLowerCase());
}

export function getFeaturedProducts(limit?: number): Product[] {
  const featured = MOCK_PRODUCTS.filter((product) => product.isFeatured);
  return limit ? featured.slice(0, limit) : featured;
}

export function getNewArrivals(limit?: number): Product[] {
  const newProducts = MOCK_PRODUCTS.filter((product) => product.isNew);
  return limit ? newProducts.slice(0, limit) : newProducts;
}

export function getSaleProducts(limit?: number): Product[] {
  const saleProducts = MOCK_PRODUCTS.filter((product) => product.isSale);
  return limit ? saleProducts.slice(0, limit) : saleProducts;
}
