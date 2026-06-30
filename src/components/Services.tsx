"use client";

import { Globe, Diamond, FileText, FileBadge } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const services = [
  {
    icon: Globe,
    title: "Website UMKM",
    description:
      "Website profesional untuk usaha kecil hingga menengah. Tampil modern, ramah smartphone, dan siap membantu bisnis Anda dikenal lebih luas.",
  },
  {
    icon: Diamond,
    title: "Website Undangan Digital",
    description:
      "Undangan pernikahan modern yang elegan dan mudah dibagikan. Hemat biaya cetak, tampil eksklusif di setiap perangkat.",
  },
  {
    icon: FileText,
    title: "CV Profesional",
    description:
      "CV modern yang siap digunakan untuk melamar kerja. Desain bersih, ramah ATS, dan menonjolkan pengalaman terbaik Anda.",
  },
  {
    icon: FileBadge,
    title: "Proposal Bisnis",
    description:
      "Proposal usaha dan presentasi bisnis dengan desain profesional. Meningkatkan kredibilitas dan kepercayaan klien atau investor.",
  },
];

export default function Services() {
  return (
    <section id="layanan" className="relative py-24 md:py-32 bg-background">
      <div className="u-container">
        {/* Section Header */}
        <ScrollReveal distance={30}>
          <div className="max-w-2xl mb-16 md:mb-20">
            <span className="text-xs font-medium text-white/40 uppercase tracking-[0.2em] mb-4 block">
              Layanan
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-heading leading-tight">
              Solusi Digital untuk{" "}
              <span className="text-white">Kebutuhan Anda</span>
            </h2>
          </div>
        </ScrollReveal>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-5">
          {services.map((service, i) => (
            <ScrollReveal key={i} delay={i * 0.08} duration={0.5}>
              <div className="group relative p-8 md:p-10 rounded-2xl border border-white/[0.06] bg-surface/50 hover:bg-surface transition-all duration-500 hover:border-white/[0.12] hover:shadow-[0_0_30px_rgba(255,255,255,0.03)]">
                {/* Hover glow */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none" />

                {/* Border glow on hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-white/[0.04] to-transparent blur-xl pointer-events-none" />

                <div className="relative z-10">
                  {/* Icon — bigger */}
                  <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-white/10 group-hover:border-white/20 group-hover:scale-105 transition-all duration-500">
                    <service.icon className="w-8 h-8 text-white/70 group-hover:text-white/90 transition-colors duration-500" />
                  </div>

                  <h3 className="text-xl font-heading font-semibold text-white mb-3 group-hover:text-white transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-sm text-paragraph leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
