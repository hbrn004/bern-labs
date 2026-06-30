"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function CTA() {
  return (
    <section className="relative py-24 md:py-32 bg-white overflow-hidden">
      {/* Subtle radial gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/[0.02] via-transparent to-black/[0.02]" />

      {/* Subtle texture */}
      <div className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #000 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="u-container relative z-10">
        <ScrollReveal distance={30}>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-black leading-tight mb-6">
              Siap Memiliki Website Profesional?
            </h2>
            <p className="text-sm md:text-base text-black/60 leading-relaxed mb-10 max-w-lg mx-auto">
              Konsultasikan kebutuhan digital Anda dengan tim kami. Gratis dan tanpa kewajiban.
            </p>
            <motion.a
              href="https://wa.me/6283154701592?text=Halo%20Bern%20Labs%2C%20saya%20tertarik%20dengan%20layanan%20Anda"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 h-12 px-8 text-sm font-medium text-white bg-black rounded-full hover:bg-black/90 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Hubungi Kami Sekarang
              <motion.span
                initial={{ x: 0 }}
                whileHover={{ x: 3 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowRight className="w-4 h-4" />
              </motion.span>
            </motion.a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
