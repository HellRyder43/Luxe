import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Instagram, Facebook } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-premium-cream border-t border-[0.5px] border-neutral-200">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16">
          {/* Column 1: Shop */}
          <div>
            <h3 className="font-serif text-lg font-normal mb-6 text-premium-black">
              Shop
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/products?filter=new"
                  className="text-sm font-light text-premium-taupe hover:text-premium-gold transition-colors duration-300"
                >
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link
                  href="/products?sort=best-selling"
                  className="text-sm font-light text-premium-taupe hover:text-premium-gold transition-colors duration-300"
                >
                  Best Sellers
                </Link>
              </li>
              <li>
                <Link
                  href="/products?filter=sale"
                  className="text-sm font-light text-premium-taupe hover:text-premium-gold transition-colors duration-300"
                >
                  Sale Items
                </Link>
              </li>
              <li>
                <Link
                  href="/gift-cards"
                  className="text-sm font-light text-premium-taupe hover:text-premium-gold transition-colors duration-300"
                >
                  Gift Cards
                </Link>
              </li>
              <li>
                <Link
                  href="/size-guide"
                  className="text-sm font-light text-premium-taupe hover:text-premium-gold transition-colors duration-300"
                >
                  Size Guide
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Customer Care */}
          <div>
            <h3 className="font-serif text-lg font-normal mb-6 text-premium-black">
              Customer Care
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/contact"
                  className="text-sm font-light text-premium-taupe hover:text-premium-gold transition-colors duration-300"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/shipping"
                  className="text-sm font-light text-premium-taupe hover:text-premium-gold transition-colors duration-300"
                >
                  Shipping Information
                </Link>
              </li>
              <li>
                <Link
                  href="/returns"
                  className="text-sm font-light text-premium-taupe hover:text-premium-gold transition-colors duration-300"
                >
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link
                  href="/payment-methods"
                  className="text-sm font-light text-premium-taupe hover:text-premium-gold transition-colors duration-300"
                >
                  Payment Methods
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-sm font-light text-premium-taupe hover:text-premium-gold transition-colors duration-300"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: About */}
          <div>
            <h3 className="font-serif text-lg font-normal mb-6 text-premium-black">
              About
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-sm font-light text-premium-taupe hover:text-premium-gold transition-colors duration-300"
                >
                  Our Story
                </Link>
              </li>
              <li>
                <Link
                  href="/sustainability"
                  className="text-sm font-light text-premium-taupe hover:text-premium-gold transition-colors duration-300"
                >
                  Sustainability
                </Link>
              </li>
              <li>
                <Link
                  href="/press"
                  className="text-sm font-light text-premium-taupe hover:text-premium-gold transition-colors duration-300"
                >
                  Press & Media
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-sm font-light text-premium-taupe hover:text-premium-gold transition-colors duration-300"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/stores"
                  className="text-sm font-light text-premium-taupe hover:text-premium-gold transition-colors duration-300"
                >
                  Store Locations
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Connect */}
          <div>
            <h3 className="font-serif text-lg font-normal mb-6 text-premium-black">
              Connect
            </h3>
            <form className="space-y-3">
              <p className="text-sm font-light text-premium-taupe mb-4">
                Subscribe to receive updates, access to exclusive deals, and more.
              </p>
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white border-[0.5px] border-neutral-200 focus:border-premium-gold"
              />
              <Button
                type="submit"
                className="w-full bg-premium-black hover:shadow-lift transition-all duration-300"
              >
                Subscribe
              </Button>
            </form>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-premium-taupe hover:text-premium-gold transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" strokeWidth={1.5} />
              </Link>
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-premium-taupe hover:text-premium-gold transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" strokeWidth={1.5} />
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-[0.5px] border-neutral-200 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Legal Links */}
            <div className="flex flex-wrap justify-center md:justify-start gap-6 text-xs text-premium-taupe">
              <Link
                href="/terms"
                className="hover:text-premium-gold transition-colors duration-300"
              >
                Terms & Conditions
              </Link>
              <Link
                href="/privacy"
                className="hover:text-premium-gold transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                href="/cookies"
                className="hover:text-premium-gold transition-colors duration-300"
              >
                Cookie Policy
              </Link>
            </div>

            {/* Copyright */}
            <p className="text-xs text-premium-taupe">
              © {currentYear} LuxeMYS. All rights reserved.
            </p>
          </div>

          {/* Payment Icons */}
          <div className="flex justify-center md:justify-end gap-3 mt-6 text-xs text-premium-taupe">
            <span>FPX</span>
            <span>•</span>
            <span>Visa</span>
            <span>•</span>
            <span>Mastercard</span>
            <span>•</span>
            <span>GrabPay</span>
            <span>•</span>
            <span>Touch 'n Go</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
