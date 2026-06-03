"use client";

import { useState } from "react";
import { Phone, MessageCircle, Menu, X, Snowflake, Globe } from "lucide-react";
import { PHONE_PRIMARY, wa } from "@/lib/constants";
import type { Translations } from "@/lib/types";

interface NavbarProps {
  L: Translations;
  scrolled: boolean;
  active: string;
  onLangToggle: () => void;
  go: (id: string) => void;
}

export function Navbar({ L, scrolled, active, onLangToggle, go }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems: [string, string][] = [
    ["home", L.nav.home],
    ["services", L.nav.services],
    ["why", L.nav.why],
    ["reviews", L.nav.reviews],
    ["contact", L.nav.contact],
  ];

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    go(id);
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        insetInlineStart: 0,
        width: "100%",
        zIndex: 50,
        background: scrolled ? "rgba(255,255,255,.97)" : "rgba(255,255,255,.94)",
        backdropFilter: "blur(8px)",
        borderBottom: `1px solid ${scrolled ? "var(--line)" : "transparent"}`,
        boxShadow: scrolled ? "var(--shadow-sm)" : "none",
        transition: "border-color 0.25s, box-shadow 0.25s",
      }}
    >
      <div
        className="flex items-center justify-between"
        style={{ maxWidth: 1200, margin: "0 auto", padding: "10px 18px" }}
      >
        <div
          className="flex items-center"
          style={{ gap: 10, cursor: "pointer" }}
          onClick={() => scrollTo("home")}
        >
          <div className="icon-box" style={{ width: 40, height: 40, borderRadius: 10 }}>
            <Snowflake size={20} color="var(--gold-2)" strokeWidth={1.75} />
          </div>
          <div style={{ lineHeight: 1.15 }}>
            <div style={{ fontWeight: 700, fontSize: 17, color: "var(--navy)" }}>{L.brand}</div>
            <div style={{ fontSize: 11, color: "var(--muted)", fontWeight: 500 }}>{L.brandSub}</div>
          </div>
        </div>

        <div className="items-center" style={{ gap: 22, display: "none" }} data-desktop>
          {navItems.map(([id, label]) => (
            <span
              key={id}
              className={`navlink${active === id ? " navlink--active" : ""}`}
              onClick={() => scrollTo(id)}
              aria-current={active === id ? "true" : undefined}
              style={{ fontWeight: 600, fontSize: 14, color: "var(--navy)" }}
            >
              {label}
            </span>
          ))}
        </div>

        <div className="flex items-center" style={{ gap: 8 }}>
          <button
            type="button"
            onClick={onLangToggle}
            className="btn-ghost lift lang-toggle"
            aria-label="Switch language"
          >
            <Globe size={15} strokeWidth={2} />
            {L.langBtn}
          </button>

          <a
            href={wa(L.heroMsg)}
            target="_blank"
            rel="noreferrer"
            className="lift flex items-center btn-primary"
            style={{ padding: "8px 14px", fontSize: 13, gap: 6 }}
          >
            <MessageCircle size={17} strokeWidth={2} />
            <span className="nav-wa-label" data-desktop>
              {L.waBtn}
            </span>
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="btn-ghost lift"
            data-mobile
            style={{ display: "flex", padding: 8 }}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div
          data-mobile
          style={{
            borderTop: "1px solid var(--line)",
            background: "#fff",
            padding: "8px 18px 16px",
          }}
        >
          {navItems.map(([id, label]) => (
            <div
              key={id}
              onClick={() => scrollTo(id)}
              aria-current={active === id ? "true" : undefined}
              style={{
                padding: "11px 4px",
                fontWeight: active === id ? 800 : 600,
                fontSize: 14,
                color: active === id ? "var(--gold)" : "var(--navy)",
                borderBottom: "1px solid var(--tint)",
                cursor: "pointer",
              }}
            >
              {label}
            </div>
          ))}
          <a
            href={`tel:${PHONE_PRIMARY}`}
            className="flex items-center justify-center lift"
            style={{
              gap: 8,
              marginTop: 12,
              background: "var(--navy)",
              color: "#fff",
              borderRadius: 10,
              padding: "11px",
              fontWeight: 600,
              fontSize: 14,
            }}
          >
            <Phone size={17} /> {L.callBtn}
          </a>
        </div>
      )}
    </nav>
  );
}
