"use client";

import { Globe, Briefcase, FileText, Bot, Check, Star } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const services = [
  {
    icon: Globe,
    title: "Website",
    pricePrefix: "",
    price: "Rp150.000 – Rp2.000.000",
    popular: true,
    description:
      "Website profesional untuk UMKM, perusahaan, sekolah, komunitas, toko online, landing page, hingga website undangan digital.",
    features: [
      "Website UMKM",
      "Company Profile",
      "Landing Page",
      "Toko Online",
      "Website Sekolah / Komunitas",
      "Website Undangan & Acara Digital",
    ],
  },
  {
    icon: Briefcase,
    title: "Software Bisnis",
    pricePrefix: "",
    price: "Rp1.000.000 – Rp5.000.000",
    popular: false,
    description:
      "Software yang dirancang untuk membantu operasional bisnis menjadi lebih cepat, rapi, dan efisien.",
    features: [
      "Sistem Kasir (POS)",
      "Sistem Inventori",
      "Dashboard Penjualan",
      "CRM Sederhana",
      "Sistem Booking / Reservasi",
    ],
  },
  {
    icon: FileText,
    title: "Dokumen Profesional",
    pricePrefix: "",
    price: "Rp25.000 – Rp300.000",
    popular: false,
    description:
      "Dokumen profesional untuk kebutuhan bisnis maupun personal.",
    features: [
      "CV ATS Friendly",
      "Proposal Bisnis",
      "Company Profile PDF",
      "Portofolio Profesional",
    ],
  },
  {
    icon: Bot,
    title: "AI & Automation",
    pricePrefix: "Mulai dari",
    price: "Rp750.000",
    popular: false,
    description:
      "Otomatisasi berbasis AI untuk meningkatkan pelayanan pelanggan dan efisiensi operasional bisnis.",
    features: ["AI Chatbot"],
  },
];

export default function Pricing() {
  return (
    <section className="relative py-24 md:py-32 bg-secondary">
      <div className="u-container">
        <ScrollReveal distance={30}>
          <div className="max-w-2xl mb-16 md:mb-20">
            <span className="text-xs font-medium text-white/40 uppercase tracking-[0.2em] mb-4 block">
              Layanan Kami
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-heading leading-tight">
              Layanan Digital untuk{" "}
              <span className="text-white">UMKM & Personal</span>
            </h2>
            <p className="mt-4 text-sm text-paragraph max-w-lg">
              Setiap layanan dirancang sesuai kebutuhan bisnis Anda. Harga
              disesuaikan berdasarkan ruang lingkup proyek dan fitur yang dipilih.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((svc, i) => (
            <ScrollReveal
              key={i}
              delay={i * 0.08}
              duration={0.5}
              direction="up"
              distance={30}
              className="h-full"
            >
              <div
                className={`group relative pt-6 px-6 pb-5 h-full flex flex-col rounded-2xl border transition-all duration-500 ${
                  svc.popular
                    ? "border-white/20 bg-white/[0.03] shadow-[0_0_40px_rgba(255,255,255,0.05)] scale-[1.02] lg:scale-105"
                    : "border-white/[0.06] bg-surface/70 hover:bg-surface hover:border-white/[0.12]"
                }`}
              >
                {/* Popular badge */}
                {svc.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 px-3 py-1 bg-white rounded-full">
                    <Star className="w-3 h-3 text-black" />
                    <span className="text-[10px] font-semibold text-black uppercase tracking-wider">
                      Paling Populer
                    </span>
                  </div>
                )}

                {/* Hover glow for non-popular */}
                {!svc.popular && (
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />
                )}

                <div className="relative z-10">
                  <div className={`w-10 h-10 rounded-lg border flex items-center justify-center mb-4 transition-all duration-500 group-hover:scale-105 ${
                    svc.popular
                      ? "bg-white/10 border-white/20 group-hover:bg-white/15"
                      : "bg-white/5 border-white/10 group-hover:bg-white/10"
                  }`}>
                    <svc.icon className={`w-4 h-4 transition-colors duration-300 ${
                      svc.popular ? "text-white/80" : "text-white/60 group-hover:text-white/80"
                    }`} />
                  </div>
                  <h3 className="text-base font-heading font-semibold text-white mb-1">
                    {svc.title}
                  </h3>

                  {/* Harga */}
                  <div className="mb-1">
                    {svc.pricePrefix && (
                      <p className="text-[11px] text-paragraph/50">{svc.pricePrefix}</p>
                    )}
                    <p className={`text-xl font-heading font-bold text-white`}>
                      {svc.price}
                    </p>
                  </div>

                  {/* Deskripsi */}
                  <p className="text-xs text-paragraph/60 leading-relaxed mb-5">
                    {svc.description}
                  </p>

                  <ul className="space-y-2.5 flex-1 mb-0">
                    {svc.features.map((f, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-xs text-paragraph">
                        <Check className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${
                          svc.popular ? "text-white/60" : "text-white/40"
                        }`} />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <p className="mt-6 text-xs text-center text-paragraph/60">
          * Harga disesuaikan berdasarkan ruang lingkup proyek dan fitur yang dipilih.
        </p>

        <p className="mt-3 text-[11px] text-center text-paragraph/40 max-w-xl mx-auto leading-relaxed">
          Seluruh harga di atas merupakan biaya jasa pembuatan. Domain, hosting, atau kebutuhan tambahan lainnya akan disesuaikan dengan kebutuhan proyek.
        </p>
      </div>
    </section>
  );
}
