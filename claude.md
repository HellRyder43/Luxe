# Project Context: LuxeMYS (Premium Malaysian E-Commerce)

## 1. Project Overview

We are building a high-end, "Quiet Luxury" e-commerce clothing store tailored for the Malaysian market.

- **Aesthetic Goal:** The site must feel expensive, airy, and ultra-clean. Think high-fashion editorial (Vogue/GQ).
- **Functional Reference:** Functionality is similar to "Blocksy Kiddy", but the aesthetic must be mature.
- **Target Audience:** Sophisticated Malaysian fashion consumers.

## 2. Tech Stack

- **Framework:** Next.js ^16.0.0 (App Router) – Use the latest stable minor version.
- **React:** ^19.0.0 with Server Components – Leverage concurrency features.
- **Styling:** Tailwind CSS ^4.0.0 (Mobile-first) – Note: As of November 2025, v4 is the latest stable; update if v5 releases.
- **UI Components:** shadcn/ui (heavily customized) – Install via CLI (^0.9.0).
- **Icons:** lucide-react (^0.5.0) (Use extremely thin stroke weights, stroke-width={1.5}).
- **Animation:** framer-motion ^12.0.0 (Crucial for premium feel).
- **State Management:** Zustand ^5.0.0 (Cart) or React Context.
- **Package Manager:** pnpm (recommended) or npm.

## 3. Design & Styling Architecture

**CRITICAL:** For all styling implementation, you must strictly follow the configuration defined in **`tailwind.config.md`**.

- **Reference File:** Read `tailwind.config.md` immediately.
- **Colors:** Do not hallucinate hex codes. Use the custom classes defined in that file (e.g., `bg-premium-cream`, `text-premium-taupe`).
- **Fonts:** Use `font-serif` (Playfair) for headings and `font-sans` (Inter) for body text as defined in the config.
- **Whitespace:** Aggressive use of whitespace (`p-24`, `gap-12`).
- **Borders:** Ultra-thin borders (`border-[0.5px] border-neutral-200`).
- **Product Images:** Strictly `3:4` portrait aspect ratio.

## 4. Localization (Malaysia Specifics)

- **Currency:** Display prices in **MYR** with `RM` symbol (e.g., `RM 1,299.00`).
- **Forms:** Address fields must accommodate Malaysian states (Selangor, KL, Penang, Johor, Sabah, Sarawak, etc.).
- **Phone Format:** Support Malaysian format (+60 12-345 6789)
- **Postcode:** 5-digit Malaysian postcodes

## 5. Component Implementation Instructions

- **Navigation:** Sticky, `backdrop-blur-md`, slide-over cart drawer.
- **Product Card:** Minimalist, hover effects for "Quick Add", zoom on image hover.
- **Hero:** Full viewport height, staggered text animation using `animate-fade-in-up`.

## 6. Version Control (Git) Strategy

- **Commit Frequency:** Commit after every major step or completed component.
- **Message Format:** Conventional Commits (`feat:`, `fix:`, `style:`, `chore:`, `perf:`, `refactor:`).
- **Branch Strategy:** `main` → `develop` → feature branches

## 7. Engineering Best Practices (Strict Mode)

1. **Type Safety:** No `any` types. Define interfaces for all props.
2. **Accessibility:** All images must have `alt` tags. Semantic HTML tags only. ARIA labels where needed.
3. **Performance:** Use `next/image` for ALL images with proper sizing.
4. **Code Structure:** Keep components small. 150 lines max per file.
5. **Server Components:** Use by default, client components only when needed.
6. **Data Fetching:** Use Server Actions and React Server Components.

## 8. Project Structure (Required)

```
├── app/
│   ├── (storefront)/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── products/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/
│   │   │       └── page.tsx
│   │   ├── cart/
│   │   │   └── page.tsx
│   │   └── checkout/
│   │       ├── page.tsx
│   │       └── success/
│   │           └── page.tsx
│   ├── api/
│   │   └── webhooks/
│   ├── globals.css
│   └── fonts/
├── components/
│   ├── ui/           # shadcn components
│   ├── layout/       # Header, Footer, Navigation
│   ├── commerce/     # ProductCard, CartDrawer, etc.
│   └── sections/     # Hero, Featured, etc.
├── lib/
│   ├── utils.ts
│   ├── constants.ts
│   └── store/        # Zustand stores
├── hooks/
│   └── use-cart.ts
├── types/
│   └── index.ts
└── public/
    └── images/
```

## 9. Core Component Requirements

### Navigation Component

- **Desktop:** Horizontal nav with subtle hover states
- **Mobile:** Full-screen overlay with staggered animations
- **Cart Icon:** Badge with item count, subtle pulse on add
- **Search:** Expandable search bar with auto-suggest
- **User Account:** Minimal dropdown with order history link

### Product Grid

- **Layout:** 4 columns desktop, 2 tablet, 1 mobile
- **Spacing:** `gap-8 md:gap-12`
- **Loading:** Skeleton screens with shimmer effect
- **Pagination:** Infinite scroll or numbered pagination

### Footer

- **Structure:** 4-column layout with newsletter signup
- **Payment Icons:** Malaysian payment methods (GrabPay, Touch 'n Go, FPX)
- **Social Links:** Minimal icons, hover animations
- **Legal Links:** Terms, Privacy, Return Policy (Malaysian law compliant)

## 10. Navigation Menu Structure

### Primary Navigation (Header)

**Desktop Layout:** Horizontal menu with hover dropdowns
**Mobile Layout:** Full-screen overlay with accordion sub-menus

#### Main Menu Items:

1. **NEW ARRIVALS**

   - Just Landed
   - Coming Soon
   - Pre-Orders
   - Editor's Picks

2. **WOMEN**

   - Clothing
     - Dresses & Jumpsuits
     - Tops & Blouses
     - Bottoms
     - Outerwear
     - Modest Wear
   - Accessories
     - Bags & Purses
     - Jewelry
     - Scarves & Shawls
     - Belts
   - Footwear
   - Premium Collections

3. **MEN**

   - Clothing
     - Shirts
     - T-Shirts & Polos
     - Pants & Trousers
     - Outerwear
     - Traditional Wear
   - Accessories
     - Bags & Wallets
     - Watches
     - Belts
     - Ties & Pocket Squares
   - Footwear
   - Grooming

4. **COLLECTIONS**

   - Raya Edition
   - Minimalist Essentials
   - Office & Work
   - Weekend Casual
   - Special Occasions
   - Sustainable Line

5. **SALE**
   - Up to 30% Off
   - Up to 50% Off
   - Final Clearance
   - Bundle Deals

### Utility Navigation (Top Bar)

- Track Order
- Store Locator
- Language (EN | BM)
- Currency (MYR)
- Help & FAQs

### User Menu (Header Right)

- Search (Expandable with suggestions)
- Account (Login/Register or My Account dropdown)
  - Profile
  - Orders & Returns
  - Wishlist
  - Address Book
  - Loyalty Points
  - Sign Out
- Wishlist (Icon with count)
- Cart (Slide-out drawer with count badge)

### Footer Navigation

#### Column 1: Shop

- New Arrivals
- Best Sellers
- Sale Items
- Gift Cards
- Size Guide
- Lookbook

#### Column 2: Customer Care

- Contact Us
- Shipping Information
- Returns & Exchanges
- Payment Methods
- FAQ
- Care Instructions

#### Column 3: About

- Our Story
- Sustainability
- Press & Media
- Careers
- Store Locations
- Wholesale Inquiries

#### Column 4: Connect

- Newsletter Signup
- Loyalty Program
- Student Discount
- Refer a Friend
- Social Links:
  - Instagram
  - Facebook
  - TikTok
  - WhatsApp Business

#### Footer Bottom

- Terms & Conditions
- Privacy Policy
- Cookie Policy
- Accessibility
- © 2025 LuxeMYS. All rights reserved.
- Payment Icons (Visa, Mastercard, FPX, GrabPay, Touch 'n Go, etc.)

### Mobile-Specific Menu Features

- **Sticky bottom navigation bar** with:
  - Home
  - Shop
  - Search
  - Account
  - Cart
- **Hamburger menu** for main navigation
- **Quick filters** in category pages
- **One-touch WhatsApp** customer service

### Category Page Filters Sidebar

- Price Range (Slider)
- Size
- Color
- Material
- Brand
- Availability
- Customer Rating
- Discount Percentage
- Sort By:
  - Featured
  - Price: Low to High
  - Price: High to Low
  - Newest
  - Best Selling
  - Customer Rating

### My Account Dashboard Menu

- Dashboard Overview
- Order History
- Track Orders
- Returns & Exchanges
- Wishlist
- Address Management
- Payment Methods
- Profile Settings
- Loyalty & Rewards
- Newsletter Preferences
- Delete Account

### Checkout Progress Menu

1. Shopping Cart
2. Delivery Information
3. Payment Method
4. Order Review
5. Confirmation

### Quick Links (Persistent)

- WhatsApp Support
- Live Chat Widget
- Recently Viewed
- Back to Top

## 11. Performance Optimization

- **Images:** WebP format with fallback, lazy loading, blur placeholders
- **Fonts:** Self-hosted with next/font, font-display: swap
- **Bundle:** Keep under 200KB for initial JS
- **CLS:** Prevent layout shift with aspect-ratio boxes
- **Metadata:** Dynamic OG images for products
- **Caching:** Implement proper cache headers
- **CDN:** Use Vercel Edge Network or Cloudflare

## 12. SEO Requirements

- **Meta:** Unique title/description per page
- **Schema:** Product, Organization, BreadcrumbList, Review
- **Sitemap:** Dynamic generation for products
- **Robots.txt:** Exclude /api, /checkout, /account
- **Canonical URLs:** Proper canonical tags
- **Hreflang:** Support for Malay/English switching

## 13. State Management (Zustand)

### Cart Store Structure

```typescript
interface CartItem {
  id: string;
  productId: string;
  name: string;
  price: number;
  quantity: number;
  size?: string;
  color?: string;
  image: string;
}

interface CartStore {
  items: CartItem[];
  isOpen: boolean;
  isLoading: boolean;
  addItem: (product: Product, variant?: ProductVariant) => Promise<void>;
  removeItem: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  getTotalItems: () => number;
  toggleCart: () => void;
}
```

### Persistence

- Use `zustand/middleware` for localStorage persistence
- Sync cart across tabs with broadcast channel
- Handle cart migration on user login

## 14. Animation Specifications

### Page Transitions

- **Duration:** 0.3s - 0.8s max
- **Easing:** `cubic-bezier(0.4, 0, 0.2, 1)`
- **Stagger Children:** 0.1s delay between elements

### Interaction Feedback

- **Buttons:** Scale 0.98 on press
- **Cards:** Subtle lift on hover (translateY(-2px))
- **Images:** Smooth zoom 1.05 on hover
- **Loading States:** Pulse or shimmer effects

### Scroll Animations

- **Trigger:** 80% viewport visibility
- **Direction:** Fade up for content, fade in for images
- **Performance:** Use Intersection Observer API

## 15. Error Handling

### User-Facing Errors

- **Empty States:** Elegant illustrations with CTAs
- **404 Page:** Maintain brand aesthetic, suggest products
- **Network Errors:** Toast notifications with retry option
- **Form Validation:** Inline validation with helpful messages
- **Payment Failures:** Clear messaging with support contact

### Developer Errors

- **Error Boundaries:** Wrap major sections
- **Logging:** Use Sentry or similar for production
- **Fallback UI:** Graceful degradation

## 16. Testing Strategy

### E2E Critical Paths

1. Browse → Add to Cart → Checkout
2. Search → Filter → Product Detail
3. Account Creation → Order History
4. Apply Promo Code → Complete Purchase

### Component Testing

- All interactive components must have tests
- Mock API responses for consistency
- Test responsive breakpoints
- Test accessibility with screen readers

## 17. Pre-Deployment Checklist

- [ ] All console.logs removed
- [ ] Environment variables configured (.env.local, .env.production)
- [ ] Images optimized (<100KB for hero, <50KB for products)
- [ ] Lighthouse score >90 across all metrics
- [ ] Cross-browser testing (Safari, Chrome, Firefox, Edge)
- [ ] Mobile testing on actual devices (iOS & Android)
- [ ] Payment gateway integration tested in sandbox
- [ ] Analytics & tracking implemented (GA4, Facebook Pixel)
- [ ] Security headers configured
- [ ] Rate limiting implemented
- [ ] CORS properly configured
- [ ] SSL certificate valid

## 18. Typography Scale

### Headings (Playfair Display)

- **H1:** `text-5xl md:text-7xl font-light tracking-tight`
- **H2:** `text-3xl md:text-5xl font-light`
- **H3:** `text-2xl md:text-3xl font-normal`
- **H4:** `text-xl md:text-2xl font-normal`

### Body (Inter)

- **Large:** `text-lg font-light leading-relaxed`
- **Base:** `text-base font-light leading-relaxed`
- **Small:** `text-sm font-normal`
- **Caption:** `text-xs font-normal tracking-wide uppercase`

### Special

- **Price:** `font-sans text-2xl font-light tracking-tight`
- **Badge:** `text-[10px] font-medium tracking-wider uppercase`

## 19. Payment Integration

### Supported Methods

- **Online Banking:** FPX (all major Malaysian banks)
- **E-Wallets:** GrabPay, Touch 'n Go, Boost
- **Cards:** Visa, Mastercard, AMEX
- **BNPL:** Atome, SPayLater, Grab PayLater

### Checkout Flow

- Guest checkout enabled
- Auto-fill postcode for states
- Real-time shipping calculation (Pos Laju, J&T, DHL, Ninja Van)
- Order tracking integration
- SMS/WhatsApp order notifications

### Payment Gateway

- Primary: Stripe (with Malaysian payment methods)
- Alternative: iPay88 or PayDuit for local methods
- Test credentials in development mode

## 20. API Structure

### Endpoints

```typescript
// Products
GET / api / products;
GET / api / products / [slug];
GET / api / products / categories;

// Cart (Server Actions preferred)
POST / api / cart / add;
DELETE / api / cart / remove;
PATCH / api / cart / update;

// Checkout
POST / api / checkout / session;
POST / api / checkout / validate - promo;
GET / api / checkout / shipping - rates;

// Webhooks
POST / api / webhooks / stripe;
POST / api / webhooks / inventory;
```

## 21. Environment Variables

### Required Variables

```env
# App
NEXT_PUBLIC_APP_URL=
NEXT_PUBLIC_APP_NAME="LuxeMYS"

# Database
DATABASE_URL=

# Payment
STRIPE_SECRET_KEY=
STRIPE_PUBLISHABLE_KEY=
STRIPE_WEBHOOK_SECRET=

# Email
RESEND_API_KEY=

# Analytics
NEXT_PUBLIC_GA_ID=
NEXT_PUBLIC_FB_PIXEL_ID=

# Storage
UPLOADTHING_SECRET=
UPLOADTHING_APP_ID=
```

---

## 22. Version Notes

### Required Variables

```
"dependencies": {
  "next": "^16.0.0",
  "react": "^19.0.0",
  "tailwindcss": "^4.0.0",
  "framer-motion": "^12.0.0",
  "zustand": "^5.0.0"
}
```

---

## Quick Start Commands

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Run production build locally
pnpm start

# Run type checking
pnpm type-check

# Run linting
pnpm lint

# Run tests
pnpm test
```

---

**Instructions for AI:**

1. Read `claude.md` (this file) completely.
2. Read `tailwind.config.md` to understand the styling system.
3. Always reference these files before implementing any component.
4. Follow the specifications exactly - no improvisation on core requirements.
5. Await user prompt to begin implementation.
