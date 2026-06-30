"use client";

import { MessageCircle, ClipboardList, Palette, Code, RefreshCw, Rocket } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const steps = [
  { icon: MessageCircle, title: "Konsultasi", desc: "Diskusikan kebutuhan dan konsep yang Anda inginkan." },
  { icon: ClipboardList, title: "Riset & Analisis", desc: "Kami analisis kebutuhan dan buat rencana kerja." },
  { icon: Palette, title: "Desain", desc: "Tampilan modern dan sesuai dengan brand Anda." },
  { icon: Code, title: "Pengembangan", desc: "Koding dan integrasi fitur hingga siap pakai." },
  { icon: RefreshCw, title: "Revisi", desc: "Kami lakukan revisi hingga sesuai keinginan." },
  { icon: Rocket, title: "Launch", desc: "Website siap online dan bisa dinikmati audiens." },
];

export default function Process() {
  return (
    <section className="relative py-24 md:py-32 bg-background overflow-hidden">
      {/* Connecting line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/[0.04] to-transparent hidden md:block" />

      <div className="u-container">
        <ScrollReveal distance={30}>
          <div className="max-w-2xl mb-16 md:mb-20">
            <span className="text-xs font-medium text-white/40 uppercase tracking-[0.2em] mb-4 block">
              Proses Kerja
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-heading leading-tight">
              Bagaimana{" "}
              <span className="text-white">Kami Bekerja</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="relative">
          {steps.map((step, i) => (
            <ScrollReveal
              key={i}
              delay={i * 0.08}
              duration={0.5}
              direction={i % 2 === 0 ? "left" : "right"}
              distance={30}
              margin="-60px"
            >
              <div
                className={`flex items-start gap-6 md:gap-10 mb-10 md:mb-14 last:mb-0 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Number */}
                <div className="hidden md:flex w-12 shrink-0 justify-center">
                  <div className="w-10 h-10 rounded-full border border-white/10 bg-surface flex items-center justify-center group-hover:bg-white/10 transition-colors duration-300">
                    <span className="text-xs font-heading font-bold text-white/40">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`flex-1 max-w-md ${
                    i % 2 === 0 ? "md:text-right md:ml-auto" : "md:text-left md:mr-auto"
                  }`}
                >
                  <div className={`inline-flex items-center gap-3 mb-3 ${
                    i % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}>
                    <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center md:hidden">
                      <step.icon className="w-4 h-4 text-white/50" />
                    </div>
                    <div className="hidden md:block">
                      <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-colors duration-300">
                        <step.icon className="w-4 h-4 text-white/50" />
                      </div>
                    </div>
                    <h3 className="text-base font-heading font-semibold text-white">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-sm text-paragraph leading-relaxed">
                    {step.desc}
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
