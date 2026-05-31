import { Phone, MapPin, Snowflake } from "lucide-react";
import { PHONE_PRIMARY, PHONE_SECONDARY } from "@/lib/constants";
import type { SiteProps } from "@/lib/site-props";

export function Footer({ L, isAr, go }: SiteProps) {
  const navItems: [string, string][] = [
    ["home", L.nav.home],
    ["services", L.nav.services],
    ["why", L.nav.why],
    ["reviews", L.nav.reviews],
    ["contact", L.nav.contact],
  ];

  return (
    <footer
      data-reveal
      className="site-footer"
      style={{
        background: "var(--navy)",
        color: "#fff",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Gold gradient top line */}
      <div
        style={{
          height: 3,
          background: "linear-gradient(90deg, transparent 0%, var(--gold) 30%, var(--gold-2) 60%, transparent 100%)",
          opacity: 0.7,
        }}
      />

      {/* Subtle background accent */}
      <div
        style={{
          position: "absolute",
          top: -120,
          insetInlineEnd: -80,
          width: 300,
          height: 300,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(201,162,39,0.04) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ padding: "52px 20px 24px", position: "relative" }}>
        <div
          className="grid"
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            gridTemplateColumns: "repeat(1,1fr)",
            gap: 36,
          }}
          data-grid="footer"
        >
          {/* Brand column */}
          <div>
            <div
              className="flex items-center"
              style={{ gap: 11, marginBottom: 16 }}
            >
              <div
                className="flex items-center justify-center"
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: 12,
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  flexShrink: 0,
                }}
              >
                <Snowflake size={20} color="var(--gold-2)" strokeWidth={1.75} />
              </div>
              <div>
                <div style={{ fontWeight: 800, fontSize: 17, lineHeight: 1.2 }}>{L.brand}</div>
                <div style={{ fontSize: 11, color: "rgba(255,255,255,0.5)", fontWeight: 500, marginTop: 2 }}>
                  {L.brandSub}
                </div>
              </div>
            </div>
            <p
              style={{
                margin: 0,
                color: "rgba(255,255,255,0.58)",
                fontSize: 14,
                lineHeight: 1.8,
                maxWidth: 320,
              }}
            >
              {L.footerTag}
            </p>
          </div>

          {/* Quick links */}
          <div>
            <div
              style={{
                fontWeight: 700,
                marginBottom: 16,
                color: "var(--gold-2)",
                fontSize: 11,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              {L.quickLinks}
            </div>
            {navItems.map(([id, label]) => (
              <div
                key={id}
                onClick={() => go(id)}
                className="lift"
                style={{
                  cursor: "pointer",
                  color: "rgba(255,255,255,0.65)",
                  fontSize: 14,
                  padding: "6px 0",
                  lineHeight: 1.5,
                  transition: "color 0.18s ease",
                }}
              >
                {label}
              </div>
            ))}
          </div>

          {/* Contact info */}
          <div>
            <div
              style={{
                fontWeight: 700,
                marginBottom: 16,
                color: "var(--gold-2)",
                fontSize: 11,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              {L.footerContact}
            </div>
            <a
              href={`tel:${PHONE_PRIMARY}`}
              className="flex items-center lift"
              style={{
                gap: 9,
                color: "rgba(255,255,255,0.65)",
                fontSize: 14,
                padding: "6px 0",
                direction: "ltr",
                justifyContent: isAr ? "flex-end" : "flex-start",
              }}
            >
              <Phone size={14} color="var(--gold-2)" strokeWidth={1.75} />
              {PHONE_PRIMARY}
            </a>
            <a
              href={`tel:${PHONE_SECONDARY}`}
              className="flex items-center lift"
              style={{
                gap: 9,
                color: "rgba(255,255,255,0.65)",
                fontSize: 14,
                padding: "6px 0",
                direction: "ltr",
                justifyContent: isAr ? "flex-end" : "flex-start",
              }}
            >
              <Phone size={14} color="var(--gold-2)" strokeWidth={1.75} />
              {PHONE_SECONDARY}
            </a>
            <div
              className="flex items-start"
              style={{
                gap: 9,
                color: "rgba(255,255,255,0.65)",
                fontSize: 14,
                padding: "6px 0",
                lineHeight: 1.65,
              }}
            >
              <MapPin
                size={14}
                color="var(--gold-2)"
                style={{ marginTop: 3, flexShrink: 0 }}
                strokeWidth={1.75}
              />
              {L.address}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div
          style={{
            maxWidth: 1100,
            margin: "28px auto 0",
            paddingTop: 20,
            borderTop: "1px solid rgba(255,255,255,0.07)",
            textAlign: "center",
            color: "rgba(255,255,255,0.35)",
            fontSize: 13,
          }}
        >
          © {new Date().getFullYear()} {L.brand} · {L.rights}
        </div>
      </div>
    </footer>
  );
}
