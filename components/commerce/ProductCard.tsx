"use client";

import { motion, useInView } from "framer-motion";
import { Heart, ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { Product } from "@/types";
import { formatPrice } from "@/lib/utils";
import { useCart } from "@/lib/store/cart-store";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isWishlisted, setIsWishlisted] = useState(false);
  const addItem = useCart((state) => state.addItem);
  const toggleCart = useCart((state) => state.toggleCart);

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem(product);
    toggleCart();
  };

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsWishlisted(!isWishlisted);
  };

  const primaryImage = product.images.find((img) => img.isPrimary) || product.images[0];
  const hasDiscount = product.compareAtPrice && product.compareAtPrice > product.price;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.4, 0, 0.2, 1],
      }}
      className="group relative"
    >
      <Link href={`/products/${product.slug}`}>
        {/* Image Container */}
        <div className="relative aspect-[3/4] overflow-hidden bg-neutral-100 mb-4">
          {/* Product Image */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="w-full h-full"
          >
            <Image
              src={primaryImage.url}
              alt={primaryImage.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
          </motion.div>

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {product.isNew && (
              <span className="bg-premium-black text-white px-3 py-1 text-[10px] font-medium tracking-wider uppercase">
                New
              </span>
            )}
            {product.isSale && product.salePercentage && (
              <span className="bg-premium-gold text-premium-black px-3 py-1 text-[10px] font-medium tracking-wider uppercase">
                -{product.salePercentage}%
              </span>
            )}
          </div>

          {/* Wishlist Button */}
          <motion.button
            onClick={handleWishlist}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors duration-200"
          >
            <Heart
              strokeWidth={1.5}
              size={18}
              className={isWishlisted ? "fill-premium-gold text-premium-gold" : "text-premium-black"}
            />
          </motion.button>

          {/* Quick Add Button - Revealed on Hover */}
          <motion.button
            onClick={handleQuickAdd}
            initial={{ opacity: 0, y: 10 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="absolute bottom-3 left-3 right-3 bg-premium-black text-white h-12 flex items-center justify-center gap-2 tracking-wide uppercase text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <ShoppingBag strokeWidth={1.5} size={18} />
            Quick Add
          </motion.button>
        </div>

        {/* Product Info */}
        <div className="space-y-1">
          {/* Category */}
          <p className="text-sm tracking-wider uppercase text-premium-taupe">
            {product.category}
          </p>

          {/* Product Name */}
          <h3 className="text-base font-normal text-premium-black group-hover:text-premium-gold transition-colors duration-200 line-clamp-2">
            {product.name}
          </h3>

          {/* Price */}
          <div className="flex items-center gap-2 pt-1">
            <span className="font-sans text-lg font-light tracking-tight text-premium-black">
              {formatPrice(product.price)}
            </span>
            {hasDiscount && (
              <span className="font-sans text-sm font-light tracking-tight text-premium-taupe line-through">
                {formatPrice(product.compareAtPrice!)}
              </span>
            )}
          </div>

          {/* Colors Available */}
          {product.colors.length > 0 && (
            <div className="flex items-center gap-1.5 pt-2">
              {product.colors.slice(0, 5).map((color) => (
                <div
                  key={color.name}
                  className="w-5 h-5 rounded-full border-[0.5px] border-neutral-300"
                  style={{ backgroundColor: color.hex }}
                  title={color.name}
                />
              ))}
              {product.colors.length > 5 && (
                <span className="text-xs text-premium-taupe ml-1">
                  +{product.colors.length - 5}
                </span>
              )}
            </div>
          )}
        </div>
      </Link>
    </motion.div>
  );
}
