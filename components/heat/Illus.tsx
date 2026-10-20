/* Flat poster-style appliance drawings in the site palette. Decorative only. */

const NIGHT = "#0b1633";
const ICE = "#e6f1ff";
const BLUE = "#1f7fd1";
const SUN = "#ff4f17";
const W = 6;

export function WasherIllus({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 228" className={className} aria-hidden>
      <rect x="20" y="10" width="160" height="200" rx="16" fill="#fff" stroke={NIGHT} strokeWidth={W} />
      <line x1="20" y1="56" x2="180" y2="56" stroke={NIGHT} strokeWidth={W} />
      <circle cx="46" cy="33" r="10" fill={SUN} stroke={NIGHT} strokeWidth={4} />
      <circle cx="74" cy="33" r="6" fill={NIGHT} />
      <rect x="112" y="23" width="48" height="20" rx="4" fill={ICE} stroke={NIGHT} strokeWidth={4} />
      <circle cx="100" cy="134" r="58" fill={ICE} stroke={NIGHT} strokeWidth={W} />
      <clipPath id="il-washer-door">
        <circle cx="100" cy="134" r="44" />
      </clipPath>
      <g clipPath="url(#il-washer-door)">
        <rect x="50" y="84" width="100" height="100" fill="#fff" />
        <path d="M50 140 Q 75 128 100 140 T 150 140 V 190 H 50 Z" fill={BLUE} opacity="0.85" />
        <path d="M72 118 q 16 -14 34 -2 q 12 8 22 -2" fill="none" stroke={SUN} strokeWidth="7" strokeLinecap="round" />
      </g>
      <circle cx="100" cy="134" r="44" fill="none" stroke={NIGHT} strokeWidth={4} />
      <rect x="34" y="208" width="22" height="12" rx="3" fill={NIGHT} />
      <rect x="144" y="208" width="22" height="12" rx="3" fill={NIGHT} />
    </svg>
  );
}

export function FridgeIllus({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 250" className={className} aria-hidden>
      <rect x="15" y="8" width="130" height="226" rx="14" fill="#fff" stroke={NIGHT} strokeWidth={W} />
      <line x1="15" y1="90" x2="145" y2="90" stroke={NIGHT} strokeWidth={W} />
      <rect x="30" y="30" width="9" height="42" rx="4.5" fill={NIGHT} />
      <rect x="30" y="108" width="9" height="74" rx="4.5" fill={NIGHT} />
      <g stroke={BLUE} strokeWidth="5" strokeLinecap="round">
        <line x1="96" y1="28" x2="96" y2="68" />
        <line x1="78.7" y1="38" x2="113.3" y2="58" />
        <line x1="78.7" y1="58" x2="113.3" y2="38" />
        <path d="M89 31 l7 6 l7 -6 M89 65 l7 -6 l7 6" fill="none" />
      </g>
      <rect x="62" y="196" width="68" height="22" rx="4" fill={ICE} stroke={NIGHT} strokeWidth={4} />
      <text x="96" y="212" textAnchor="middle" fontSize="14" fontWeight="700" fill={NIGHT} fontFamily="sans-serif">
        4°
      </text>
      <rect x="26" y="232" width="20" height="12" rx="3" fill={NIGHT} />
      <rect x="114" y="232" width="20" height="12" rx="3" fill={NIGHT} />
    </svg>
  );
}

export function AcIllus({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 260 170" className={className} aria-hidden>
      <rect x="10" y="10" width="240" height="84" rx="16" fill="#fff" stroke={NIGHT} strokeWidth={W} />
      <rect x="30" y="64" width="200" height="16" rx="8" fill={NIGHT} />
      <g stroke="#fff" strokeWidth="3">
        <line x1="60" y1="66" x2="60" y2="78" />
        <line x1="100" y1="66" x2="100" y2="78" />
        <line x1="140" y1="66" x2="140" y2="78" />
        <line x1="180" y1="66" x2="180" y2="78" />
      </g>
      <circle cx="222" cy="34" r="6" fill={SUN} />
      <line x1="30" y1="34" x2="110" y2="34" stroke={ICE} strokeWidth="8" strokeLinecap="round" />
      <g fill="none" stroke={BLUE} strokeWidth="6" strokeLinecap="round">
        <path d="M50 112 q 20 -12 40 0 t 40 0 t 40 0 t 40 0" />
        <path d="M70 136 q 20 -12 40 0 t 40 0 t 40 0" opacity="0.7" />
        <path d="M90 160 q 20 -12 40 0 t 40 0" opacity="0.45" />
      </g>
    </svg>
  );
}

export const ILLUS = { washer: WasherIllus, fridge: FridgeIllus, ac: AcIllus };
