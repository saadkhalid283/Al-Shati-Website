"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Attaches a single document-level click listener that fires gtag conversion
 * events whenever a visitor clicks any tel: or WhatsApp link on the page.
 * Returns null — no visible output.
 */
export function GtagEvents() {
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const anchor = (e.target as Element).closest("a[href]") as HTMLAnchorElement | null;
      if (!anchor || !window.gtag) return;

      const href = anchor.getAttribute("href") ?? "";

      if (href.startsWith("tel:")) {
        window.gtag("event", "generate_lead", { method: "phone_call" });
        window.gtag("event", "contact", { method: "phone_call" });
      } else if (href.includes("wa.me")) {
        window.gtag("event", "generate_lead", { method: "whatsapp" });
        window.gtag("event", "contact", { method: "whatsapp" });
      }
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
