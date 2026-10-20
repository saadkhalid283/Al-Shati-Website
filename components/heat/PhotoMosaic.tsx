"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { MOSAIC, PHOTOS } from "@/lib/photos";
import type { Lang } from "@/lib/types";

const CLS = ["pm-a", "pm-b", "pm-c", "pm-d", "pm-e"];

/** Homepage photo mosaic: tiles rise in one by one, each photo settles with a slow zoom. */
export function PhotoMosaic({ lang }: { lang: Lang }) {
  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<"ssr" | "armed" | "in">("ssr");

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const r = el.getBoundingClientRect();
    if (r.top < window.innerHeight && r.bottom > 0) return; // already on screen: just show it
    setState("armed");
    const o = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setState("in");
          o.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    o.observe(el);
    return () => o.disconnect();
  }, []);

  return (
    <section className="h-cold pm-sec" aria-labelledby="our-work">
      <div className="pp-kicker">{MOSAIC.kicker[lang]}</div>
      <h2 id="our-work" className="h-h2">
        {MOSAIC.h2[lang]}
      </h2>
      <div ref={ref} className={`pm-grid pm-grid--${state}`}>
        {MOSAIC.tiles.map((t, i) => {
          const p = PHOTOS[t.k];
          return (
            <figure key={t.k} className={`pm-tile ${CLS[i]}`} style={{ "--i": i } as React.CSSProperties}>
              <div className="pp-pic">
                <Image src={p.src} alt={p.alt[lang]} fill sizes={i === 0 ? "(min-width: 900px) 1080px, 100vw" : "(min-width: 900px) 540px, 50vw"} />
              </div>
              <figcaption>
                <span>{t.tag[lang]}</span>
                {t.title[lang]}
              </figcaption>
            </figure>
          );
        })}
      </div>
    </section>
  );
}
