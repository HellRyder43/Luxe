export default function ProductCardSkeleton() {
  return (
    <div className="group animate-pulse">
      {/* Image skeleton with 3:4 aspect ratio */}
      <div className="relative aspect-[3/4] overflow-hidden bg-neutral-100">
        <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/60 to-transparent" />
      </div>

      {/* Content skeleton */}
      <div className="mt-4 space-y-3">
        {/* Category */}
        <div className="h-3 w-20 rounded bg-neutral-200" />

        {/* Product name */}
        <div className="h-4 w-3/4 rounded bg-neutral-200" />

        {/* Price */}
        <div className="h-5 w-24 rounded bg-neutral-200" />

        {/* Color swatches */}
        <div className="flex gap-2">
          <div className="h-6 w-6 rounded-full bg-neutral-200" />
          <div className="h-6 w-6 rounded-full bg-neutral-200" />
          <div className="h-6 w-6 rounded-full bg-neutral-200" />
        </div>
      </div>
    </div>
  );
}
