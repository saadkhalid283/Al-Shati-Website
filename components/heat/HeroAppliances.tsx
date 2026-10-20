/* Animated washer, fridge and AC for the homepage hero. Tapping one opens the booking sheet. */
import { BookButton } from "./BookButton";
import type { Appliance } from "@/lib/landing-copy";

const NIGHT = "#0b1633";
const ICE = "#e6f1ff";
const BLUE = "#1f7fd1";
const SUN = "#ff4f17";
const W = 6;

export function WasherAnim() {
  return (
    <svg viewBox="0 0 200 228" className="ha-svg" aria-hidden>
      <g className="ha-washer-body">
        <rect x="20" y="10" width="160" height="200" rx="16" fill="#fff" stroke={NIGHT} strokeWidth={W} />
        <line x1="20" y1="56" x2="180" y2="56" stroke={NIGHT} strokeWidth={W} />
        <circle cx="46" cy="33" r="10" fill={SUN} stroke={NIGHT} strokeWidth={4} />
        <circle cx="74" cy="33" r="6" fill={NIGHT} className="ha-blink" />
        <rect x="112" y="23" width="48" height="20" rx="4" fill={ICE} stroke={NIGHT} strokeWidth={4} />
        <circle cx="100" cy="134" r="58" fill={ICE} stroke={NIGHT} strokeWidth={W} />
        <clipPath id="ha-door">
          <circle cx="100" cy="134" r="44" />
        </clipPath>
        <g clipPath="url(#ha-door)">
          <rect x="50" y="84" width="100" height="100" fill="#fff" />
          <g className="ha-slosh">
            <path d="M30 142 Q 55 130 80 142 T 130 142 T 180 142 V 200 H 30 Z" fill={BLUE} opacity="0.85" />
          </g>
          <g className="ha-spin">
            <path d="M74 112 q 16 -14 34 -2 q 12 8 22 -2" fill="none" stroke={SUN} strokeWidth="7" strokeLinecap="round" />
            <path d="M80 158 q 14 10 30 2" fill="none" stroke={NIGHT} strokeWidth="6" strokeLinecap="round" />
            <circle cx="122" cy="146" r="5" fill="#fff" stroke={NIGHT} strokeWidth="3" />
          </g>
        </g>
        <circle cx="100" cy="134" r="44" fill="none" stroke={NIGHT} strokeWidth={4} />
        <rect x="34" y="208" width="22" height="12" rx="3" fill={NIGHT} />
        <rect x="144" y="208" width="22" height="12" rx="3" fill={NIGHT} />
      </g>
    </svg>
  );
}

export function FridgeAnim() {
  return (
    <svg viewBox="0 0 160 250" className="ha-svg" aria-hidden>
      {/* inside, revealed when the door swings open */}
      <rect x="15" y="90" width="130" height="144" rx="6" fill={ICE} stroke={NIGHT} strokeWidth={W} />
      <line x1="22" y1="140" x2="138" y2="140" stroke={NIGHT} strokeWidth="4" />
      <line x1="22" y1="186" x2="138" y2="186" stroke={NIGHT} strokeWidth="4" />
      <rect x="34" y="104" width="16" height="34" rx="5" fill={BLUE} />
      <rect x="60" y="116" width="30" height="22" rx="4" fill={SUN} />
      <circle cx="112" cy="174" r="10" fill="#7cc36e" stroke={NIGHT} strokeWidth="3" />
      <rect x="36" y="160" width="40" height="24" rx="4" fill="#fff" stroke={NIGHT} strokeWidth="3" />
      {/* cold mist */}
      <g className="ha-mist">
        <circle cx="70" cy="120" r="9" fill="#fff" />
        <circle cx="96" cy="150" r="7" fill="#fff" />
        <circle cx="58" cy="196" r="8" fill="#fff" />
      </g>
      {/* freezer (top) */}
      <rect x="15" y="8" width="130" height="86" rx="14" fill="#fff" stroke={NIGHT} strokeWidth={W} />
      <rect x="30" y="30" width="9" height="42" rx="4.5" fill={NIGHT} />
      <g stroke={BLUE} strokeWidth="5" strokeLinecap="round" className="ha-flake">
        <line x1="96" y1="28" x2="96" y2="68" />
        <line x1="78.7" y1="38" x2="113.3" y2="58" />
        <line x1="78.7" y1="58" x2="113.3" y2="38" />
      </g>
      {/* main door, hinged on the right */}
      <g className="ha-door">
        <rect x="15" y="90" width="130" height="144" rx="10" fill="#fff" stroke={NIGHT} strokeWidth={W} />
        <rect x="30" y="108" width="9" height="74" rx="4.5" fill={NIGHT} />
        <rect x="62" y="196" width="68" height="22" rx="4" fill={ICE} stroke={NIGHT} strokeWidth={4} />
        <text x="96" y="212" textAnchor="middle" fontSize="14" fontWeight="700" fill={NIGHT} fontFamily="sans-serif">
          4°
        </text>
      </g>
      <rect x="26" y="232" width="20" height="12" rx="3" fill={NIGHT} />
      <rect x="114" y="232" width="20" height="12" rx="3" fill={NIGHT} />
    </svg>
  );
}

export function AcAnim() {
  return (
    <svg viewBox="0 0 260 200" className="ha-svg" aria-hidden>
      <rect x="10" y="10" width="240" height="84" rx="16" fill="#fff" stroke={NIGHT} strokeWidth={W} />
      <line x1="30" y1="34" x2="110" y2="34" stroke={ICE} strokeWidth="8" strokeLinecap="round" />
      <circle cx="222" cy="34" r="6" fill="#34d17f" className="ha-blink" />
      <rect x="30" y="64" width="200" height="16" rx="8" fill={NIGHT} />
      <g className="ha-louver">
        <rect x="34" y="76" width="192" height="8" rx="4" fill={NIGHT} />
      </g>
      <g fill="none" stroke={BLUE} strokeWidth="6" strokeLinecap="round" className="ha-air">
        <path d="M20 112 q 20 -12 40 0 t 40 0 t 40 0 t 40 0 t 40 0 t 40 0" />
        <path d="M40 140 q 20 -12 40 0 t 40 0 t 40 0 t 40 0 t 40 0" opacity="0.7" />
        <path d="M60 168 q 20 -12 40 0 t 40 0 t 40 0 t 40 0" opacity="0.45" />
      </g>
      <g fill="none" stroke={BLUE} strokeWidth="3" strokeLinecap="round">
        <g className="ha-snow ha-snow--1">
          <path d="M70 100 v14 M63 107 h14 M65 102 l10 10 M75 102 l-10 10" />
        </g>
        <g className="ha-snow ha-snow--2">
          <path d="M150 100 v12 M144 106 h12 M146 102 l8 8 M154 102 l-8 8" />
        </g>
        <g className="ha-snow ha-snow--3">
          <path d="M205 100 v10 M200 105 h10 M201.5 101.5 l7 7 M208.5 101.5 l-7 7" />
        </g>
      </g>
    </svg>
  );
}

const ANIMS = [WasherAnim, FridgeAnim, AcAnim];
const KEYS: Appliance[] = ["washer", "fridge", "ac"];

export function HeroAppliances({
  label,
  tap,
  items,
}: {
  label: string;
  tap: string;
  items: { name: string; note: string; href: string }[];
}) {
  return (
    <nav className="ha" aria-label={label}>
      <div className="h-label ha__label">
        <svg viewBox="0 0 24 24" className="ha__hand" aria-hidden>
          <path
            fill="currentColor"
            d="M9 2.5a1.5 1.5 0 0 1 3 0V9l1.1-.2a1.5 1.5 0 0 1 1.9 1.4V11l.8-.1a1.5 1.5 0 0 1 1.7 1.4v.4l.6-.1a1.5 1.5 0 0 1 1.9 1.5V17a6 6 0 0 1-6 6h-1.6a6 6 0 0 1-4.6-2.2L4.4 16.6a1.5 1.5 0 0 1 2.2-2l2.4 2.1z"
          />
        </svg>
        {label}
      </div>
      <ul className="ha__row">
        {items.map((p, i) => {
          const Anim = ANIMS[i];
          return (
            <li key={p.href}>
              <BookButton appliance={KEYS[i]} className={`ha__item ha__item--${i}`}>
                <span className="ha__art">
                  <Anim />
                </span>
                <b>{p.name}</b>
                <span className="ha__note">{p.note}</span>
                <span className="ha__book" aria-hidden>
                  {tap}
                </span>
              </BookButton>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
