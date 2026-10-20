import { MAPS_URL, wa } from "@/lib/constants";
import { PhotoMosaic } from "./PhotoMosaic";
import { ReviewsThermo } from "./ReviewsThermo";
import { Numbers } from "./Numbers";
import { reviewsData } from "@/lib/data";
import { heatCopy } from "@/lib/heat-copy";
import { jsonLdHtml } from "@/lib/seo";
import type { Lang } from "@/lib/types";
import { HeroTemp } from "./LiveTemp";
import { BrandWall, CallButtons, Cooldown, ContactBlock, FaqBlock, PageShell, faqJsonLd } from "./parts";
import { HeroAppliances } from "./HeroAppliances";

export function HeatSite({ lang }: { lang: Lang }) {
  const c = heatCopy[lang];
  const isAr = lang === "ar";
  const reviews = reviewsData.slice(1);

  return (
    <PageShell lang={lang} current="home" waMsg={c.hero.waMsg}>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdHtml(faqJsonLd(c.faq.items))} />
        {/* ── Hot ─────────────────────────────── */}
        <section className="h-hero h-hero--home">
          <div className="h-hero__top">
            <div className="h-hero__tempbox">
              <div className="h-label">{c.hero.label}</div>
              <HeroTemp lang={lang} fallback={c.hero.fallback} className="h-temp h-temp--sm" />
            </div>
            <div className="h-hero__head">
              <div className="h-hero__headrow">
                <h1 className="h-h1 h-h1--side">
                  {c.hero.h1}
                  <br />
                  <span>{c.hero.h1b}</span>
                </h1>
                <div className="h-247" role="img" aria-label={c.hero.hours}>
                  <span className="h-247__ring" aria-hidden />
                  <b dir="ltr">{c.hero.badge.big}</b>
                  <small>{c.hero.badge.small}</small>
                </div>
              </div>
            </div>
          </div>

          <div className="h-board" role="list" aria-label={c.hero.board.title}>
            <div className="h-board__head">
              <span className="h-board__live" aria-hidden />
              {c.hero.board.title}
            </div>
            {c.hero.stanza.map((line, i) => (
              <div key={line} role="listitem" className="h-board__row" style={{ "--d": `${0.6 + i * 0.7}s` } as React.CSSProperties}>
                <span className="h-board__task">{line}</span>
                <span className="h-board__flip" aria-label={c.hero.board.fixed}>
                  <span className="h-board__side h-board__side--broken" aria-hidden>
                    {c.hero.board.broken}
                  </span>
                  <span className="h-board__side h-board__side--fixed" aria-hidden>
                    {c.hero.board.fixed} ✓
                  </span>
                </span>
              </div>
            ))}
          </div>
          <p className="h-sub h-board__close">{c.hero.sub}</p>

          <CallButtons call={c.hero.call} waLabel={c.hero.wa} waMsg={c.hero.waMsg} lead="hero" id="hero-ctas" />
          <p className="h-proof">
            <a href={MAPS_URL} target="_blank" rel="noreferrer">
              {c.hero.proof}
            </a>
            <span>{c.hero.hours}</span>
          </p>

          <HeroAppliances label={c.pick.label} tap={c.pick.tap} items={c.pick.items} />

        </section>

        <Cooldown />

        {/* ── Cooling ─────────────────────────── */}
        <section id="services" className="h-cold h-services">
          <h2 className="h-h2">{c.services.h2}</h2>
          <p className="h-lede">{c.services.sub}</p>
          <ul className="h-list">
            {c.services.items.map((s, i) => (
              <li key={s.name}>
                {s.href ? (
                  <a href={s.href}>
                    <span className="h-list__name">{s.name}</span>
                    <span className="h-list__desc">{s.desc}</span>
                    <span className="h-list__tag">{c.services.more}</span>
                  </a>
                ) : (
                  <a href={wa(s.msg)} target="_blank" rel="noreferrer" data-lead={`service:${i + 1}`}>
                    <span className="h-list__name">{s.name}</span>
                    <span className="h-list__desc">{s.desc}</span>
                    <span className="h-list__tag">{c.services.tag}</span>
                  </a>
                )}
              </li>
            ))}
          </ul>
          <p className="h-extras">{c.services.extras.join("  ·  ")}</p>
        </section>

        <PhotoMosaic lang={lang} />

        <BrandWall lang={lang} kind="all" />

        <Numbers lang={lang} />

        <ReviewsThermo lang={lang} />

        {/* ── Ice ─────────────────────────────── */}

        <FaqBlock h2={c.faq.h2} items={c.faq.items} />
        <ContactBlock c={c} />

    </PageShell>
  );
}
