# LuxeMYS

> Premium Malaysian E-Commerce Platform for Quiet Luxury Fashion

A high-end, editorial-inspired e-commerce clothing store tailored for the sophisticated Malaysian market. Built with cutting-edge web technologies and designed with an ultra-clean, airy aesthetic reminiscent of high-fashion publications like Vogue and GQ.

## Features

- **Premium Design System**: Quiet luxury aesthetic with aggressive whitespace and ultra-thin borders
- **Tailored for Malaysia**: Full MYR currency support, Malaysian payment methods (FPX, GrabPay, Touch 'n Go), and local shipping integration
- **Performance Optimized**: Built on Next.js 16 with React 19 Server Components for lightning-fast load times
- **Fully Responsive**: Mobile-first design with smooth animations and transitions
- **Advanced E-Commerce**: Shopping cart, wishlist, checkout flow, and order tracking
- **Accessible**: WCAG compliant with semantic HTML and ARIA labels

## Tech Stack

- **Framework**: Next.js ^16.0.0 (App Router)
- **React**: ^19.0.0 with Server Components
- **Styling**: Tailwind CSS ^4.0.0 (Mobile-first)
- **UI Components**: shadcn/ui (heavily customized)
- **Icons**: lucide-react (stroke-width 1.5 for thin, elegant icons)
- **Animation**: framer-motion ^12.0.0
- **State Management**: Zustand ^5.0.0
- **Type Safety**: TypeScript strict mode
- **Package Manager**: npm

## Project Structure

```
├── app/
│   ├── (storefront)/
│   │   ├── layout.tsx          # Main storefront layout
│   │   ├── page.tsx             # Homepage
│   │   ├── products/            # Product listing & detail pages
│   │   ├── cart/                # Shopping cart
│   │   └── checkout/            # Checkout flow
│   ├── api/                     # API routes & webhooks
│   ├── globals.css              # Global styles & Tailwind directives
│   └── fonts/                   # Self-hosted fonts
├── components/
│   ├── ui/                      # shadcn components
│   ├── layout/                  # Header, Footer, Navigation
│   ├── commerce/                # ProductCard, CartDrawer, etc.
│   └── sections/                # Hero, Featured sections
├── lib/
│   ├── utils.ts                 # Utility functions
│   ├── constants.ts             # App constants
│   └── store/                   # Zustand stores
├── hooks/                       # Custom React hooks
├── types/                       # TypeScript type definitions
└── public/
    └── images/                  # Static images (3:4 portrait aspect ratio)
```

## Getting Started

### Prerequisites

- Node.js 18+ or 20+ (LTS)
- npm, pnpm, or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd Luxe
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

Edit `.env.local` and add your environment variables:
```env
# App
NEXT_PUBLIC_APP_URL=http://localhost:3000
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

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript type checking
npm test             # Run tests
```

## Design Philosophy

### Quiet Luxury Aesthetic

- **Typography**: Playfair Display for headings, Inter for body text
- **Color Palette**: Neutral tones (cream, taupe, charcoal) with strategic black accents
- **Spacing**: Generous whitespace (p-24, gap-12) for breathing room
- **Borders**: Ultra-thin borders (0.5px) for subtle definition
- **Images**: Strict 3:4 portrait aspect ratio for editorial consistency

### Performance First

- **Images**: WebP format with blur placeholders, lazy loading
- **Fonts**: Self-hosted with next/font, font-display: swap
- **Bundle Size**: Target <200KB for initial JS
- **Core Web Vitals**: Optimized for LCP, CLS, FID
- **Caching**: Strategic cache headers and CDN usage

### Malaysian Market Focus

- **Currency**: MYR with RM symbol (e.g., RM 1,299.00)
- **Payment Methods**: FPX, GrabPay, Touch 'n Go, Boost, Cards
- **Shipping**: Pos Laju, J&T, DHL, Ninja Van
- **Address Formats**: Malaysian states and 5-digit postcodes
- **Phone Format**: +60 12-345 6789

## Key Features

### Navigation
- Sticky header with backdrop blur
- Mega menu with category dropdowns
- Expandable search with auto-suggest
- Slide-over cart drawer with animations

### Product Experience
- 4-column grid (desktop), 2-column (tablet), 1-column (mobile)
- Hover effects: image zoom, quick add button
- Advanced filtering and sorting
- Wishlist functionality

### Checkout Flow
1. Shopping Cart
2. Delivery Information (Malaysian address validation)
3. Payment Method (multiple Malaysian options)
4. Order Review
5. Confirmation with order tracking

### Animations
- Page transitions (0.3s - 0.8s, cubic-bezier easing)
- Staggered content reveal (0.1s delays)
- Smooth hover interactions (scale, translate, opacity)
- Scroll-triggered animations (Intersection Observer)

## Accessibility

- Semantic HTML5 elements
- ARIA labels and roles
- Keyboard navigation support
- Screen reader tested
- Color contrast WCAG AA compliant
- Focus indicators on all interactive elements

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)
- Mobile Safari (iOS 14+)
- Chrome Android (last 2 versions)

## SEO

- Dynamic meta tags per page
- Structured data (Product, Organization, BreadcrumbList)
- Dynamic sitemap generation
- Canonical URLs
- OG images for social sharing
- robots.txt configuration

## Git Workflow

### Commit Convention

We use [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: add new product filtering system
fix: resolve cart quantity update bug
style: update button hover animations
perf: optimize image loading
refactor: simplify checkout validation
chore: update dependencies
docs: update README with deployment steps
```

### Branch Strategy

- `main` - Production-ready code
- `develop` - Integration branch
- `feature/*` - New features
- `fix/*` - Bug fixes
- `hotfix/*` - Urgent production fixes

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Configure environment variables
4. Deploy

### Manual Deployment

```bash
npm run build
npm run start
```

## Testing

### E2E Critical Paths

- Browse → Add to Cart → Checkout
- Search → Filter → Product Detail
- Account Creation → Order History
- Apply Promo Code → Complete Purchase

### Component Testing

- All interactive components have tests
- Mock API responses for consistency
- Responsive breakpoint testing
- Accessibility testing

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

Copyright © 2025 LuxeMYS. All rights reserved.

## Support

- **Documentation**: See [CLAUDE.md](./CLAUDE.md) and [tailwind.config.md](./tailwind.config.md)
- **Issues**: [GitHub Issues](https://github.com/yourusername/luxe/issues)
- **Email**: support@luxemys.com
- **WhatsApp Business**: +60 12-345 6789

## Acknowledgments

- Design inspiration from high-fashion editorial publications
- Built with the latest web technologies
- Optimized for the Malaysian market

---

Built with ❤️ in Malaysia
