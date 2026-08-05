"use client";

import { MapPin } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function Location() {
  return (
    <section className="relative py-24 md:py-32 bg-background">
      <div className="u-container">
        <ScrollReveal direction="up" distance={30}>
          <div className="max-w-2xl mx-auto text-center">
            <span className="text-xs font-medium text-white/40 uppercase tracking-[0.2em] mb-4 block">
              Lokasi
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-heading leading-tight mb-8">
              Temukan{" "}
              <span className="text-white">Kantor Kami</span>
            </h2>

            <div className="inline-flex items-center gap-4 px-6 py-5 rounded-2xl border border-white/[0.06] bg-surface/30">
              <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                <MapPin className="w-4 h-4 text-white/50" />
              </div>
              <p className="text-sm text-paragraph leading-relaxed text-left">
                Prapatan Desa Pengauban
                <br />
                Kecamatan Lelea
                <br />
                Kabupaten Indramayu
                <br />
                Jawa Barat
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
