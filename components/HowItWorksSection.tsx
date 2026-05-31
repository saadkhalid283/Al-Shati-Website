import { MessageCircle, Search, Wrench } from "lucide-react";
import type { Translations } from "@/lib/types";
import { SectionHead } from "./SectionHead";

const stepIcons = [MessageCircle, Search, Wrench];

export function HowItWorksSection({ L }: { L: Translations }) {
  const isAr = L.dir === "rtl";

  return (
    <section
      data-reveal
      className="section-wrap"
      style={{
        background: "linear-gradient(180deg, #fff 0%, var(--surface) 100%)",
      }}
    >
      <div className="section-inner" style={{ maxWidth: 980 }}>
        <SectionHead
          eyebrow={isAr ? "كيف نعمل؟" : "How It Works"}
          title={L.howTitle}
          sub={L.howSub}
        />

        {/* Step connector line (desktop only) */}
        <div style={{ position: "relative" }}>
          <div className="step-connector" />

          <div
            className="grid"
            style={{
              gridTemplateColumns: "repeat(1,1fr)",
              gap: 32,
              position: "relative",
              zIndex: 1,
            }}
            data-grid="how"
          >
            {stepIcons.map((Icon, i) => (
              <div key={i} style={{ textAlign: "center" }}>
                {/* Step icon circle */}
                <div
                  style={{
                    position: "relative",
                    display: "inline-flex",
                    marginBottom: 20,
                  }}
                >
                  <div
                    className="flex items-center justify-center"
                    style={{
                      width: 68,
                      height: 68,
                      borderRadius: "50%",
                      background: "linear-gradient(145deg, var(--navy), var(--navy-3))",
                      boxShadow: "0 6px 20px rgba(15,45,74,0.22)",
                    }}
                  >
                    <Icon size={28} color="#fff" strokeWidth={1.75} />
                  </div>
                  {/* Step number badge */}
                  <span
                    className="flex items-center justify-center"
                    style={{
                      position: "absolute",
                      top: -6,
                      insetInlineEnd: -6,
                      width: 28,
                      height: 28,
                      borderRadius: "50%",
                      background: "var(--gold)",
                      color: "var(--navy)",
                      fontWeight: 900,
                      fontSize: 12,
                      border: "2.5px solid #fff",
                      boxShadow: "var(--shadow-gold)",
                    }}
                  >
                    {i + 1}
                  </span>
                </div>

                <h3
                  style={{
                    margin: "0 0 8px",
                    fontSize: 18,
                    fontWeight: 800,
                    color: "var(--navy)",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {L.steps[i].t}
                </h3>
                <p
                  style={{
                    margin: 0,
                    fontSize: 14,
                    color: "var(--muted)",
                    lineHeight: 1.75,
                    maxWidth: 240,
                    marginInline: "auto",
                  }}
                >
                  {L.steps[i].d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
