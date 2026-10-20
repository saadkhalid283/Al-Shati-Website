import { RATING, REVIEW_COUNT } from "./constants";
import type { Lang } from "./types";

export const ar = (v: string | number) =>
  String(v).replace(/\d/g, (d) => "٠١٢٣٤٥٦٧٨٩"[+d]).replace(".", "٫");

export interface HeatCopy {
  dir: "rtl" | "ltr";
  brand: string;
  nav: { services: string; reviews: string; faq: string; contact: string };
  langLink: { href: string; label: string; hrefLang: Lang };
  topCall: string;
  hero: {
    label: string;
    fallback: string;
    h1: string;
    h1b: string;
    /** three short lines, one per appliance */
    stanza: string[];
    board: { title: string; broken: string; fixed: string };
    sub: string;
    waNote: string;
    call: string;
    wa: string;
    waMsg: string;
    proof: string;
    hours: string;
    badge: { big: string; small: string };
  };
  services: {
    h2: string;
    sub: string;
    tag: string;
    more: string;
    /** href = own landing page; otherwise the row opens WhatsApp with msg */
    items: { name: string; desc: string; msg: string; href?: string }[];
    extras: string[];
  };
  pick: { label: string; tap: string; items: { name: string; note: string; href: string }[] };
  stats: { value: string; label: string }[];
  reviews: { h2: string; sub: string; from: string; guide: string; all: string };
  faq: { h2: string; items: { q: string; a: string }[] };
  contact: {
    h2: string;
    sub: string;
    address: string;
    addressLabel: string;
    hoursLabel: string;
    hours: string;
    phonesLabel: string;
    primary: string;
    insta: string;
    mapTitle: string;
    districtsLabel: string;
    districts: string[];
  };
  final: { h2: string; /** {t} is replaced with the live temperature */ line: string; lineFallback: string; call: string; wa: string };
  sticky: { call: string; wa: string };
  footer: { tag: string; rights: string; pages: { label: string; href: string }[] };
}

export const heatCopy: Record<Lang, HeatCopy> = {
  ar: {
    dir: "rtl",
    brand: "الشاطئ للتبريد",
    nav: { services: "الخدمات", reviews: "التقييمات", faq: "أسئلة", contact: "الموقع" },
    langLink: { href: "/en", label: "English", hrefLang: "en" },
    topCall: "اتصل",
    hero: {
      label: "جدة · الحين",
      fallback: "حر.",
      h1: "جدة حارّة.",
      h1b: "بيتك لازم يبرد.",
      stanza: ["الغسالة ما تعصر", "الثلاجة ما تبرّد", "المكيف ما يهبّ"],
      board: { title: "اليوم في جدة", broken: "عطلان", fixed: "تصلّح" },
      sub: "اتصال واحد، وفني الشاطئ عندك اليوم. أكثر من ٢٥ سنة نرجّع بيوت جدة تشتغل.",
      waNote: "نرد خلال دقائق",
      call: "اتصل الحين",
      wa: "واتساب",
      waMsg: "السلام عليكم، عندي جهاز عطلان وأحتاج فني اليوم",
      proof: `★ ${ar(RATING)} على جوجل · ${ar(REVIEW_COUNT)} تقييم`,
      hours: "خدمة ٢٤ ساعة، ٧ أيام في الأسبوع",
      badge: { big: "24/7", small: "خدمة" },
    },
    services: {
      h2: "ونبرّدها.",
      sub: "اضغط على جهازك وتنفتح لك رسالة واتساب جاهزة.",
      tag: "اطلب",
      more: "التفاصيل",
      items: [
        { name: "غسالات", desc: "عادي وأتوماتيك: ما تعصر، ما تصرّف، تسرّب، أو تطلع خطأ.", msg: "السلام عليكم، أبغى إصلاح غسالة", href: "/washing-machine-repair" },
        { name: "ثلاجات", desc: "بجميع أنواعها: ما تبرد، تسرّب، ثلج زايد، أو تعبئة غاز.", msg: "السلام عليكم، أبغى إصلاح ثلاجة", href: "/fridge-repair" },
        { name: "مكيفات سبليت", desc: "تشخيص دقيق، إصلاح الأعطال وتعبئة الفريون.", msg: "السلام عليكم، أبغى إصلاح مكيف سبليت" },
        { name: "مكيفات شباك", desc: "صيانة وإصلاح لكل الأنواع.", msg: "السلام عليكم، أبغى إصلاح مكيف شباك" },
        { name: "تكييف مركزي", desc: "صيانة وإصلاح أنظمة التكييف المركزي للبيوت.", msg: "السلام عليكم، أبغى صيانة تكييف مركزي" },
      ],
      extras: ["تركيب مكيفات", "صيانة دورية", "تنظيف وتعقيم المكيفات"],
    },
    pick: {
      label: "اضغط على الجهاز للحجز",
      tap: "احجز",
      items: [
        { name: "غسالات", note: "عادي وأتوماتيك", href: "/washing-machine-repair" },
        { name: "ثلاجات", note: "بجميع أنواعها", href: "/fridge-repair" },
        { name: "مكيفات", note: "سبليت، شباك، مركزي", href: "/ac-repair" },
      ],
    },
    stats: [
      { value: ar(RATING), label: "تقييمنا على جوجل" },
      { value: "+٢٥", label: "سنة في جدة" },
      { value: "اليوم", label: "نوصلك غالباً بنفس اليوم" },
    ],
    reviews: {
      h2: "اسأل جيرانك.",
      sub: "كلام عملائنا على خرائط جوجل، زي ما كتبوه.",
      from: "تقييم جوجل",
      guide: "مرشد محلي",
      all: "اقرأ كل التقييمات على جوجل",
    },
    faq: {
      h2: "قبل ما تتصل.",
      items: [
        { q: "تجون نفس اليوم؟", a: "غالباً نعم. كلّمنا اتصال أو واتساب، وعادة يوصلك الفني بنفس اليوم." },
        { q: "وش الأجهزة اللي تصلحونها؟", a: "الغسالات العادي والأتوماتيك، الثلاجات بجميع أنواعها، والمكيفات (سبليت، شباك، مركزي). ونركّب وننظف المكيفات بعد." },
        { q: "تصلحون أي ماركة؟", a: "إيه، كل الماركات المنتشرة في السعودية: سامسونج، إل جي، ويرلبول، بوش، هاير، هايسنس، ميديا، زامل، جري، كاريير، توشيبا، شارب وغيرها." },
        { q: "أي أحياء تخدمون؟", a: "محلنا في حي الشمالية، ونخدم الشمالية والحمراء والروضة والسلامة والنعيم والصفا والمروة وأبحر وباقي جدة." },
        { q: "فيه ضمان على الإصلاح؟", a: "إيه، على كل إصلاح ضمان. اسأل الفني عن تفاصيل الضمان على شغلك." },
        { q: "كيف أدفع؟", a: "كاش، مدى، أو تحويل بنكي." },
        { q: "متى تشتغلون؟", a: "٢٤ ساعة، ٧ أيام في الأسبوع. اتصل أو راسلنا واتساب أي وقت، حتى بالليل." },
      ],
    },
    contact: {
      h2: "تعال، أو نجيك.",
      sub: "محلنا في حي الشمالية، وفنيينا يتحركون في كل جدة.",
      addressLabel: "العنوان",
      address: "٧٨٩١ شارع الأمير عبدالله الفيصل، حي الشمالية، جدة ٢٣٨١٥",
      hoursLabel: "الدوام",
      hours: "٢٤ ساعة، ٧ أيام في الأسبوع",
      phonesLabel: "الأرقام",
      primary: "واتساب واتصال",
      insta: "تابعنا على إنستقرام",
      mapTitle: "موقع الشاطئ للتبريد على الخريطة",
      districtsLabel: "الأحياء التي نخدمها",
      districts: ["الشمالية", "الروضة", "الحمراء", "السلامة", "النعيم", "الصفا", "المروة", "أبحر"],
    },
    final: {
      h2: "لسه حر؟",
      line: "جدة {t}° الحين. خلّ بيتك يبرد قبل الليل.",
      lineFallback: "خلّ بيتك يبرد قبل الليل.",
      call: "اتصل الحين",
      wa: "واتساب",
    },
    sticky: { call: "اتصل", wa: "واتساب" },
    footer: {
      tag: "إصلاح وصيانة الغسالات والثلاجات والمكيفات في جدة.",
      rights: "جميع الحقوق محفوظة",
      pages: [
        { label: "تصليح غسالات جدة", href: "/washing-machine-repair" },
        { label: "تصليح ثلاجات جدة", href: "/fridge-repair" },
        { label: "إصلاح مكيفات جدة", href: "/#services" },
      ],
    },
  },
  en: {
    dir: "ltr",
    brand: "Al-Shati Cooling",
    nav: { services: "Services", reviews: "Reviews", faq: "FAQ", contact: "Find us" },
    langLink: { href: "/", label: "العربية", hrefLang: "ar" },
    topCall: "Call",
    hero: {
      label: "Jeddah · right now",
      fallback: "Hot.",
      h1: "Jeddah runs hot.",
      h1b: "Your home shouldn't.",
      stanza: ["Washer won't spin", "Fridge won't chill", "AC won't blow"],
      board: { title: "Today in Jeddah", broken: "Broken", fixed: "Fixed" },
      sub: "One call, and an Al-Shati technician is at your door today. 25+ years keeping Jeddah's homes running.",
      waNote: "Replies in minutes",
      call: "Call now",
      wa: "WhatsApp",
      waMsg: "Hello, one of my appliances is broken and I need a technician today",
      proof: `★ ${RATING} on Google · ${REVIEW_COUNT} reviews`,
      hours: "24/7 service, every day",
      badge: { big: "24/7", small: "service" },
    },
    services: {
      h2: "We cool it down.",
      sub: "Tap your appliance and a ready WhatsApp message opens.",
      tag: "Book",
      more: "Details",
      items: [
        { name: "Washers", desc: "Regular and automatic: won't spin, won't drain, leaking or showing an error.", msg: "Hello, I need a washing machine repair", href: "/en/washing-machine-repair" },
        { name: "Fridges", desc: "Every type: not cooling, leaking, iced up or needing a gas refill.", msg: "Hello, I need a refrigerator repair", href: "/en/fridge-repair" },
        { name: "Split ACs", desc: "Accurate diagnosis, repairs and refrigerant refill.", msg: "Hello, I need a split AC repair" },
        { name: "Window ACs", desc: "Service and repair for every type.", msg: "Hello, I need a window AC repair" },
        { name: "Central AC", desc: "Maintenance and repair of home central AC systems.", msg: "Hello, I need central AC service" },
      ],
      extras: ["AC installation", "Preventive maintenance", "AC cleaning and sanitizing"],
    },
    pick: {
      label: "Tap an appliance to book",
      tap: "Book",
      items: [
        { name: "Washers", note: "Regular and automatic", href: "/en/washing-machine-repair" },
        { name: "Fridges", note: "Every type", href: "/en/fridge-repair" },
        { name: "ACs", note: "Split, window, central", href: "/en/ac-repair" },
      ],
    },
    stats: [
      { value: RATING, label: "our rating on Google" },
      { value: "25+", label: "years in Jeddah" },
      { value: "Today", label: "usually with you the same day" },
    ],
    reviews: {
      h2: "Ask the neighbours.",
      sub: "What our customers wrote on Google Maps, in their own words.",
      from: "Google review",
      guide: "Local Guide",
      all: "Read every review on Google",
    },
    faq: {
      h2: "Before you call.",
      items: [
        { q: "Can you come today?", a: "Usually, yes. Call or WhatsApp us and a technician is normally with you the same day." },
        { q: "What do you repair?", a: "Regular and automatic washing machines, every type of fridge, and ACs (split, window, central). We also install and clean ACs." },
        { q: "Which brands do you repair?", a: "Every brand sold in Saudi Arabia: Samsung, LG, Whirlpool, Bosch, Haier, Hisense, Midea, Zamil, Gree, Carrier, Toshiba, Sharp and more." },
        { q: "Which areas do you cover?", a: "Our shop is in Ash Shamaliyah. We cover Ash Shamaliyah, Al Hamra, Al Rawdah, As Salamah, An Naim, As Safa, Al Marwah, Obhur and the rest of Jeddah." },
        { q: "Is the repair guaranteed?", a: "Yes, every repair comes with a guarantee. Ask the technician for the terms on your job." },
        { q: "How can I pay?", a: "Cash, Mada or bank transfer." },
        { q: "When are you open?", a: "24 hours a day, 7 days a week. Call or WhatsApp us any time, even at night." },
      ],
    },
    contact: {
      h2: "Find us, or we'll come to you.",
      sub: "Our shop is in Ash Shamaliyah, and our technicians work across Jeddah.",
      addressLabel: "Address",
      address: "7891 Prince Abdullah AlFaisal St, Ash Shamaliyah, Jeddah 23815",
      hoursLabel: "Hours",
      hours: "24 hours, 7 days a week",
      phonesLabel: "Phones",
      primary: "WhatsApp and calls",
      insta: "Follow us on Instagram",
      mapTitle: "Al-Shati Cooling on the map",
      districtsLabel: "Districts we serve",
      districts: ["Ash Shamaliyah", "Al Rawdah", "Al Hamra", "As Salamah", "An Naim", "As Safa", "Al Marwah", "Obhur"],
    },
    final: {
      h2: "Still hot?",
      line: "It's {t}° in Jeddah right now. Get the house cool before tonight.",
      lineFallback: "Get the house cool before tonight.",
      call: "Call now",
      wa: "WhatsApp",
    },
    sticky: { call: "Call", wa: "WhatsApp" },
    footer: {
      tag: "Washing machine, fridge and AC repair and maintenance in Jeddah.",
      rights: "All rights reserved",
      pages: [
        { label: "Washing machine repair Jeddah", href: "/en/washing-machine-repair" },
        { label: "Fridge repair Jeddah", href: "/en/fridge-repair" },
        { label: "AC repair Jeddah", href: "/en#services" },
      ],
    },
  },
};
