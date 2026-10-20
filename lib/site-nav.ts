import type { Lang } from "./types";

export type PageKey =
  | "home" | "washer" | "fridge" | "ac" | "brands" | "areas" | "reviews" | "about" | "faq" | "contact";

/* Arabic path for each page; English lives under /en. */
export const PAGE_PATHS: Record<PageKey, string> = {
  home: "/",
  washer: "/washing-machine-repair",
  fridge: "/fridge-repair",
  ac: "/ac-repair",
  brands: "/brands",
  areas: "/areas",
  reviews: "/reviews",
  about: "/about",
  faq: "/faq",
  contact: "/contact",
};

export const pageHref = (key: PageKey, lang: Lang) => {
  const p = PAGE_PATHS[key];
  return lang === "ar" ? p : p === "/" ? "/en" : `/en${p}`;
};

export const otherLangHref = (key: PageKey, lang: Lang) => pageHref(key, lang === "ar" ? "en" : "ar");

export const PAGE_LABELS: Record<PageKey, Record<Lang, string>> = {
  home: { ar: "الرئيسية", en: "Home" },
  washer: { ar: "تصليح الغسالات", en: "Washing machines" },
  fridge: { ar: "تصليح الثلاجات", en: "Fridges" },
  ac: { ar: "تصليح المكيفات", en: "ACs" },
  brands: { ar: "الماركات", en: "Brands" },
  areas: { ar: "الأحياء", en: "Areas we serve" },
  reviews: { ar: "التقييمات", en: "Reviews" },
  about: { ar: "من نحن", en: "About us" },
  faq: { ar: "أسئلة شائعة", en: "FAQ" },
  contact: { ar: "تواصل معنا", en: "Contact" },
};

/** Menu order: services first, then trust, then practical. */
export const MENU: { group: Record<Lang, string>; keys: PageKey[] }[] = [
  { group: { ar: "الخدمات", en: "Services" }, keys: ["washer", "fridge", "ac", "brands"] },
  { group: { ar: "عن الشاطئ", en: "Al-Shati" }, keys: ["reviews", "about", "areas", "faq", "contact"] },
];
