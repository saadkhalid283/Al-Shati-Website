import type { Metadata } from "next";
import { SITE_URL, PHONE_PRIMARY, INSTAGRAM_URL, MAPS_URL } from "./constants";
import type { Lang } from "./types";

const copy = {
  ar: {
    title: "الشاطئ للتبريد | تصليح غسالات وثلاجات ومكيفات في جدة",
    desc: "تصليح الغسالات والثلاجات والمكيفات في جدة، كل الماركات. فني نفس اليوم، أسعار واضحة وضمان على الإصلاح. أكثر من ٢٥ سنة. اتصل أو راسلنا واتساب.",
    ogTitle: "الشاطئ للتبريد | إصلاح وصيانة المكيفات والثلاجات والغسالات في جدة",
    ogDesc: "خبرة تتجاوز 25 سنة في إصلاح المكيفات والثلاجات والغسالات بجدة. خدمة نفس اليوم وضمان على الإصلاح.",
    ogAlt: "الشاطئ للتبريد - إصلاح وصيانة المكيفات والثلاجات والغسالات في جدة",
    locale: "ar_SA",
    altLocale: "en_US",
    template: "%s | الشاطئ للتبريد",
  },
  en: {
    title: "Washer, Fridge & AC Repair in Jeddah | Al-Shati Cooling",
    desc: "Washing machine, fridge and AC repair in Jeddah. Every brand, same-day technician, clear prices and a guarantee. 25+ years. Call or WhatsApp.",
    ogTitle: "Al-Shati Cooling | AC, Fridge & Washer Repair in Jeddah",
    ogDesc: "25+ years repairing ACs, fridges and washing machines in Jeddah. Same-day service and a repair guarantee.",
    ogAlt: "Al-Shati Cooling, AC, fridge and washing machine repair in Jeddah",
    locale: "en_US",
    altLocale: "ar_SA",
    template: "%s | Al-Shati Cooling",
  },
} as const;

const keywords = [
  "تصليح غسالات جدة", "صيانة غسالات جدة", "تصليح غسالات أتوماتيك", "فني غسالات جدة",
  "تصليح ثلاجات جدة", "صيانة ثلاجات جدة", "تعبئة غاز ثلاجة", "فني ثلاجات جدة",
  "تصليح غسالات سامسونج جدة", "تصليح غسالات ال جي جدة", "صيانة غسالات بوش جدة", "تصليح غسالات ويرلبول",
  "تصليح ثلاجات سامسونج جدة", "تصليح ثلاجات ال جي جدة", "صيانة ثلاجات هيتاشي", "تصليح مكيفات زامل جدة", "تصليح مكيفات جري",
  "Samsung washing machine repair Jeddah", "LG fridge repair Jeddah", "Bosch washer repair Jeddah",
  "إصلاح مكيفات جدة", "صيانة مكيفات جدة", "فني مكيفات جدة", "تصليح مكيفات شمال جدة",
  "إصلاح مكيفات سبليت", "إصلاح مكيفات شباك", "تكييف مركزي جدة", "تعبئة فريون جدة",
  "إصلاح ثلاجات جدة", "صيانة ثلاجات", "إصلاح غسالات جدة", "صيانة غسالات أتوماتيك",
  "صيانة الأجهزة المنزلية جدة", "حي الشمالية جدة", "الشاطئ للتبريد",
  "AC repair Jeddah", "AC maintenance Jeddah", "fridge repair Jeddah",
  "washing machine repair Jeddah", "appliance repair Jeddah", "HVAC Jeddah",
];

/** Arabic lives at the root, English under /en. `path` is the Arabic path ("/" or "/x"). */
export function localePaths(path: string) {
  const ar = path;
  const en = path === "/" ? "/en" : `/en${path}`;
  return { ar, en };
}

export function siteMetadata(lang: Lang, path = "/"): Metadata {
  const c = copy[lang];
  const { ar, en } = localePaths(path);
  return {
    metadataBase: new URL(SITE_URL),
    title: { default: c.title, template: c.template },
    description: c.desc,
    applicationName: lang === "ar" ? "الشاطئ للتبريد" : "Al-Shati Cooling",
    category: "Home Services",
    keywords,
    alternates: {
      canonical: lang === "ar" ? ar : en,
      languages: { ar, en, "x-default": ar },
    },
    openGraph: {
      type: "website",
      locale: c.locale,
      alternateLocale: [c.altLocale],
      siteName: "الشاطئ للتبريد | Al-Shati Cooling",
      url: lang === "ar" ? ar : en,
      title: c.ogTitle,
      description: c.ogDesc,
      images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: c.ogAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: c.ogTitle,
      description: c.ogDesc,
      images: ["/og-image.jpg"],
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
    other: {
      "geo.region": "SA-02",
      "geo.placename": "Jeddah",
      "geo.position": "21.7548009;39.1046606",
      ICBM: "21.7548009, 39.1046606",
    },
  };
}

const services: [string, string][] = [
  ["إصلاح مكيفات شباك", "Window AC repair"],
  ["إصلاح مكيفات سبليت", "Split AC repair"],
  ["صيانة التكييف المركزي", "Central AC service"],
  ["إصلاح الغسالات العادية", "Regular washing machine repair"],
  ["إصلاح الغسالات الأوتوماتيك", "Automatic washing machine repair"],
  ["إصلاح الثلاجات", "Refrigerator repair"],
  ["تركيب المكيفات", "AC installation"],
  ["تنظيف وتعقيم المكيفات", "AC cleaning and sanitizing"],
];
const districts = [
  "حي الشمالية", "الحمراء", "الروضة", "السلامة", "النعيم", "الصفا", "المروة", "أبحر",
];

/* No self-served aggregateRating: Google ignores it for LocalBusiness and can flag it.
   The real stars come from the Google Business Profile linked via hasMap. */
export function businessJsonLd(lang: Lang) {
  const isAr = lang === "ar";
  return {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    "@id": `${SITE_URL}/#business`,
    name: isAr ? "الشاطئ للتبريد" : "Al-Shati Cooling",
    alternateName: isAr ? "Al-Shati Cooling" : "الشاطئ للتبريد",
    description: copy[lang].desc,
    url: isAr ? SITE_URL : `${SITE_URL}/en`,
    image: [`${SITE_URL}/og-image.jpg`, `${SITE_URL}/hero.jpg`],
    logo: `${SITE_URL}/logo.png`,
    telephone: PHONE_PRIMARY,
    priceRange: "$$",
    currenciesAccepted: "SAR",
    paymentAccepted: "Cash, Mada, Bank Transfer",
    knowsLanguage: ["ar", "en"],
    address: {
      "@type": "PostalAddress",
      streetAddress: "7891 Prince Abdullah AlFaisal St, Ash Shamaliyah District",
      addressLocality: "Jeddah",
      addressRegion: "Makkah Province",
      postalCode: "23815",
      addressCountry: "SA",
    },
    geo: { "@type": "GeoCoordinates", latitude: 21.7548009, longitude: 39.1046606 },
    hasMap: MAPS_URL,
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
        opens: "00:00",
        closes: "23:59",
      },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: PHONE_PRIMARY,
      contactType: "customer service",
      areaServed: "SA",
      availableLanguage: ["ar", "en"],
    },
    sameAs: [INSTAGRAM_URL, MAPS_URL],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: isAr ? "خدمات الإصلاح والصيانة" : "Repair and maintenance services",
      itemListElement: services.map(([ar, en]) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: isAr ? ar : en,
          alternateName: isAr ? en : ar,
          areaServed: "Jeddah",
        },
      })),
    },
  };
}

export const jsonLdHtml = (data: unknown) => ({
  __html: JSON.stringify(data).replace(/</g, "\\u003c"),
});

/** Metadata for an appliance landing page: shared site tags with its own title, description and URLs. */
export function landingMetadata(
  lang: Lang,
  path: string,
  title: string,
  description: string,
  image: string
): Metadata {
  const base = siteMetadata(lang, path);
  const images = [{ url: image, width: 1200, height: 630, alt: title }];
  return {
    ...base,
    title,
    description,
    openGraph: { ...base.openGraph, title, description, images },
    twitter: { ...base.twitter, title, description, images: [image] },
  };
}
