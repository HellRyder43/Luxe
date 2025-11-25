"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronDown } from "lucide-react";
import { NavItem } from "@/types";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: NavItem[];
}

export function MobileNav({ isOpen, onClose, navItems }: MobileNavProps) {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const toggleExpanded = (label: string) => {
    setExpandedItem(expandedItem === label ? null : label);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-[120px] bg-black/20 backdrop-blur-sm z-40"
            onClick={onClose}
          />

          {/* Mobile Menu Panel */}
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed top-[120px] left-0 bottom-0 w-full max-w-sm bg-background/98 backdrop-blur-xl z-50 overflow-y-auto"
          >
            <div className="flex flex-col h-full">
              {/* Close Button */}
              <div className="flex justify-end p-6 border-b border-[0.5px] border-neutral-200">
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-neutral-100 rounded-full transition-colors duration-300"
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" strokeWidth={1.5} />
                </button>
              </div>

              {/* Navigation Items */}
              <nav className="flex-1 p-6 space-y-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    className="border-b border-[0.5px] border-neutral-200 last:border-0"
                  >
                    {/* Main Item */}
                    <div className="flex items-center justify-between py-4">
                      <Link
                        href={item.href}
                        className="flex-1 text-lg font-light tracking-wide uppercase text-premium-black hover:text-premium-gold transition-colors duration-300"
                        onClick={onClose}
                      >
                        {item.label}
                      </Link>
                      {item.children && item.children.length > 0 && (
                        <button
                          onClick={() => toggleExpanded(item.label)}
                          className="p-2 hover:bg-neutral-100 rounded-full transition-colors duration-300"
                          aria-label={`Toggle ${item.label} submenu`}
                        >
                          <motion.div
                            animate={{ rotate: expandedItem === item.label ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <ChevronDown className="h-5 w-5" strokeWidth={1.5} />
                          </motion.div>
                        </button>
                      )}
                    </div>

                    {/* Submenu */}
                    <AnimatePresence>
                      {expandedItem === item.label && item.children && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="pl-4 pb-4 space-y-3">
                            {item.children.map((child, childIndex) => (
                              <motion.div
                                key={child.label}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: childIndex * 0.05 }}
                              >
                                <Link
                                  href={child.href}
                                  className="block text-sm font-light text-premium-taupe hover:text-premium-gold transition-colors duration-300"
                                  onClick={onClose}
                                >
                                  {child.label}
                                </Link>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </nav>

              {/* Footer Links */}
              <div className="p-6 border-t border-[0.5px] border-neutral-200 space-y-4">
                <Link
                  href="/search"
                  className="block text-sm font-light uppercase tracking-wide text-premium-black hover:text-premium-gold transition-colors duration-300"
                  onClick={onClose}
                >
                  Search
                </Link>
                <Link
                  href="/account"
                  className="block text-sm font-light uppercase tracking-wide text-premium-black hover:text-premium-gold transition-colors duration-300"
                  onClick={onClose}
                >
                  My Account
                </Link>
                <Link
                  href="/wishlist"
                  className="block text-sm font-light uppercase tracking-wide text-premium-black hover:text-premium-gold transition-colors duration-300"
                  onClick={onClose}
                >
                  Wishlist
                </Link>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
