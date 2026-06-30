"use client";

import { MessageCircle, MapPin, Camera, Play } from "lucide-react";
import Image from "next/image";

const footerLinks = [
  { label: "Beranda", href: "#home" },
  { label: "Layanan", href: "#layanan" },
  { label: "Portofolio", href: "#portofolio" },
  { label: "Tentang", href: "#tentang" },
  { label: "FAQ", href: "#faq" },
  { label: "Kontak", href: "#kontak" },
];

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-background">
      {/* Garis tipis di atas footer */}
      <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="u-container py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              {/* Logo */}
              <Image
                src="/icon-b-bernlabs.png"
                alt="Bern Labs"
                width={36}
                height={36}
                className="w-9 h-9 object-contain"
              />
              <span className="text-lg font-heading font-bold text-white tracking-tight leading-none">
                Bern<span className="font-normal text-paragraph"> Labs</span>
              </span>
            </div>
            <p className="mt-3 text-xs text-paragraph/60 leading-relaxed max-w-xs">
              Solusi Digital untuk UMKM & Personal. Berbasis di Indramayu,
              melayani seluruh Indonesia.
            </p>
          </div>

          {/* Menu */}
          <div>
            <h4 className="text-xs font-medium text-white/40 uppercase tracking-[0.1em] mb-4">
              Menu
            </h4>
            <div className="flex flex-col gap-2.5">
              {footerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-xs text-paragraph/60 hover:text-white hover:translate-x-0.5 transition-all duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-medium text-white/40 uppercase tracking-[0.1em] mb-4">
              Sosial Media
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2.5 group">
                <MapPin className="w-3.5 h-3.5 text-white/30 mt-0.5 shrink-0 group-hover:text-white/50 transition-colors duration-300" />
                <p className="text-xs text-paragraph/60">
                  Prapatan Desa Pengauban, Kec. Lelea, Kab. Indramayu, Jawa Barat
                </p>
              </div>
              {[
                { href: "https://wa.me/6283154701592", icon: MessageCircle, label: "0831-5470-1592" },
                { href: "https://instagram.com/bern_labs", icon: Camera, label: "@bern_labs" },
                { href: "https://www.facebook.com/share/1RF4jmq1aS/", icon: FacebookIcon, label: "Bern Labs" },
                { href: "https://tiktok.com/@bern_labs", icon: Play, label: "@bern_labs" },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-xs text-paragraph/60 hover:text-white transition-all duration-300 group"
                >
                  <item.icon className="w-3.5 h-3.5 group-hover:text-white/50 transition-colors" />
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-paragraph/40">
            &copy; {new Date().getFullYear()} Bern Labs. All rights reserved.
          </p>
          <a
            href="https://maps.google.com/?q=Prapatan+Desa+Pengauban+Kecamatan+Lelea+Indramayu+Jawa+Barat"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] text-paragraph/40 hover:text-white transition-colors"
          >
            Buka di Google Maps
          </a>
        </div>
      </div>
    </footer>
  );
}
