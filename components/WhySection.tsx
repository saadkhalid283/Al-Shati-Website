import { whyData } from "@/lib/data";
import type { SiteProps } from "@/lib/site-props";
import { SectionHead } from "./SectionHead";

export function WhySection({ lang, L, isAr }: SiteProps) {
  return (
    <section
      id="why"
      data-reveal
      className="section-wrap"
      style={{
        background: "linear-gradient(180deg, var(--tint) 0%, #edf2f7 100%)",
      }}
    >
      <div className="section-inner" style={{ maxWidth: 1100 }}>
        <SectionHead
          eyebrow={isAr ? "لماذا نحن؟" : "Why Us"}
          title={L.whyTitle}
          sub={L.whySub}
        />
        <div
          className="grid"
          style={{ gridTemplateColumns: "repeat(2,1fr)", gap: 16 }}
          data-grid="why"
        >
          {whyData(lang).map((w, i) => {
            const Icon = w.icon;
            return (
              <div
                key={i}
                className="why-card"
                style={{
                  background: "#fff",
                  borderRadius: "var(--radius-card)",
                  padding: "32px 20px 28px",
                  textAlign: "center",
                  border: "1px solid var(--line)",
                  boxShadow: "var(--shadow-sm)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Subtle corner accent */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    insetInlineStart: 0,
                    width: 56,
                    height: 3,
                    background: "linear-gradient(90deg, var(--gold), transparent)",
                    borderRadius: "0 0 4px 0",
                  }}
                />

                <div
                  className="flex items-center justify-center icon-box--gold"
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: "50%",
                    margin: "0 auto 16px",
                  }}
                >
                  <Icon size={28} color="var(--gold)" strokeWidth={1.75} />
                </div>

                <div
                  style={{
                    fontSize: "clamp(26px, 3.5vw, 34px)",
                    fontWeight: 900,
                    color: "var(--navy)",
                    letterSpacing: "-0.025em",
                    lineHeight: 1.1,
                  }}
                >
                  {w.stat}
                </div>
                <div
                  style={{
                    fontSize: 13,
                    fontWeight: 600,
                    color: "var(--muted)",
                    marginTop: 6,
                    lineHeight: 1.4,
                  }}
                >
                  {w.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
