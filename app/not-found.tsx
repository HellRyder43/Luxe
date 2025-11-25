"use client";

import { motion } from "framer-motion";
import { Home, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-[600px] text-center"
      >
        {/* 404 Text */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="font-serif text-[120px] font-light leading-none tracking-tight text-premium-black md:text-[180px]">
            404
          </h1>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="font-serif text-3xl font-light tracking-tight text-premium-black md:text-4xl"
        >
          Page Not Found
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-6 text-base font-light leading-relaxed text-premium-taupe"
        >
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          <br />
          Let&apos;s get you back to discovering our premium collection.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-12 flex flex-col gap-3 sm:flex-row sm:justify-center"
        >
          <Link href="/">
            <motion.button
              whileTap={{ scale: 0.98 }}
              className="flex h-14 w-full items-center justify-center gap-3 bg-premium-black px-10 text-xs font-normal uppercase tracking-wider text-white transition-colors hover:bg-premium-black/90 sm:w-auto"
            >
              <Home className="h-4 w-4" strokeWidth={1.5} />
              Return Home
            </motion.button>
          </Link>

          <Link href="/products">
            <button className="flex h-14 w-full items-center justify-center gap-3 border border-neutral-200 bg-transparent px-10 text-xs font-normal uppercase tracking-wider text-premium-black transition-colors hover:bg-neutral-50 sm:w-auto">
              Browse Products
              <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
            </button>
          </Link>
        </motion.div>

        {/* Divider */}
        <div className="my-12 h-px bg-neutral-200" />

        {/* Popular Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <p className="mb-4 text-xs font-normal uppercase tracking-wider text-premium-black">
            Popular Pages
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm font-light text-premium-taupe">
            <Link
              href="/products?filter=new"
              className="hover:text-premium-black transition-colors"
            >
              New Arrivals
            </Link>
            <span>•</span>
            <Link
              href="/products?filter=sale"
              className="hover:text-premium-black transition-colors"
            >
              Sale
            </Link>
            <span>•</span>
            <Link
              href="/products?category=women"
              className="hover:text-premium-black transition-colors"
            >
              Women
            </Link>
            <span>•</span>
            <Link
              href="/products?category=men"
              className="hover:text-premium-black transition-colors"
            >
              Men
            </Link>
            <span>•</span>
            <Link
              href="/contact"
              className="hover:text-premium-black transition-colors"
            >
              Contact
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </main>
  );
}
