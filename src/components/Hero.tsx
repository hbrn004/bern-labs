"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";

const headlineWords = [
  { text: "Membangun", className: "" },
  { text: "Website", className: "" },
  { text: "yang", className: "" },
  { text: "Membantu", className: "" },
  { text: "Bisnis", className: "" },
  { text: "Bertumbuh", className: "text-white" },
];

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const smoothY = useSpring(y, { stiffness: 100, damping: 30 });

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
    >
      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid opacity-40" />

      {/* Radial highlight */}
      <div className="absolute inset-0 bg-radial" />

      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-white/5 blur-[150px] animate-glow" />
      <div className="absolute top-1/3 right-1/3 w-[400px] h-[400px] rounded-full bg-white/[0.03] blur-[100px] animate-pulse-slow" />
      <div className="absolute bottom-1/3 left-1/4 w-[250px] h-[250px] rounded-full bg-white/[0.02] blur-[80px] animate-glow" style={{ animationDelay: "1.5s" }} />

      {/* Floating light orbs */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[30%] left-[15%] w-1 h-1 bg-white rounded-full blur-[2px]"
      />
      <motion.div
        animate={{
          y: [0, 15, 0],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-[55%] right-[20%] w-[3px] h-[3px] bg-white rounded-full blur-[3px]"
      />
      <motion.div
        animate={{
          y: [0, -12, 0],
          opacity: [0.15, 0.4, 0.15],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-[20%] right-[35%] w-[2px] h-[2px] bg-white rounded-full blur-[2px]"
      />

      {/* 3D Robot / Abstract Element — CSS wireframe-style */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[450px] h-[550px] hidden lg:block opacity-30">
        <div className="relative w-full h-full animate-float">
          {/* Glow behind */}
          <div className="absolute inset-0 bg-white/5 blur-[80px] rounded-full" />

          {/* Wireframe abstract shape */}
          <svg
            viewBox="0 0 400 500"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full relative z-10"
          >
            {/* Outer frame */}
            <rect
              x="80" y="60" width="240" height="380" rx="40"
              stroke="white" strokeWidth="0.5" strokeOpacity="0.3"
            >
              <animate attributeName="strokeOpacity" values="0.3;0.5;0.3" dur="4s" repeatCount="indefinite" />
            </rect>
            {/* Inner frame */}
            <rect
              x="110" y="100" width="180" height="180" rx="20"
              stroke="white" strokeWidth="0.5" strokeOpacity="0.2"
            />
            {/* Circle / eye */}
            <circle cx="200" cy="150" r="25" stroke="white" strokeWidth="0.5" strokeOpacity="0.4">
              <animate attributeName="r" values="25;28;25" dur="3s" repeatCount="indefinite" />
              <animate attributeName="strokeOpacity" values="0.4;0.7;0.4" dur="3s" repeatCount="indefinite" />
            </circle>
            {/* Lines */}
            <line x1="150" y1="320" x2="250" y2="320" stroke="white" strokeWidth="0.5" strokeOpacity="0.2" />
            <line x1="140" y1="350" x2="260" y2="350" stroke="white" strokeWidth="0.5" strokeOpacity="0.15" />
            <line x1="160" y1="380" x2="240" y2="380" stroke="white" strokeWidth="0.5" strokeOpacity="0.1" />
            {/* Accent lines */}
            <line x1="320" y1="120" x2="370" y2="95" stroke="white" strokeWidth="0.5" strokeOpacity="0.4">
              <animate attributeName="strokeOpacity" values="0.4;0.7;0.4" dur="2.5s" repeatCount="indefinite" />
            </line>
            <line x1="320" y1="160" x2="370" y2="135" stroke="white" strokeWidth="0.5" strokeOpacity="0.3" />
            <line x1="80" y1="200" x2="30" y2="175" stroke="white" strokeWidth="0.5" strokeOpacity="0.3" />
            {/* Dots */}
            <circle cx="380" cy="85" r="2" fill="white" fillOpacity="0.5">
              <animate attributeName="fillOpacity" values="0.5;0.8;0.5" dur="2s" repeatCount="indefinite" />
            </circle>
            <circle cx="20" cy="165" r="2" fill="white" fillOpacity="0.4">
              <animate attributeName="fillOpacity" values="0.4;0.7;0.4" dur="3s" repeatCount="indefinite" />
            </circle>
            <circle cx="380" cy="420" r="1.5" fill="white" fillOpacity="0.3" />
          </svg>
        </div>
      </div>

      {/* Content */}
      <motion.div
        style={{ y: smoothY, opacity }}
        className="u-container relative z-10 pt-24 pb-16"
      >
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-white/60 border border-white/10 rounded-full hover:border-white/20 transition-colors duration-300">
              <Image
                src="/icon-b-bernlabs.png"
                alt=""
                width={16}
                height={16}
                className="w-4 h-4 object-contain"
              />
              Solusi Digital untuk UMKM & Personal
            </span>
          </motion.div>

          {/* Headline — per-word reveal */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold text-heading leading-[1.1] tracking-tight mb-6 overflow-hidden">
            {headlineWords.map((word, i) => (
              <span key={i} className="inline-block overflow-hidden mr-[0.25em]">
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.3 + i * 0.08,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  className={`inline-block ${word.className}`}
                >
                  {word.text}
                </motion.span>
              </span>
            ))}
          </h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="text-base md:text-lg text-paragraph max-w-2xl leading-relaxed mb-10"
          >
            Dari website UMKM, undangan digital, CV, hingga proposal bisnis —
            kami bantu Anda tampil profesional dan lebih dikenal.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#layanan"
              className="inline-flex items-center justify-center h-12 px-8 text-sm font-medium text-black bg-white rounded-full hover:bg-white/90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
            >
              Lihat Layanan
            </a>
            <a
              href="https://wa.me/6283154701592?text=Halo%20Bern%20Labs%2C%20saya%20tertarik%20dengan%20layanan%20Anda"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-12 px-8 text-sm font-medium text-white border border-white/20 rounded-full hover:bg-white/5 hover:border-white/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
            >
              Hubungi Kami
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}
