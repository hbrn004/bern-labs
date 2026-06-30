"use client";

import { Star } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const testimonials = [
  {
    name: "Nama Klien",
    role: "Pemilik Usaha",
    text: "Testimoni asli akan kami tampilkan setelah project pertama selesai dikerjakan.",
  },
  {
    name: "Nama Klien",
    role: "Pengantin Baru",
    text: "Testimoni asli akan kami tampilkan setelah project pertama selesai dikerjakan.",
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-24 md:py-32 bg-secondary">
      <div className="u-container">
        <ScrollReveal distance={30}>
          <div className="max-w-2xl mb-16 md:mb-20">
            <span className="text-xs font-medium text-white/40 uppercase tracking-[0.2em] mb-4 block">
              Testimoni
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-heading leading-tight">
              Kata Mereka tentang{" "}
              <span className="text-white">Bern Labs</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-5">
          {testimonials.map((t, i) => (
            <ScrollReveal key={i} delay={i * 0.08} duration={0.5}>
              <div className="group p-6 md:p-8 rounded-2xl border border-white/[0.06] bg-surface/30 hover:bg-surface/50 hover:border-white/[0.12] transition-all duration-500">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className={`w-4 h-4 transition-all duration-300 ${
                      j < 4 ? "text-white/30 group-hover:text-white/40" : "text-white/20"
                    }`} />
                  ))}
                </div>

                <p className="text-sm text-paragraph leading-relaxed mb-6 italic">
                  &ldquo;{t.text}&rdquo;
                </p>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-colors duration-300">
                    <span className="text-xs font-heading font-medium text-white/40">
                      {t.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">{t.name}</p>
                    <p className="text-xs text-paragraph/60">{t.role}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
