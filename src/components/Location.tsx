"use client";

import { MapPin, ExternalLink } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function Location() {
  return (
    <section className="relative py-24 md:py-32 bg-background">
      <div className="u-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Info */}
          <ScrollReveal direction="left" distance={30}>
            <div>
              <span className="text-xs font-medium text-white/40 uppercase tracking-[0.2em] mb-4 block">
                Lokasi
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-heading leading-tight mb-6">
                Temukan{" "}
                <span className="text-white">Kantor Kami</span>
              </h2>

              <div className="flex items-start gap-4 mb-8">
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 mt-1 group-hover:bg-white/10 transition-colors duration-300">
                  <MapPin className="w-4 h-4 text-white/50" />
                </div>
                <div>
                  <p className="text-sm text-paragraph leading-relaxed">
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

              <a
                href="https://maps.google.com/?q=Prapatan+Desa+Pengauban+Kecamatan+Lelea+Indramayu+Jawa+Barat"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 h-10 px-5 text-xs font-medium text-white border border-white/20 rounded-full hover:bg-white/5 hover:border-white/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                Buka di Google Maps
              </a>
            </div>
          </ScrollReveal>

          {/* Right — Map */}
          <ScrollReveal direction="right" distance={30}>
            <div className="relative group">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-white/[0.06] bg-surface/30 transition-all duration-500 group-hover:border-white/[0.12]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3966.443!2d108.233!3d-6.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwMzAnMDAuMCJTIDEwOMKwMTQnMDAuMCJF!5e0!3m2!1sid!2sid!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "invert(1) hue-rotate(180deg) saturate(0.5)" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Bern Labs Location"
                  className="w-full h-full"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
