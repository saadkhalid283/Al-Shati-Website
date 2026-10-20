import type { Lang } from "./types";

export type Appliance = "washer" | "fridge" | "ac";

export const LANDING_PATHS: Record<Appliance, string> = {
  washer: "/washing-machine-repair",
  fridge: "/fridge-repair",
  ac: "/ac-repair",
};

export interface LandingCopy {
  meta: { title: string; description: string };
  serviceName: string;
  hero: {
    label: string;
    /** fridge only: caption under the giant 4° */
    visualCaption?: string;
    h1: string;
    h1b: string;
    sub: string;
    waMsg: string;
  };
  problems: { h2: string; sub: string; tag: string; items: { name: string; desc: string; msg: string }[] };
  tips: { h2: string; items: string[] };
  faq: { h2: string; items: { q: string; a: string }[] };
  final: { h2: string; line: string; lineFallback: string };
}

export const landingCopy: Record<Appliance, Record<Lang, LandingCopy>> = {
  washer: {
    ar: {
      meta: {
        title: "تصليح غسالات في جدة، عادي وأتوماتيك",
        description:
          "غسالتك ما تعصر أو ما تصرّف أو تطلع خطأ؟ نصلّح الغسالات العادي والأتوماتيك من كل الماركات في جدة، فني نفس اليوم وضمان على الإصلاح.",
      },
      serviceName: "تصليح غسالات",
      hero: {
        label: "غسالات عادي وأتوماتيك · جدة",
        h1: "الغسالة وقفت؟",
        h1b: "نصلّحها اليوم.",
        sub: "فني من الشاطئ يوصلك نفس اليوم. نصلّح الغسالات العادي والأتوماتيك وأعطال اللوحات، وعلى الإصلاح ضمان.",
        waMsg: "السلام عليكم، الغسالة عندي فيها عطل وأحتاج فني اليوم",
      },
      problems: {
        h2: "وش فيها؟",
        sub: "اضغط على المشكلة وتنفتح لك رسالة واتساب جاهزة.",
        tag: "أرسل",
        items: [
          { name: "ما تعصر", desc: "الملابس تطلع مبلولة.", msg: "السلام عليكم، الغسالة ما تعصر" },
          { name: "ما تصرّف", desc: "الماء واقف داخل الحوض.", msg: "السلام عليكم، الغسالة ما تصرّف الماء" },
          { name: "تسرّب ماء", desc: "ماء على الأرض وقت الغسيل.", msg: "السلام عليكم، الغسالة تسرّب ماء" },
          { name: "تطلع خطأ", desc: "رمز أو رقم على الشاشة.", msg: "السلام عليكم، الغسالة تطلع رمز خطأ على الشاشة" },
          { name: "تهتز بقوة", desc: "صوت عالي، خصوصاً وقت العصر.", msg: "السلام عليكم، الغسالة تهتز وصوتها عالي" },
          { name: "ما تشتغل", desc: "ما تفتح، أو الباب ما ينفتح.", msg: "السلام عليكم، الغسالة ما تشتغل" },
        ],
      },
      tips: {
        h2: "قبل ما تتصل.",
        items: [
          "إذا تطلع رمز خطأ، صوّر الشاشة وأرسلها لنا واتساب. تساعد الفني يعرف العطل قبل ما يوصل.",
          "تأكد إن حنفية الماء مفتوحة والفيش موصول.",
          "إذا ما تصرّف، شيك على فلتر التصريف تحت قدّام إذا تقدر توصله.",
        ],
      },
      faq: {
        h2: "أسئلة عن الغسالات.",
        items: [
          { q: "تصلحون العادي والأتوماتيك؟", a: "إيه، الاثنين، ومعها أعطال اللوحات الإلكترونية." },
          { q: "أي ماركات غسالات تصلحون؟", a: "كل الماركات المنتشرة في السعودية: سامسونج، إل جي، ويرلبول، بوش، سيمنس، أريستون، هاير، بيكو، إلكترولوكس، إنديست وغيرها." },
          { q: "تجون للبيت؟", a: "إيه، الفني يجيك ويفحص الغسالة في مكانها ويقول لك وش العطل قبل ما يبدأ." },
          { q: "كم يكلف الإصلاح؟", a: "يعتمد على العطل. الفني يشخّص أول ويقول لك السعر بوضوح قبل أي شغل، بدون رسوم مخفية." },
          { q: "تجون نفس اليوم؟", a: "غالباً نعم. كلّمنا اتصال أو واتساب، وعادة يوصلك الفني بنفس اليوم." },
          { q: "فيه ضمان؟", a: "إيه، على كل إصلاح ضمان. اسأل الفني عن تفاصيل الضمان على شغلك." },
        ],
      },
      final: {
        h2: "الغسيل ما ينتظر.",
        line: "جدة {t}° الحين. خلّ الغسالة تشتغل قبل الليل.",
        lineFallback: "خلّ الغسالة تشتغل قبل الليل.",
      },
    },
    en: {
      meta: {
        title: "Washing Machine Repair in Jeddah",
        description:
          "Washer won't spin, drain or shows an error? We repair regular and automatic washers of every brand in Jeddah. Same-day technician, guaranteed.",
      },
      serviceName: "Washing machine repair",
      hero: {
        label: "Regular and automatic washers · Jeddah",
        h1: "Washer stopped?",
        h1b: "We fix it today.",
        sub: "An Al-Shati technician at your door the same day. Regular and automatic washing machines, including control boards, with a guarantee on the repair.",
        waMsg: "Hello, my washing machine has a fault and I need a technician today",
      },
      problems: {
        h2: "What's it doing?",
        sub: "Tap the problem and a ready WhatsApp message opens.",
        tag: "Send",
        items: [
          { name: "Won't spin", desc: "Clothes come out soaking.", msg: "Hello, my washing machine won't spin" },
          { name: "Won't drain", desc: "Water stays in the drum.", msg: "Hello, my washing machine won't drain" },
          { name: "Leaking", desc: "Water on the floor during a wash.", msg: "Hello, my washing machine is leaking" },
          { name: "Error code", desc: "A code or number on the display.", msg: "Hello, my washing machine shows an error code" },
          { name: "Shaking hard", desc: "Loud, especially on the spin.", msg: "Hello, my washing machine shakes and is very loud" },
          { name: "Won't start", desc: "No power, or the door won't open.", msg: "Hello, my washing machine won't start" },
        ],
      },
      tips: {
        h2: "Before you call.",
        items: [
          "If it shows an error code, photograph the display and WhatsApp it to us. It helps the technician know the fault before arriving.",
          "Check the water tap is open and the plug is in.",
          "If it won't drain, check the drain filter at the front bottom if you can reach it.",
        ],
      },
      faq: {
        h2: "Washer questions.",
        items: [
          { q: "Do you fix regular and automatic machines?", a: "Yes, both, including electronic control board faults." },
          { q: "Which washer brands do you repair?", a: "Every brand sold in Saudi: Samsung, LG, Whirlpool, Bosch, Siemens, Ariston, Haier, Beko, Electrolux, Indesit and more." },
          { q: "Do you come to the house?", a: "Yes. The technician checks the machine where it is and tells you the fault before starting." },
          { q: "How much does a repair cost?", a: "It depends on the fault. The technician diagnoses first and tells you the price clearly before any work, with no hidden fees." },
          { q: "Can you come today?", a: "Usually, yes. Call or WhatsApp us and a technician is normally with you the same day." },
          { q: "Is it guaranteed?", a: "Yes, every repair comes with a guarantee. Ask the technician for the terms on your job." },
        ],
      },
      final: {
        h2: "Laundry won't wait.",
        line: "It's {t}° in Jeddah right now. Get the washer running before tonight.",
        lineFallback: "Get the washer running before tonight.",
      },
    },
  },
  fridge: {
    ar: {
      meta: {
        title: "تصليح ثلاجات في جدة، بجميع أنواعها",
        description:
          "ثلاجتك ما تبرد أو تسرّب أو فيها ثلج زايد؟ نصلّح الثلاجات من كل الماركات في جدة ونعبّي الغاز، فني نفس اليوم وضمان على الإصلاح.",
      },
      serviceName: "تصليح ثلاجات",
      hero: {
        label: "جدة · برا",
        visualCaption: "هذي حرارة الثلاجة الصحيحة. لو ثلاجتك أدفأ، أكلك في خطر.",
        h1: "الثلاجة ما تبرد؟",
        h1b: "نلحّق أكلك اليوم.",
        sub: "فني من الشاطئ يوصلك نفس اليوم. نصلّح الثلاجات بجميع أنواعها ونعبّي الغاز، وعلى الإصلاح ضمان.",
        waMsg: "السلام عليكم، الثلاجة عندي فيها عطل وأحتاج فني اليوم",
      },
      problems: {
        h2: "وش فيها؟",
        sub: "اضغط على المشكلة وتنفتح لك رسالة واتساب جاهزة.",
        tag: "أرسل",
        items: [
          { name: "ما تبرد", desc: "أو تبرد شوي، مو زي أول.", msg: "السلام عليكم، الثلاجة ما تبرد" },
          { name: "تسرّب ماء", desc: "ماء تحتها أو داخلها.", msg: "السلام عليكم، الثلاجة تسرّب ماء" },
          { name: "ثلج زايد", desc: "الفريزر متراكم فيه ثلج.", msg: "السلام عليكم، الفريزر فيه ثلج زايد" },
          { name: "صوت عالي", desc: "طقطقة أو زنّة من الماتور.", msg: "السلام عليكم، الثلاجة صوتها عالي" },
          { name: "الفريزر بس", desc: "الفريزر يبرد والثلاجة لا.", msg: "السلام عليكم، الفريزر يبرد بس الثلاجة ما تبرد" },
          { name: "ما تشتغل", desc: "مطفية، أو تفصل وترجع.", msg: "السلام عليكم، الثلاجة ما تشتغل" },
        ],
      },
      tips: {
        h2: "قبل ما تتصل.",
        items: [
          "تأكد إن الباب يتسكّر زين وإن المطاط حوله سليم.",
          "خلّ مسافة ورا الثلاجة وعلى جنابها عشان الحرارة تطلع.",
          "لا تحط أكل حار داخلها، وانقل الأكل اللي يخرب بسرعة لمكان بارد لين يوصل الفني.",
        ],
      },
      faq: {
        h2: "أسئلة عن الثلاجات.",
        items: [
          { q: "تصلحون كل أنواع الثلاجات؟", a: "إيه، الثلاجات بجميع أنواعها، ومعها الفريزر." },
          { q: "أي ماركات ثلاجات تصلحون؟", a: "كل الماركات المنتشرة في السعودية: سامسونج، إل جي، ويرلبول، بوش، هيتاشي، توشيبا، شارب، باناسونيك، هاير، هايسنس وغيرها." },
          { q: "تعبّون غاز للثلاجة؟", a: "إيه. الفني يشخّص أول إذا فيه تسريب، ويعبّي الغاز إذا احتاجت." },
          { q: "تجون للبيت؟", a: "إيه، الفني يجيك ويفحص الثلاجة في مكانها ويقول لك وش العطل قبل ما يبدأ." },
          { q: "كم يكلف الإصلاح؟", a: "يعتمد على العطل. الفني يشخّص أول ويقول لك السعر بوضوح قبل أي شغل، بدون رسوم مخفية." },
          { q: "فيه ضمان؟", a: "إيه، على كل إصلاح ضمان. اسأل الفني عن تفاصيل الضمان على شغلك." },
        ],
      },
      final: {
        h2: "الأكل ما ينتظر.",
        line: "جدة {t}° الحين. كل ساعة والثلاجة دافية تفرق.",
        lineFallback: "كل ساعة والثلاجة دافية تفرق.",
      },
    },
    en: {
      meta: {
        title: "Fridge Repair in Jeddah, Every Brand",
        description:
          "Fridge not cooling, leaking or iced up? We repair every type and brand in Jeddah, gas refills included. Same-day technician, guaranteed.",
      },
      serviceName: "Fridge repair",
      hero: {
        label: "Jeddah · outside",
        visualCaption: "That's where a fridge should be. If yours is warmer, your food is at risk.",
        h1: "Fridge not cold?",
        h1b: "Save the food today.",
        sub: "An Al-Shati technician at your door the same day. Every type of fridge, gas refills included, with a guarantee on the repair.",
        waMsg: "Hello, my fridge has a fault and I need a technician today",
      },
      problems: {
        h2: "What's it doing?",
        sub: "Tap the problem and a ready WhatsApp message opens.",
        tag: "Send",
        items: [
          { name: "Not cooling", desc: "Or barely, not like before.", msg: "Hello, my fridge is not cooling" },
          { name: "Leaking", desc: "Water under it or inside.", msg: "Hello, my fridge is leaking water" },
          { name: "Iced up", desc: "Ice building up in the freezer.", msg: "Hello, my freezer is icing up" },
          { name: "Noisy", desc: "Clicking or buzzing from the motor.", msg: "Hello, my fridge is very noisy" },
          { name: "Freezer only", desc: "Freezer cold, fridge warm.", msg: "Hello, my freezer works but the fridge is warm" },
          { name: "Won't start", desc: "Off, or cutting in and out.", msg: "Hello, my fridge won't turn on" },
        ],
      },
      tips: {
        h2: "Before you call.",
        items: [
          "Check the door closes properly and the rubber seal is intact.",
          "Leave space behind and beside the fridge so the heat can escape.",
          "Don't put hot food inside, and move anything that spoils fast somewhere cold until the technician arrives.",
        ],
      },
      faq: {
        h2: "Fridge questions.",
        items: [
          { q: "Do you fix every type of fridge?", a: "Yes, every type, freezers included." },
          { q: "Which fridge brands do you repair?", a: "Every brand sold in Saudi: Samsung, LG, Whirlpool, Bosch, Hitachi, Toshiba, Sharp, Panasonic, Haier, Hisense and more." },
          { q: "Do you do gas refills?", a: "Yes. The technician first checks for a leak, then refills the gas if it needs it." },
          { q: "Do you come to the house?", a: "Yes. The technician checks the fridge where it is and tells you the fault before starting." },
          { q: "How much does a repair cost?", a: "It depends on the fault. The technician diagnoses first and tells you the price clearly before any work, with no hidden fees." },
          { q: "Is it guaranteed?", a: "Yes, every repair comes with a guarantee. Ask the technician for the terms on your job." },
        ],
      },
      final: {
        h2: "Food won't wait.",
        line: "It's {t}° in Jeddah right now. Every hour with a warm fridge counts.",
        lineFallback: "Every hour with a warm fridge counts.",
      },
    },
  },
  ac: {
    ar: {
      meta: {
        title: "تصليح مكيفات في جدة، سبليت وشباك ومركزي",
        description:
          "مكيفك ما يبرد أو يسرّب؟ نصلّح المكيفات من كل الماركات في جدة: تعبئة فريون، تنظيف وتركيب، فني نفس اليوم وضمان.",
      },
      serviceName: "تصليح مكيفات",
      hero: {
        label: "جدة · الحين",
        h1: "المكيف وقف؟",
        h1b: "نصلّحه اليوم.",
        sub: "فني من الشاطئ يوصلك نفس اليوم. سبليت وشباك ومركزي: تشخيص، إصلاح، تعبئة فريون، تنظيف وتركيب، وعلى الإصلاح ضمان.",
        waMsg: "السلام عليكم، المكيف عندي عطلان وأحتاج فني اليوم",
      },
      problems: {
        h2: "وش فيه؟",
        sub: "اضغط على المشكلة وتنفتح لك رسالة واتساب جاهزة.",
        tag: "أرسل",
        items: [
          { name: "ما يبرد", desc: "يطلع هوا بس مو بارد.", msg: "السلام عليكم، المكيف ما يبرد" },
          { name: "يسرّب ماء", desc: "ماء ينقّط من الوحدة الداخلية.", msg: "السلام عليكم، المكيف يسرّب ماء" },
          { name: "صوت عالي", desc: "طقطقة أو صفير وقت التشغيل.", msg: "السلام عليكم، المكيف صوته عالي" },
          { name: "ريحة", desc: "ريحة كريهة أول ما يشتغل.", msg: "السلام عليكم، المكيف يطلع ريحة" },
          { name: "يفصل لحاله", desc: "يشتغل ويطفي بدون سبب.", msg: "السلام عليكم، المكيف يفصل لحاله" },
          { name: "تركيب أو تنظيف", desc: "مكيف جديد أو صيانة دورية.", msg: "السلام عليكم، أبغى تركيب أو تنظيف مكيف" },
        ],
      },
      tips: {
        h2: "قبل ما تتصل.",
        items: [
          "نظّف الفلتر إذا تقدر توصله. الفلتر المسدود من أشهر أسباب إن المكيف ما يبرد زين.",
          "تأكد إن الريموت على وضع التبريد، مو المروحة.",
          "إذا يسرّب ماء، طفّه عشان ما يخرّب الجدار لين يوصل الفني.",
        ],
      },
      faq: {
        h2: "أسئلة عن المكيفات.",
        items: [
          { q: "أي أنواع مكيفات تصلحون؟", a: "السبليت والشباك والتكييف المركزي للبيوت." },
          { q: "تعبّون فريون؟", a: "إيه. الفني يشخّص أول إذا فيه تسريب، ويعبّي الفريون إذا احتاج." },
          { q: "تنظفون وتعقّمون المكيفات؟", a: "إيه، ننظف ونعقّم المكيفات، ونسوي صيانة دورية وتركيب." },
          { q: "أي ماركات مكيفات تصلحون؟", a: "كل الماركات المنتشرة في السعودية: زامل، جري، إل جي، سامسونج، كاريير، ميديا، هاير، توشيبا، شارب، دايكن وغيرها." },
          { q: "فيه ضمان؟", a: "إيه، على كل إصلاح ضمان. اسأل الفني عن تفاصيل الضمان على شغلك." },
        ],
      },
      final: {
        h2: "لسه حر؟",
        line: "جدة {t}° الحين. خلّ بيتك يبرد قبل الليل.",
        lineFallback: "خلّ بيتك يبرد قبل الليل.",
      },
    },
    en: {
      meta: {
        title: "AC Repair in Jeddah, Every Type",
        description:
          "AC not cooling, leaking or noisy? Split, window and central AC repair in Jeddah: refrigerant, cleaning, installation. Same-day and guaranteed.",
      },
      serviceName: "AC repair",
      hero: {
        label: "Jeddah · right now",
        h1: "AC gave up?",
        h1b: "We fix it today.",
        sub: "An Al-Shati technician at your door the same day. Split, window and central: diagnosis, repair, refrigerant refill, cleaning and installation, with a guarantee on the repair.",
        waMsg: "Hello, my AC is broken and I need a technician today",
      },
      problems: {
        h2: "What's it doing?",
        sub: "Tap the problem and a ready WhatsApp message opens.",
        tag: "Send",
        items: [
          { name: "Not cooling", desc: "Air comes out, but not cold.", msg: "Hello, my AC is not cooling" },
          { name: "Leaking", desc: "Water dripping from the indoor unit.", msg: "Hello, my AC is leaking water" },
          { name: "Noisy", desc: "Clicking or whistling when running.", msg: "Hello, my AC is very noisy" },
          { name: "Bad smell", desc: "A smell as soon as it starts.", msg: "Hello, my AC smells bad" },
          { name: "Cuts out", desc: "Turns itself on and off.", msg: "Hello, my AC keeps cutting out" },
          { name: "Install or clean", desc: "A new unit or routine service.", msg: "Hello, I need an AC installed or cleaned" },
        ],
      },
      tips: {
        h2: "Before you call.",
        items: [
          "Clean the filter if you can reach it. A blocked filter is one of the most common reasons an AC stops cooling well.",
          "Check the remote is on cool mode, not fan.",
          "If it's leaking, switch it off so the wall doesn't get damaged until the technician arrives.",
        ],
      },
      faq: {
        h2: "AC questions.",
        items: [
          { q: "Which AC types do you repair?", a: "Split, window and home central AC systems." },
          { q: "Do you refill refrigerant?", a: "Yes. The technician first checks for a leak, then refills if it needs it." },
          { q: "Do you clean and sanitize ACs?", a: "Yes, we clean and sanitize ACs, and do routine maintenance and installation." },
          { q: "Which AC brands do you repair?", a: "Every brand sold in Saudi: Zamil, Gree, LG, Samsung, Carrier, Midea, Haier, Toshiba, Sharp, Daikin and more." },
          { q: "Is it guaranteed?", a: "Yes, every repair comes with a guarantee. Ask the technician for the terms on your job." },
        ],
      },
      final: {
        h2: "Still hot?",
        line: "It's {t}° in Jeddah right now. Get the house cool before tonight.",
        lineFallback: "Get the house cool before tonight.",
      },
    },
  },
};
