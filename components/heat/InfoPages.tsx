import { MAPS_URL, PHONE_PRIMARY, REVIEW_COUNT, RATING, wa } from "@/lib/constants";
import { ReviewsThermo } from "./ReviewsThermo";
import { Numbers } from "./Numbers";
import { reviewsData } from "@/lib/data";
import { ar, heatCopy } from "@/lib/heat-copy";
import { landingCopy } from "@/lib/landing-copy";
import { aboutCopy, areaNote, pagesCopy, type InfoPage } from "@/lib/pages-copy";
import { jsonLdHtml } from "@/lib/seo";
import type { Lang } from "@/lib/types";
import { AcIllus, FridgeIllus, WasherIllus } from "./Illus";
import { BrandWall, Breadcrumbs, PhotoBanner, CallButtons, Cooldown, ContactBlock, FaqBlock, PageShell, faqJsonLd, spaced } from "./parts";

/** Orange top of every info page: breadcrumb, headline, both buttons. */
function InfoHero({ lang, page, visual }: { lang: Lang; page: InfoPage; visual?: React.ReactNode }) {
  const c = heatCopy[lang];
  const p = pagesCopy[page][lang];
  return (
    <section className="h-hero h-hero--info">
      <div className="h-hero__temp">
        <Breadcrumbs lang={lang} current={page} />
        <div className="h-label">{p.label}</div>
        {visual}
      </div>
      <div className="h-hero__pitch">
        <h1 className="h-h1 h-h1--info">{p.h1}</h1>
        <p className="h-sub">{p.sub}</p>
        <CallButtons call={c.hero.call} waLabel={c.hero.wa} waMsg={p.waMsg} lead={`${page}-hero`} id="hero-ctas" />
      </div>
    </section>
  );
}

function Trio() {
  return (
    <div className="h-trio" aria-hidden>
      <WasherIllus />
      <FridgeIllus />
      <AcIllus />
    </div>
  );
}

function Quotes({ lang, indices }: { lang: Lang; indices: number[] }) {
  const c = heatCopy[lang];
  return (
    <div className="h-quotes">
      {indices.map((i) => reviewsData[i]).filter(Boolean).map((r) => (
        <figure key={r.name} className="h-quote">
          <blockquote>{lang === "ar" ? r.ar : r.en}</blockquote>
          <figcaption>
            <b>{r.name}</b>
            {r.guide ? ` · ${c.reviews.guide}` : ""} · {c.reviews.from}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

export function InfoPageView({ page, lang }: { page: InfoPage; lang: Lang }) {
  const c = heatCopy[lang];
  const p = pagesCopy[page][lang];
  const isAr = lang === "ar";

  if (page === "brands") {
    const t = { ar: ["غسالات.", "ثلاجات.", "مكيفات."], en: ["Washers.", "Fridges.", "ACs."] }[lang];
    return (
      <PageShell lang={lang} current="brands" waMsg={p.waMsg}>
        <InfoHero lang={lang} page="brands" visual={<Trio />} />
        <PhotoBanner lang={lang} page="brands" />
        <Cooldown />
        <BrandWall lang={lang} kind="washer" title={t[0]} id="washer-brands" />
        <BrandWall lang={lang} kind="fridge" title={t[1]} id="fridge-brands" />
        <BrandWall lang={lang} kind="ac" title={t[2]} id="ac-brands" />
        <ContactBlock c={c} />
      </PageShell>
    );
  }

  if (page === "areas") {
    const n = areaNote[lang];
    const ds = c.contact.districts;
    return (
      <PageShell lang={lang} current="areas" waMsg={p.waMsg}>
        <InfoHero lang={lang} page="areas" />
        <PhotoBanner lang={lang} page="areas" />
        <Cooldown />
        <section className="h-cold h-services">
          <h2 className="h-h2">{c.contact.districtsLabel}.</h2>
          <ul className="h-list h-list--compact">
            {ds.map((d, i) => (
              <li key={d}>
                <a href={wa(n.msg(d))} target="_blank" rel="noreferrer" data-lead={`area:${i + 1}`}>
                  <span className="h-list__name">{d}</span>
                  {i === 0 && <span className="h-list__desc">{n.shop}</span>}
                  <span className="h-list__tag">{n.tap}</span>
                </a>
              </li>
            ))}
            <li>
              <a href={wa(p.waMsg)} target="_blank" rel="noreferrer" data-lead="area:other">
                <span className="h-list__name">{n.rest}</span>
                <span className="h-list__desc">{n.restNote}</span>
                <span className="h-list__tag">{n.tap}</span>
              </a>
            </li>
          </ul>
        </section>
        <ContactBlock c={c} />
      </PageShell>
    );
  }

  if (page === "reviews") {
    const score = isAr ? ar(RATING) : RATING;
    const count = isAr ? ar(REVIEW_COUNT) : REVIEW_COUNT;
    return (
      <PageShell lang={lang} current="reviews" waMsg={p.waMsg}>
        <InfoHero
          lang={lang}
          page="reviews"
          visual={
            <a href={MAPS_URL} target="_blank" rel="noreferrer" className="h-score">
              <span className="h-temp">{score}</span>
              <span className="h-score__note">
                ★★★★★ · {count} {isAr ? "تقييم على جوجل" : "Google reviews"}
              </span>
            </a>
          }
        />
      <PhotoBanner lang={lang} page="reviews" />
        <Cooldown />
        <ReviewsThermo lang={lang} />
      </PageShell>
    );
  }

  if (page === "about") {
    const a = aboutCopy[lang];
    return (
      <PageShell lang={lang} current="about" waMsg={p.waMsg}>
        <InfoHero lang={lang} page="about" visual={<Trio />} />
        <PhotoBanner lang={lang} page="about" />
        <Cooldown />
        <section className="h-cold h-prose">
          <h2 className="h-h2">{a.whoH2}</h2>
          {a.who.map((t) => (
            <p key={t}>{t}</p>
          ))}
        </section>

        <Numbers lang={lang} />
        <section className="h-ice h-how">
          <h2 className="h-h2">{a.howH2}</h2>
          <ol className="h-steps">
            {a.how.map((s, i) => (
              <li key={s.t}>
                <span className="h-steps__n">{isAr ? "١٢٣"[i] : i + 1}</span>
                <span>
                  <b>{s.t}</b>
                  {s.d}
                </span>
              </li>
            ))}
          </ol>
        </section>
        <section className="h-ice h-reviews">
          <h2 className="h-h2 h-h2--m">{a.peopleH2}</h2>
          <p className="h-lede">{a.peopleSub}</p>
          <Quotes lang={lang} indices={[1, 2, 3]} />
        </section>
        <section className="h-ice h-services">
          <h2 className="h-h2">{a.fixH2}</h2>
          <ul className="h-list">
            {a.fix.map((f) => (
              <li key={f.href}>
                <a href={f.href}>
                  <span className="h-list__name">{f.name}</span>
                  <span className="h-list__tag">{c.services.more}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>
        <ContactBlock c={c} />
      </PageShell>
    );
  }

  if (page === "faq") {
    const groups = [
      { h2: c.faq.h2, items: c.faq.items },
      { h2: landingCopy.washer[lang].faq.h2, items: landingCopy.washer[lang].faq.items },
      { h2: landingCopy.fridge[lang].faq.h2, items: landingCopy.fridge[lang].faq.items },
      { h2: landingCopy.ac[lang].faq.h2, items: landingCopy.ac[lang].faq.items },
    ];
    const all = groups.flatMap((g) => g.items);
    return (
      <PageShell lang={lang} current="faq" waMsg={p.waMsg}>
        <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdHtml(faqJsonLd(all))} />
        <InfoHero lang={lang} page="faq" />
        <PhotoBanner lang={lang} page="faq" />
        <Cooldown />
        {groups.map((g, i) => (
          <div key={g.h2} className={i === 0 ? "h-faq-first" : undefined}>
            <FaqBlock h2={g.h2} items={g.items} id={["faq", "washer-faq", "fridge-faq", "ac-faq"][i]} />
          </div>
        ))}
        <ContactBlock c={c} />
      </PageShell>
    );
  }

  // contact
  return (
    <PageShell lang={lang} current="contact" waMsg={p.waMsg}>
      <InfoHero
        lang={lang}
        page="contact"
        visual={
          <a href={`tel:${PHONE_PRIMARY}`} data-lead="contact-hero" className="h-bignum" dir="ltr">
            {spaced(PHONE_PRIMARY)}
          </a>
        }
      />
      <PhotoBanner lang={lang} page="contact" />
      <Cooldown />
      <ContactBlock c={c} />
    </PageShell>
  );
}
