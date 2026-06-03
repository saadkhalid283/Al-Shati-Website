import { Phone, MessageCircle, Award, ShieldCheck, Star } from "lucide-react";
import { PHONE_PRIMARY, wa } from "@/lib/constants";
import type { Translations } from "@/lib/types";

export function Hero({ L }: { L: Translations }) {
  return (
    <header
      id="home"
      className="hero"
      style={{
        position: "relative",
        paddingTop: 132,
        paddingBottom: 96,
        overflow: "hidden",
        background: "var(--navy)",
        isolation: "isolate",
      }}
    >
      {/* Background photo (Al-Shati storefront, Jeddah waterfront at dusk) */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('/hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center 32%",
          zIndex: -3,
        }}
      />

      {/* Navy scrim: vertical depth + readability behind text */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(8,26,42,0.82) 0%, rgba(12,36,60,0.70) 38%, rgba(10,30,52,0.86) 100%)",
          zIndex: -2,
        }}
      />
      {/* Center focus scrim: darkens directly behind the headline */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 70% 60% at 50% 42%, rgba(8,24,40,0.55) 0%, transparent 70%)",
          zIndex: -2,
        }}
      />

      {/* Subtle grid overlay for brand cohesion */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.14,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.06) 1px, transparent 1px)",
          backgroundSize: "52px 52px",
          maskImage: "radial-gradient(ellipse at 50% 0%, #000 15%, transparent 70%)",
          zIndex: -1,
        }}
      />
      {/* Warm gold glow, top center */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "2%",
          left: "50%",
          transform: "translateX(-50%)",
          width: 720,
          height: 420,
          maxWidth: "120%",
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse, rgba(201,162,39,0.16) 0%, transparent 68%)",
          pointerEvents: "none",
          zIndex: -1,
        }}
      />

      <div
        style={{
          position: "relative",
          maxWidth: 880,
          margin: "0 auto",
          padding: "0 20px",
          textAlign: "center",
        }}
      >
        {/* Eyebrow badge */}
        <div
          className="rise"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "7px 18px",
            borderRadius: 999,
            background: "rgba(201,162,39,0.14)",
            border: "1px solid rgba(201,162,39,0.32)",
            color: "#fff",
            fontWeight: 700,
            fontSize: 13,
            marginBottom: 24,
            letterSpacing: "0.02em",
            backdropFilter: "blur(4px)",
            WebkitBackdropFilter: "blur(4px)",
          }}
        >
          <Award size={14} color="var(--gold-2)" strokeWidth={2} />
          {L.heroEyebrow}
        </div>

        <h1
          className="rise"
          style={{
            animationDelay: ".07s",
            fontSize: "clamp(36px, 6.4vw, 64px)",
            fontWeight: 900,
            color: "#fff",
            lineHeight: 1.08,
            margin: 0,
            letterSpacing: "-0.03em",
            textShadow: "0 2px 24px rgba(0,0,0,0.45)",
          }}
        >
          {L.heroTitle1}
          <br />
          <span style={{ color: "var(--gold-2)", fontWeight: 900 }}>
            {L.heroTitle2}
          </span>
        </h1>

        <p
          className="rise"
          style={{
            animationDelay: ".14s",
            maxWidth: 580,
            margin: "22px auto 0",
            fontSize: "clamp(15px, 2vw, 18px)",
            color: "rgba(255,255,255,.84)",
            lineHeight: 1.85,
            fontWeight: 500,
            textShadow: "0 1px 12px rgba(0,0,0,0.4)",
          }}
        >
          {L.heroSub}
        </p>

        {/* CTA buttons */}
        <div
          className="rise flex items-center justify-center hero-cta"
          style={{
            animationDelay: ".20s",
            gap: 12,
            marginTop: 36,
            flexWrap: "wrap",
          }}
        >
          <a
            href={wa(L.heroMsg)}
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
            style={{ padding: "15px 30px", fontSize: 15.5, borderRadius: 12 }}
          >
            <MessageCircle size={19} strokeWidth={2} /> {L.heroWa}
          </a>
          <a
            href={`tel:${PHONE_PRIMARY}`}
            className="btn-outline-light"
            style={{
              padding: "15px 30px",
              fontSize: 15.5,
              borderRadius: 12,
              background: "rgba(255,255,255,0.08)",
              backdropFilter: "blur(4px)",
              WebkitBackdropFilter: "blur(4px)",
            }}
          >
            <Phone size={18} strokeWidth={1.75} /> {L.heroCall}
          </a>
        </div>

        {/* Trust badges */}
        <div
          className="rise flex items-center justify-center"
          style={{
            animationDelay: ".27s",
            gap: 8,
            marginTop: 28,
            flexWrap: "wrap",
          }}
        >
          {L.badges.map((b, i) => (
            <div
              key={i}
              className="flex items-center"
              style={{
                gap: 6,
                padding: "7px 14px",
                borderRadius: 999,
                background: "rgba(255,255,255,.08)",
                border: "1px solid rgba(255,255,255,.16)",
                color: "#fff",
                fontWeight: 600,
                fontSize: 13,
                backdropFilter: "blur(4px)",
                WebkitBackdropFilter: "blur(4px)",
              }}
            >
              <ShieldCheck size={13} color="var(--gold-2)" strokeWidth={2} /> {b}
            </div>
          ))}
        </div>
      </div>

      {/* Floating Google rating card (desktop only) */}
      <div
        data-desktop
        className="fade-in hero-rating-card flex items-center"
        style={{
          position: "absolute",
          bottom: 88,
          insetInlineEnd: "5%",
          background: "rgba(10,28,46,0.55)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          border: "1px solid rgba(255,255,255,0.16)",
          borderRadius: 16,
          padding: "14px 18px",
          gap: 12,
          animationDelay: ".4s",
          zIndex: 2,
        }}
      >
        <div
          className="flex items-center justify-center"
          style={{
            width: 38,
            height: 38,
            borderRadius: 10,
            background: "rgba(201,162,39,0.16)",
            border: "1px solid rgba(201,162,39,0.3)",
            flexShrink: 0,
          }}
        >
          <Star size={18} color="var(--gold-2)" fill="var(--gold-2)" strokeWidth={1.5} />
        </div>
        <div>
          <div style={{ color: "#fff", fontWeight: 800, fontSize: 15, letterSpacing: "-0.01em" }}>
            4.9 ★★★★★
          </div>
          <div style={{ color: "rgba(255,255,255,0.72)", fontSize: 11, fontWeight: 600, marginTop: 1 }}>
            {L.heroRating}
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          bottom: -1,
          insetInlineStart: 0,
          width: "100%",
          height: 52,
          background: "#fff",
          clipPath: "ellipse(72% 100% at 50% 100%)",
          zIndex: 1,
        }}
      />
    </header>
  );
}
