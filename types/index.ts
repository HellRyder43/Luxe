// Product Types
export interface ProductImage {
  id: string;
  url: string;
  alt: string;
  isPrimary: boolean;
}

export interface ProductColor {
  name: string;
  hex: string;
  images: ProductImage[];
}

export interface ProductVariant {
  size?: string;
  color?: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  price: number;
  compareAtPrice?: number;
  images: ProductImage[];
  category: string;
  subcategory: string;
  sizes: string[];
  colors: ProductColor[];
  inStock: boolean;
  isFeatured: boolean;
  isNew: boolean;
  isSale: boolean;
  salePercentage?: number;
  rating?: number;
  reviewCount?: number;
  material: string;
  careInstructions: string;
  tags: string[];
}

// Cart Types
export interface CartItem {
  id: string;
  productId: string;
  name: string;
  price: number;
  quantity: number;
  size?: string;
  color?: string;
  image: string;
}

export interface CartStore {
  items: CartItem[];
  isOpen: boolean;
  isLoading: boolean;
  addItem: (product: Product, variant?: ProductVariant) => void;
  removeItem: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  getTotalItems: () => number;
  toggleCart: () => void;
}

// Navigation Types
export interface NavSubItem {
  label: string;
  href: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavSubItem[];
}

export interface NavSection {
  title: string;
  items: NavSubItem[];
}

export interface MegaMenuData {
  sections: NavSection[];
}

// Address Types
export interface MalaysianAddress {
  fullName: string;
  phone: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  postcode: string;
  country: string;
}

// Order Types
export interface OrderItem {
  productId: string;
  name: string;
  price: number;
  quantity: number;
  size?: string;
  color?: string;
  image: string;
}

export interface Order {
  id: string;
  orderNumber: string;
  date: Date;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  items: OrderItem[];
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
  shippingAddress: MalaysianAddress;
  paymentMethod: string;
}

// Filter Types
export interface FilterOption {
  label: string;
  value: string;
  count?: number;
}

export interface ProductFilters {
  categories: FilterOption[];
  sizes: FilterOption[];
  colors: FilterOption[];
  priceRange: {
    min: number;
    max: number;
  };
  brands: FilterOption[];
  inStockOnly: boolean;
}

// Sort Options
export type SortOption =
  | 'featured'
  | 'price-low-high'
  | 'price-high-low'
  | 'newest'
  | 'best-selling'
  | 'customer-rating';

// User Types
export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone?: string;
  addresses: MalaysianAddress[];
  orders: Order[];
  wishlist: string[]; // Product IDs
  loyaltyPoints?: number;
}

// Newsletter
export interface NewsletterSubscription {
  email: string;
  subscribedAt: Date;
  preferences: {
    newArrivals: boolean;
    sales: boolean;
    exclusiveOffers: boolean;
  };
}

// Payment Methods
export type PaymentMethod =
  | 'fpx'
  | 'visa'
  | 'mastercard'
  | 'amex'
  | 'grabpay'
  | 'tng'
  | 'boost'
  | 'atome'
  | 'spaylater';

export interface PaymentMethodOption {
  id: PaymentMethod;
  name: string;
  icon: string;
  description?: string;
}
