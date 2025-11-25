"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-premium-cream to-white">
      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-4 text-center"
      >
        {/* Eyebrow */}
        <motion.p
          variants={itemVariants}
          className="text-xs font-normal tracking-[0.2em] uppercase text-premium-taupe mb-6"
        >
          New Season 2025
        </motion.p>

        {/* Main Heading */}
        <motion.h1
          variants={itemVariants}
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-premium-black mb-6 leading-[1.1]"
        >
          Quiet Luxury,
          <br />
          Redefined
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl font-light leading-relaxed text-premium-taupe max-w-2xl mx-auto mb-12"
        >
          Curated collections for the discerning Malaysian.
          <br />
          Where elegance meets everyday sophistication.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row justify-center gap-4 mb-16"
        >
          <Link href="/products">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-premium-black text-white px-10 h-14 tracking-wide uppercase text-sm font-normal hover:shadow-lift transition-all duration-300 w-full sm:w-auto"
            >
              Explore Collection
            </motion.button>
          </Link>
          <Link href="/products?filter=new">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="border-[0.5px] border-premium-black text-premium-black px-10 h-14 tracking-wide uppercase text-sm font-normal hover:bg-neutral-50 transition-all duration-300 w-full sm:w-auto"
            >
              New Arrivals
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{
            y: [0, 8, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="flex flex-col items-center gap-2 text-premium-taupe"
        >
          <span className="text-xs tracking-wider uppercase">Scroll</span>
          <ChevronDown strokeWidth={1.5} size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
