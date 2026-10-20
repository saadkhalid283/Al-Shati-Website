import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "الشاطئ للتبريد | Al-Shati Cooling",
    short_name: "الشاطئ للتبريد",
    description: "إصلاح وصيانة المكيفات والثلاجات والغسالات في جدة",
    start_url: "/",
    display: "standalone",
    dir: "rtl",
    lang: "ar",
    background_color: "#ffffff",
    theme_color: "#ff4f17",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
