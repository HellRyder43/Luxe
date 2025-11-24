"use client";

import Link from "next/link";
import { Menu, Search, User, Heart, ShoppingBag } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/use-cart";
import { PRIMARY_NAV } from "@/lib/constants";
import { useState } from "react";

export function Header() {
  const { getTotalItems, toggleCart } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const totalItems = getTotalItems();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[0.5px] border-neutral-200 bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      {/* Top Utility Bar */}
      <div className="border-b border-[0.5px] border-neutral-200">
        <div className="container flex h-10 items-center justify-between px-4 text-xs tracking-wide">
          <div className="flex items-center gap-6">
            <Link href="/track-order" className="hover:text-premium-gold transition-colors duration-300">
              Track Order
            </Link>
            <Link href="/store-locator" className="hover:text-premium-gold transition-colors duration-300">
              Store Locator
            </Link>
            <Link href="/help" className="hover:text-premium-gold transition-colors duration-300">
              Help & FAQs
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <button className="hover:text-premium-gold transition-colors duration-300">
              EN
            </button>
            <span className="text-neutral-300">|</span>
            <button className="text-premium-taupe hover:text-premium-gold transition-colors duration-300">
              BM
            </button>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container flex h-20 items-center justify-between px-4">
        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 hover:bg-neutral-100 rounded transition-colors duration-300"
          aria-label="Toggle mobile menu"
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
            <Link
              key={item.label}
              href={item.href}
              className="text-xs font-light tracking-wide uppercase hover:text-premium-gold transition-colors duration-300"
            >
              {item.label}
            </Link>
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
                className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-[10px] bg-premium-black"
              >
                {totalItems}
              </Badge>
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu Overlay - Placeholder for now */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[120px] bg-background z-50 p-6">
          <nav className="flex flex-col gap-6">
            {PRIMARY_NAV.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-lg font-light tracking-wide uppercase hover:text-premium-gold transition-colors duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
