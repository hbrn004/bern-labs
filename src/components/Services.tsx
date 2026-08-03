"use client";

import { Globe, Bot, Briefcase, Megaphone, FileText, Check, ChevronDown } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import AIAgentDetails from "./AIAgentDetails";

interface ServiceItem {
  label: string;
  price: string;
  period?: string;
  tags?: string[];
  expandable?: boolean;
  aiDetails?: boolean;
}

interface ServiceCategory {
  icon: typeof Globe;
  title: string;
  description: string;
  items: ServiceItem[];
  note?: string;
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
      { label: "Website UMKM", price: "Rp250.000 – Rp500.000" },
      { label: "Company Profile", price: "Rp375.000 – Rp750.000" },
      { label: "Landing Page", price: "Rp150.000 – Rp300.000" },
      { label: "Toko Online", price: "Rp1.000.000 – Rp2.000.000" },
      { label: "Website Sekolah / Komunitas", price: "Rp750.000 – Rp1.500.000" },
      {
        label: "Website Undangan & Acara Digital",
        price: "Rp75.000 – Rp250.000",
        expandable: true,
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
      { label: "AI Chatbot Website", price: "Rp1.000.000 – Rp2.000.000" },
      { label: "AI Customer Service WhatsApp", price: "Rp1.500.000 – Rp3.000.000" },
      { label: "AI FAQ Bisnis", price: "Rp750.000 – Rp1.500.000" },
      { label: "Form & Data Automation", price: "Rp1.000.000 – Rp2.000.000" },
      {
        label: "AI Agent untuk Operasional Bisnis",
        price: "Rp5.000.000 – Rp10.000.000",
        expandable: true,
        aiDetails: true,
      },
    ],
  },
  {
    icon: Briefcase,
    title: "Software Bisnis",
    description:
      "Sistem digital yang merapikan pencatatan, mempercepat proses, dan membantu Anda mengambil keputusan lebih baik.",
    items: [
      { label: "Sistem Kasir (POS)", price: "Rp1.500.000 – Rp3.000.000" },
      { label: "Sistem Inventori", price: "Rp1.500.000 – Rp3.000.000" },
      { label: "Dashboard Penjualan", price: "Rp1.000.000 – Rp2.000.000" },
      { label: "CRM Sederhana", price: "Rp2.500.000 – Rp5.000.000" },
      { label: "Sistem Booking / Reservasi", price: "Rp1.500.000 – Rp3.000.000" },
    ],
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description:
      "Strategi pemasaran digital yang terukur untuk menjangkau pelanggan baru dan menumbuhkan bisnis Anda.",
    items: [
      { label: "SEO Website", price: "Rp250.000 – Rp500.000", period: "bulan" },
      { label: "Optimasi Google Business Profile", price: "Rp150.000 – Rp300.000" },
      { label: "Facebook & Instagram Ads Management", price: "Rp375.000 – Rp750.000", period: "bulan" },
      { label: "Google Ads Management", price: "Rp500.000 – Rp1.000.000", period: "bulan" },
    ],
    note: "Budget iklan (Ad Spend) ditanggung oleh klien dan tidak termasuk biaya jasa.",
  },
  {
    icon: FileText,
    title: "Dokumen Profesional",
    description:
      "Dokumen bisnis dan personal dengan desain profesional yang meningkatkan kredibilitas Anda di mata klien.",
    items: [
      { label: "CV ATS Friendly", price: "Rp25.000 – Rp50.000" },
      { label: "Proposal Bisnis", price: "Rp75.000 – Rp150.000" },
      { label: "Company Profile PDF", price: "Rp150.000 – Rp300.000" },
      { label: "Portofolio Profesional", price: "Rp75.000 – Rp150.000" },
    ],
  },
];

function PriceChip({ item }: { item: ServiceItem }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-md border border-white/[0.06] bg-white/[0.02] px-1.5 py-0.5 text-[10px] font-medium text-white/60 tabular-nums transition-colors duration-300 group-hover:border-white/[0.12] group-hover:bg-white/[0.04] group-hover:text-white/75">
      {item.price}
      {item.period && <span className="text-white/35">/ {item.period}</span>}
    </span>
  );
}

function ServiceItemRow({ item }: { item: ServiceItem }) {
  if (item.expandable) {
    return (
      <li
        className={`py-2.5 border-b border-white/[0.03] last:border-0 ${
          item.aiDetails ? "sm:col-span-2" : ""
        }`}
      >
        <details className="group/acc">
          <summary className="flex items-center gap-2 cursor-pointer list-none select-none [&::-webkit-details-marker]:hidden">
            <span className="w-4 h-4 shrink-0 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center group-hover:border-white/[0.14] transition-colors duration-300">
              <Check className="w-2.5 h-2.5 text-white/50 group-hover:text-white/80 transition-colors duration-300" />
            </span>
            <span className="text-sm text-paragraph/80 group-hover:text-paragraph transition-colors duration-300">
              {item.label}
            </span>
            <ChevronDown className="ml-auto w-3.5 h-3.5 text-white/30 transition-transform duration-300 group-open/acc:rotate-180 group-hover:text-white/50" />
          </summary>
          <div className="mt-2 ml-6">
            <PriceChip item={item} />
            {item.tags && (
              <div className="flex flex-wrap gap-1.5 mt-2.5">
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
            {item.aiDetails && <AIAgentDetails />}
          </div>
        </details>
      </li>
    );
  }

  return (
    <li className="py-2.5 border-b border-white/[0.03] last:border-0">
      <div className="flex items-center gap-2">
        <span className="w-4 h-4 shrink-0 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center group-hover:border-white/[0.14] transition-colors duration-300">
          <Check className="w-2.5 h-2.5 text-white/50 group-hover:text-white/80 transition-colors duration-300" />
        </span>
        <span className="text-sm text-paragraph/80 group-hover:text-paragraph transition-colors duration-300">
          {item.label}
        </span>
      </div>
      <div className="ml-6 mt-1.5">
        <PriceChip item={item} />
      </div>
    </li>
  );
}

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
          <div className="flex items-start gap-4 mb-6">
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
          <ul className="grid sm:grid-cols-2 gap-x-8">
            {service.items.map((item) => (
              <ServiceItemRow key={item.label} item={item} />
            ))}
          </ul>

          {/* Category note */}
          {service.note && (
            <p className="mt-4 pt-3 border-t border-white/[0.04] text-[10px] leading-relaxed text-paragraph/40 italic">
              Catatan: {service.note}
            </p>
          )}
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
