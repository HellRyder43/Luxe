import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Collections | LuxeMYS",
  description:
    "Explore our curated collections of premium Malaysian fashion. From Raya editions to minimalist essentials, discover quiet luxury for every occasion.",
  openGraph: {
    title: "Collections | LuxeMYS",
    description:
      "Explore our curated collections of premium Malaysian fashion. From Raya editions to minimalist essentials, discover quiet luxury for every occasion.",
    images: [
      {
        url: "/images/og-collections.jpg",
        width: 1200,
        height: 630,
        alt: "LuxeMYS Collections",
      },
    ],
  },
};

interface Collection {
  id: string;
  slug: string;
  title: string;
  description: string;
  image: string;
  itemCount: number;
  featured?: boolean;
}

const COLLECTIONS: Collection[] = [
  {
    id: "1",
    slug: "raya",
    title: "Raya Edition",
    description:
      "Celebrate in style with our exclusive Raya collection. Elegant traditional wear reimagined for the modern Malaysian.",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&h=1067&fit=crop",
    itemCount: 24,
    featured: true,
  },
  {
    id: "2",
    slug: "minimalist",
    title: "Minimalist Essentials",
    description:
      "Timeless pieces that form the foundation of your wardrobe. Clean lines, premium materials, enduring style.",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&h=1067&fit=crop",
    itemCount: 32,
    featured: true,
  },
  {
    id: "3",
    slug: "office",
    title: "Office & Work",
    description:
      "Professional sophistication for the modern workplace. Tailored pieces that command attention in the boardroom.",
    image: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=800&h=1067&fit=crop",
    itemCount: 28,
  },
  {
    id: "4",
    slug: "weekend",
    title: "Weekend Casual",
    description:
      "Effortless luxury for your downtime. Relaxed silhouettes that never compromise on elegance.",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&h=1067&fit=crop",
    itemCount: 36,
  },
  {
    id: "5",
    slug: "special",
    title: "Special Occasions",
    description:
      "Make every moment memorable. Exquisite designs for life's most important celebrations.",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&h=1067&fit=crop",
    itemCount: 18,
    featured: true,
  },
  {
    id: "6",
    slug: "sustainable",
    title: "Sustainable Line",
    description:
      "Fashion with conscience. Eco-friendly materials and ethical production without compromising luxury.",
    image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=800&h=1067&fit=crop",
    itemCount: 22,
  },
];

export default function CollectionsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative border-b border-neutral-200/50">
        <div className="mx-auto max-w-[1600px] px-6 py-20 md:px-12 md:py-32">
          <div className="max-w-3xl">
            <h1 className="font-serif text-5xl font-light tracking-tight text-premium-black md:text-7xl">
              Our Collections
            </h1>
            <p className="mt-6 text-lg font-light leading-relaxed text-premium-taupe md:text-xl">
              Thoughtfully curated collections for every facet of your life.
              Each piece selected for its timeless design, exceptional quality,
              and enduring appeal.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="mx-auto max-w-[1600px] px-6 py-16 md:px-12 md:py-24">
        <div className="mb-12">
          <h2 className="font-serif text-3xl font-light tracking-tight text-premium-black md:text-4xl">
            Featured Collections
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          {COLLECTIONS.filter((collection) => collection.featured).map(
            (collection, index) => (
              <Link
                key={collection.id}
                href={`/collections/${collection.slug}`}
                className="group"
              >
                <article className="flex flex-col">
                  {/* Image */}
                  <div className="relative aspect-[3/4] overflow-hidden bg-neutral-100">
                    <Image
                      src={collection.image}
                      alt={collection.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 flex items-end p-6">
                        <div className="flex items-center gap-2 text-white">
                          <span className="text-sm font-normal uppercase tracking-wider">
                            Explore Collection
                          </span>
                          <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="mt-6">
                    <div className="flex items-baseline justify-between">
                      <h3 className="font-serif text-2xl font-normal text-premium-black transition-colors duration-300 group-hover:text-premium-gold">
                        {collection.title}
                      </h3>
                      <span className="text-xs font-normal uppercase tracking-wider text-premium-taupe">
                        {collection.itemCount} Items
                      </span>
                    </div>
                    <p className="mt-3 text-base font-light leading-relaxed text-premium-taupe">
                      {collection.description}
                    </p>
                  </div>
                </article>
              </Link>
            )
          )}
        </div>
      </section>

      {/* All Collections */}
      <section className="border-t border-neutral-200/50 bg-neutral-50/30">
        <div className="mx-auto max-w-[1600px] px-6 py-16 md:px-12 md:py-24">
          <div className="mb-12">
            <h2 className="font-serif text-3xl font-light tracking-tight text-premium-black md:text-4xl">
              All Collections
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
            {COLLECTIONS.filter((collection) => !collection.featured).map(
              (collection) => (
                <Link
                  key={collection.id}
                  href={`/collections/${collection.slug}`}
                  className="group"
                >
                  <article className="flex flex-col">
                    {/* Image */}
                    <div className="relative aspect-[3/4] overflow-hidden bg-neutral-100">
                      <Image
                        src={collection.image}
                        alt={collection.title}
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 flex items-end p-6">
                          <div className="flex items-center gap-2 text-white">
                            <span className="text-sm font-normal uppercase tracking-wider">
                              Explore Collection
                            </span>
                            <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="mt-6">
                      <div className="flex items-baseline justify-between">
                        <h3 className="font-serif text-2xl font-normal text-premium-black transition-colors duration-300 group-hover:text-premium-gold">
                          {collection.title}
                        </h3>
                        <span className="text-xs font-normal uppercase tracking-wider text-premium-taupe">
                          {collection.itemCount} Items
                        </span>
                      </div>
                      <p className="mt-3 text-base font-light leading-relaxed text-premium-taupe">
                        {collection.description}
                      </p>
                    </div>
                  </article>
                </Link>
              )
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
