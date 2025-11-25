"use client";

import Link from "next/link";
import { Menu, Search, User, Heart, ShoppingBag } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/use-cart";
import { PRIMARY_NAV } from "@/lib/constants";
import { MobileNav } from "./MobileNav";
import { motion } from "framer-motion";
import { useState } from "react";

export function Header() {
  const { getTotalItems, toggleCart } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const totalItems = getTotalItems();

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-[0.5px] border-neutral-200 bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
        {/* Top Utility Bar */}
        <div className="hidden md:block border-b border-[0.5px] border-neutral-200">
          <div className="container flex h-10 items-center justify-between px-4 text-sm tracking-wide">
          <div className="flex items-center gap-6">
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link href="/track-order" className="hover:text-premium-gold transition-colors duration-300">
                Track Order
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link href="/store-locator" className="hover:text-premium-gold transition-colors duration-300">
                Store Locator
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link href="/help" className="hover:text-premium-gold transition-colors duration-300">
                Help & FAQs
              </Link>
            </motion.div>
          </div>
          <div className="flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="hover:text-premium-gold transition-colors duration-300"
            >
              EN
            </motion.button>
            <span className="text-neutral-300">|</span>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="text-premium-taupe hover:text-premium-gold transition-colors duration-300"
            >
              BM
            </motion.button>
          </div>
          </div>
        </div>

        {/* Main Header */}
        <div className="container flex h-20 items-center justify-between px-4">
          {/* Mobile Menu Button */}
          <button
            onClick={handleMobileMenuToggle}
            className={`lg:hidden p-2 rounded transition-all duration-300 ${
              mobileMenuOpen ? "bg-premium-gold/10 text-premium-gold" : "hover:bg-neutral-100"
            }`}
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            <Menu className="h-6 w-6" strokeWidth={1.5} />
          </button>

          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <h1 className="font-serif text-2xl md:text-3xl font-light tracking-tight text-premium-black">
              LuxeMYS
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {PRIMARY_NAV.map((item) => (
              <motion.div
                key={item.label}
                className="relative"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <Link
                  href={item.href}
                  className="text-sm font-light tracking-wide uppercase text-premium-black hover:text-premium-gold transition-colors duration-300"
                >
                  {item.label}
                </Link>
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-[0.5px] bg-premium-gold origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
              </motion.div>
            ))}
          </nav>

          {/* Right Icons */}
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="hidden md:flex hover:bg-neutral-100"
              aria-label="Search"
            >
              <Search className="h-5 w-5" strokeWidth={1.5} />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="hidden md:flex hover:bg-neutral-100"
              aria-label="Account"
            >
              <User className="h-5 w-5" strokeWidth={1.5} />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="hidden md:flex hover:bg-neutral-100"
              aria-label="Wishlist"
            >
              <Heart className="h-5 w-5" strokeWidth={1.5} />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="relative hover:bg-neutral-100"
              onClick={toggleCart}
              aria-label={`Cart with ${totalItems} items`}
            >
              <ShoppingBag className="h-5 w-5" strokeWidth={1.5} />
              {totalItems > 0 && (
                <Badge
                  variant="default"
                  className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-[10px] bg-premium-black text-white"
                >
                  {totalItems}
                </Badge>
              )}
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <MobileNav
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navItems={PRIMARY_NAV}
      />
    </>
  );
}
