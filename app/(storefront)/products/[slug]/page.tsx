import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getProductBySlug, MOCK_PRODUCTS } from "@/lib/constants";
import { formatPrice } from "@/lib/utils";
import { AddToCartButton } from "@/components/commerce/AddToCartButton";
import { ChevronRight, Star, Truck, RefreshCw, Shield } from "lucide-react";

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static params for all products
export async function generateStaticParams() {
  return MOCK_PRODUCTS.map((product) => ({
    slug: product.slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Product Not Found | LuxeMYS",
    };
  }

  return {
    title: `${product.name} | LuxeMYS`,
    description: product.description,
    openGraph: {
      title: `${product.name} | LuxeMYS`,
      description: product.description,
      images: [
        {
          url: product.images[0]?.url || "/images/og-default.jpg",
          width: 800,
          height: 1067,
          alt: product.images[0]?.alt || product.name,
        },
      ],
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const primaryImage = product.images.find((img) => img.isPrimary) || product.images[0];
  const hasDiscount = product.compareAtPrice && product.compareAtPrice > product.price;

  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumbs */}
      <nav className="border-b border-neutral-200/50" aria-label="Breadcrumb">
        <div className="mx-auto max-w-[1600px] px-6 py-4 md:px-12">
          <ol className="flex items-center gap-2 text-sm font-normal uppercase tracking-wider text-premium-taupe">
            <li>
              <Link href="/" className="hover:text-premium-black transition-colors">
                Home
              </Link>
            </li>
            <ChevronRight className="h-3 w-3" strokeWidth={1.5} />
            <li>
              <Link
                href="/products"
                className="hover:text-premium-black transition-colors"
              >
                Products
              </Link>
            </li>
            <ChevronRight className="h-3 w-3" strokeWidth={1.5} />
            <li>
              <Link
                href={`/products?category=${product.category.toLowerCase()}`}
                className="hover:text-premium-black transition-colors"
              >
                {product.category}
              </Link>
            </li>
            <ChevronRight className="h-3 w-3" strokeWidth={1.5} />
            <li className="text-premium-black" aria-current="page">
              {product.name}
            </li>
          </ol>
        </div>
      </nav>

      {/* Product Detail */}
      <section className="mx-auto max-w-[1600px] px-6 py-12 md:px-12 md:py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[60%_40%] lg:gap-16">
          {/* Left: Image Gallery */}
          <div className="space-y-4">
            {/* Primary Image */}
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-neutral-100">
              <Image
                src={primaryImage.url}
                alt={primaryImage.alt}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
            </div>

            {/* Thumbnail Images */}
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((image) => (
                  <button
                    key={image.id}
                    className="relative aspect-[3/4] w-full overflow-hidden border border-neutral-200 bg-neutral-100 transition-opacity hover:opacity-75"
                  >
                    <Image
                      src={image.url}
                      alt={image.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 25vw, 15vw"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Product Info */}
          <div className="lg:sticky lg:top-24 lg:h-fit">
            {/* Category */}
            <p className="text-xs font-normal uppercase tracking-wider text-premium-taupe">
              {product.subcategory || product.category}
            </p>

            {/* Product Name */}
            <h1 className="mt-2 font-serif text-4xl font-light tracking-tight text-premium-black md:text-5xl">
              {product.name}
            </h1>

            {/* Rating */}
            {product.rating && product.reviewCount && (
              <div className="mt-4 flex items-center gap-2">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(product.rating!)
                          ? "fill-premium-gold text-premium-gold"
                          : "text-neutral-300"
                      }`}
                      strokeWidth={1.5}
                    />
                  ))}
                </div>
                <span className="text-sm font-light text-premium-taupe">
                  {product.rating} ({product.reviewCount} reviews)
                </span>
              </div>
            )}

            {/* Price */}
            <div className="mt-6 flex items-baseline gap-3">
              <span className="font-sans text-3xl font-light tracking-tight text-premium-black">
                {formatPrice(product.price)}
              </span>
              {hasDiscount && (
                <>
                  <span className="text-xl font-light text-premium-taupe line-through">
                    {formatPrice(product.compareAtPrice!)}
                  </span>
                  {product.salePercentage && (
                    <span className="rounded-sm bg-premium-gold/10 px-2 py-1 text-xs font-medium uppercase tracking-wider text-premium-gold">
                      Save {product.salePercentage}%
                    </span>
                  )}
                </>
              )}
            </div>

            {/* Description */}
            <p className="mt-6 text-base font-light leading-relaxed text-premium-taupe">
              {product.description}
            </p>

            {/* Color Swatches */}
            {product.colors && product.colors.length > 0 && (
              <div className="mt-8">
                <label className="text-xs font-normal uppercase tracking-wider text-premium-black">
                  Color: {product.colors[0].name}
                </label>
                <div className="mt-3 flex gap-2">
                  {product.colors.map((color) => (
                    <button
                      key={color.name}
                      className="h-10 w-10 rounded-full border-2 border-neutral-200 transition-all hover:border-premium-black"
                      style={{ backgroundColor: color.hex }}
                      aria-label={`Select ${color.name} color`}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Size Selector */}
            {product.sizes && product.sizes.length > 0 && (
              <div className="mt-8">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-normal uppercase tracking-wider text-premium-black">
                    Size
                  </label>
                  <Link
                    href="/size-guide"
                    className="text-xs font-normal uppercase tracking-wider text-premium-taupe underline transition-colors hover:text-premium-black"
                  >
                    Size Guide
                  </Link>
                </div>
                <div className="mt-3 grid grid-cols-4 gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      className="flex h-12 items-center justify-center border border-neutral-200 text-sm font-normal uppercase tracking-wide text-premium-black transition-all hover:border-premium-black hover:bg-neutral-50"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Add to Cart */}
            <div className="mt-8">
              <AddToCartButton product={product} />
            </div>

            {/* Stock Status */}
            <div className="mt-4">
              {product.inStock ? (
                <p className="text-sm font-light text-green-700">
                  ✓ In Stock - Ships within 2-3 business days
                </p>
              ) : (
                <p className="text-sm font-light text-red-700">
                  Out of Stock - Notify me when available
                </p>
              )}
            </div>

            {/* Product Features */}
            <div className="mt-8 space-y-4 border-t border-neutral-200/50 pt-8">
              <div className="flex items-start gap-4">
                <Truck className="h-5 w-5 text-premium-taupe" strokeWidth={1.5} />
                <div>
                  <h3 className="text-sm font-normal uppercase tracking-wider text-premium-black">
                    Free Shipping
                  </h3>
                  <p className="mt-1 text-sm font-light text-premium-taupe">
                    On orders over RM 500 within Malaysia
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <RefreshCw className="h-5 w-5 text-premium-taupe" strokeWidth={1.5} />
                <div>
                  <h3 className="text-sm font-normal uppercase tracking-wider text-premium-black">
                    Easy Returns
                  </h3>
                  <p className="mt-1 text-sm font-light text-premium-taupe">
                    30-day return policy for unworn items
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Shield className="h-5 w-5 text-premium-taupe" strokeWidth={1.5} />
                <div>
                  <h3 className="text-sm font-normal uppercase tracking-wider text-premium-black">
                    Secure Payment
                  </h3>
                  <p className="mt-1 text-sm font-light text-premium-taupe">
                    Multiple payment options with encryption
                  </p>
                </div>
              </div>
            </div>

            {/* Material & Care */}
            <div className="mt-8 space-y-6 border-t border-neutral-200/50 pt-8">
              <div>
                <h3 className="text-xs font-normal uppercase tracking-wider text-premium-black">
                  Material
                </h3>
                <p className="mt-2 text-sm font-light text-premium-taupe">
                  {product.material}
                </p>
              </div>
              <div>
                <h3 className="text-xs font-normal uppercase tracking-wider text-premium-black">
                  Care Instructions
                </h3>
                <p className="mt-2 text-sm font-light text-premium-taupe">
                  {product.careInstructions}
                </p>
              </div>
              {product.tags && product.tags.length > 0 && (
                <div>
                  <h3 className="text-xs font-normal uppercase tracking-wider text-premium-black">
                    Tags
                  </h3>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {product.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-sm border border-neutral-200 px-3 py-1 text-xs font-light text-premium-taupe"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
