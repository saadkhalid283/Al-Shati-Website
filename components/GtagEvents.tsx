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
 * An optional data-lead attribute on the link (e.g. "hero", "problem:leak")
 * is sent along so you can see which button produced the lead.
 */
export function GtagEvents() {
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const anchor = (e.target as Element).closest("a[href]") as HTMLAnchorElement | null;
      if (!anchor || !window.gtag) return;

      const href = anchor.getAttribute("href") ?? "";
      const source = anchor.dataset.lead ?? "other";

      if (href.startsWith("tel:")) {
        window.gtag("event", "generate_lead", { method: "phone_call", lead_source: source });
        window.gtag("event", "contact", { method: "phone_call", lead_source: source });
        window.gtag("event", "conversion", {
          send_to: "AW-18234387646/LarTCLGkzcMcEL7Z6vZD",
          value: 1.0,
          currency: "PKR",
        });
      } else if (href.includes("wa.me")) {
        window.gtag("event", "generate_lead", { method: "whatsapp", lead_source: source });
        window.gtag("event", "contact", { method: "whatsapp", lead_source: source });
        window.gtag("event", "conversion", {
          send_to: "AW-18234387646/W4YsCN6N0cMcEL7Z6vZD",
        });
      }
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
