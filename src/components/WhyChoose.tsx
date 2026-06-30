"use client";

import { motion } from "framer-motion";
import { MessageCircle, Sparkles, Smartphone, Search, Zap, ShieldCheck, Palette } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const reasons = [
  { icon: Palette, text: "Desain Modern" },
  { icon: Smartphone, text: "Mobile Friendly" },
  { icon: Search, text: "SEO Friendly" },
  { icon: Zap, text: "Loading Cepat" },
  { icon: Sparkles, text: "Harga Terjangkau" },
  { icon: MessageCircle, text: "Bantuan Setelah Launch" },
  { icon: ShieldCheck, text: "Desain Original" },
];

export default function WhyChoose() {
  return (
    <section id="tentang" className="relative py-24 md:py-32 bg-secondary">
      <div className="u-container">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left */}
          <ScrollReveal direction="left" distance={30}>
            <div>
              <span className="text-xs font-medium text-white/40 uppercase tracking-[0.2em] mb-4 block">
                Tentang
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-heading leading-tight mb-6">
                Kenapa Memilih{" "}
                <span className="text-white">Bern Labs?</span>
              </h2>
              <p className="text-sm text-paragraph leading-relaxed max-w-md mb-8">
                Kami adalah studio digital yang berkomitmen memberikan solusi
                terbaik untuk kebutuhan digital UMKM dan personal.
              </p>

              {/* Stats */}
              <div className="flex gap-8">
                <div>
                  <p className="text-2xl font-heading font-bold text-white">7+</p>
                  <p className="text-xs text-paragraph/60 mt-1">Layanan Digital</p>
                </div>
                <div>
                  <p className="text-2xl font-heading font-bold text-white">100%</p>
                  <p className="text-xs text-paragraph/60 mt-1">Kepuasan Klien</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right — Grid */}
          <ScrollReveal direction="right" distance={30}>
            <div className="grid grid-cols-2 gap-3">
              {reasons.map((reason, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="group flex items-center gap-3 p-4 rounded-xl border border-white/[0.04] bg-white/[0.01] hover:bg-white/[0.03] hover:border-white/[0.08] transition-all duration-300"
                >
                  <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 group-hover:scale-105 transition-all duration-300 shrink-0">
                    <reason.icon className="w-4 h-4 text-white/50 group-hover:text-white/70 transition-colors duration-300" />
                  </div>
                  <span className="text-xs text-paragraph/80 group-hover:text-paragraph transition-colors duration-300">
                    {reason.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
