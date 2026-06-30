"use client";

import { ExternalLink, Construction, ChevronDown } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const projects = [
  {
    title: "Luv Bakery",
    desc: "Toko roti & bakery yang ingin hadir secara online. Kami bangunkan website dengan menu digital, lokasi Google Maps, dan tombol pesan WhatsApp — mobile-friendly dan siap digunakan dalam 3 hari.",
    tag: "Website UMKM",
    url: "https://luv-bakery.vercel.app",
    image: null,
    real: true,
    caseStudy: {
      need: "Kesulitan menjangkau pelanggan baru karena belum punya website. Selama ini hanya mengandalkan WhatsApp pribadi dan media sosial.",
      solution: "Kami buatkan website profesional dengan katalog produk, informasi toko, lokasi Google Maps, dan tombol order WhatsApp — semua dalam satu halaman yang responsif dan cepat.",
      result: "Website selesai dalam 3 hari kerja. Pemilik toko bisa menerima pesanan langsung dari website tanpa harus chat satu per satu.",
    },
  },
  {
    title: "Proyek Anda Berikutnya",
    desc: "Website profesional untuk bisnis atau personal Anda. Tampil modern dan siap membantu brand Anda dikenal lebih luas.",
    tag: "Segera Hadir",
    url: "#",
    image: null,
    real: false,
  },
  {
    title: "Proyek Anda Berikutnya",
    desc: "Website profesional untuk bisnis atau personal Anda. Tampil modern dan siap membantu brand Anda dikenal lebih luas.",
    tag: "Segera Hadir",
    url: "#",
    image: null,
    real: false,
  },
  {
    title: "Proyek Anda Berikutnya",
    desc: "Website profesional untuk bisnis atau personal Anda. Tampil modern dan siap membantu brand Anda dikenal lebih luas.",
    tag: "Segera Hadir",
    url: "#",
    image: null,
    real: false,
  },
];

export default function Portfolio() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [expandedCase, setExpandedCase] = useState<number | null>(null);

  return (
    <section id="portofolio" className="relative py-24 md:py-32 bg-background">
      <div className="u-container">
        <ScrollReveal distance={30}>
          <div className="max-w-2xl mb-16 md:mb-20">
            <span className="text-xs font-medium text-white/40 uppercase tracking-[0.2em] mb-4 block">
              Portofolio
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-heading leading-tight">
              Hasil Kerja{" "}
              <span className="text-white">Kami</span>
            </h2>
            <p className="mt-4 text-sm text-paragraph max-w-md">
              Beberapa project yang telah kami selesaikan.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ScrollReveal
              key={i}
              delay={i * 0.08}
              duration={0.5}
            >
              <div className="group relative rounded-2xl overflow-hidden border border-white/[0.06] bg-surface/30 hover:border-white/[0.12] transition-all duration-500">
                {/* Mockup container — clickable link */}
                <a
                  href={project.real ? project.url : undefined}
                  target={project.real ? "_blank" : undefined}
                  rel={project.real ? "noopener noreferrer" : undefined}
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="block"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-surface to-[#0a0a0a]">
                    {/* Browser frame */}
                    <div className="absolute top-0 left-0 right-0 h-7 bg-white/[0.04] border-b border-white/[0.06] flex items-center gap-1.5 px-3 z-10">
                      <span className="w-2 h-2 rounded-full bg-white/20" />
                      <span className="w-2 h-2 rounded-full bg-white/15" />
                      <span className="w-2 h-2 rounded-full bg-white/10" />
                      <span className="ml-2 text-[8px] text-white/20 font-mono truncate max-w-[120px]">
                        {project.real ? "luvbkr.nous.site" : "coming-soon"}
                      </span>
                    </div>

                    <div className="pt-7 w-full h-full relative">
                      {project.real ? (
                        <div className="p-4 md:p-6">
                          <div className="w-full h-full rounded-lg border border-white/[0.04] bg-white/[0.01] p-4 flex flex-col gap-2">
                            <div className="w-2/3 h-2 rounded-full bg-white/8" />
                            <div className="w-1/2 h-2 rounded-full bg-white/5" />
                            <div className="w-full h-20 rounded-md bg-white/[0.02] mt-2" />
                            <div className="grid grid-cols-3 gap-2 mt-1">
                              <div className="h-8 rounded-md bg-white/[0.02]" />
                              <div className="h-8 rounded-md bg-white/[0.02]" />
                              <div className="h-8 rounded-md bg-white/[0.02]" />
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="flex items-center justify-center h-full">
                          <div className="text-center">
                            <Construction className="w-8 h-8 text-white/20 mx-auto mb-2" />
                            <p className="text-xs text-white/20">Segera Hadir</p>
                          </div>
                        </div>
                      )}

                      {/* Hover zoom */}
                      <div className={`absolute inset-0 transition-transform duration-700 ${
                        hoveredIndex === i ? "scale-105" : "scale-100"
                      }`} />
                    </div>

                    {/* Glass overlay */}
                    <div className={`absolute inset-0 bg-black/40 backdrop-blur-[1px] flex items-center justify-center transition-all duration-500 ${
                      hoveredIndex === i ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}>
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 hover:bg-white/20 transition-colors">
                          <span className="text-xs font-medium text-white">Lihat Website</span>
                          <ExternalLink className="w-3.5 h-3.5 text-white" />
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 bg-white/15 backdrop-blur-md rounded-full border border-white/30 hover:bg-white/25 transition-colors">
                          <span className="text-xs font-medium text-white">Live Preview</span>
                          <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse-slow" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-base font-heading font-semibold text-white group-hover:text-white transition-colors">
                        {project.title}
                      </h3>
                      <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${
                        project.real
                          ? "bg-white/5 text-white/60 border border-white/10"
                          : "bg-white/[0.02] text-white/30 border border-white/[0.04]"
                      }`}>
                        {project.tag}
                      </span>
                    </div>
                    <p className="text-xs text-paragraph/70 leading-relaxed">
                      {project.desc}
                    </p>
                  </div>
                </a>

                {/* Case Study — expandable (only for real projects) */}
                {project.real && project.caseStudy && (
                  <div className="px-5 pb-5">
                    <button
                      onClick={() => setExpandedCase(expandedCase === i ? null : i)}
                      className="flex items-center gap-1.5 text-[11px] text-white/40 hover:text-white/70 transition-colors duration-300"
                    >
                      <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${
                        expandedCase === i ? "rotate-180" : ""
                      }`} />
                      Studi Kasus
                    </button>
                    <AnimatePresence>
                      {expandedCase === i && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                          className="overflow-hidden"
                        >
                          <div className="mt-3 space-y-3 pt-3 border-t border-white/[0.04]">
                            <div>
                              <p className="text-[10px] font-medium text-white/30 uppercase tracking-wider mb-1">Kebutuhan</p>
                              <p className="text-xs text-paragraph/70 leading-relaxed">{project.caseStudy.need}</p>
                            </div>
                            <div>
                              <p className="text-[10px] font-medium text-white/30 uppercase tracking-wider mb-1">Solusi</p>
                              <p className="text-xs text-paragraph/70 leading-relaxed">{project.caseStudy.solution}</p>
                            </div>
                            <div>
                              <p className="text-[10px] font-medium text-white/30 uppercase tracking-wider mb-1">Hasil</p>
                              <p className="text-xs text-paragraph/70 leading-relaxed">{project.caseStudy.result}</p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
