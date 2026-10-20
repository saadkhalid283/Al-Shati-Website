import { MAPS_URL, SITE_URL, wa } from "@/lib/constants";
import { ReviewsThermo } from "./ReviewsThermo";
import { Numbers } from "./Numbers";
import { reviewsData } from "@/lib/data";
import { heatCopy } from "@/lib/heat-copy";
import { landingCopy, type Appliance } from "@/lib/landing-copy";
import { jsonLdHtml } from "@/lib/seo";
import { pageHref } from "@/lib/site-nav";
import type { Lang } from "@/lib/types";
import { FridgeTemps, HeroTemp } from "./LiveTemp";
import { ILLUS } from "./Illus";
import { AcAnim, WasherAnim } from "./HeroAppliances";
import { BrandWall, Breadcrumbs, PhotoBanner, CallButtons, Cooldown, ContactBlock, FaqBlock, PageShell, faqJsonLd } from "./parts";

const reviewSets: Record<Appliance, number[]> = {
  washer: [1, 2, 4],
  fridge: [1, 3, 5],
  ac: [2, 3, 5],
};

export function ApplianceLanding({ appliance, lang }: { appliance: Appliance; lang: Lang }) {
  const c = heatCopy[lang];
  const l = landingCopy[appliance][lang];
  const isAr = lang === "ar";
  const reviews = reviewSets[appliance].map((i) => reviewsData[i]).filter(Boolean);
  const Il = ILLUS[appliance];

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: l.serviceName,
    serviceType: l.serviceName,
    description: l.meta.description,
    url: `${SITE_URL}${pageHref(appliance, lang)}`,
    areaServed: { "@type": "City", name: "Jeddah" },
    provider: { "@id": `${SITE_URL}/#business` },
  };

  return (
    <PageShell lang={lang} current={appliance} waMsg={l.hero.waMsg} final={l.final}>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdHtml(serviceLd)} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdHtml(faqJsonLd(l.faq.items))} />

      <section className="h-hero h-hero--home">
        <Breadcrumbs lang={lang} current={appliance} />
        {appliance === "washer" && <div className="h-label">{l.hero.label}</div>}
        <div className="h-hero__top">
          <div className="h-hero__tempbox">
            {appliance === "fridge" ? (
              <FridgeTemps lang={lang} label={l.hero.label} caption="" />
            ) : appliance === "washer" ? (
              <div className="h-hero__art h-hero__art--washer">
                <WasherAnim />
              </div>
            ) : (
              <>
                <div className="h-label">{l.hero.label}</div>
                <HeroTemp lang={lang} fallback={c.hero.fallback} className="h-temp h-temp--sm" />
              </>
            )}
          </div>
          <div className="h-hero__head">
            <h1 className="h-h1 h-h1--side">
              {l.hero.h1}
              <br />
              <span>{l.hero.h1b}</span>
            </h1>
          </div>
        </div>
        {l.hero.visualCaption && <p className="h-hero__cap">{l.hero.visualCaption}</p>}
        <p className="h-sub h-board__close">{l.hero.sub}</p>
        {appliance === "ac" && (
          <div className="h-hero__art h-hero__art--wide">
            <AcAnim />
          </div>
        )}
        <CallButtons call={c.hero.call} waLabel={c.hero.wa} waMsg={l.hero.waMsg} lead={`${appliance}-hero`} id="hero-ctas" />
        <p className="h-proof">
          <a href={MAPS_URL} target="_blank" rel="noreferrer">
            {c.hero.proof}
          </a>
          <span>{c.hero.hours}</span>
        </p>
      </section>

      <PhotoBanner lang={lang} page={appliance} />

      <Cooldown />

      <section id="problems" className="h-cold h-services">
        <div className="h-sechead">
          <h2 className="h-h2">{l.problems.h2}</h2>
          <Il className="h-sechead__il" />
        </div>
        <p className="h-lede">{l.problems.sub}</p>
        <ul className="h-list h-list--compact">
          {l.problems.items.map((p, i) => (
            <li key={p.name}>
              <a href={wa(p.msg)} target="_blank" rel="noreferrer" data-lead={`${appliance}:problem-${i + 1}`}>
                <span className="h-list__name">{p.name}</span>
                <span className="h-list__desc">{p.desc}</span>
                <span className="h-list__tag">{l.problems.tag}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <BrandWall lang={lang} kind={appliance} />

        <Numbers lang={lang} />

      <ReviewsThermo lang={lang} indices={reviewSets[appliance]} />

      <section className="h-ice h-how h-tips">
        <h2 className="h-h2">{l.tips.h2}</h2>
        <ol className="h-steps">
          {l.tips.items.map((t, i) => (
            <li key={t}>
              <span className="h-steps__n">{isAr ? "١٢٣"[i] : i + 1}</span>
              <span>{t}</span>
            </li>
          ))}
        </ol>
      </section>

      <FaqBlock h2={l.faq.h2} items={l.faq.items} />
      <ContactBlock c={c} />
    </PageShell>
  );
}
