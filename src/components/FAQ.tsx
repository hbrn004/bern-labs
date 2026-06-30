"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const faqs = [
  {
    q: "Apa itu Bern Labs?",
    a: "Bern Labs adalah studio digital yang fokus membantu UMKM dan personal memiliki identitas digital profesional. Kami menyediakan layanan pembuatan website, undangan digital, CV profesional, dan proposal bisnis.",
  },
  {
    q: "Berapa lama proses pembuatan website?",
    a: "Estimasi pengerjaan website UMKM sekitar 5-7 hari kerja, tergantung kompleksitas dan jumlah halaman. Undangan digital biasanya selesai dalam 2-3 hari kerja.",
  },
  {
    q: "Apakah website yang dibuat mobile-friendly?",
    a: "Tentu. Semua website yang kami buat dirancang responsif dan tampil sempurna di semua perangkat — desktop, tablet, maupun smartphone.",
  },
  {
    q: "Apakah saya bisa meminta revisi?",
    a: "Setiap paket sudah termasuk revisi. Jumlah revisi tergantung paket yang dipilih. Kami akan terus merevisi hingga Anda puas dengan hasilnya.",
  },
  {
    q: "Apakah domain dan hosting sudah termasuk?",
    a: "Untuk paket Website UMKM, domain dan hosting 1 tahun sudah termasuk. Untuk paket lain, bisa didiskusikan lebih lanjut sesuai kebutuhan.",
  },
  {
    q: "Bagaimana cara memesan layanan?",
    a: "Anda bisa menghubungi kami melalui tombol Hubungi Kami di website, atau langsung chat WhatsApp ke 0831-5470-1592. Kami akan merespon dengan cepat.",
  },
  {
    q: "Apakah saya perlu membayar di awal?",
    a: "Kami menerapkan sistem pembayaran bertahap — DP 50% di awal dan pelunasan setelah website selesai dan Anda setuju dengan hasilnya.",
  },
  {
    q: "Apa yang terjadi jika saya tidak puas dengan hasilnya?",
    a: "Kami akan melakukan revisi sesuai masukan Anda hingga hasilnya sesuai harapan. Kepuasan klien adalah prioritas utama kami.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="relative py-24 md:py-32 bg-background">
      <div className="u-container">
        <ScrollReveal distance={30}>
          <div className="max-w-2xl mb-16 md:mb-20">
            <span className="text-xs font-medium text-white/40 uppercase tracking-[0.2em] mb-4 block">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-heading leading-tight">
              Pertanyaan yang{" "}
              <span className="text-white">Sering Diajukan</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <ScrollReveal key={i} delay={i * 0.03} duration={0.4} distance={20} margin="-40px">
              <div
                className={`rounded-xl border transition-all duration-300 ${
                  openIndex === i
                    ? "border-white/15 bg-white/[0.02]"
                    : "border-white/[0.06] bg-surface/30 hover:border-white/[0.1]"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left"
                  aria-expanded={openIndex === i}
                >
                  <span className={`text-sm font-medium transition-colors duration-300 ${
                    openIndex === i ? "text-white" : "text-white/80"
                  }`}>
                    {faq.q}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === i ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                  >
                    <ChevronDown className={`w-4 h-4 shrink-0 ${
                      openIndex === i ? "text-white/50" : "text-white/30"
                    }`} />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-sm text-paragraph leading-relaxed">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
