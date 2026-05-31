export function SectionHead({
  title,
  sub,
  eyebrow,
  light,
}: {
  title: string;
  sub: string;
  eyebrow?: string;
  light?: boolean;
}) {
  return (
    <div style={{ textAlign: "center", marginBottom: 44 }}>
      {eyebrow && (
        <div className="eyebrow">{eyebrow}</div>
      )}
      <h2
        style={{
          margin: 0,
          fontSize: "clamp(26px, 3.8vw, 38px)",
          fontWeight: 900,
          color: light ? "#fff" : "var(--navy)",
          letterSpacing: "-0.03em",
          lineHeight: 1.15,
        }}
      >
        {title}
      </h2>
      <div
        className="section-rule"
        style={light ? { background: "linear-gradient(90deg, var(--gold-2), rgba(255,255,255,0.2), transparent)" } : {}}
      />
      <p
        style={{
          maxWidth: 520,
          margin: "16px auto 0",
          color: light ? "rgba(255,255,255,0.65)" : "var(--muted)",
          fontSize: 15,
          lineHeight: 1.75,
          fontWeight: 500,
        }}
      >
        {sub}
      </p>
    </div>
  );
}
