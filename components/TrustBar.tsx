import { trustBarData } from "@/lib/data";
import type { SiteProps } from "@/lib/site-props";

export function TrustBar({ lang }: SiteProps) {
  const stats = trustBarData(lang);

  return (
    <div className="trust-bar" data-reveal aria-label="Trust highlights">
      <div className="trust-bar__inner" data-grid="trust">
        {stats.map((s, i) => {
          const Icon = s.icon;
          return (
            <div key={i} className="trust-bar__cell flex items-center">
              <div
                className="flex items-center justify-center icon-box--gold"
                style={{
                  width: 46,
                  height: 46,
                  borderRadius: 12,
                  flexShrink: 0,
                }}
              >
                <Icon size={22} color="var(--gold)" strokeWidth={1.75} />
              </div>
              <div className="trust-bar__text">
                <div className="trust-bar__value">
                  {s.value}{" "}
                  <span className="trust-bar__unit">{s.unit}</span>
                </div>
                <div className="trust-bar__label">{s.label}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
