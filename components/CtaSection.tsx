import { Phone, MessageCircle } from "lucide-react";
import { PHONE_PRIMARY, wa } from "@/lib/constants";
import type { Translations } from "@/lib/types";

export function CtaSection({ L }: { L: Translations }) {
  return (
    <section className="cta-section" data-reveal aria-labelledby="cta-heading">
      <div className="cta-section__glow" aria-hidden />
      <div className="cta-section__inner">
        <h2 id="cta-heading" className="cta-section__title">
          {L.ctaTitle}
        </h2>
        <p className="cta-section__sub">{L.ctaSub}</p>
        <div className="cta-section__actions">
          <a
            href={wa(L.heroMsg)}
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
            style={{ padding: "14px 28px", borderRadius: 12 }}
          >
            <MessageCircle size={19} strokeWidth={2} />
            {L.ctaWa}
          </a>
          <a
            href={`tel:${PHONE_PRIMARY}`}
            className="btn-outline-light"
            style={{ padding: "14px 28px", borderRadius: 12 }}
          >
            <Phone size={18} strokeWidth={1.75} />
            {L.ctaCall}
          </a>
        </div>
      </div>
    </section>
  );
}
