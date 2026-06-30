"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const navLinks = [
  { label: "Beranda", href: "#home" },
  { label: "Layanan", href: "#layanan" },
  { label: "Portofolio", href: "#portofolio" },
  { label: "Tentang", href: "#tentang" },
  { label: "FAQ", href: "#faq" },
  { label: "Kontak", href: "#kontak" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const scrollYRef = useRef(0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll & preserve scroll position
  useEffect(() => {
    if (mobileOpen) {
      scrollYRef.current = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollYRef.current}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.overflow = "hidden";
      document.body.style.width = "100%";
    } else {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.overflow = "";
      document.body.style.width = "";
      window.scrollTo(0, scrollYRef.current);
    }
    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.overflow = "";
      document.body.style.width = "";
    };
  }, [mobileOpen]);

  const openMenu = useCallback(() => setMobileOpen(true), []);
  const closeMenu = useCallback(() => setMobileOpen(false), []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-black/70 backdrop-blur-xl border-b border-white/[0.06]"
            : "bg-transparent"
        }`}
      >
        <nav className="u-container flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-3 group"
          >
            <Image
              src="/icon-b-bernlabs.png"
              alt="Bern Labs"
              width={36}
              height={36}
              className="w-8 h-8 md:w-9 md:h-9 object-contain"
            />
            <span className="text-xl md:text-2xl font-heading font-bold text-white tracking-tight leading-none">
              Bern<span className="font-normal text-paragraph"> Labs</span>
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-sm text-paragraph hover:text-white focus-visible:text-white focus-visible:outline-none transition-colors duration-300 py-1 group"
              >
                {link.label}
                <span className="absolute -bottom-px left-0 w-0 h-px bg-white/40 transition-all duration-300 group-hover:w-full group-focus-visible:w-full" />
              </a>
            ))}
            <a
              href="https://wa.me/6283154701592?text=Halo%20Bern%20Labs%2C%20saya%20tertarik%20dengan%20layanan%20Anda"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-10 px-5 text-sm font-medium text-black bg-white rounded-full hover:bg-white/90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
            >
              Hubungi Kami
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={openMenu}
            className="md:hidden text-white p-2 hover:scale-110 active:scale-90 transition-transform duration-200 z-[60]"
            aria-label="Buka menu"
          >
            <Menu size={24} />
          </button>
        </nav>
      </header>

      {/* Mobile Full Screen Overlay — rendered OUTSIDE header, fixed to viewport */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 w-full h-full min-h-screen min-h-[100dvh] z-[9999] md:hidden"
            style={{ top: 0, left: 0, right: 0, bottom: 0 }}
          >
            {/* Solid black background — no transparency */}
            <div className="absolute inset-0 bg-black" />

            {/* Close button */}
            <button
              onClick={closeMenu}
              className="absolute top-4 right-4 z-[10000] text-white p-2 hover:scale-110 active:scale-90 transition-transform duration-200"
              aria-label="Tutup menu"
            >
              <X size={28} />
            </button>

            {/* Menu panel — full height, centered content */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="absolute inset-0 bg-black flex flex-col justify-center"
            >
              <div className="px-6 py-8 flex flex-col gap-5">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    className="text-2xl font-heading font-semibold text-white/70 hover:text-white transition-colors py-3 border-b border-white/[0.04]"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="https://wa.me/6283154701592?text=Halo%20Bern%20Labs%2C%20saya%20tertarik%20dengan%20layanan%20Anda"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  className="inline-flex items-center justify-center h-12 text-sm font-medium text-black bg-white rounded-full mt-4 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                >
                  Hubungi Kami
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
