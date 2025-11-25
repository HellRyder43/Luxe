"use client";

import { motion } from "framer-motion";
import { ShoppingBag, Minus, Plus, X, ArrowRight, PackageOpen } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/lib/store/cart-store";
import { formatPrice } from "@/lib/utils";

export default function CartPage() {
  const { items, removeItem, updateQuantity, getTotalPrice, getTotalItems } = useCart();

  const totalItems = getTotalItems();
  const subtotal = getTotalPrice();
  const hasItems = items.length > 0;

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
  };

  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-[1600px] px-6 py-12 md:px-12 md:py-16">
        {/* Page Header */}
        <div className="mb-12 border-b border-neutral-200/50 pb-8">
          <h1 className="font-serif text-4xl font-light tracking-tight text-premium-black md:text-5xl">
            Shopping Bag
          </h1>
          <p className="mt-3 text-sm font-light text-premium-taupe">
            {totalItems} {totalItems === 1 ? "item" : "items"}
          </p>
        </div>

        {hasItems ? (
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_400px] lg:gap-16">
            {/* Cart Items */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-6"
            >
              {items.map((item) => (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  className="group relative flex gap-6 border-b border-neutral-200/50 pb-6"
                >
                  {/* Product Image */}
                  <Link
                    href={`/products/${item.productId}`}
                    className="relative aspect-[3/4] w-32 flex-shrink-0 overflow-hidden bg-neutral-100 md:w-40"
                  >
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 128px, 160px"
                    />
                  </Link>

                  {/* Product Details */}
                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <Link
                        href={`/products/${item.productId}`}
                        className="group-hover:text-premium-gold transition-colors"
                      >
                        <h3 className="text-lg font-normal text-premium-black">
                          {item.name}
                        </h3>
                      </Link>

                      {/* Variant Info */}
                      {(item.size || item.color) && (
                        <div className="mt-2 flex gap-4 text-sm font-light text-premium-taupe">
                          {item.color && <span>Color: {item.color}</span>}
                          {item.size && <span>Size: {item.size}</span>}
                        </div>
                      )}

                      {/* Price */}
                      <p className="mt-3 font-sans text-xl font-light tracking-tight text-premium-black">
                        {formatPrice(item.price)}
                      </p>
                    </div>

                    {/* Quantity Controls */}
                    <div className="mt-4 flex items-center gap-4">
                      <div className="flex items-center border border-neutral-200">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, Math.max(1, item.quantity - 1))
                          }
                          disabled={item.quantity <= 1}
                          className="flex h-10 w-10 items-center justify-center text-premium-black transition-colors hover:bg-neutral-50 disabled:opacity-30"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="h-4 w-4" strokeWidth={1.5} />
                        </button>
                        <span className="w-12 text-center text-sm font-normal text-premium-black">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="flex h-10 w-10 items-center justify-center text-premium-black transition-colors hover:bg-neutral-50"
                          aria-label="Increase quantity"
                        >
                          <Plus className="h-4 w-4" strokeWidth={1.5} />
                        </button>
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() => removeItem(item.id)}
                        className="flex items-center gap-2 text-xs font-normal uppercase tracking-wider text-premium-taupe transition-colors hover:text-premium-black"
                        aria-label="Remove item"
                      >
                        <X className="h-4 w-4" strokeWidth={1.5} />
                        Remove
                      </button>
                    </div>
                  </div>

                  {/* Item Subtotal */}
                  <div className="hidden md:block text-right">
                    <p className="font-sans text-lg font-light tracking-tight text-premium-black">
                      {formatPrice(item.price * item.quantity)}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Order Summary Sidebar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:sticky lg:top-24 h-fit"
            >
              <div className="rounded-none border border-neutral-200 bg-white p-8">
                <h2 className="text-xs font-normal uppercase tracking-wider text-premium-black">
                  Order Summary
                </h2>

                <div className="mt-6 space-y-4 border-b border-neutral-200/50 pb-6">
                  <div className="flex justify-between text-sm font-light">
                    <span className="text-premium-taupe">Subtotal</span>
                    <span className="text-premium-black">{formatPrice(subtotal)}</span>
                  </div>
                  <div className="flex justify-between text-sm font-light">
                    <span className="text-premium-taupe">Shipping</span>
                    <span className="text-premium-taupe">Calculated at checkout</span>
                  </div>
                </div>

                <div className="mt-6 flex justify-between">
                  <span className="text-base font-normal text-premium-black">Total</span>
                  <span className="font-sans text-2xl font-light tracking-tight text-premium-black">
                    {formatPrice(subtotal)}
                  </span>
                </div>

                <p className="mt-4 text-xs font-light text-premium-taupe">
                  Free shipping on orders over RM 500
                </p>

                {/* Checkout Button */}
                <Link href="/checkout">
                  <motion.button
                    whileTap={{ scale: 0.98 }}
                    className="mt-8 flex h-14 w-full items-center justify-center gap-3 bg-premium-black text-xs font-normal uppercase tracking-wider text-white transition-colors hover:bg-premium-black/90"
                  >
                    Proceed to Checkout
                    <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
                  </motion.button>
                </Link>

                <Link href="/products">
                  <button className="mt-3 flex h-12 w-full items-center justify-center gap-3 border border-neutral-200 bg-transparent text-xs font-normal uppercase tracking-wider text-premium-black transition-colors hover:bg-neutral-50">
                    Continue Shopping
                  </button>
                </Link>

                {/* Trust Badges */}
                <div className="mt-8 space-y-3 border-t border-neutral-200/50 pt-8 text-xs font-light text-premium-taupe">
                  <p>✓ Secure checkout</p>
                  <p>✓ 30-day return policy</p>
                  <p>✓ Free shipping over RM 500</p>
                </div>
              </div>
            </motion.div>
          </div>
        ) : (
          // Empty Cart State
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex min-h-[60vh] flex-col items-center justify-center text-center"
          >
            <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-neutral-100">
              <PackageOpen className="h-12 w-12 text-premium-taupe" strokeWidth={1.5} />
            </div>
            <h2 className="font-serif text-3xl font-light text-premium-black">
              Your bag is empty
            </h2>
            <p className="mt-4 max-w-md text-base font-light leading-relaxed text-premium-taupe">
              Discover our curated collection of premium clothing designed for the modern wardrobe.
            </p>
            <Link href="/products">
              <motion.button
                whileTap={{ scale: 0.98 }}
                className="mt-8 flex h-14 items-center justify-center gap-3 bg-premium-black px-10 text-xs font-normal uppercase tracking-wider text-white transition-colors hover:bg-premium-black/90"
              >
                <ShoppingBag className="h-4 w-4" strokeWidth={1.5} />
                Start Shopping
              </motion.button>
            </Link>
          </motion.div>
        )}
      </div>
    </main>
  );
}
