export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="font-serif text-7xl font-light tracking-tight text-center text-premium-black">
        Quiet Luxury, Redefined
      </h1>
      <p className="text-lg font-light leading-relaxed text-center mt-6 text-premium-taupe max-w-2xl mx-auto">
        Curated collections for the discerning Malaysian
      </p>
      <div className="flex justify-center gap-4 mt-12">
        <button className="bg-premium-black text-white px-10 h-14 tracking-wide uppercase text-sm hover:shadow-lift transition-all duration-300">
          Explore Collection
        </button>
        <button className="border-[0.5px] border-premium-black text-premium-black px-10 h-14 tracking-wide uppercase text-sm hover:bg-neutral-100 transition-all duration-300">
          New Arrivals
        </button>
      </div>
    </div>
  );
}
