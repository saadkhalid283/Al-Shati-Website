import type React from "react";

export function ContactRow({
  icon: Icon,
  label,
  value,
  href,
  dir,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  href?: string;
  dir?: React.CSSProperties["direction"];
}) {
  const inner = (
    <div
      className="flex items-center"
      style={{
        gap: 14,
        background: "var(--tint)",
        border: "1px solid var(--line)",
        borderRadius: 14,
        padding: "14px 16px",
        transition: "background 0.18s ease, border-color 0.18s ease",
      }}
    >
      <div
        className="flex items-center justify-center"
        style={{
          width: 42,
          height: 42,
          borderRadius: 11,
          background: "#fff",
          border: "1px solid var(--line)",
          flexShrink: 0,
          boxShadow: "var(--shadow-xs)",
        }}
      >
        <Icon size={19} color="var(--navy-3)" strokeWidth={1.75} />
      </div>
      <div style={{ minWidth: 0 }}>
        <div
          style={{
            fontSize: 11,
            fontWeight: 600,
            color: "var(--muted)",
            letterSpacing: "0.04em",
            textTransform: "uppercase",
            marginBottom: 2,
          }}
        >
          {label}
        </div>
        <div
          style={{
            fontSize: 15,
            fontWeight: 600,
            color: "var(--navy)",
            direction: dir || "inherit",
            wordBreak: "break-word",
            lineHeight: 1.4,
          }}
        >
          {value}
        </div>
      </div>
    </div>
  );
  return href ? (
    <a href={href} className="lift">
      {inner}
    </a>
  ) : (
    <div>{inner}</div>
  );
}
