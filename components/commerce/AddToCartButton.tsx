"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ShoppingBag, Check } from "lucide-react";
import { Product } from "@/types";
import { useCart } from "@/lib/store/cart-store";

interface AddToCartButtonProps {
  product: Product;
  size?: string;
  color?: string;
  variant?: "default" | "outline" | "ghost";
  className?: string;
}

export function AddToCartButton({
  product,
  size,
  color,
  variant = "default",
  className = "",
}: AddToCartButtonProps) {
  const [isAdded, setIsAdded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { addItem, toggleCart } = useCart();

  const handleAddToCart = async () => {
    if (!product.inStock || isLoading) return;

    setIsLoading(true);

    try {
      // Simulate async operation
      await new Promise((resolve) => setTimeout(resolve, 300));

      // Add item to cart with variant
      addItem(product, { size, color });

      // Show success state
      setIsAdded(true);

      // Auto-open cart drawer after 500ms
      setTimeout(() => {
        toggleCart();
      }, 500);

      // Reset success state after 2s
      setTimeout(() => {
        setIsAdded(false);
      }, 2000);
    } catch (error) {
      console.error("Failed to add item to cart:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const baseStyles = "flex h-14 w-full items-center justify-center gap-3 font-normal uppercase tracking-wider transition-all";

  const variantStyles = {
    default: "bg-premium-black text-white hover:bg-premium-black/90 disabled:bg-neutral-300 disabled:text-neutral-500",
    outline: "border-2 border-premium-black bg-transparent text-premium-black hover:bg-premium-black hover:text-white disabled:border-neutral-300 disabled:text-neutral-400",
    ghost: "bg-transparent text-premium-black hover:bg-neutral-100 disabled:text-neutral-400",
  };

  return (
    <motion.button
      onClick={handleAddToCart}
      disabled={!product.inStock || isLoading}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      whileTap={{ scale: 0.98 }}
      aria-label={isAdded ? "Added to cart" : "Add to cart"}
    >
      {isLoading ? (
        <>
          <motion.div
            className="h-5 w-5 rounded-full border-2 border-current border-t-transparent"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
          <span className="text-xs">Adding...</span>
        </>
      ) : isAdded ? (
        <>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          >
            <Check className="h-5 w-5" strokeWidth={1.5} />
          </motion.div>
          <span className="text-xs">Added to Bag</span>
        </>
      ) : (
        <>
          <ShoppingBag className="h-5 w-5" strokeWidth={1.5} />
          <span className="text-xs">Add to Bag</span>
        </>
      )}
    </motion.button>
  );
}
