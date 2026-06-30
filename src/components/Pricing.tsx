"use client";

import { Globe, Diamond, FileText, FileBadge, Check, Star } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const packages = [
  {
    icon: Globe,
    title: "Website UMKM",
    pricePrefix: "Mulai dari",
    price: "Rp200.000 - Rp300.000",
    popular: true,
    note: "Harga menyesuaikan jumlah halaman dan fitur.",
    features: [
      "Desain modern & responsif",
      "Hingga 5 halaman",
      "SEO dasar",
      "Form kontak",
      "Gratis revisi 2x",
    ],
  },
  {
    icon: Diamond,
    title: "Website Undangan Digital",
    pricePrefix: "",
    price: "Rp75.000 - Rp150.000",
    popular: false,
    note: "Harga menyesuaikan template dan fitur.",
    features: [
      "Desain elegan & modern",
      "Galeri foto",
      "Informasi acara lengkap",
      "RSVP online",
      "Google Maps lokasi",
      "Gratis revisi 3x",
    ],
  },
  {
    icon: FileText,
    title: "CV Profesional",
    pricePrefix: "",
    price: "Rp50.000 - Rp100.000",
    popular: false,
    note: "Menyesuaikan desain dan kebutuhan.",
    features: [
      "Desain ramah ATS",
      "Format PDF & DOCX",
      "Infografis pengalaman",
      "Link portofolio",
      "QR Code terintegrasi",
      "Gratis revisi 2x",
    ],
  },
  {
    icon: FileBadge,
    title: "Proposal Bisnis",
    pricePrefix: "",
    price: "Rp50.000 - Rp150.000",
    popular: false,
    note: "Harga menyesuaikan tingkat kompleksitas dan kebutuhan dokumen.",
    features: [
      "Desain korporat profesional",
      "10-15 halaman",
      "Grafik & infografis",
      "Analisis kompetitor",
      "Proyeksi keuangan",
      "Gratis revisi 2x",
    ],
  },
];

export default function Pricing() {
  return (
    <section className="relative py-24 md:py-32 bg-secondary">
      <div className="u-container">
        <ScrollReveal distance={30}>
          <div className="max-w-2xl mb-16 md:mb-20">
            <span className="text-xs font-medium text-white/40 uppercase tracking-[0.2em] mb-4 block">
              Paket Layanan
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-heading leading-tight">
              Harga Terjangkau,{" "}
              <span className="text-white">Kualitas Premium</span>
            </h2>
            <p className="mt-4 text-sm text-paragraph max-w-lg">
              Harga dapat menyesuaikan kebutuhan dan fitur yang dipilih.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {packages.map((pkg, i) => (
            <ScrollReveal
              key={i}
              delay={i * 0.08}
              duration={0.5}
              direction="up"
              distance={30}
            >
              <div
                className={`group relative p-6 rounded-2xl border transition-all duration-500 ${
                  pkg.popular
                    ? "border-white/20 bg-white/[0.03] shadow-[0_0_40px_rgba(255,255,255,0.05)] scale-[1.02] lg:scale-105"
                    : "border-white/[0.06] bg-surface/70 hover:bg-surface hover:border-white/[0.12]"
                }`}
              >
                {/* Popular badge */}
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 px-3 py-1 bg-white rounded-full">
                    <Star className="w-3 h-3 text-black" />
                    <span className="text-[10px] font-semibold text-black uppercase tracking-wider">
                      Paling Populer
                    </span>
                  </div>
                )}

                {/* Hover glow for non-popular */}
                {!pkg.popular && (
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />
                )}

                <div className="relative z-10">
                  <div className={`w-10 h-10 rounded-lg border flex items-center justify-center mb-4 transition-all duration-500 group-hover:scale-105 ${
                    pkg.popular
                      ? "bg-white/10 border-white/20 group-hover:bg-white/15"
                      : "bg-white/5 border-white/10 group-hover:bg-white/10"
                  }`}>
                    <pkg.icon className={`w-4 h-4 transition-colors duration-300 ${
                      pkg.popular ? "text-white/80" : "text-white/60 group-hover:text-white/80"
                    }`} />
                  </div>
                  <h3 className="text-base font-heading font-semibold text-white mb-1">
                    {pkg.title}
                  </h3>

                  {/* Harga */}
                  <div className="mb-1">
                    {pkg.pricePrefix && (
                      <p className="text-[11px] text-paragraph/50">{pkg.pricePrefix}</p>
                    )}
                    <p className={`text-xl font-heading font-bold text-white`}>
                      {pkg.price}
                    </p>
                  </div>

                  {/* Note */}
                  <p className="text-[10px] text-paragraph/50 mb-5 leading-relaxed">
                    {pkg.note}
                  </p>

                  <ul className="space-y-2.5 mb-6">
                    {pkg.features.map((f, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-xs text-paragraph">
                        <Check className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${
                          pkg.popular ? "text-white/60" : "text-white/40"
                        }`} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`https://wa.me/6283154701592?text=Halo%20Bern%20Labs%2C%20saya%20tertarik%20dengan%20paket%20${encodeURIComponent(pkg.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center justify-center w-full h-10 text-xs font-medium rounded-full transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] ${
                      pkg.popular
                        ? "text-black bg-white hover:bg-white/90"
                        : "text-black bg-white hover:bg-white/90"
                    }`}
                  >
                    Pilih Paket
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <p className="mt-6 text-xs text-center text-paragraph/60">
          * Harga dapat menyesuaikan kebutuhan dan fitur yang dipilih.
        </p>

        <p className="mt-3 text-[11px] text-center text-paragraph/40 max-w-xl mx-auto leading-relaxed">
          Seluruh harga di atas merupakan biaya jasa pembuatan. Domain, hosting, atau kebutuhan tambahan lainnya akan disesuaikan dengan kebutuhan proyek.
        </p>
      </div>
    </section>
  );
}
