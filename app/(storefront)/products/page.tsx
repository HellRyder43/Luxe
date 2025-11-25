import { Metadata } from "next";
import { MOCK_PRODUCTS } from "@/lib/constants";
import { ProductGrid } from "@/components/commerce/ProductGrid";
import { SlidersHorizontal, ArrowUpDown } from "lucide-react";

export const metadata: Metadata = {
  title: "All Products | LuxeMYS",
  description:
    "Discover our complete collection of premium clothing for men and women. Quiet luxury fashion designed for the modern Malaysian wardrobe.",
  openGraph: {
    title: "All Products | LuxeMYS",
    description:
      "Discover our complete collection of premium clothing for men and women. Quiet luxury fashion designed for the modern Malaysian wardrobe.",
    images: [
      {
        url: "/images/og-products.jpg",
        width: 1200,
        height: 630,
        alt: "LuxeMYS Products Collection",
      },
    ],
  },
};

export default function ProductsPage() {
  const productCount = MOCK_PRODUCTS.length;

  return (
    <main className="min-h-screen bg-white">
      {/* Page Header */}
      <section className="border-b border-neutral-200/50">
        <div className="mx-auto max-w-[1600px] px-6 py-12 md:px-12 md:py-16">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            {/* Title and Count */}
            <div>
              <h1 className="font-serif text-4xl font-light tracking-tight text-premium-black md:text-5xl">
                All Products
              </h1>
              <p className="mt-3 text-sm font-light text-premium-taupe">
                {productCount} {productCount === 1 ? "product" : "products"}
              </p>
            </div>

            {/* Filter & Sort Controls (Placeholder) */}
            <div className="flex gap-3">
              <button
                className="flex h-11 items-center gap-2 rounded-none border border-neutral-200 bg-white px-6 text-xs font-normal uppercase tracking-wider text-premium-black transition-colors hover:bg-neutral-50"
                aria-label="Open filters"
              >
                <SlidersHorizontal className="h-4 w-4" strokeWidth={1.5} />
                Filter
              </button>
              <button
                className="flex h-11 items-center gap-2 rounded-none border border-neutral-200 bg-white px-6 text-xs font-normal uppercase tracking-wider text-premium-black transition-colors hover:bg-neutral-50"
                aria-label="Sort products"
              >
                <ArrowUpDown className="h-4 w-4" strokeWidth={1.5} />
                Sort
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="mx-auto max-w-[1600px] px-6 py-16 md:px-12 md:py-24">
        <ProductGrid products={MOCK_PRODUCTS} />
      </section>

      {/* Empty State Placeholder (if needed) */}
      {productCount === 0 && (
        <section className="flex min-h-[60vh] flex-col items-center justify-center px-6 py-24">
          <h2 className="font-serif text-3xl font-light text-premium-black">
            No products found
          </h2>
          <p className="mt-4 text-center text-base font-light leading-relaxed text-premium-taupe">
            We couldn&apos;t find any products matching your criteria.
            <br />
            Try adjusting your filters or browse all products.
          </p>
        </section>
      )}
    </main>
  );
}
