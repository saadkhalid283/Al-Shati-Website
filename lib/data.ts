import {
  AirVent, Snowflake, Fan, WashingMachine, Waves, Refrigerator,
  Award, Zap, CircleDollarSign, ShieldCheck, Wrench, CalendarClock, Sparkles,
} from "lucide-react";
import type { Lang } from "./types";

export const servicesData = (L: Lang) => [
  {
    icon: AirVent, ar: "إصلاح مكيفات شباك", en: "Window AC Repair",
    dAr: "صيانة وإصلاح مكيفات الشباك بجميع أنواعها", dEn: "Service and repair for all types of window AC units",
    msg: L === "ar" ? "السلام عليكم، أريد إصلاح مكيف شباك" : "Hello, I need a window AC repair",
  },
  {
    icon: Snowflake, ar: "إصلاح مكيفات سبليت", en: "Split AC Repair",
    dAr: "تشخيص دقيق وإصلاح أعطال السبليت وتعبئة الفريون", dEn: "Accurate diagnosis, split-unit repair and refrigerant refill",
    msg: L === "ar" ? "السلام عليكم، أريد إصلاح مكيف سبليت" : "Hello, I need a split AC repair",
  },
  {
    icon: Fan, ar: "تكييف مركزي", en: "Central AC",
    dAr: "صيانة وإصلاح أنظمة التكييف المركزي للمنازل", dEn: "Maintenance and repair of central AC systems for homes",
    msg: L === "ar" ? "السلام عليكم، أريد صيانة تكييف مركزي" : "Hello, I need central AC service",
  },
  {
    icon: WashingMachine, ar: "غسالات عادي", en: "Regular Washing Machines",
    dAr: "إصلاح الغسالات العادية بجميع الموديلات", dEn: "Repair for regular washing machines of all models",
    msg: L === "ar" ? "السلام عليكم، أريد إصلاح غسالة عادي" : "Hello, I need a regular washing machine repair",
  },
  {
    icon: Waves, ar: "غسالات أتوماتيك", en: "Automatic Washing Machines",
    dAr: "إصلاح الغسالات الأتوماتيك وأعطال اللوحات", dEn: "Automatic washing machine repair and control-board faults",
    msg: L === "ar" ? "السلام عليكم، أريد إصلاح غسالة أتوماتيك" : "Hello, I need an automatic washing machine repair",
  },
  {
    icon: Refrigerator, ar: "ثلاجات", en: "Refrigerators",
    dAr: "إصلاح الثلاجات ومشاكل التبريد والتسريب", dEn: "Refrigerator repair, cooling problems and leaks",
    msg: L === "ar" ? "السلام عليكم، أريد إصلاح ثلاجة" : "Hello, I need a refrigerator repair",
  },
];

export const moreServices = (L: Lang) => [
  { icon: Wrench, ar: "تركيب المكيفات", en: "AC Installation" },
  { icon: CalendarClock, ar: "صيانة دورية", en: "Preventive Maintenance" },
  { icon: Sparkles, ar: "تنظيف وتعقيم المكيفات", en: "AC Cleaning & Sanitizing" },
];

export const trustBarData = (L: Lang) => [
  {
    icon: Award,
    value: L === "ar" ? "+٢٥" : "25+",
    unit: L === "ar" ? "سنة" : "yrs",
    label: L === "ar" ? "خبرة في المجال" : "Years of Experience",
  },
  {
    icon: Zap,
    value: L === "ar" ? "نفس" : "Same",
    unit: L === "ar" ? "اليوم" : "Day",
    label: L === "ar" ? "خدمة سريعة وفورية" : "Fast Same-Day Service",
  },
  {
    icon: CircleDollarSign,
    value: L === "ar" ? "أسعار" : "100%",
    unit: L === "ar" ? "شفافة" : "Transparent",
    label: L === "ar" ? "بدون رسوم مخفية" : "No hidden fees",
  },
  {
    icon: ShieldCheck,
    value: L === "ar" ? "ضمان" : "Full",
    unit: L === "ar" ? "كامل" : "Warranty",
    label: L === "ar" ? "على جميع الإصلاحات" : "On all repairs",
  },
];

export const whyData = (L: Lang) => [
  { icon: Award, stat: L === "ar" ? "+٢٥ سنة" : "25+ yrs", label: L === "ar" ? "خبرة في المجال" : "Years of Experience" },
  { icon: Zap, stat: L === "ar" ? "نفس اليوم" : "Same Day", label: L === "ar" ? "خدمة سريعة" : "Fast Service" },
  { icon: CircleDollarSign, stat: L === "ar" ? "شفافة" : "Honest", label: L === "ar" ? "أسعار واضحة" : "Transparent Pricing" },
  { icon: ShieldCheck, stat: L === "ar" ? "ضمان" : "Guaranteed", label: L === "ar" ? "ضمان على الإصلاح" : "Repair Guarantee" },
];

export const reviewsData = [
  {
    name: "Saad Khalyd", initials: "SK", stars: 5, guide: false,
    ar: "كان المكيف الشباك عندي معطل من أسبوعين وجربت أكثر من محل. الشاطي للتبريد حلّوا المشكلة في نفس اليوم وبسعر معقول جداً. صادقين في التشخيص وما حاولوا يبالغون في الإصلاحات. أنصح فيهم بدون تردد.",
    en: "My window AC had been broken for two weeks and I tried several shops. Al-Shati fixed it the same day at a very reasonable price. Honest in the diagnosis, and they did not try to oversell repairs. I recommend them without hesitation.",
  },
  {
    name: "Moralist", initials: "M", stars: 5, guide: true,
    ar: "شكراً لكم وخصوصاً المعلم زهيب. من سنين وأنا أتعامل معاهم، وللأمانة شغلهم ممتاز.",
    en: "Thank you, especially technician Zuhaib. I've dealt with them for years now, and honestly, their work is excellent.",
  },
  {
    name: "alaa alahmadi", initials: "AA", stars: 5, guide: false,
    ar: "المعلم زهيب علي ممتاز جداً، وأمين ويعطيك المفيد.",
    en: "Technician Zuhaib Ali is excellent, trustworthy and gives you genuinely useful advice.",
  },
  {
    name: "Bander Alotibi", initials: "BA", stars: 5, guide: false,
    ar: "مهندس اسمه أبو فهد، مصداقية وشغل نظيف 👍",
    en: "An engineer named Abu Fahad, with real credibility and clean work 👍",
  },
  {
    name: "Mazin B", initials: "MB", stars: 5, guide: true,
    ar: "خبرة كبيرة ودقة في العمل وتعامل راقٍ.",
    en: "Great expertise, precision in the work, and very courteous treatment.",
  },
  {
    name: "Qasimali", initials: "Q", stars: 5, guide: false,
    ar: "شغل ممتاز، مواعيد دقيقة، وطاقم عمل رائع.",
    en: "Good work, great appointment times, and an excellent staff.",
  },
];

export interface GallerySlide {
  img: string;
  ar: string;
  en: string;
}

export const galleryData: GallerySlide[] = [
  {
    img: "/gallery-split-ac.jpg",
    ar: "إصلاح وصيانة مكيفات السبليت",
    en: "Split AC repair & maintenance",
  },
  {
    img: "/gallery-central-ac.jpg",
    ar: "صيانة وحدات التكييف المركزي والتبريد",
    en: "Central AC & cooling unit service",
  },
  {
    img: "/gallery-washer.jpg",
    ar: "إصلاح الغسالات الأوتوماتيك والعادية",
    en: "Automatic & regular washing machine repair",
  },
];
