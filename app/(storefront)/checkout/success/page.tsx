"use client";

import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, Package, Mail } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function SuccessPage() {
  const [orderNumber, setOrderNumber] = useState("");
  const [estimatedDelivery, setEstimatedDelivery] = useState("");

  useEffect(() => {
    // Generate mock order number
    const mockOrderNumber = `LUX${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderNumber(mockOrderNumber);

    // Calculate estimated delivery date (5-7 business days from now)
    const today = new Date();
    const deliveryDate = new Date(today);
    deliveryDate.setDate(today.getDate() + 7);
    const formattedDate = deliveryDate.toLocaleDateString("en-MY", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    setEstimatedDelivery(formattedDate);
  }, []);

  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-[800px] px-6 py-24 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Success Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              delay: 0.2,
              type: "spring",
              stiffness: 200,
              damping: 20,
            }}
            className="mb-8 flex justify-center"
          >
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-green-50">
              <CheckCircle
                className="h-16 w-16 text-green-600"
                strokeWidth={1.5}
              />
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="font-serif text-4xl font-light tracking-tight text-premium-black md:text-5xl"
          >
            Thank You For Your Order
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-6 text-lg font-light leading-relaxed text-premium-taupe"
          >
            Your order has been successfully placed and is being processed.
            <br />
            We&apos;ll send you a confirmation email shortly.
          </motion.p>

          {/* Order Details Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-12 rounded-none border border-neutral-200 bg-neutral-50 p-8 text-left"
          >
            <h2 className="text-xs font-normal uppercase tracking-wider text-premium-black">
              Order Details
            </h2>

            <div className="mt-6 space-y-4">
              <div className="flex items-start justify-between border-b border-neutral-200/50 pb-4">
                <div className="flex items-start gap-3">
                  <Package
                    className="h-5 w-5 text-premium-taupe"
                    strokeWidth={1.5}
                  />
                  <div>
                    <p className="text-sm font-normal text-premium-black">
                      Order Number
                    </p>
                    <p className="mt-1 font-mono text-lg font-medium text-premium-black">
                      {orderNumber}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-start justify-between border-b border-neutral-200/50 pb-4">
                <div className="flex items-start gap-3">
                  <Mail
                    className="h-5 w-5 text-premium-taupe"
                    strokeWidth={1.5}
                  />
                  <div>
                    <p className="text-sm font-normal text-premium-black">
                      Confirmation Email
                    </p>
                    <p className="mt-1 text-sm font-light text-premium-taupe">
                      Sent to your registered email address
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle
                  className="h-5 w-5 text-green-600"
                  strokeWidth={1.5}
                />
                <div>
                  <p className="text-sm font-normal text-premium-black">
                    Estimated Delivery
                  </p>
                  <p className="mt-1 text-sm font-light text-premium-taupe">
                    {estimatedDelivery}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* What's Next Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-12 space-y-4 text-left"
          >
            <h3 className="text-xs font-normal uppercase tracking-wider text-premium-black">
              What Happens Next?
            </h3>

            <div className="space-y-3 text-sm font-light text-premium-taupe">
              <p className="flex items-start gap-2">
                <span className="text-premium-black">1.</span>
                You&apos;ll receive an order confirmation email with your order
                details
              </p>
              <p className="flex items-start gap-2">
                <span className="text-premium-black">2.</span>
                We&apos;ll notify you when your order ships with tracking
                information
              </p>
              <p className="flex items-start gap-2">
                <span className="text-premium-black">3.</span>
                Your package will arrive within 5-7 business days
              </p>
              <p className="flex items-start gap-2">
                <span className="text-premium-black">4.</span>
                Track your order anytime in your account dashboard
              </p>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="mt-12 flex flex-col gap-3 sm:flex-row sm:justify-center"
          >
            <Link href="/products" className="flex-1 sm:flex-initial">
              <motion.button
                whileTap={{ scale: 0.98 }}
                className="flex h-14 w-full items-center justify-center gap-3 bg-premium-black px-10 text-xs font-normal uppercase tracking-wider text-white transition-colors hover:bg-premium-black/90"
              >
                Continue Shopping
                <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
              </motion.button>
            </Link>

            <Link href="/account/orders" className="flex-1 sm:flex-initial">
              <button className="flex h-14 w-full items-center justify-center gap-3 border border-neutral-200 bg-transparent px-10 text-xs font-normal uppercase tracking-wider text-premium-black transition-colors hover:bg-neutral-50">
                View Order Details
              </button>
            </Link>
          </motion.div>

          {/* Support */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-12 rounded-none border border-neutral-200 bg-white p-6"
          >
            <p className="text-sm font-light text-premium-taupe">
              Need help with your order?{" "}
              <Link
                href="/contact"
                className="font-normal text-premium-black underline hover:text-premium-gold"
              >
                Contact our customer service
              </Link>{" "}
              or WhatsApp us at{" "}
              <a
                href="https://wa.me/60123456789"
                target="_blank"
                rel="noopener noreferrer"
                className="font-normal text-premium-black underline hover:text-premium-gold"
              >
                +60 12-345 6789
              </a>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}
