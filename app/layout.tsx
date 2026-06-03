import type { Metadata, Viewport } from "next";
import "./globals.css";

/* ── Set your primary production domain here (no trailing slash) ──
   Your Vercel primary domain looked like alshati.vercel.app.
   When you add a custom domain later, change this one line.        */
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://alshaticooling.com";

const TITLE_AR = "الشاطي للتبريد | إصلاح مكيفات وثلاجات وغسالات في جدة";
const DESC_AR =
  "الشاطي للتبريد في جدة: إصلاح وصيانة المكيفات (شباك، سبليت، مركزي)، الثلاجات والغسالات بخبرة تتجاوز 15 سنة. خدمة نفس اليوم، أسعار شفافة، وضمان على الإصلاح. تواصل واتساب أو اتصال.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE_AR,
    template: "%s | الشاطي للتبريد",
  },
  description: DESC_AR,
  applicationName: "الشاطي للتبريد",
  authors: [{ name: "الشاطي للتبريد" }],
  creator: "الشاطي للتبريد",
  publisher: "الشاطي للتبريد",
  category: "Home Services",
  keywords: [
    "إصلاح مكيفات جدة", "صيانة مكيفات جدة", "فني مكيفات جدة", "تصليح مكيفات شمال جدة",
    "إصلاح مكيفات سبليت", "إصلاح مكيفات شباك", "تكييف مركزي جدة",
    "إصلاح ثلاجات جدة", "صيانة ثلاجات", "إصلاح غسالات جدة", "صيانة غسالات أتوماتيك",
    "صيانة الأجهزة المنزلية جدة", "حي الشمالية جدة", "الشاطي للتبريد",
    "AC repair Jeddah", "AC maintenance Jeddah", "fridge repair Jeddah",
    "washing machine repair Jeddah", "appliance repair Jeddah", "HVAC Jeddah",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ar_SA",
    alternateLocale: ["en_US"],
    siteName: "الشاطي للتبريد | Al-Shati Cooling",
    url: SITE_URL,
    title: "الشاطي للتبريد | إصلاح وصيانة المكيفات والثلاجات والغسالات في جدة",
    description:
      "خبرة تتجاوز 15 سنة في إصلاح المكيفات والثلاجات والغسالات بجدة. خدمة نفس اليوم وضمان على الإصلاح.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "الشاطي للتبريد - إصلاح وصيانة المكيفات والثلاجات والغسالات في جدة",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "الشاطي للتبريد | إصلاح مكيفات وثلاجات وغسالات في جدة",
    description:
      "خبرة تتجاوز 15 سنة. خدمة نفس اليوم، أسعار شفافة، وضمان على الإصلاح في جدة.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  formatDetection: { telephone: true, email: false, address: false },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  // Local-SEO geo signals for the Jeddah / Makkah region
  other: {
    "geo.region": "SA-02",
    "geo.placename": "Jeddah",
    "geo.position": "21.7548009;39.1046606",
    ICBM: "21.7548009, 39.1046606",
  },
};

export const viewport: Viewport = {
  themeColor: "#0f2d4a",
  width: "device-width",
  initialScale: 1,
};

/* ── Rich local-business structured data (advanced, Jeddah-focused) ── */
const services = [
  ["إصلاح مكيفات شباك", "Window AC repair"],
  ["إصلاح مكيفات سبليت", "Split AC repair"],
  ["صيانة التكييف المركزي", "Central AC service"],
  ["إصلاح الغسالات العادية", "Regular washing machine repair"],
  ["إصلاح الغسالات الأوتوماتيك", "Automatic washing machine repair"],
  ["إصلاح الثلاجات", "Refrigerator repair"],
];
const districts = [
  "حي الشمالية", "الحمراء", "الروضة", "السلامة", "النعيم", "الصفا", "المروة", "أبحر",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HVACBusiness",
  "@id": `${SITE_URL}/#business`,
  name: "الشاطي للتبريد",
  alternateName: "Al-Shati Cooling",
  description: DESC_AR,
  url: SITE_URL,
  image: `${SITE_URL}/og-image.png`,
  logo: `${SITE_URL}/og-image.png`,
  telephone: "+966580592468",
  priceRange: "$$",
  currenciesAccepted: "SAR",
  paymentAccepted: "Cash, Mada, Bank Transfer",
  knowsLanguage: ["ar", "en"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "7881 Prince Abdullah AlFaisal St, Ash Shamaliyah District",
    addressLocality: "Jeddah",
    addressRegion: "Makkah Province",
    postalCode: "23815",
    addressCountry: "SA",
  },
  geo: { "@type": "GeoCoordinates", latitude: 21.7548009, longitude: 39.1046606 },
  hasMap:
    "https://www.google.com/maps?cid=1153484223371836005",
  areaServed: [
    { "@type": "City", name: "Jeddah" },
    ...districts.map((d) => ({ "@type": "Place", name: d })),
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday",
      ],
      opens: "08:30",
      closes: "00:00",
    },
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+966580592468",
    contactType: "customer service",
    areaServed: "SA",
    availableLanguage: ["ar", "en"],
  },
  sameAs: ["https://www.instagram.com/zohaibaliamir"],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    bestRating: "5",
    ratingCount: "21",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "خدمات الإصلاح والصيانة",
    itemListElement: services.map(([ar, en]) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: ar, alternateName: en, areaServed: "Jeddah" },
    })),
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
