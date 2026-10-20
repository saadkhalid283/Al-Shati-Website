import type { Lang } from "./types";

export type BrandKind = "washer" | "fridge" | "ac";

/* Brands commonly sold in Saudi Arabia, roughly most-seen first. Al-Shati repairs all of them. */
const brands: { en: string; ar: string; kinds: BrandKind[] }[] = [
  { en: "Samsung", ar: "سامسونج", kinds: ["washer", "fridge", "ac"] },
  { en: "LG", ar: "إل جي", kinds: ["washer", "fridge", "ac"] },
  { en: "Whirlpool", ar: "ويرلبول", kinds: ["washer", "fridge"] },
  { en: "Bosch", ar: "بوش", kinds: ["washer", "fridge"] },
  { en: "Zamil", ar: "زامل", kinds: ["ac"] },
  { en: "Gree", ar: "جري", kinds: ["ac"] },
  { en: "Haier", ar: "هاير", kinds: ["washer", "fridge", "ac"] },
  { en: "Hisense", ar: "هايسنس", kinds: ["washer", "fridge", "ac"] },
  { en: "Midea", ar: "ميديا", kinds: ["washer", "fridge", "ac"] },
  { en: "Siemens", ar: "سيمنس", kinds: ["washer", "fridge"] },
  { en: "Toshiba", ar: "توشيبا", kinds: ["washer", "fridge", "ac"] },
  { en: "Sharp", ar: "شارب", kinds: ["washer", "fridge", "ac"] },
  { en: "Carrier", ar: "كاريير", kinds: ["ac"] },
  { en: "Ariston", ar: "أريستون", kinds: ["washer", "fridge"] },
  { en: "Hitachi", ar: "هيتاشي", kinds: ["fridge", "ac"] },
  { en: "Panasonic", ar: "باناسونيك", kinds: ["fridge", "ac"] },
  { en: "Beko", ar: "بيكو", kinds: ["washer", "fridge"] },
  { en: "Electrolux", ar: "إلكترولوكس", kinds: ["washer", "fridge"] },
  { en: "Indesit", ar: "إنديست", kinds: ["washer", "fridge"] },
  { en: "Super General", ar: "سوبر جنرال", kinds: ["washer", "fridge", "ac"] },
  { en: "Daewoo", ar: "دايو", kinds: ["washer", "fridge"] },
  { en: "Daikin", ar: "دايكن", kinds: ["ac"] },
  { en: "Kelvinator", ar: "كلفينيتور", kinds: ["fridge", "ac"] },
  { en: "Frigidaire", ar: "فريجيدير", kinds: ["fridge"] },
  { en: "Candy", ar: "كاندي", kinds: ["washer"] },
  { en: "Hoover", ar: "هوفر", kinds: ["washer"] },
  { en: "York", ar: "يورك", kinds: ["ac"] },
  { en: "TCL", ar: "تي سي إل", kinds: ["ac"] },
  { en: "General", ar: "جنرال", kinds: ["ac"] },
];

export function brandsFor(kind: BrandKind | "all") {
  return kind === "all" ? brands : brands.filter((b) => b.kinds.includes(kind));
}

const noun: Record<BrandKind | "all", { ar: string; arHas: string; en: string }> = {
  all: { ar: "جهاز", arHas: "وفيه", en: "appliance" },
  washer: { ar: "غسالة", arHas: "وفيها", en: "washing machine" },
  fridge: { ar: "ثلاجة", arHas: "وفيها", en: "fridge" },
  ac: { ar: "مكيف", arHas: "وفيه", en: "AC" },
};

export const brandMessage = (kind: BrandKind | "all", lang: Lang, brand: string) =>
  lang === "ar"
    ? `السلام عليكم، عندي ${noun[kind].ar} ${brand} ${noun[kind].arHas} عطل، أحتاج فني`
    : `Hello, my ${brand} ${noun[kind].en} has a fault and I need a technician`;

export const brandCopy: Record<Lang, { h2: string; sub: Record<BrandKind | "all", string> }> = {
  ar: {
    h2: "كل الماركات.",
    sub: {
      all: "نصلّح كل الماركات المنتشرة في السعودية. اضغط على ماركة جهازك وأرسلها واتساب.",
      washer: "نصلّح غسالات كل الماركات المنتشرة في السعودية. اضغط على ماركة غسالتك.",
      fridge: "نصلّح ثلاجات كل الماركات المنتشرة في السعودية. اضغط على ماركة ثلاجتك.",
      ac: "نصلّح مكيفات كل الماركات المنتشرة في السعودية. اضغط على ماركة مكيفك.",
    },
  },
  en: {
    h2: "Every brand.",
    sub: {
      all: "We repair every brand sold in Saudi Arabia. Tap yours to send it on WhatsApp.",
      washer: "We repair washing machines of every brand sold in Saudi. Tap yours.",
      fridge: "We repair fridges of every brand sold in Saudi. Tap yours.",
      ac: "We repair ACs of every brand sold in Saudi. Tap yours.",
    },
  },
};
