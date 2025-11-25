"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function Editorial() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 bg-premium-cream" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="max-w-4xl mx-auto text-center"
        >
          <p className="text-xs font-normal tracking-[0.2em] uppercase text-premium-taupe mb-6">
            Our Philosophy
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-light text-premium-black mb-8 leading-[1.3] tracking-tight">
            Quiet luxury isn&apos;t about logos.
            <br />
            It&apos;s about knowing.
          </h2>
          <div className="space-y-6 text-lg md:text-xl font-light leading-relaxed text-premium-taupe">
            <p>
              In a world of fast fashion and fleeting trends, we choose
              timelessness. Each piece in our collection is selected for its
              exceptional quality, refined aesthetic, and enduring appeal.
            </p>
            <p>
              Crafted from the world&apos;s finest materials and designed with the
              modern Malaysian lifestyle in mind, our pieces speak softly but
              carry profound sophistication.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
