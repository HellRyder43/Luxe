"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Check, ChevronDown } from "lucide-react";
import Image from "next/image";
import { useCart } from "@/lib/store/cart-store";
import { formatPrice } from "@/lib/utils";
import { MALAYSIAN_STATES, PAYMENT_METHODS } from "@/lib/constants";
import { PaymentMethod } from "@/types";

const CHECKOUT_STEPS = [
  "Shopping Cart",
  "Delivery Information",
  "Payment Method",
  "Order Review",
  "Confirmation",
];

export default function CheckoutPage() {
  const router = useRouter();
  const { items, getTotalPrice, getTotalItems, clearCart } = useCart();
  const [currentStep] = useState(1); // 0-indexed: Delivery Information
  const [isProcessing, setIsProcessing] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    // Contact
    email: "",
    phone: "",
    // Delivery Address
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "Selangor",
    postcode: "",
    // Payment
    paymentMethod: "fpx" as PaymentMethod,
  });

  const totalItems = getTotalItems();
  const subtotal = getTotalPrice();
  const shipping = subtotal >= 500 ? 0 : 20;
  const total = subtotal + shipping;

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handlePlaceOrder = async () => {
    setIsProcessing(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Clear cart and redirect to success page
    clearCart();
    router.push("/checkout/success");
  };

  if (items.length === 0) {
    return (
      <main className="min-h-screen bg-white">
        <div className="mx-auto max-w-[1200px] px-6 py-24 text-center">
          <h1 className="font-serif text-3xl font-light text-premium-black">
            Your cart is empty
          </h1>
          <p className="mt-4 text-base font-light text-premium-taupe">
            Add items to your cart before proceeding to checkout.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-neutral-50">
      {/* Progress Bar */}
      <div className="border-b border-neutral-200 bg-white">
        <div className="mx-auto max-w-[1400px] px-6 py-6 md:px-12">
          <div className="flex items-center justify-between">
            {CHECKOUT_STEPS.map((step, index) => (
              <div key={step} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div
                    className={`flex h-8 w-8 items-center justify-center rounded-full border-2 text-xs font-medium transition-colors ${
                      index <= currentStep
                        ? "border-premium-black bg-premium-black text-white"
                        : "border-neutral-300 bg-white text-neutral-400"
                    }`}
                  >
                    {index < currentStep ? (
                      <Check className="h-4 w-4" strokeWidth={2} />
                    ) : (
                      index + 1
                    )}
                  </div>
                  <span
                    className={`mt-2 hidden text-xs font-light md:block ${
                      index <= currentStep ? "text-premium-black" : "text-neutral-400"
                    }`}
                  >
                    {step}
                  </span>
                </div>
                {index < CHECKOUT_STEPS.length - 1 && (
                  <div
                    className={`mx-2 h-[2px] w-8 md:w-16 ${
                      index < currentStep ? "bg-premium-black" : "bg-neutral-300"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1400px] px-6 py-12 md:px-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_400px] lg:gap-12">
          {/* Left: Forms */}
          <div className="space-y-8">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-none border border-neutral-200 bg-white p-8"
            >
              <h2 className="text-xs font-normal uppercase tracking-wider text-premium-black">
                Contact Information
              </h2>
              <div className="mt-6 grid gap-4">
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-light text-premium-black"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="h-12 w-full border border-neutral-200 bg-white px-4 text-sm font-light text-premium-black placeholder-neutral-400 transition-colors focus:border-premium-black focus:outline-none"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-light text-premium-black"
                  >
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="h-12 w-full border border-neutral-200 bg-white px-4 text-sm font-light text-premium-black placeholder-neutral-400 transition-colors focus:border-premium-black focus:outline-none"
                    placeholder="+60 12-345 6789"
                  />
                </div>
              </div>
            </motion.div>

            {/* Delivery Address */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="rounded-none border border-neutral-200 bg-white p-8"
            >
              <h2 className="text-xs font-normal uppercase tracking-wider text-premium-black">
                Delivery Address
              </h2>
              <div className="mt-6 grid gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="mb-2 block text-sm font-light text-premium-black"
                    >
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="h-12 w-full border border-neutral-200 bg-white px-4 text-sm font-light text-premium-black transition-colors focus:border-premium-black focus:outline-none"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="mb-2 block text-sm font-light text-premium-black"
                    >
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="h-12 w-full border border-neutral-200 bg-white px-4 text-sm font-light text-premium-black transition-colors focus:border-premium-black focus:outline-none"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="address"
                    className="mb-2 block text-sm font-light text-premium-black"
                  >
                    Street Address *
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    className="h-12 w-full border border-neutral-200 bg-white px-4 text-sm font-light text-premium-black transition-colors focus:border-premium-black focus:outline-none"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="city"
                      className="mb-2 block text-sm font-light text-premium-black"
                    >
                      City *
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                      className="h-12 w-full border border-neutral-200 bg-white px-4 text-sm font-light text-premium-black transition-colors focus:border-premium-black focus:outline-none"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="postcode"
                      className="mb-2 block text-sm font-light text-premium-black"
                    >
                      Postcode *
                    </label>
                    <input
                      type="text"
                      id="postcode"
                      name="postcode"
                      value={formData.postcode}
                      onChange={handleInputChange}
                      required
                      maxLength={5}
                      pattern="[0-9]{5}"
                      className="h-12 w-full border border-neutral-200 bg-white px-4 text-sm font-light text-premium-black transition-colors focus:border-premium-black focus:outline-none"
                      placeholder="50000"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="state"
                    className="mb-2 block text-sm font-light text-premium-black"
                  >
                    State *
                  </label>
                  <div className="relative">
                    <select
                      id="state"
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      required
                      className="h-12 w-full appearance-none border border-neutral-200 bg-white px-4 text-sm font-light text-premium-black transition-colors focus:border-premium-black focus:outline-none"
                    >
                      {MALAYSIAN_STATES.map((state) => (
                        <option key={state} value={state}>
                          {state}
                        </option>
                      ))}
                    </select>
                    <ChevronDown
                      className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-premium-taupe"
                      strokeWidth={1.5}
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Payment Method */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="rounded-none border border-neutral-200 bg-white p-8"
            >
              <h2 className="text-xs font-normal uppercase tracking-wider text-premium-black">
                Payment Method
              </h2>
              <div className="mt-6 space-y-3">
                {PAYMENT_METHODS.map((method) => (
                  <label
                    key={method.id}
                    className={`flex cursor-pointer items-center justify-between border p-4 transition-colors ${
                      formData.paymentMethod === method.id
                        ? "border-premium-black bg-neutral-50"
                        : "border-neutral-200 hover:border-neutral-300"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value={method.id}
                        checked={formData.paymentMethod === method.id}
                        onChange={handleInputChange}
                        className="h-4 w-4 accent-premium-black"
                      />
                      <div>
                        <p className="text-sm font-normal text-premium-black">
                          {method.name}
                        </p>
                        <p className="text-xs font-light text-premium-taupe">
                          {method.description}
                        </p>
                      </div>
                    </div>
                    <span className="text-2xl">{method.icon}</span>
                  </label>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: Order Summary (Sticky) */}
          <div className="lg:sticky lg:top-24 h-fit">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="rounded-none border border-neutral-200 bg-white p-8"
            >
              <h2 className="text-xs font-normal uppercase tracking-wider text-premium-black">
                Order Summary
              </h2>

              {/* Items List */}
              <div className="mt-6 max-h-[300px] space-y-4 overflow-y-auto border-b border-neutral-200/50 pb-6">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="relative h-20 w-16 flex-shrink-0 overflow-hidden bg-neutral-100">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                        sizes="64px"
                      />
                      <div className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-premium-black text-[10px] font-medium text-white">
                        {item.quantity}
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-normal text-premium-black line-clamp-2">
                        {item.name}
                      </p>
                      {(item.size || item.color) && (
                        <p className="mt-1 text-xs font-light text-premium-taupe">
                          {item.size} {item.color && `• ${item.color}`}
                        </p>
                      )}
                      <p className="mt-1 text-sm font-light text-premium-black">
                        {formatPrice(item.price * item.quantity)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pricing */}
              <div className="mt-6 space-y-3 border-b border-neutral-200/50 pb-6">
                <div className="flex justify-between text-sm font-light">
                  <span className="text-premium-taupe">
                    Subtotal ({totalItems} items)
                  </span>
                  <span className="text-premium-black">{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between text-sm font-light">
                  <span className="text-premium-taupe">Shipping</span>
                  <span className="text-premium-black">
                    {shipping === 0 ? "FREE" : formatPrice(shipping)}
                  </span>
                </div>
                {shipping === 0 && (
                  <p className="text-xs font-light text-green-700">
                    ✓ You qualify for free shipping
                  </p>
                )}
              </div>

              {/* Total */}
              <div className="mt-6 flex justify-between">
                <span className="text-base font-normal text-premium-black">Total</span>
                <span className="font-sans text-2xl font-light tracking-tight text-premium-black">
                  {formatPrice(total)}
                </span>
              </div>

              {/* Place Order Button */}
              <motion.button
                onClick={handlePlaceOrder}
                disabled={isProcessing}
                whileTap={{ scale: 0.98 }}
                className="mt-8 flex h-14 w-full items-center justify-center gap-3 bg-premium-black text-xs font-normal uppercase tracking-wider text-white transition-colors hover:bg-premium-black/90 disabled:opacity-50"
              >
                {isProcessing ? (
                  <>
                    <motion.div
                      className="h-4 w-4 rounded-full border-2 border-white border-t-transparent"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                    Processing...
                  </>
                ) : (
                  "Place Order"
                )}
              </motion.button>

              <p className="mt-4 text-center text-xs font-light text-premium-taupe">
                By placing your order, you agree to our Terms & Conditions
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
}
