"use client";

import Link from "next/link";
import Image from "next/image";
import { Minus, Plus, ShoppingBag } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/use-cart";
import { formatPrice } from "@/lib/utils";

export function CartDrawer() {
  const { items, isOpen, toggleCart, updateQuantity, removeItem, getTotalPrice } = useCart();
  const totalPrice = getTotalPrice();

  return (
    <Sheet open={isOpen} onOpenChange={toggleCart}>
      <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle className="font-serif text-2xl font-light tracking-tight">
            Shopping Bag
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          // Empty State
          <div className="flex flex-col items-center justify-center h-[70vh] text-center px-6">
            <ShoppingBag className="h-16 w-16 text-premium-taupe mb-6" strokeWidth={1} />
            <h3 className="font-serif text-xl font-light mb-2 text-premium-black">
              Your bag is empty
            </h3>
            <p className="text-sm text-premium-taupe mb-8 max-w-xs">
              Start adding items to your bag to create your perfect look
            </p>
            <Button
              onClick={toggleCart}
              asChild
              className="bg-premium-black text-white hover:shadow-lift transition-all duration-300"
            >
              <Link href="/products">Start Shopping</Link>
            </Button>
          </div>
        ) : (
          // Cart Items
          <div className="flex flex-col h-full">
            <div className="flex-1 overflow-y-auto py-6 hide-scrollbar">
              <div className="space-y-6">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    {/* Product Image */}
                    <div className="relative h-32 w-24 flex-shrink-0 overflow-hidden rounded bg-neutral-100">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex flex-1 flex-col justify-between">
                      <div>
                        <h4 className="font-sans text-sm font-light text-premium-black">
                          {item.name}
                        </h4>
                        {item.size && (
                          <p className="text-xs text-premium-taupe mt-1">
                            Size: {item.size}
                          </p>
                        )}
                        {item.color && (
                          <p className="text-xs text-premium-taupe">
                            Color: {item.color}
                          </p>
                        )}
                        <p className="text-sm font-light mt-2 text-premium-black">
                          {formatPrice(item.price)}
                        </p>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center border border-[0.5px] border-neutral-200 rounded">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="px-3 py-1 hover:bg-neutral-100 transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="h-3 w-3" strokeWidth={1.5} />
                          </button>
                          <span className="px-4 py-1 text-sm border-x border-[0.5px] border-neutral-200">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="px-3 py-1 hover:bg-neutral-100 transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="h-3 w-3" strokeWidth={1.5} />
                          </button>
                        </div>

                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-xs text-premium-taupe hover:text-error underline transition-colors"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Cart Footer */}
            <div className="border-t border-[0.5px] border-neutral-200 pt-6 space-y-4">
              <div className="flex justify-between text-base">
                <span className="font-light">Subtotal</span>
                <span className="font-light">{formatPrice(totalPrice)}</span>
              </div>
              <p className="text-xs text-premium-taupe">
                Shipping and taxes calculated at checkout
              </p>
              <Button
                asChild
                className="w-full bg-premium-black text-white hover:shadow-lift transition-all duration-300 h-14"
              >
                <Link href="/checkout" onClick={toggleCart}>
                  Proceed to Checkout
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="w-full border-[0.5px] border-premium-black hover:bg-neutral-100 h-14"
              >
                <Link href="/cart" onClick={toggleCart}>
                  View Full Cart
                </Link>
              </Button>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
