import type { Lang } from "./types";

export type InfoPage = "brands" | "areas" | "reviews" | "about" | "faq" | "contact";

interface PageCopy {
  meta: { title: string; description: string };
  label: string;
  h1: string;
  sub: string;
  waMsg: string;
}

export const pagesCopy: Record<InfoPage, Record<Lang, PageCopy>> = {
  brands: {
    ar: {
      meta: {
        title: "الماركات اللي نصلّحها في جدة",
        description:
          "نصلّح كل الماركات المنتشرة في السعودية: سامسونج، إل جي، ويرلبول، بوش، هاير، زامل، جري وغيرها. غسالات وثلاجات ومكيفات في جدة.",
      },
      label: "كل الماركات · جدة",
      h1: "أي ماركة، نصلّحها.",
      sub: "غسالات وثلاجات ومكيفات من كل الماركات المنتشرة في السعودية. اضغط على ماركة جهازك وتنفتح لك رسالة واتساب جاهزة.",
      waMsg: "السلام عليكم، أبغى أسأل عن إصلاح جهاز",
    },
    en: {
      meta: {
        title: "Brands We Repair in Jeddah",
        description:
          "We repair every brand sold in Saudi: Samsung, LG, Whirlpool, Bosch, Haier, Zamil, Gree and more. Washers, fridges and ACs in Jeddah.",
      },
      label: "Every brand · Jeddah",
      h1: "Any brand. We fix it.",
      sub: "Washing machines, fridges and ACs of every brand sold in Saudi. Tap your brand and a ready WhatsApp message opens.",
      waMsg: "Hello, I'd like to ask about an appliance repair",
    },
  },
  areas: {
    ar: {
      meta: {
        title: "الأحياء اللي نخدمها في جدة",
        description:
          "من حي الشمالية لكل جدة: الروضة، الحمراء، السلامة، النعيم، الصفا، المروة، أبحر وغيرها. تصليح غسالات وثلاجات ومكيفات نفس اليوم.",
      },
      label: "من حي الشمالية لكل جدة",
      h1: "وين ما كنت في جدة.",
      sub: "محلنا في حي الشمالية، وفنيينا يتحركون في كل جدة. اضغط على حيّك ونرتّب لك الزيارة.",
      waMsg: "السلام عليكم، أبغى فني يجيني",
    },
    en: {
      meta: {
        title: "Areas We Serve in Jeddah",
        description:
          "From Ash Shamaliyah to all of Jeddah: Al Rawdah, Al Hamra, As Salamah, An Naim, As Safa, Obhur and more. Same-day appliance repair.",
      },
      label: "From Ash Shamaliyah to all of Jeddah",
      h1: "Wherever you are in Jeddah.",
      sub: "Our shop is in Ash Shamaliyah and our technicians work across the city. Tap your district and we'll arrange the visit.",
      waMsg: "Hello, I need a technician to come to me",
    },
  },
  reviews: {
    ar: {
      meta: {
        title: "تقييمات عملائنا على جوجل",
        description:
          "تقييمنا على جوجل ٤٫٧ من ٢٤ تقييم. اقرأ كلام عملائنا في جدة عن تصليح الغسالات والثلاجات والمكيفات.",
      },
      label: "خرائط جوجل",
      h1: "اسأل جيرانك.",
      sub: "كلام عملائنا على خرائط جوجل زي ما كتبوه، بدون تعديل.",
      waMsg: "السلام عليكم، شفت تقييماتكم وأبغى فني",
    },
    en: {
      meta: {
        title: "Customer Reviews on Google",
        description:
          "Rated 4.7 from 24 Google reviews. Read what Jeddah customers say about our washer, fridge and AC repairs.",
      },
      label: "Google Maps",
      h1: "Ask the neighbours.",
      sub: "What our customers wrote on Google Maps, in their own words.",
      waMsg: "Hello, I saw your reviews and I need a technician",
    },
  },
  about: {
    ar: {
      meta: {
        title: "من نحن: ورشة الشاطئ في حي الشمالية",
        description:
          "أكثر من ٢٥ سنة نصلّح الغسالات والثلاجات والمكيفات في جدة. نشخّص قبل ما نبدأ، سعر واضح، وضمان على الإصلاح.",
      },
      label: "حي الشمالية · جدة",
      h1: "+٢٥ سنة نصلّح أجهزة جدة.",
      sub: "ورشة صغيرة في حي الشمالية، وفنيين يعرفهم عملاؤنا بالاسم. نصلّح الغسالات والثلاجات والمكيفات من أكثر من ٢٥ سنة.",
      waMsg: "السلام عليكم، أحتاج فني من الشاطئ للتبريد",
    },
    en: {
      meta: {
        title: "About Us, Our Jeddah Workshop",
        description:
          "25+ years repairing washers, fridges and ACs in Jeddah. Our workshop is in Ash Shamaliyah. We diagnose first, quote clearly, guarantee the work.",
      },
      label: "Ash Shamaliyah · Jeddah",
      h1: "25+ years fixing Jeddah's appliances.",
      sub: "A workshop in Ash Shamaliyah with technicians our customers know by name. Washing machines, fridges and ACs for more than 25 years.",
      waMsg: "Hello, I need a technician from Al-Shati Cooling",
    },
  },
  faq: {
    ar: {
      meta: {
        title: "أسئلة شائعة عن تصليح الأجهزة",
        description:
          "أجوبة عن تصليح الغسالات والثلاجات والمكيفات في جدة: نفس اليوم، الأسعار، الضمان، الماركات، الأحياء، وطرق الدفع.",
      },
      label: "قبل ما تتصل",
      h1: "عندك سؤال؟",
      sub: "أكثر الأسئلة اللي توصلنا، وأجوبتها. وإذا ما لقيت سؤالك، راسلنا واتساب.",
      waMsg: "السلام عليكم، عندي سؤال",
    },
    en: {
      meta: {
        title: "FAQ: Appliance Repair in Jeddah",
        description:
          "Answers about washer, fridge and AC repair in Jeddah: same-day visits, prices, guarantee, brands, areas and payment.",
      },
      label: "Before you call",
      h1: "Got a question?",
      sub: "The questions we hear most, answered. If yours isn't here, WhatsApp us.",
      waMsg: "Hello, I have a question",
    },
  },
  contact: {
    ar: {
      meta: {
        title: "تواصل معنا: اتصال، واتساب، العنوان",
        description:
          "اتصل أو راسلنا على 0580592468. ٧٨٩١ شارع الأمير عبدالله الفيصل، حي الشمالية، جدة. نخدمك ٢٤ ساعة، ٧ أيام.",
      },
      label: "خدمة ٢٤ ساعة، ٧ أيام",
      h1: "كلّمنا.",
      sub: "اتصال أو واتساب، ونرد عليك خلال دقائق. أو مرّنا في المحل في حي الشمالية.",
      waMsg: "السلام عليكم، عندي جهاز عطلان وأحتاج فني اليوم",
    },
    en: {
      meta: {
        title: "Contact Us: Call, WhatsApp, Address",
        description:
          "Call or WhatsApp 0580592468. 7891 Prince Abdullah AlFaisal St, Ash Shamaliyah, Jeddah. 24/7 service, every day.",
      },
      label: "24/7 service, every day",
      h1: "Talk to us.",
      sub: "Call or WhatsApp and we reply within minutes. Or drop by the shop in Ash Shamaliyah.",
      waMsg: "Hello, one of my appliances is broken and I need a technician today",
    },
  },
};

/* About page body. Only facts the business has confirmed or customers have written. */
export const aboutCopy: Record<Lang, {
  whoH2: string;
  who: string[];
  howH2: string;
  how: { t: string; d: string }[];
  peopleH2: string;
  peopleSub: string;
  fixH2: string;
  fix: { name: string; href: string }[];
}> = {
  ar: {
    whoH2: "مين إحنا.",
    who: [
      "الشاطئ للتبريد ورشة في حي الشمالية بجدة، شغالة من أكثر من ٢٥ سنة في تصليح الغسالات والثلاجات والمكيفات.",
      "نخدمك ٢٤ ساعة، ٧ أيام في الأسبوع، وفنيينا يروحون للعملاء في بيوتهم في كل جدة.",
    ],
    howH2: "كيف نشتغل.",
    how: [
      { t: "نشخّص أول", d: "الفني يفحص الجهاز ويقول لك وش العطل قبل ما يبدأ." },
      { t: "سعر واضح", d: "تعرف السعر قبل أي شغل، بدون رسوم مخفية." },
      { t: "ضمان", d: "على كل إصلاح ضمان. اسأل الفني عن تفاصيله." },
    ],
    peopleH2: "عملاؤنا يعرفون فنيينا بالاسم.",
    peopleSub: "من تقييمات جوجل:",
    fixH2: "وش نصلّح.",
    fix: [
      { name: "غسالات", href: "/washing-machine-repair" },
      { name: "ثلاجات", href: "/fridge-repair" },
      { name: "مكيفات", href: "/ac-repair" },
    ],
  },
  en: {
    whoH2: "Who we are.",
    who: [
      "Al-Shati Cooling is a workshop in Ash Shamaliyah, Jeddah, repairing washing machines, fridges and ACs for more than 25 years.",
      "We serve you 24 hours a day, 7 days a week, and our technicians visit customers at home all over Jeddah.",
    ],
    howH2: "How we work.",
    how: [
      { t: "Diagnose first", d: "The technician checks the appliance and tells you the fault before starting." },
      { t: "Clear price", d: "You know the price before any work, with no hidden fees." },
      { t: "Guaranteed", d: "Every repair comes with a guarantee. Ask the technician for the terms." },
    ],
    peopleH2: "Our customers know our technicians by name.",
    peopleSub: "From Google reviews:",
    fixH2: "What we fix.",
    fix: [
      { name: "Washers", href: "/en/washing-machine-repair" },
      { name: "Fridges", href: "/en/fridge-repair" },
      { name: "ACs", href: "/en/ac-repair" },
    ],
  },
};

export const areaNote: Record<Lang, { shop: string; tap: string; rest: string; restNote: string; msg: (d: string) => string }> = {
  ar: {
    shop: "محلنا هنا",
    tap: "اطلب فني",
    rest: "باقي جدة",
    restNote: "حيّك مو هنا؟ راسلنا، غالباً نوصلك.",
    msg: (d) => `السلام عليكم، أنا في حي ${d} وأحتاج فني`,
  },
  en: {
    shop: "Our shop is here",
    tap: "Book",
    rest: "Rest of Jeddah",
    restNote: "District not listed? Message us, we can usually come.",
    msg: (d) => `Hello, I'm in ${d} and I need a technician`,
  },
};
