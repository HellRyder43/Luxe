import { Hero } from "@/components/sections/Hero";
import { FeaturedProducts } from "@/components/sections/FeaturedProducts";
import { Editorial } from "@/components/sections/Editorial";
import { getFeaturedProducts, getNewArrivals } from "@/lib/constants";

export default function HomePage() {
  const featuredProducts = getFeaturedProducts(4);
  const newArrivals = getNewArrivals(4);

  return (
    <main>
      {/* Hero Section */}
      <Hero />

      {/* Featured Products */}
      <FeaturedProducts
        products={featuredProducts}
        title="Featured Collection"
        subtitle="Handpicked pieces for the discerning you"
      />

      {/* Editorial Section */}
      <Editorial />

      {/* New Arrivals */}
      <FeaturedProducts
        products={newArrivals}
        title="New Arrivals"
        subtitle="Fresh pieces for the new season"
        ctaText="Explore New Arrivals"
        ctaHref="/products?filter=new"
      />
    </main>
  );
}
