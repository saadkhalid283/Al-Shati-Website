import { MessageCircle } from "lucide-react";
import { wa } from "@/lib/constants";
import { servicesData, moreServices } from "@/lib/data";
import type { SiteProps } from "@/lib/site-props";
import { SectionHead } from "./SectionHead";

export function ServicesSection({ lang, L, isAr }: SiteProps) {
  return (
    <section id="services" data-reveal className="section-wrap" style={{ background: "#fff" }}>
      <div className="section-inner">
        <SectionHead
          eyebrow={isAr ? "خدماتنا" : "Our Services"}
          title={L.servicesTitle}
          sub={L.servicesSub}
        />
        <div
          className="grid"
          style={{ gridTemplateColumns: "repeat(1,1fr)", gap: 20 }}
          data-grid="services"
        >
          {servicesData(lang).map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={i}
                className="svc-card"
                style={{
                  background: "#fff",
                  border: "1px solid var(--line)",
                  borderRadius: "var(--radius-card)",
                  padding: "26px 22px 22px",
                  boxShadow: "var(--shadow-xs)",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Service index number */}
                <div
                  style={{
                    position: "absolute",
                    top: 16,
                    insetInlineEnd: 18,
                    fontSize: 28,
                    fontWeight: 900,
                    color: "var(--line)",
                    lineHeight: 1,
                    letterSpacing: "-0.04em",
                    userSelect: "none",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>

                {/* Icon */}
                <div
                  className="flex items-center justify-center icon-box--gold"
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: 14,
                    marginBottom: 18,
                  }}
                >
                  <Icon size={26} color="var(--gold)" strokeWidth={1.75} />
                </div>

                <h3
                  style={{
                    margin: "0 0 4px",
                    fontSize: 18,
                    fontWeight: 800,
                    color: "var(--navy)",
                    lineHeight: 1.25,
                    letterSpacing: "-0.015em",
                  }}
                >
                  {isAr ? s.ar : s.en}
                </h3>
                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 600,
                    color: "var(--muted-2)",
                    marginBottom: 10,
                    letterSpacing: "0.03em",
                    textTransform: "uppercase",
                  }}
                >
                  {isAr ? s.en : s.ar}
                </div>
                <p
                  style={{
                    margin: 0,
                    fontSize: 14,
                    color: "var(--muted)",
                    lineHeight: 1.75,
                    flex: 1,
                  }}
                >
                  {isAr ? s.dAr : s.dEn}
                </p>
                <a
                  href={wa(s.msg)}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary flex items-center justify-center"
                  style={{
                    gap: 7,
                    marginTop: 20,
                    padding: "11px",
                    fontSize: 14,
                    width: "100%",
                    borderRadius: 10,
                    justifyContent: "center",
                  }}
                >
                  <MessageCircle size={16} strokeWidth={2} /> {L.requestBtn}
                </a>
              </div>
            );
          })}
        </div>

        {/* Additional services */}
        <div
          style={{
            marginTop: 32,
            padding: "22px 24px",
            background: "var(--surface)",
            border: "1px solid var(--line)",
            borderRadius: 16,
            display: "flex",
            alignItems: "center",
            gap: 16,
            flexWrap: "wrap",
          }}
        >
          <span
            style={{
              fontSize: 12,
              fontWeight: 700,
              color: "var(--muted)",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              flexShrink: 0,
            }}
          >
            {L.moreTitle}
          </span>
          <div className="flex items-center" style={{ gap: 8, flexWrap: "wrap" }}>
            {moreServices(lang).map((m, i) => {
              const Icon = m.icon;
              return (
                <div
                  key={i}
                  className="flex items-center"
                  style={{
                    gap: 7,
                    padding: "8px 14px",
                    borderRadius: 999,
                    background: "#fff",
                    border: "1px solid var(--line)",
                    fontWeight: 600,
                    color: "var(--navy)",
                    fontSize: 13,
                  }}
                >
                  <Icon size={14} color="var(--navy-3)" strokeWidth={1.75} />
                  {isAr ? m.ar : m.en}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
