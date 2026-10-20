import { brandsFor } from "./brands";
import { heatCopy } from "./heat-copy";
import { landingCopy, type Appliance } from "./landing-copy";
import type { Lang } from "./types";

export const APPLIANCES: Appliance[] = ["washer", "fridge", "ac"];

export interface BookingText {
  title: string;
  sub: string;
  close: string;
  steps: { appliance: string; problem: string; brand: string; district: string; when: string };
  optional: string;
  other: string;
  applianceNames: Record<Appliance, string>;
  times: string[];
  notePh: string;
  districtPh: string;
  previewTo: string;
  send: string;
  orCall: string;
  done: (n: number, of: number) => string;
  msg: {
    hello: string;
    appliance: string;
    problem: string;
    district: string;
    when: string;
    note: string;
  };
}

export const bookingText: Record<Lang, BookingText> = {
  ar: {
    title: "احجز فني",
    sub: "اضغط على اختياراتك، ونكتب لك رسالة الواتساب.",
    close: "إغلاق",
    steps: { appliance: "الجهاز", problem: "وش المشكلة؟", brand: "الماركة", district: "وين أنت؟", when: "متى تبي الفني؟" },
    optional: "اختياري، تقدر تتخطاه",
    other: "شي ثاني",
    applianceNames: { washer: "غسالة", fridge: "ثلاجة", ac: "مكيف" },
    times: ["بأسرع وقت", "اليوم المغرب", "بكرة الصبح"],
    notePh: "تبي تضيف شي؟ مثلاً: الموديل أو رمز الخطأ",
    districtPh: "اكتب حيّك، مثلاً: الروضة قرب ...",
    previewTo: "إلى: الشاطئ للتبريد",
    send: "أرسل على واتساب",
    orCall: "أو اتصل",
    done: (n, of) => `${n} من ${of}`,
    msg: {
      hello: "السلام عليكم، أبغى أحجز فني من الشاطئ للتبريد:",
      appliance: "الجهاز",
      problem: "المشكلة",
      district: "الحي",
      when: "الوقت",
      note: "ملاحظة",
    },
  },
  en: {
    title: "Book a technician",
    sub: "Tap your answers and we write the WhatsApp message for you.",
    close: "Close",
    steps: { appliance: "Appliance", problem: "What's wrong?", brand: "Brand", district: "Where are you?", when: "When do you need us?" },
    optional: "Optional, you can skip",
    other: "Something else",
    applianceNames: { washer: "Washing machine", fridge: "Fridge", ac: "AC" },
    times: ["As soon as possible", "This evening", "Tomorrow morning"],
    notePh: "Anything to add? e.g. the model or an error code",
    districtPh: "Type your district, e.g. Al Rawdah near ...",
    previewTo: "To: Al-Shati Cooling",
    send: "Send on WhatsApp",
    orCall: "or call",
    done: (n, of) => `${n} of ${of}`,
    msg: {
      hello: "Hello, I'd like to book an Al-Shati technician:",
      appliance: "Appliance",
      problem: "Problem",
      district: "District",
      when: "When",
      note: "Note",
    },
  },
};

export function problemsFor(appliance: Appliance, lang: Lang) {
  return landingCopy[appliance][lang].problems.items.map((p) => p.name);
}

export function brandNamesFor(appliance: Appliance, lang: Lang) {
  return brandsFor(appliance)
    .slice(0, 10)
    .map((b) => (lang === "ar" ? b.ar : b.en));
}

export function districtsFor(lang: Lang) {
  return heatCopy[lang].contact.districts;
}

export interface Booking {
  appliance: Appliance | null;
  problem: string | null;
  brand: string | null;
  district: string | null;
  when: string | null;
  note: string;
}

export function buildMessage(b: Booking, lang: Lang) {
  const t = bookingText[lang];
  const lines = [t.msg.hello];
  if (b.appliance) {
    const name = t.applianceNames[b.appliance];
    const withBrand = lang === "ar" ? `${name} ${b.brand}` : `${b.brand} ${name.toLowerCase()}`;
    lines.push(`- ${t.msg.appliance}: ${b.brand && b.brand !== t.other ? withBrand : name}`);
  }
  if (b.problem) lines.push(`- ${t.msg.problem}: ${b.problem}`);
  if (b.district?.trim()) lines.push(`- ${t.msg.district}: ${b.district.trim()}`);
  if (b.when) lines.push(`- ${t.msg.when}: ${b.when}`);
  if (b.note.trim()) lines.push(`- ${t.msg.note}: ${b.note.trim()}`);
  return lines.join("\n");
}

/** Any button anywhere can open the sheet: openBooking("washer"). */
export const BOOK_EVENT = "alshati:book";
export function openBooking(appliance?: Appliance) {
  window.dispatchEvent(new CustomEvent(BOOK_EVENT, { detail: { appliance } }));
}
