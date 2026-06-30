import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import LoadingSplash from "@/components/LoadingSplash";
import ScrollProgress from "@/components/ScrollProgress";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Bern Labs — Jasa Pembuatan Website Indramayu & Undangan Digital",
  description:
    "Bern Labs — studio digital Indramayu. Jasa pembuatan website UMKM, undangan digital, CV profesional, dan proposal bisnis. Harga terjangkau, kualitas premium.",
  keywords: [
    "Website UMKM Indramayu",
    "Jasa Pembuatan Website Indramayu",
    "Website Undangan Digital",
    "CV Profesional",
    "Proposal Bisnis",
    "Studio Digital Indramayu",
    "Pembuatan Website",
    "Bern Labs",
  ],
  openGraph: {
    title: "Bern Labs — Jasa Pembuatan Website Indramayu & Undangan Digital",
    description:
      "Studio digital Indramayu. Jasa pembuatan website UMKM, undangan digital, CV profesional, dan proposal bisnis.",
    url: "https://bernlabs.com",
    siteName: "Bern Labs",
    type: "website",
    locale: "id_ID",
    images: [
      {
        url: "/og-image.png",
        width: 342,
        height: 415,
        alt: "Bern Labs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bern Labs — Jasa Pembuatan Website Indramayu & Undangan Digital",
    description:
      "Studio digital Indramayu. Jasa pembuatan website UMKM, undangan digital, CV profesional, dan proposal bisnis.",
    images: ["/og-image.png"],
  },
  icons: [
    { rel: "icon", url: "/favicon.ico", sizes: "any" },
    { rel: "icon", url: "/icon-b-bernlabs.png", type: "image/png", sizes: "371x371" },
    { rel: "apple-touch-icon", url: "/apple-touch-icon.png", sizes: "180x180" },
  ],
  robots: {
    index: true,
    follow: true,
  },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Bern Labs",
      description:
        "Studio digital yang fokus membantu UMKM dan personal memiliki identitas digital profesional. Layanan: Website UMKM, Undangan Digital, CV Profesional, Proposal Bisnis.",
      url: "https://bernlabs.com",
      telephone: "083154701592",
      email: "",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Indramayu",
        addressRegion: "Jawa Barat",
        addressCountry: "ID",
        streetAddress: "Prapatan Desa Pengauban, Kecamatan Lelea",
      },
      areaServed: "ID",
      priceRange: "Rp50.000 - Rp750.000",
      sameAs: [
        "https://instagram.com/bern_labs",
        "https://tiktok.com/@bern_labs",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "083154701592",
        contactType: "customer service",
        availableLanguage: ["Indonesian"],
      },
    }),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background text-paragraph font-sans bg-noise">
        <LoadingSplash />
        <ScrollProgress />
        <CustomCursor />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
