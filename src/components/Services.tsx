"use client";

import { Globe, Bot, Briefcase, Megaphone, FileText, Check } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

interface ServiceItem {
  label: string;
  tags?: string[];
}

interface ServiceCategory {
  icon: typeof Globe;
  title: string;
  description: string;
  items: ServiceItem[];
  wide?: boolean;
}

const services: ServiceCategory[] = [
  {
    icon: Globe,
    title: "Website",
    description:
      "Website profesional yang cepat, modern, dan ramah smartphone — siap memperkuat kehadiran digital bisnis Anda.",
    wide: true,
    items: [
      { label: "Website UMKM" },
      { label: "Company Profile" },
      { label: "Landing Page" },
      { label: "Toko Online" },
      { label: "Website Sekolah / Komunitas" },
      {
        label: "Website Undangan & Acara Digital",
        tags: [
          "Pernikahan",
          "Khitanan",
          "Aqiqah",
          "Ulang Tahun",
          "Wisuda",
          "Seminar",
          "Gathering",
          "Reuni",
          "Grand Opening",
          "Tasyakuran",
          "Dan berbagai acara lainnya",
        ],
      },
    ],
  },
  {
    icon: Bot,
    title: "AI & Automation",
    description:
      "Otomatisasi dan kecerdasan buatan yang bekerja 24/7 untuk melayani pelanggan dan meringankan operasional Anda.",
    items: [
      { label: "AI Chatbot Website" },
      { label: "AI Customer Service WhatsApp" },
      { label: "AI FAQ Bisnis" },
      { label: "Form & Data Automation" },
      { label: "AI Agent untuk Operasional Bisnis" },
    ],
  },
  {
    icon: Briefcase,
    title: "Software Bisnis",
    description:
      "Sistem digital yang merapikan pencatatan, mempercepat proses, dan membantu Anda mengambil keputusan lebih baik.",
    items: [
      { label: "Sistem Kasir (POS)" },
      { label: "Sistem Inventori" },
      { label: "Dashboard Penjualan" },
      { label: "CRM Sederhana" },
      { label: "Sistem Booking / Reservasi" },
    ],
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description:
      "Strategi pemasaran digital yang terukur untuk menjangkau pelanggan baru dan menumbuhkan bisnis Anda.",
    items: [
      { label: "SEO Website" },
      { label: "Optimasi Google Business Profile" },
      { label: "Facebook & Instagram Ads" },
      { label: "Google Ads" },
    ],
  },
  {
    icon: FileText,
    title: "Dokumen Profesional",
    description:
      "Dokumen bisnis dan personal dengan desain profesional yang meningkatkan kredibilitas Anda di mata klien.",
    items: [
      { label: "CV ATS Friendly" },
      { label: "Proposal Bisnis" },
      { label: "Company Profile PDF" },
      { label: "Portofolio Profesional" },
    ],
  },
];

function ServiceCard({ service, index }: { service: ServiceCategory; index: number }) {
  const Icon = service.icon;
  return (
    <ScrollReveal delay={index * 0.06} duration={0.5} className={service.wide ? "md:col-span-2" : undefined}>
      <div
        className={`group relative rounded-2xl border border-white/[0.06] bg-surface/50 hover:bg-surface transition-all duration-500 hover:border-white/[0.12] hover:shadow-[0_0_30px_rgba(255,255,255,0.03)] ${
          service.wide ? "p-8 md:p-10" : "p-8 md:p-10 h-full"
        }`}
      >
        {/* Hover glow */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none" />

        {/* Border glow on hover */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-white/[0.04] to-transparent blur-xl pointer-events-none" />

        <div className="relative z-10">
          {/* Header */}
          <div className="flex items-start gap-4 mb-5">
            <div className="w-12 h-12 shrink-0 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 group-hover:border-white/20 group-hover:scale-105 transition-all duration-500">
              <Icon className="w-6 h-6 text-white/70 group-hover:text-white/90 transition-colors duration-500" />
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-heading font-semibold text-white group-hover:text-white transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-xs md:text-sm text-paragraph leading-relaxed mt-1.5 max-w-xl">
                {service.description}
              </p>
            </div>
          </div>

          {/* Service items */}
          <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2.5">
            {service.items.map((item) => (
              <li key={item.label}>
                <div className="flex items-start gap-2.5">
                  <span className="mt-0.5 shrink-0 w-4 h-4 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center group-hover:border-white/[0.14] transition-colors duration-300">
                    <Check className="w-2.5 h-2.5 text-white/50 group-hover:text-white/80 transition-colors duration-300" />
                  </span>
                  <span className="text-sm text-paragraph/80 group-hover:text-paragraph transition-colors duration-300">
                    {item.label}
                  </span>
                </div>

                {/* Event tags for Website Undangan */}
                {item.tags && (
                  <div className="flex flex-wrap gap-1.5 mt-2.5 ml-[26px] mb-1">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`text-[10px] px-2 py-0.5 rounded-full border transition-colors duration-300 ${
                          tag === "Dan berbagai acara lainnya"
                            ? "border-dashed border-white/[0.08] text-white/35"
                            : "border-white/[0.05] bg-white/[0.02] text-paragraph/60 group-hover:border-white/[0.09] group-hover:bg-white/[0.04]"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </ScrollReveal>
  );
}

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

        {/* Category Cards */}
        <div className="grid md:grid-cols-2 gap-5">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
