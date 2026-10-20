"use client";

import { useEffect, useState } from "react";
import { CallButtons } from "./CallButtons";

/** Phone-only Call / WhatsApp bar. Appears once the hero buttons scroll out of view. */
export function StickyBar({ call, waLabel, waMsg }: { call: string; waLabel: string; waMsg: string }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const target = document.getElementById("hero-ctas");
    if (!target) return;
    const obs = new IntersectionObserver(([e]) => setShow(!e.isIntersecting && e.boundingClientRect.top < 0));
    obs.observe(target);
    return () => obs.disconnect();
  }, []);

  return (
    <div className={`h-sticky${show ? " is-on" : ""}`} aria-hidden={!show} inert={!show}>
      <CallButtons call={call} waLabel={waLabel} waMsg={waMsg} lead="sticky-bar" size="sm" />
    </div>
  );
}
