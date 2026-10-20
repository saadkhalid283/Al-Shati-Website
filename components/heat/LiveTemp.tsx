"use client";

import { useEffect, useState } from "react";
import type { Lang } from "@/lib/types";

const URL =
  "https://api.open-meteo.com/v1/forecast?latitude=21.54&longitude=39.17&current=temperature_2m&timezone=Asia%2FRiyadh";

/* One request per page view, shared by every <LiveTemp>. */
let pending: Promise<number | null> | null = null;
function fetchTemp() {
  pending ??= fetch(URL)
    .then((r) => r.json())
    .then((d) => {
      const t = d?.current?.temperature_2m;
      return typeof t === "number" ? Math.round(t) : null;
    })
    .catch(() => null);
  return pending;
}

export const digits = (n: number, lang: Lang) =>
  lang === "ar" ? String(n).replace(/\d/g, (d) => "٠١٢٣٤٥٦٧٨٩"[+d]) : String(n);

export function useJeddahTemp() {
  const [temp, setTemp] = useState<number | null>(null);
  const [done, setDone] = useState(false);
  useEffect(() => {
    let live = true;
    fetchTemp().then((t) => {
      if (!live) return;
      setTemp(t);
      setDone(true);
    });
    return () => {
      live = false;
    };
  }, []);
  return { temp, done };
}

/** The giant hero number. Shows the fallback word until the live reading arrives. */
export function HeroTemp({ lang, fallback, className }: { lang: Lang; fallback: string; className: string }) {
  const { temp, done } = useJeddahTemp();
  return (
    <div className={className} aria-live="polite">
      {!done ? (
        // hold the exact space of a two-digit reading so nothing shifts when it arrives
        <span className="h-temp__ph" aria-hidden>
          {digits(30, lang)}
          <span>°</span>
        </span>
      ) : temp === null ? (
        fallback
      ) : (
        <>
          {digits(temp, lang)}
          <span>°</span>
        </>
      )}
    </div>
  );
}

/** A sentence that mentions the live temperature, or a fallback without it. */
export function TempLine({
  lang,
  withTemp,
  fallback,
}: {
  lang: Lang;
  withTemp: string;
  fallback: string;
}) {
  const { temp } = useJeddahTemp();
  return <>{temp === null ? fallback : withTemp.replace("{t}", digits(temp, lang))}</>;
}

/** Fridge hero: live outside temperature next to the 4° a fridge should hold. */
export function FridgeTemps({ lang, label, caption }: { lang: Lang; label: string; caption: string }) {
  const { temp } = useJeddahTemp();
  return (
    <div className="h-fridge">
      <div className="h-label">
        {label}
        {temp !== null && <b className="h-fridge__out"> {digits(temp, lang)}°</b>}
      </div>
      <div className="h-temp h-temp--cold h-temp--sm">
        {digits(4, lang)}
        <span>°</span>
      </div>
      {caption && <p className="h-fridge__cap">{caption}</p>}
    </div>
  );
}
