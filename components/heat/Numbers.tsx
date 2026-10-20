"use client";

import { useEffect, useRef, useState } from "react";
import { RATING, REVIEW_COUNT } from "@/lib/constants";
import { brandsFor } from "@/lib/brands";
import type { Lang } from "@/lib/types";

const t = {
  ar: {
    h2: "الشاطئ بالأرقام.",
    years: "سنة نصلّح أجهزة جدة",
    rating: `من ${REVIEW_COUNT} تقييم على جوجل`.replace(/\d/g, (d) => "٠١٢٣٤٥٦٧٨٩"[+d]),
    brands: "ماركة نصلّحها",
    days: "خدمة، كل يوم",
    hours: "اتصال وواتساب أي وقت",
    week: ["س", "ح", "ن", "ث", "ر", "خ", "ج"],
  },
  en: {
    h2: "Al-Shati in numbers.",
    years: "years fixing Jeddah's appliances",
    rating: `from ${REVIEW_COUNT} Google reviews`,
    brands: "brands we repair",
    days: "service, every day",
    hours: "Calls and WhatsApp any time",
    week: ["S", "S", "M", "T", "W", "T", "F"],
  },
};

const arDigits = (s: string) => s.replace(/\d/g, (d) => "٠١٢٣٤٥٦٧٨٩"[+d]).replace(".", "٫");

/** True once the element has scrolled into view. `armed` is false when it was already visible on load. */
function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [state, setState] = useState<"ssr" | "armed" | "shown">("ssr");
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return setState("shown");
    const r = el.getBoundingClientRect();
    if (r.top < window.innerHeight && r.bottom > 0) return setState("shown");
    setState("armed");
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setState("shown");
          obs.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, state] as const;
}

/** Counts from 0 to `to` once visible. Server HTML always carries the real number. */
function Count({ to, decimals = 0, lang, run }: { to: number; decimals?: number; lang: Lang; run: "ssr" | "armed" | "shown" }) {
  const [v, setV] = useState(to);
  const armed = useRef(false);
  useEffect(() => {
    if (run === "armed") {
      armed.current = true;
      setV(0);
    }
    // only count up if it scrolled in; if it was on screen at load, just show the number
    if (run !== "shown" || !armed.current) return;
    let raf = 0;
    const start = performance.now();
    const dur = 1400;
    setV(0);
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / dur);
      setV(to * (1 - Math.pow(1 - p, 3)));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [run, to]);
  const s = v.toFixed(decimals);
  return <>{lang === "ar" ? arDigits(s) : s}</>;
}

export function Numbers({ lang }: { lang: Lang }) {
  const c = t[lang];
  const [ref, run] = useReveal<HTMLElement>();
  const brands = brandsFor("all").map((b) => (lang === "ar" ? b.ar : b.en));
  const rating = Number(RATING);

  return (
    <section ref={ref} className={`nb nb--${run}`} aria-label={c.h2}>
      <h2 className="h-h2 nb__h2">{c.h2}</h2>

      <div className="nb__grid">
        {/* 25+ years: one notch per year fills in */}
        <div className="nb__card nb__card--years">
          <div className="nb__num">
            <Count to={25} lang={lang} run={run} />
            <sup>+</sup>
          </div>
          <div className="nb__label">{c.years}</div>
          <div className="nb__ticks" aria-hidden>
            {Array.from({ length: 25 }).map((_, i) => (
              <span key={i} style={{ "--i": i } as React.CSSProperties} />
            ))}
          </div>
        </div>

        {/* 4.7: the stars fill to the real rating */}
        <div className="nb__card nb__card--rating">
          <div className="nb__num">
            <Count to={rating} decimals={1} lang={lang} run={run} />
          </div>
          <div className="nb__stars" aria-hidden>
            <span className="nb__stars-base">★★★★★</span>
            <span className="nb__stars-fill" style={{ "--fill": `${(rating / 5) * 100}%` } as React.CSSProperties}>
              ★★★★★
            </span>
          </div>
          <div className="nb__label">{c.rating}</div>
        </div>

        {/* 29 brands: names roll past */}
        <div className="nb__card nb__card--brands">
          <div className="nb__num">
            <Count to={brands.length} lang={lang} run={run} />
          </div>
          <div className="nb__label">{c.brands}</div>
          <div className="nb__roll" aria-hidden>
            <div className="nb__roll-track">
              {[...brands.slice(0, 10), brands[0]].map((n, i) => (
                <span key={i}>{n}</span>
              ))}
            </div>
          </div>
        </div>

        {/* 24/7: each day of the week lights up */}
        <div className="nb__card nb__card--days">
          <div className="nb__num">
            <Count to={24} lang={lang} run={run} />
            <span className="nb__slash">/{lang === "ar" ? "٧" : "7"}</span>
          </div>
          <div className="nb__label">{c.days}</div>
          <div className="nb__week" aria-hidden>
            {c.week.map((d, i) => (
              <span key={i} style={{ "--i": i } as React.CSSProperties}>
                {d}
              </span>
            ))}
          </div>
          <div className="nb__hours">{c.hours}</div>
        </div>
      </div>
    </section>
  );
}
