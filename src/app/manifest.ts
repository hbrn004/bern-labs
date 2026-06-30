import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Bern Labs — Solusi Digital untuk UMKM & Personal",
    short_name: "Bern Labs",
    description:
      "Bern Labs membantu UMKM dan personal membangun website profesional, website undangan digital, CV profesional, serta proposal bisnis.",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#000000",
    icons: [
      { src: "/favicon.ico", sizes: "any", type: "image/x-icon" },
      { src: "/icon-b-bernlabs.png", sizes: "371x371", type: "image/png" },
      { src: "/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
