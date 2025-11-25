import { Product } from "@/types";
import { ProductCard } from "./ProductCard";

interface ProductGridProps {
  products: Product[];
  loading?: boolean;
}

export function ProductGrid({ products, loading = false }: ProductGridProps) {
  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
        {Array.from({ length: 8 }).map((_, i) => (
          <ProductCardSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="text-center py-24">
        <p className="text-lg font-light text-premium-taupe">
          No products found
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
      {products.map((product, index) => (
        <ProductCard key={product.id} product={product} index={index} />
      ))}
    </div>
  );
}

function ProductCardSkeleton() {
  return (
    <div className="animate-pulse">
      {/* Image Skeleton */}
      <div className="aspect-[3/4] bg-neutral-200 mb-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
      </div>

      {/* Content Skeleton */}
      <div className="space-y-3">
        {/* Category */}
        <div className="h-3 bg-neutral-200 rounded w-20" />

        {/* Title */}
        <div className="space-y-2">
          <div className="h-4 bg-neutral-200 rounded w-full" />
          <div className="h-4 bg-neutral-200 rounded w-3/4" />
        </div>

        {/* Price */}
        <div className="h-5 bg-neutral-200 rounded w-24" />

        {/* Colors */}
        <div className="flex gap-1.5 pt-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="w-5 h-5 rounded-full bg-neutral-200" />
          ))}
        </div>
      </div>
    </div>
  );
}
