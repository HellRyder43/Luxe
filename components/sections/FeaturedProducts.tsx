import Link from "next/link";
import { Product } from "@/types";
import { ProductGrid } from "@/components/commerce/ProductGrid";
import { ArrowRight } from "lucide-react";

interface FeaturedProductsProps {
  products: Product[];
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
}

export function FeaturedProducts({
  products,
  title = "Featured Collection",
  subtitle = "Handpicked pieces for the discerning you",
  ctaText = "View All Products",
  ctaHref = "/products",
}: FeaturedProductsProps) {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <p className="text-xs font-normal tracking-[0.2em] uppercase text-premium-taupe mb-4">
            Curated for You
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-light text-premium-black mb-4 tracking-tight">
            {title}
          </h2>
          <p className="text-lg font-light text-premium-taupe max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Product Grid */}
        <ProductGrid products={products} />

        {/* CTA Button */}
        {ctaHref && (
          <div className="flex justify-center mt-16">
            <Link href={ctaHref}>
              <button className="group border-[0.5px] border-premium-black text-premium-black px-10 h-14 tracking-wide uppercase text-sm font-normal hover:bg-premium-black hover:text-white transition-all duration-300 flex items-center gap-3">
                {ctaText}
                <ArrowRight
                  strokeWidth={1.5}
                  size={18}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                />
              </button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
