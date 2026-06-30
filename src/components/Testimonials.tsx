"use client";

import ScrollReveal from "./ScrollReveal";

const testimonials = [
  {
    name: "Fathul Alam",
    initials: "FA",
    status: "Testimoni akan segera hadir",
    text: "Website sedang dalam proses penyelesaian. Testimoni akan ditampilkan setelah proyek selesai.",
  },
  {
    name: "Yanti",
    initials: "Y",
    status: "Testimoni akan segera hadir",
    text: "Masukan dan pengalaman klien akan kami tampilkan setelah layanan selesai diberikan.",
  },
  {
    name: "Abdul Drajat",
    initials: "AD",
    status: "Testimoni akan segera hadir",
    text: "Bern Labs berkomitmen memberikan hasil terbaik. Testimoni asli akan ditambahkan setelah klien memberikan ulasan.",
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-24 md:py-32 bg-secondary">
      <div className="u-container">
        <ScrollReveal distance={30}>
          <div className="max-w-2xl mb-16 md:mb-20">
            <span className="text-xs font-medium text-white/40 uppercase tracking-[0.2em] mb-4 block">
              Testimoni
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-heading leading-tight">
              Kata Mereka tentang{" "}
              <span className="text-white">Bern Labs</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <ScrollReveal key={i} delay={i * 0.08} duration={0.5}>
              <div className="group relative p-6 md:p-8 rounded-2xl border border-white/[0.06] bg-surface/30 hover:bg-surface/50 hover:border-white/[0.12] transition-all duration-500">
                {/* Badge "Segera Hadir" */}
                <div className="absolute top-4 right-4">
                  <span className="inline-block px-3 py-1 text-[10px] font-medium uppercase tracking-[0.12em] rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400/80">
                    Segera Hadir
                  </span>
                </div>

                {/* Avatar — lingkaran dengan inisial */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    <span className="text-sm font-heading font-semibold text-white/50">
                      {t.initials}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">{t.name}</p>
                    <p className="text-xs text-paragraph/50">{t.status}</p>
                  </div>
                </div>

                {/* Isi testimoni — placeholder */}
                <p className="text-sm text-paragraph leading-relaxed italic">
                  &ldquo;{t.text}&rdquo;
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
