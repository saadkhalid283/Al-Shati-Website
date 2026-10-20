import { PHONE_PRIMARY, wa } from "@/lib/constants";
import { LandlineIcon, WhatsAppIcon } from "./Icons";

/* Shown as "058 059 2468": the way the number is written on the shop sign. */
export const spaced = (intl: string) => `0${intl.slice(4, 6)} ${intl.slice(6, 9)} ${intl.slice(9)}`;

export function CallButtons({ call, waLabel, waMsg, lead, id, size }: {
  call: string;
  waLabel: string;
  waMsg: string;
  lead: string;
  id?: string;
  size?: "sm";
}) {
  const note = waLabel === "واتساب" ? "نرد خلال دقائق" : "Replies in minutes";
  return (
    <div className={`h-ctas${size ? " h-ctas--sm" : ""}`} id={id}>
      <a href={`tel:${PHONE_PRIMARY}`} data-lead={lead} className="h-btn h-btn--call">
        <span className="h-btn__chip">
          <LandlineIcon className="h-ico" />
        </span>
        <span className="h-btn__txt">
          <b>{call}</b>
          <small dir="ltr">{spaced(PHONE_PRIMARY)}</small>
        </span>
      </a>
      <a href={wa(waMsg)} target="_blank" rel="noreferrer" data-lead={lead} className="h-btn h-btn--wa">
        <span className="h-btn__chip">
          <WhatsAppIcon className="h-ico" fill="#fff" />
        </span>
        <span className="h-btn__txt">
          <b>{waLabel}</b>
          <small>{note}</small>
        </span>
      </a>
    </div>
  );
}

