"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { PHONE_PRIMARY, wa } from "@/lib/constants";
import { MENU, PAGE_LABELS, pageHref, otherLangHref, type PageKey } from "@/lib/site-nav";
import type { Lang } from "@/lib/types";
import { LandlineIcon, WhatsAppIcon } from "./Icons";

const t = {
  ar: { open: "القائمة", close: "إغلاق", call: "اتصل", wa: "واتساب", msg: "السلام عليكم، عندي جهاز عطلان وأحتاج فني اليوم", lang: "English" },
  en: { open: "Menu", close: "Close", call: "Call", wa: "WhatsApp", msg: "Hello, one of my appliances is broken and I need a technician today", lang: "العربية" },
};

/** Menu button and the slide-out side menu with every page. */
export function Menu({ lang, current }: { lang: Lang; current: PageKey }) {
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const s = t[lang];
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        className="h-burger"
        aria-label={s.open}
        aria-expanded={open}
        aria-controls="site-menu"
        onClick={() => setOpen(true)}
      >
        <span />
        <span />
        <span />
      </button>

      {mounted &&
        createPortal(
          <div dir={lang === "ar" ? "rtl" : "ltr"} lang={lang}>
      <div className={`h-scrim${open ? " is-open" : ""}`} onClick={() => setOpen(false)} aria-hidden />

      <aside
        id="site-menu"
        className={`h-drawer${open ? " is-open" : ""}`}
        aria-label={s.open}
        aria-hidden={!open}
        inert={!open}
      >
        <div className="h-drawer__top">
          <a href={otherLangHref(current, lang)} hrefLang={lang === "ar" ? "en" : "ar"} className="h-drawer__lang">
            {s.lang}
          </a>
          <button ref={closeRef} type="button" className="h-drawer__close" onClick={() => setOpen(false)}>
            {s.close}
          </button>
        </div>

        <nav>
          <a href={pageHref("home", lang)} className={`h-drawer__home${current === "home" ? " is-current" : ""}`}>
            {PAGE_LABELS.home[lang]}
          </a>
          {MENU.map((g) => (
            <div key={g.group.en} className="h-drawer__group">
              <div className="h-drawer__label">{g.group[lang]}</div>
              <ul>
                {g.keys.map((k) => (
                  <li key={k}>
                    <a
                      href={pageHref(k, lang)}
                      className={current === k ? "is-current" : undefined}
                      aria-current={current === k ? "page" : undefined}
                    >
                      {PAGE_LABELS[k][lang]}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        <div className="h-drawer__ctas">
          <a href={`tel:${PHONE_PRIMARY}`} data-lead="menu" className="h-drawer__call">
            <span className="h-btn__row">
              <LandlineIcon className="h-ico h-ico--phone" />
              {s.call}
            </span>
            <small dir="ltr">058 059 2468</small>
          </a>
          <a href={wa(s.msg)} target="_blank" rel="noreferrer" data-lead="menu" className="h-drawer__wa">
            <span className="h-btn__row">
              <WhatsAppIcon className="h-ico h-ico--wa" />
              {s.wa}
            </span>
          </a>
        </div>
      </aside>
          </div>,
          document.body
        )}
    </>
  );
}
