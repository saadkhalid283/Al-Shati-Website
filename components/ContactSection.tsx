import { Phone, MessageCircle, MapPin, Clock, Instagram } from "lucide-react";
import { PHONE_PRIMARY, PHONE_SECONDARY, MAP_SRC, INSTAGRAM_URL, wa } from "@/lib/constants";
import type { SiteProps } from "@/lib/site-props";
import { SectionHead } from "./SectionHead";
import { ContactRow } from "./ContactRow";

export function ContactSection({ L, isAr }: SiteProps) {
  return (
    <section id="contact" data-reveal className="section-wrap" style={{ background: "#fff" }}>
      <div className="section-inner" style={{ maxWidth: 1100 }}>
        <SectionHead
          eyebrow={isAr ? "تواصل معنا" : "Get in Touch"}
          title={L.contactTitle}
          sub={L.contactSub}
        />
        <div
          className="grid"
          style={{ gridTemplateColumns: "repeat(1,1fr)", gap: 24 }}
          data-grid="contact"
        >
          {/* Left: contact info + WhatsApp CTA */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <ContactRow
              icon={Phone}
              label={L.primaryLine}
              value={PHONE_PRIMARY}
              href={`tel:${PHONE_PRIMARY}`}
              dir="ltr"
            />
            <ContactRow
              icon={Phone}
              label={L.secondLine}
              value={PHONE_SECONDARY}
              href={`tel:${PHONE_SECONDARY}`}
              dir="ltr"
            />
            <ContactRow icon={MapPin} label={L.addressLabel} value={L.address} />
            <ContactRow icon={Clock} label={L.hoursLabel} value={L.hours} />

            {/* WhatsApp CTA */}
            <a
              href={wa(L.floatMsg)}
              target="_blank"
              rel="noreferrer"
              className="lift flex items-center btn-primary"
              style={{
                gap: 14,
                borderRadius: 14,
                padding: "18px 20px",
                marginTop: 4,
                background: "linear-gradient(135deg, var(--green) 0%, var(--green-2) 100%)",
              }}
            >
              <div
                className="flex items-center justify-center"
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 11,
                  background: "rgba(255,255,255,.14)",
                  flexShrink: 0,
                }}
              >
                <MessageCircle size={22} color="#fff" strokeWidth={1.75} />
              </div>
              <div>
                <div style={{ fontWeight: 800, fontSize: 15, lineHeight: 1.3 }}>
                  {L.waCard}
                </div>
                <div style={{ fontSize: 13, opacity: 0.85, fontWeight: 500, marginTop: 2 }}>
                  {L.waCardSub}
                </div>
              </div>
            </a>

            {/* Instagram (secondary) */}
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="lift flex items-center justify-center insta-btn"
            >
              <Instagram size={18} strokeWidth={1.9} />
              {L.followCta}
            </a>
          </div>

          {/* Right: Map */}
          <div
            style={{
              borderRadius: 16,
              overflow: "hidden",
              border: "1px solid var(--line)",
              boxShadow: "var(--shadow-sm)",
              minHeight: 380,
            }}
          >
            <iframe
              title="map"
              src={MAP_SRC}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 380, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
