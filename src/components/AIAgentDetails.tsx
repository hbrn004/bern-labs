"use client";

import { Rocket, Settings, Cpu, Cloud, HardDrive, Info, Check } from "lucide-react";

const maintenanceItems = [
  "Monitoring sistem",
  "Perbaikan bug",
  "Update fitur",
  "Optimasi performa",
  "Backup data",
  "Dukungan teknis",
];

function BlockHeader({ icon: Icon, label }: { icon: typeof Rocket; label: string }) {
  return (
    <div className="flex items-center gap-2.5 mb-3">
      <div className="w-8 h-8 shrink-0 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
        <Icon className="w-4 h-4 text-white/70" />
      </div>
      <span className="text-[10px] font-medium text-white/40 uppercase tracking-[0.15em]">
        {label}
      </span>
    </div>
  );
}

export default function AIAgentDetails() {
  return (
    <div className="mt-4 space-y-4">
      {/* Setup Awal + Maintenance Bulanan */}
      <div className="grid sm:grid-cols-2 gap-4">
        {/* Setup Awal */}
        <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 md:p-5">
          <BlockHeader icon={Rocket} label="Harga Setup Awal" />
          <p className="text-lg font-semibold text-white tabular-nums tracking-tight">
            Rp5.000.000 – Rp50.000.000+
          </p>
          <p className="mt-2.5 text-xs text-paragraph/60 leading-relaxed border-l border-white/[0.08] pl-3">
            Harga disesuaikan dengan kebutuhan, kompleksitas sistem, jumlah fitur,
            integrasi, serta workflow yang diinginkan.
          </p>
        </div>

        {/* Maintenance Bulanan */}
        <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 md:p-5">
          <BlockHeader icon={Settings} label="Maintenance Bulanan" />
          <p className="text-lg font-semibold text-white tabular-nums tracking-tight">
            Rp500.000 – Rp5.000.000
          </p>
          <p className="mt-3 text-[10px] font-medium text-white/30 uppercase tracking-[0.12em] mb-2">
            Maintenance dapat mencakup:
          </p>
          <ul className="grid grid-cols-1 gap-1.5">
            {maintenanceItems.map((item) => (
              <li key={item} className="flex items-center gap-2 text-xs text-paragraph/80">
                <span className="w-3.5 h-3.5 shrink-0 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center">
                  <Check className="w-2 h-2 text-white/50" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Biaya AI */}
      <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 md:p-5">
        <BlockHeader icon={Cpu} label="Biaya AI" />
        <div className="grid sm:grid-cols-2 gap-4">
          {/* Cloud AI */}
          <div className="rounded-lg border border-white/[0.04] bg-white/[0.015] p-4">
            <div className="flex items-center gap-2 mb-2.5">
              <Cloud className="w-3.5 h-3.5 text-white/50 shrink-0" />
              <span className="text-xs font-medium text-white/70">Model AI Cloud</span>
            </div>
            <p className="text-xs text-paragraph/60 leading-relaxed">
              Jika menggunakan layanan AI berbasis Cloud (OpenAI, Google Gemini,
              Anthropic, dan layanan sejenis):
            </p>
            <p className="mt-2 text-xs text-paragraph/80 leading-relaxed">
              Biaya API akan mengikuti penggunaan (pay-as-you-go) atau dimasukkan ke
              dalam paket bulanan sesuai kesepakatan.
            </p>
          </div>

          {/* Local AI */}
          <div className="rounded-lg border border-white/[0.04] bg-white/[0.015] p-4">
            <div className="flex items-center gap-2 mb-2.5">
              <HardDrive className="w-3.5 h-3.5 text-white/50 shrink-0" />
              <span className="text-xs font-medium text-white/70">Model AI Lokal</span>
            </div>
            <p className="text-xs text-paragraph/60 leading-relaxed">
              Jika menggunakan Model AI Lokal:
            </p>
            <ul className="mt-2 space-y-1.5 text-xs text-paragraph/80">
              <li className="flex items-start gap-1.5">
                <Check className="w-3 h-3 text-white/40 mt-0.5 shrink-0" />
                Tidak ada biaya API AI.
              </li>
              <li className="flex items-start gap-1.5">
                <Check className="w-3 h-3 text-white/40 mt-0.5 shrink-0" />
                Tetap terdapat biaya server, infrastruktur, dan maintenance apabila
                sistem di-host oleh Bern Labs.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Catatan */}
      <div className="flex items-start gap-3 rounded-xl border border-dashed border-white/[0.08] bg-white/[0.015] p-4">
        <Info className="w-4 h-4 text-white/40 mt-0.5 shrink-0" />
        <p className="text-xs text-paragraph/60 leading-relaxed">
          <span className="font-medium text-white/70">Catatan:</span> Setiap proyek AI
          Agent memiliki kebutuhan yang berbeda, sehingga estimasi biaya akan disesuaikan
          berdasarkan hasil diskusi dan analisis kebutuhan bisnis klien.
        </p>
      </div>
    </div>
  );
}
