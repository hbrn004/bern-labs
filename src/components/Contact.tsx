"use client";

import { useState } from "react";
import { MessageCircle, Send } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

const layananOptions = [
  "Website UMKM",
  "Website Undangan Digital",
  "CV Profesional",
  "Proposal Bisnis",
  "Lainnya",
];

export default function Contact() {
  const [form, setForm] = useState({
    nama: "",
    wa: "",
    layanan: "",
    pesan: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Halo Bern Labs,\n\nNama: ${form.nama}\nLayanan: ${form.layanan || "Belum dipilih"}\nPesan: ${form.pesan}`;
    window.open(
      `https://wa.me/6283154701592?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  return (
    <section id="kontak" className="relative py-24 md:py-32 bg-background">
      <div className="u-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left — Info */}
          <ScrollReveal direction="left" distance={30}>
            <div>
              <span className="text-xs font-medium text-white/40 uppercase tracking-[0.2em] mb-4 block">
                Kontak
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-heading leading-tight mb-6">
                Mulai Project Anda{" "}
                <span className="text-white">Bersama Kami</span>
              </h2>
              <p className="text-sm text-paragraph leading-relaxed mb-8 max-w-md">
                Isi form atau hubungi kami langsung melalui WhatsApp. Tim kami akan
                merespon dengan cepat dan membantu Anda memulai.
              </p>

              <div className="space-y-4">
                <a
                  href="https://wa.me/6283154701592"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-xl border border-white/[0.06] bg-surface/30 hover:bg-surface/50 hover:border-white/[0.12] transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 group-hover:scale-105 transition-all duration-300">
                    <MessageCircle className="w-4 h-4 text-white/50 group-hover:text-white/70 transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs text-paragraph/60">WhatsApp</p>
                    <p className="text-sm font-medium text-white">0831-5470-1592</p>
                  </div>
                </a>

                <a
                  href="https://instagram.com/bern_labs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-xl border border-white/[0.06] bg-surface/30 hover:bg-surface/50 hover:border-white/[0.12] transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 group-hover:scale-105 transition-all duration-300">
                    <svg className="w-4 h-4 text-white/50 group-hover:text-white/70 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="18" cy="6" r="1"/></svg>
                  </div>
                  <div>
                    <p className="text-xs text-paragraph/60">Instagram</p>
                    <p className="text-sm font-medium text-white">@bern_labs</p>
                  </div>
                </a>

                <a
                  href="https://www.facebook.com/share/1RF4jmq1aS/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-xl border border-white/[0.06] bg-surface/30 hover:bg-surface/50 hover:border-white/[0.12] transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 group-hover:scale-105 transition-all duration-300">
                    <FacebookIcon className="w-4 h-4 text-white/50 group-hover:text-white/70 transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs text-paragraph/60">Facebook</p>
                    <p className="text-sm font-medium text-white">Bern Labs</p>
                  </div>
                </a>

                <a
                  href="https://tiktok.com/@bern_labs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-xl border border-white/[0.06] bg-surface/30 hover:bg-surface/50 hover:border-white/[0.12] transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 group-hover:scale-105 transition-all duration-300">
                    <svg className="w-4 h-4 text-white/50 group-hover:text-white/70 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
                  </div>
                  <div>
                    <p className="text-xs text-paragraph/60">TikTok</p>
                    <p className="text-sm font-medium text-white">@bern_labs</p>
                  </div>
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Right — Form */}
          <ScrollReveal direction="right" distance={30}>
            <form
              onSubmit={handleSubmit}
              className="p-6 md:p-8 rounded-2xl border border-white/[0.06] bg-surface/30 space-y-5 hover:border-white/[0.1] transition-all duration-500"
            >
              <div className="group">
                <label className="block text-xs font-medium text-white/60 mb-2">
                  Nama
                </label>
                <input
                  type="text"
                  required
                  value={form.nama}
                  onChange={(e) => setForm({ ...form, nama: e.target.value })}
                  placeholder="Masukkan nama Anda"
                  className="w-full h-11 px-4 text-sm bg-white/[0.03] border border-white/10 rounded-xl text-white placeholder:text-white/20 focus:outline-none focus:border-white/30 focus:bg-white/[0.05] transition-all duration-300"
                />
              </div>

              <div className="group">
                <label className="block text-xs font-medium text-white/60 mb-2">
                  Nomor WhatsApp
                </label>
                <input
                  type="tel"
                  required
                  value={form.wa}
                  onChange={(e) => setForm({ ...form, wa: e.target.value })}
                  placeholder="08xxxxxxxxxx"
                  className="w-full h-11 px-4 text-sm bg-white/[0.03] border border-white/10 rounded-xl text-white placeholder:text-white/20 focus:outline-none focus:border-white/30 focus:bg-white/[0.05] transition-all duration-300"
                />
              </div>

              <div className="group">
                <label className="block text-xs font-medium text-white/60 mb-2">
                  Layanan yang dipilih
                </label>
                <select
                  value={form.layanan}
                  onChange={(e) => setForm({ ...form, layanan: e.target.value })}
                  className="w-full h-11 px-4 text-sm bg-white/[0.03] border border-white/10 rounded-xl text-white/80 focus:outline-none focus:border-white/30 focus:bg-white/[0.05] transition-all duration-300 appearance-none"
                  style={{
                    backgroundImage:
                      "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23b8b8b8' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 12px center",
                  }}
                >
                  <option value="" className="bg-surface">Pilih layanan</option>
                  {layananOptions.map((opt) => (
                    <option key={opt} value={opt} className="bg-surface">
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div className="group">
                <label className="block text-xs font-medium text-white/60 mb-2">
                  Pesan
                </label>
                <textarea
                  rows={4}
                  value={form.pesan}
                  onChange={(e) => setForm({ ...form, pesan: e.target.value })}
                  placeholder="Deskripsikan kebutuhan Anda..."
                  className="w-full px-4 py-3 text-sm bg-white/[0.03] border border-white/10 rounded-xl text-white placeholder:text-white/20 focus:outline-none focus:border-white/30 focus:bg-white/[0.05] transition-all duration-300 resize-none"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 w-full h-11 text-sm font-medium text-black bg-white rounded-full hover:bg-white/90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                <Send className="w-3.5 h-3.5" />
                Kirim ke WhatsApp
              </button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
