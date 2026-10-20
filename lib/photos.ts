import type { Lang } from "./types";

export type PhotoKey =
  | "shop-front"
  | "washer-repair"
  | "washer-door"
  | "fridge-repair"
  | "ac-living"
  | "ac-inspect"
  | "ac-office"
  | "ac-rooftop"
  | "ac-uniform"
  | "central-unit";

export interface Photo {
  src: string;
  w: number;
  h: number;
  alt: Record<Lang, string>;
  caption: Record<Lang, string>;
}

/* Alt text doubles as image SEO: what is shown, where, by whom. */
export const PHOTOS: Record<PhotoKey, Photo> = {
  "shop-front": {
    src: "/photos/shop-front.webp", w: 639, h: 724,
    alt: { ar: "واجهة محل الشاطئ للتبريد في حي الشمالية، جدة", en: "Al-Shati Cooling shop front in Ash Shamaliyah, Jeddah" },
    caption: { ar: "محلنا · حي الشمالية", en: "Our shop · Ash Shamaliyah" },
  },
  "washer-repair": {
    src: "/photos/washer-repair.webp", w: 1254, h: 1254,
    alt: { ar: "فني الشاطئ يصلّح غسالة أتوماتيك في بيت بجدة", en: "Al-Shati technician repairing an automatic washing machine in a Jeddah home" },
    caption: { ar: "تصليح غسالة أتوماتيك", en: "Automatic washer repair" },
  },
  "washer-door": {
    src: "/photos/washer-door.webp", w: 782, h: 1400,
    alt: { ar: "فني يصلّح باب غسالة أتوماتيك", en: "Technician fixing an automatic washing machine door" },
    caption: { ar: "تصليح باب الغسالة", en: "Washer door fix" },
  },
  "fridge-repair": {
    src: "/photos/fridge-repair.webp", w: 1254, h: 1254,
    alt: { ar: "فني الشاطئ يفحص ماتور ثلاجة في المطبخ", en: "Al-Shati technician checking a fridge compressor in the kitchen" },
    caption: { ar: "فحص ماتور الثلاجة", en: "Fridge compressor check" },
  },
  "ac-living": {
    src: "/photos/ac-living.webp", w: 1400, h: 788,
    alt: { ar: "صيانة مكيف سبليت في صالة بيت بجدة", en: "Split AC maintenance in a Jeddah living room" },
    caption: { ar: "صيانة مكيف سبليت", en: "Split AC service" },
  },
  "ac-inspect": {
    src: "/photos/ac-inspect.webp", w: 1254, h: 1254,
    alt: { ar: "فني يفحص مكيف جداري بالكشاف", en: "Technician inspecting a wall-mounted AC with a torch" },
    caption: { ar: "تشخيص عطل المكيف", en: "AC fault diagnosis" },
  },
  "ac-office": {
    src: "/photos/ac-office.webp", w: 1254, h: 1254,
    alt: { ar: "صيانة مكيف كاسيت في مكتب", en: "Cassette AC maintenance in an office" },
    caption: { ar: "تكييف المكاتب", en: "Office AC service" },
  },
  "ac-rooftop": {
    src: "/photos/ac-rooftop.webp", w: 1254, h: 1254,
    alt: { ar: "وحدة تكييف مركزي على سطح مبنى مطل على بحر جدة", en: "Central AC rooftop unit overlooking the Jeddah coast" },
    caption: { ar: "تكييف مركزي", en: "Central AC" },
  },
  "ac-uniform": {
    src: "/photos/ac-uniform.webp", w: 1040, h: 1300,
    alt: { ar: "فني الشاطئ للتبريد بالزي الرسمي يصلّح مكيف سبليت", en: "Al-Shati Cooling technician in uniform repairing a split AC" },
    caption: { ar: "فني الشاطئ", en: "An Al-Shati technician" },
  },
  "central-unit": {
    src: "/photos/central-unit.webp", w: 1040, h: 1297,
    alt: { ar: "فني يصلّح الوحدة الخارجية للمكيف", en: "Technician repairing an outdoor AC unit" },
    caption: { ar: "الوحدة الخارجية", en: "Outdoor unit repair" },
  },
};


type L2 = Record<Lang, string>;

/* Homepage mosaic: five tiles, the first one large. */
export const MOSAIC: { kicker: L2; h2: L2; tiles: { k: PhotoKey; tag: L2; title: L2 }[] } = {
  kicker: { ar: "شغلنا", en: "Our work" },
  h2: { ar: "شغل متقن، عند بابك.", en: "Done right, at your door." },
  tiles: [
    { k: "ac-inspect", tag: { ar: "مكيفات", en: "ACs" }, title: { ar: "نشخّص قبل أي إصلاح", en: "Diagnosis before any repair" } },
    { k: "washer-repair", tag: { ar: "غسالات", en: "Washers" }, title: { ar: "نصلّحها في بيتك", en: "Fixed in your home" } },
    { k: "fridge-repair", tag: { ar: "ثلاجات", en: "Fridges" }, title: { ar: "كل الماركات وكل الأنواع", en: "Every brand, every type" } },
    { k: "shop-front", tag: { ar: "محلنا", en: "Our shop" }, title: { ar: "حي الشمالية، جدة", en: "Ash Shamaliyah, Jeddah" } },
    { k: "ac-uniform", tag: { ar: "فريقنا", en: "Our team" }, title: { ar: "فنيين بالزي الرسمي", en: "Technicians in uniform" } },
  ],
};

/* One still banner per page. `pos` keeps the important part of the photo in frame. */
export const BANNERS: Record<string, { k: PhotoKey; tag: L2; title: L2; pos?: string }> = {
  washer: { k: "washer-repair", tag: { ar: "غسالات", en: "Washers" }, title: { ar: "نصلّحها في مكانها", en: "Repaired where it stands" }, pos: "60% 40%" },
  fridge: { k: "fridge-repair", tag: { ar: "ثلاجات", en: "Fridges" }, title: { ar: "الماتور، الغاز، ومشاكل التبريد", en: "Compressor, gas and cooling faults" }, pos: "50% 55%" },
  ac: { k: "ac-living", tag: { ar: "مكيفات", en: "ACs" }, title: { ar: "سبليت، شباك، ومركزي", en: "Split, window and central" }, pos: "40% 30%" },
  brands: { k: "washer-door", tag: { ar: "كل الماركات", en: "Every brand" }, title: { ar: "من سامسونج لزامل، نعرفها كلها", en: "From Samsung to Zamil, we know them all" }, pos: "50% 45%" },
  areas: { k: "ac-rooftop", tag: { ar: "كل جدة", en: "All of Jeddah" }, title: { ar: "من حي الشمالية لين البحر", en: "From Ash Shamaliyah to the coast" }, pos: "50% 60%" },
  reviews: { k: "ac-uniform", tag: { ar: "فريقنا", en: "Our team" }, title: { ar: "الفنيين اللي يطلبهم عملاؤنا بالاسم", en: "The technicians customers ask for" }, pos: "50% 25%" },
  about: { k: "shop-front", tag: { ar: "محلنا", en: "Our shop" }, title: { ar: "حي الشمالية، جدة", en: "Ash Shamaliyah, Jeddah" }, pos: "50% 22%" },
  faq: { k: "ac-office", tag: { ar: "٢٤/٧", en: "24/7" }, title: { ar: "بيوت ومكاتب", en: "Homes and offices" }, pos: "50% 30%" },
  contact: { k: "shop-front", tag: { ar: "زورنا", en: "Visit us" }, title: { ar: "٧٨٩١ شارع الأمير عبدالله الفيصل", en: "7891 Prince Abdullah AlFaisal St" }, pos: "50% 22%" },
};
