import { Star, Quote } from "lucide-react";
import { reviewsData } from "@/lib/data";
import type { SiteProps } from "@/lib/site-props";
import { SectionHead } from "./SectionHead";

export function ReviewsSection({ L, isAr }: SiteProps) {
  return (
    <section
      id="reviews"
      data-reveal
      className="section-wrap"
      style={{
        background: "linear-gradient(180deg, var(--tint) 0%, #edf2f7 100%)",
      }}
    >
      <div className="section-inner">
        <SectionHead
          eyebrow={isAr ? "آراء العملاء" : "Testimonials"}
          title={L.reviewsTitle}
          sub={L.reviewsSub}
        />

        {/* Aggregate rating strip */}
        <div
          className="flex items-center justify-center"
          style={{
            gap: 14,
            marginBottom: 36,
            padding: "16px 24px",
            background: "#fff",
            border: "1px solid var(--line)",
            borderRadius: 14,
            maxWidth: 380,
            marginInline: "auto",
            boxShadow: "var(--shadow-xs)",
          }}
        >
          <div className="flex items-center" style={{ gap: 3 }}>
            {Array.from({ length: 5 }).map((_, k) => (
              <Star key={k} size={17} fill="var(--gold)" color="var(--gold)" />
            ))}
          </div>
          <div
            style={{
              fontSize: 22,
              fontWeight: 900,
              color: "var(--navy)",
              letterSpacing: "-0.03em",
            }}
          >
            5.0
          </div>
          <div
            style={{
              fontSize: 13,
              color: "var(--muted)",
              fontWeight: 600,
              borderInlineStart: "1px solid var(--line)",
              paddingInlineStart: 14,
            }}
          >
            {L.googleReviews}
          </div>
        </div>

        {/* Review grid */}
        <div
          className="grid"
          style={{ gridTemplateColumns: "repeat(1,1fr)", gap: 16 }}
          data-grid="rev"
        >
          {reviewsData.map((r, i) => (
            <div
              key={i}
              className="rev-card"
              style={{
                background: "#fff",
                borderRadius: "var(--radius-card)",
                padding: "22px 20px",
                border: "1px solid var(--line)",
                boxShadow: "var(--shadow-sm)",
                display: "flex",
                flexDirection: "column",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Top accent */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  insetInlineStart: 0,
                  width: 40,
                  height: 3,
                  background: "linear-gradient(90deg, var(--gold), transparent)",
                  borderRadius: "0 0 4px 0",
                }}
              />

              {/* Stars + quote */}
              <div
                className="flex items-center justify-between"
                style={{ marginBottom: 14 }}
              >
                <div className="flex items-center" style={{ gap: 2 }}>
                  {Array.from({ length: r.stars }).map((_, k) => (
                    <Star key={k} size={14} fill="var(--gold)" color="var(--gold)" />
                  ))}
                </div>
                <Quote
                  size={20}
                  color="rgba(201,162,39,0.25)"
                  strokeWidth={1.5}
                />
              </div>

              {/* Review text */}
              <p
                style={{
                  margin: 0,
                  fontSize: 14,
                  color: "var(--ink-2)",
                  lineHeight: 1.85,
                  flex: 1,
                }}
              >
                {isAr ? r.ar : r.en}
              </p>

              {/* Reviewer info */}
              <div
                className="flex items-center"
                style={{
                  gap: 12,
                  marginTop: 18,
                  paddingTop: 14,
                  borderTop: "1px solid var(--tint-2)",
                }}
              >
                <div
                  className="flex items-center justify-center icon-box"
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    fontWeight: 700,
                    color: "#fff",
                    fontSize: 13,
                    flexShrink: 0,
                  }}
                >
                  {r.initials}
                </div>
                <div>
                  <div
                    style={{
                      fontWeight: 700,
                      color: "var(--navy)",
                      fontSize: 14,
                      lineHeight: 1.3,
                    }}
                  >
                    {r.name}
                  </div>
                  <div
                    style={{
                      fontSize: 11,
                      color: "var(--muted)",
                      fontWeight: 600,
                      marginTop: 2,
                      letterSpacing: "0.02em",
                    }}
                  >
                    {r.guide ? `${L.localGuide} · ` : ""}
                    {L.googleReviews}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
