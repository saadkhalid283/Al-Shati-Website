"use client";

import { useEffect, useRef, useState } from "react";
import { MAPS_URL, RATING, REVIEW_COUNT } from "@/lib/constants";
import { reviewsData } from "@/lib/data";
import type { Lang } from "@/lib/types";

const t = {
  ar: {
    h2: "اسأل جيرانك.",
    lede: "انزل تحت، وشوف جدة كيف تبرد.",
    guide: "مرشد محلي",
    google: "جوجل",
    all: (n: string) => `${n} تقييم على جوجل · اقرأها كلها`,
  },
  en: {
    h2: "Ask the neighbours.",
    lede: "Scroll down. Watch Jeddah cool off.",
    guide: "Local Guide",
    google: "Google",
    all: (n: string) => `${n} Google reviews · Read them all`,
  },
};

/* Technician names customers mention, marked in orange inside the quotes. */
const NAMES = { ar: /(زهيب علي|زهيب|أبو فهد)/g, en: /(Zuhaib Ali|Zuhaib|Abu Fahad)/g };

const arDigits = (s: string | number) => String(s).replace(/\d/g, (d) => "٠١٢٣٤٥٦٧٨٩"[+d]).replace(".", "٫");

/* Mercury cools from hot orange through amber and teal to ice blue. */
const STOPS = ["#ff4f17", "#ff9f1c", "#12b5a5", "#1f7fd1"];
function mercuryColor(p: number) {
  const seg = Math.min(STOPS.length - 2, Math.floor(p * (STOPS.length - 1)));
  const local = p * (STOPS.length - 1) - seg;
  return `color-mix(in oklch, ${STOPS[seg]} ${Math.round((1 - local) * 100)}%, ${STOPS[seg + 1]})`;
}

function Highlight({ text, lang }: { text: string; lang: Lang }) {
  const re = NAMES[lang];
  return (
    <>
      {text.split(re).map((part, i) =>
        i % 2 === 1 ? (
          <mark key={i} className="rv-mark">
            {part}
          </mark>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}

/** Reviews on a cooling thermometer: as you scroll, the mercury drops and each review comes into focus. */
export function ReviewsThermo({ lang, indices = [1, 2, 3, 4, 5] }: { lang: Lang; indices?: number[] }) {
  const c = t[lang];
  const reviews = indices.map((i) => reviewsData[i]).filter(Boolean);
  const ref = useRef<HTMLElement>(null);
  const [p, setP] = useState(1); // server render and no-JS show everything "cooled"
  const [live, setLive] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setLive(true);
    const onScroll = () => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const total = Math.max(1, r.height - window.innerHeight * 0.85);
      const done = window.innerHeight * 0.55 - r.top;
      setP(Math.max(0, Math.min(1, done / total)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const color = mercuryColor(p);
  const temp = Math.round(46 - p * 24);
  const n = reviews.length;

  return (
    <section ref={ref} id="reviews" className={`rv1${live ? " is-live" : ""}`}>
      <h2 className="h-h2 rv1__h2">{c.h2}</h2>
      <p className="rv-lede">{c.lede}</p>
      <div className="rv1__body">
        <div className="rv1__tube" aria-hidden>
          <div className="rv1__glass">
            <div className="rv1__mercury" style={{ height: `${100 - p * 82}%`, background: color }} />
            {reviews.map((_, i) => (
              <span key={i} className="rv1__tick" style={{ top: `${10 + i * (78 / n)}%` }} />
            ))}
          </div>
          <div className="rv1__bulb" style={{ background: color }}>
            {lang === "ar" ? arDigits(temp) : temp}°
          </div>
        </div>
        <ol className="rv1__list">
          {reviews.map((rv, i) => {
            const on = !live || p >= (i + 0.2) / (n + 0.6);
            return (
              <li key={rv.name} className={`rv1__card${on ? " is-on" : ""}`}>
                <span className="rv-stars" aria-label="5/5">
                  ★★★★★
                </span>
                <blockquote>
                  <Highlight text={lang === "ar" ? rv.ar : rv.en} lang={lang} />
                </blockquote>
                <figcaption>
                  <b>{rv.name}</b>
                  {rv.guide ? ` · ${c.guide}` : ""} · {c.google}
                </figcaption>
              </li>
            );
          })}
        </ol>
      </div>
      <a href={MAPS_URL} target="_blank" rel="noreferrer" className={`rv1__end${p > 0.92 ? " is-on" : ""}`}>
        <b>{lang === "ar" ? arDigits(RATING) : RATING}</b>
        <span className="rv-stars" aria-hidden>
          ★★★★★
        </span>
        <span className="rv1__all">{c.all(lang === "ar" ? arDigits(REVIEW_COUNT) : String(REVIEW_COUNT))}</span>
      </a>
    </section>
  );
}
