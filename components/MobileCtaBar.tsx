import { Phone, MessageCircle } from "lucide-react";
import { PHONE_PRIMARY, wa } from "@/lib/constants";
import type { Translations } from "@/lib/types";

/** Sticky bottom action bar shown on mobile only (strong conversion pattern). */
export function MobileCtaBar({ L }: { L: Translations }) {
  return (
    <div className="mobile-cta-bar" data-mobile aria-label="Quick contact">
      <a
        href={wa(L.floatMsg)}
        target="_blank"
        rel="noreferrer"
        className="mobile-cta-bar__btn mobile-cta-bar__wa"
      >
        <MessageCircle size={19} strokeWidth={2} />
        {L.waBtn}
      </a>
      <a href={`tel:${PHONE_PRIMARY}`} className="mobile-cta-bar__btn mobile-cta-bar__call">
        <Phone size={18} strokeWidth={1.9} />
        {L.callBtn}
      </a>
    </div>
  );
}
