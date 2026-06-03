import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://alshatiwebsite.vercel.app"
  ),
  title: "الشاطي للتبريد | Al-Shati Cooling - إصلاح مكيفات وثلاجات وغسالات في جدة",
  description:
    "إصلاح وصيانة المكيفات والثلاجات والغسالات في جدة بخبرة تتجاوز 15 سنة. خدمة سريعة في نفس اليوم، أسعار شفافة، وضمان على الإصلاح. تواصل واتساب أو اتصال.",
  keywords: [
    "إصلاح مكيفات جدة", "صيانة مكيفات", "إصلاح ثلاجات", "إصلاح غسالات",
    "تكييف مركزي", "الشاطي للتبريد", "AC repair Jeddah", "appliance repair Jeddah",
  ],
  openGraph: {
    title: "الشاطي للتبريد | Al-Shati Cooling",
    description:
      "إصلاح وصيانة المكيفات والثلاجات والغسالات في جدة بخبرة تتجاوز 15 سنة. خدمة نفس اليوم وضمان على الإصلاح.",
    type: "website",
    locale: "ar_SA",
    images: [{ url: "/hero.jpg", width: 1536, height: 1024, alt: "الشاطي للتبريد" }],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0f2d4a",
  width: "device-width",
  initialScale: 1,
};


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HVACBusiness",
  name: "الشاطي للتبريد | Al-Shati Cooling",
  image: "/hero.jpg",
  "@id": "https://alshatiwebsite.vercel.app",
  url: "https://alshatiwebsite.vercel.app",
  telephone: "+966580592468",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "7881 Prince Abdullah AlFaisal St, Ash Shamaliyah District",
    addressLocality: "Jeddah",
    postalCode: "23815",
    addressCountry: "SA",
  },
  geo: { "@type": "GeoCoordinates", latitude: 21.7548009, longitude: 39.1046606 },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:30",
      closes: "00:00",
    },
  ],
  sameAs: ["https://www.instagram.com/zohaibaliamir"],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    bestRating: "5",
    ratingCount: "21",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link rel="preload" as="image" href="/hero.jpg" fetchPriority="high" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
