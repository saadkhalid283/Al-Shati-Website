"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { PHONE_PRIMARY, wa } from "@/lib/constants";
import {
  APPLIANCES,
  BOOK_EVENT,
  bookingText,
  brandNamesFor,
  buildMessage,
  districtsFor,
  problemsFor,
  type Booking,
} from "@/lib/booking";
import type { Appliance } from "@/lib/landing-copy";
import type { Lang } from "@/lib/types";
import { WhatsAppIcon } from "./Icons";
import { AcIllus, FridgeIllus, WasherIllus } from "./Illus";

const ICONS: Record<Appliance, typeof WasherIllus> = { washer: WasherIllus, fridge: FridgeIllus, ac: AcIllus };

const empty: Booking = { appliance: null, problem: null, brand: null, district: null, when: null, note: "" };

function Chips({
  options,
  value,
  onPick,
  name,
}: {
  options: string[];
  value: string | null;
  onPick: (v: string | null) => void;
  name: string;
}) {
  return (
    <div className="bk-chips" role="radiogroup" aria-label={name}>
      {options.map((o) => (
        <button
          key={o}
          type="button"
          role="radio"
          aria-checked={value === o}
          className={`bk-chip${value === o ? " is-on" : ""}`}
          onClick={() => onPick(value === o ? null : o)}
        >
          {o}
        </button>
      ))}
    </div>
  );
}

/** Bottom sheet that turns a few taps into a ready WhatsApp booking message. */
export function BookingSheet({ lang }: { lang: Lang }) {
  const t = bookingText[lang];
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [b, setB] = useState<Booking>(empty);
  const closeRef = useRef<HTMLButtonElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const onBook = (e: Event) => {
      const appliance = (e as CustomEvent<{ appliance?: Appliance }>).detail?.appliance ?? null;
      setB((prev) => (prev.appliance === appliance && appliance ? prev : { ...empty, appliance }));
      setOpen(true);
    };
    window.addEventListener(BOOK_EVENT, onBook);
    return () => window.removeEventListener(BOOK_EVENT, onBook);
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    bodyRef.current?.scrollTo({ top: 0 });
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  if (!mounted) return null;

  const set = <K extends keyof Booking>(k: K, v: Booking[K]) => setB((p) => ({ ...p, [k]: v }));
  const pickAppliance = (a: Appliance) =>
    setB((p) => (p.appliance === a ? p : { ...p, appliance: a, problem: null, brand: null }));

  const required = [b.appliance, b.problem, b.district?.trim(), b.when];
  const filled = required.filter(Boolean).length;
  const message = buildMessage(b, lang);
  const problems = b.appliance ? [...problemsFor(b.appliance, lang), t.other] : [];
  const brands = b.appliance ? [t.other, ...brandNamesFor(b.appliance, lang)] : [];
  const districts = districtsFor(lang);

  return createPortal(
    <div dir={lang === "ar" ? "rtl" : "ltr"} lang={lang}>
      <div className={`bk-scrim${open ? " is-open" : ""}`} onClick={() => setOpen(false)} aria-hidden />
      <section
        className={`bk${open ? " is-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="bk-title"
        aria-hidden={!open}
        inert={!open}
      >
        <div className="bk__grab" aria-hidden />
        <header className="bk__head">
          <div>
            <h2 id="bk-title" className="bk__title">
              {t.title}
            </h2>
            <p className="bk__sub">{t.sub}</p>
          </div>
          <button ref={closeRef} type="button" className="bk__close" onClick={() => setOpen(false)}>
            {t.close}
          </button>
        </header>

        <div className="bk__progress" aria-hidden>
          <span style={{ width: `${(filled / required.length) * 100}%` }} />
        </div>

        <div className="bk__body" ref={bodyRef}>
          <div className="bk__step">
            <div className="bk__label">
              <b>1</b> {t.steps.appliance}
            </div>
            <div className="bk-apps" role="radiogroup" aria-label={t.steps.appliance}>
              {APPLIANCES.map((a) => {
                const Icon = ICONS[a];
                return (
                  <button
                    key={a}
                    type="button"
                    role="radio"
                    aria-checked={b.appliance === a}
                    className={`bk-app${b.appliance === a ? " is-on" : ""}`}
                    onClick={() => pickAppliance(a)}
                  >
                    <Icon className="bk-app__il" />
                    <span>{t.applianceNames[a]}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {b.appliance && (
            <>
              <div className="bk__step" key={`p-${b.appliance}`}>
                <div className="bk__label">
                  <b>2</b> {t.steps.problem}
                </div>
                <Chips options={problems} value={b.problem} onPick={(v) => set("problem", v)} name={t.steps.problem} />
              </div>

              <div className="bk__step">
                <div className="bk__label">
                  <b>3</b> {t.steps.brand} <em className="bk__opt">{t.optional}</em>
                </div>
                <div className="bk-scroll">
                  <Chips options={brands} value={b.brand} onPick={(v) => set("brand", v)} name={t.steps.brand} />
                </div>
              </div>

              <div className="bk__step">
                <div className="bk__label">
                  <b>4</b> {t.steps.district}
                </div>
                <input
                  className="bk-input"
                  type="text"
                  list="bk-districts"
                  enterKeyHint="done"
                  autoComplete="address-level3"
                  value={b.district ?? ""}
                  placeholder={t.districtPh}
                  onChange={(e) => set("district", e.target.value || null)}
                />
                <datalist id="bk-districts">
                  {districts.map((d) => (
                    <option key={d} value={d} />
                  ))}
                </datalist>
              </div>

              <div className="bk__step">
                <div className="bk__label">
                  <b>5</b> {t.steps.when}
                </div>
                <Chips options={t.times} value={b.when} onPick={(v) => set("when", v)} name={t.steps.when} />
              </div>

              <div className="bk__step">
                <textarea
                  className="bk-note"
                  rows={2}
                  value={b.note}
                  placeholder={t.notePh}
                  onChange={(e) => set("note", e.target.value)}
                />
              </div>

              <div className="bk-preview" aria-live="polite">
                <div className="bk-preview__to">
                  <WhatsAppIcon className="bk-preview__ico" />
                  {t.previewTo}
                </div>
                <div className="bk-preview__bubble">{message}</div>
              </div>
            </>
          )}
        </div>

        <footer className="bk__foot">
          <a
            href={wa(message)}
            target="_blank"
            rel="noreferrer"
            data-lead={`booking:${b.appliance ?? "none"}`}
            className={`bk-send${filled === required.length ? " is-ready" : ""}`}
          >
            <WhatsAppIcon className="bk-send__ico" fill="#fff" />
            {t.send}
            <small>{t.done(filled, required.length)}</small>
          </a>
          <a href={`tel:${PHONE_PRIMARY}`} data-lead="booking-call" className="bk-call">
            {t.orCall} <span dir="ltr">058 059 2468</span>
          </a>
        </footer>
      </section>
    </div>,
    document.body
  );
}
