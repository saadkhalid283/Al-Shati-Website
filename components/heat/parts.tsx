import Image from "next/image";
import { INSTAGRAM_URL, MAP_SRC, MAPS_URL, PHONE_PRIMARY, SITE_URL, wa } from "@/lib/constants";
import { heatCopy, type HeatCopy } from "@/lib/heat-copy";
import { MENU, PAGE_LABELS, pageHref, otherLangHref, type PageKey } from "@/lib/site-nav";
import { jsonLdHtml } from "@/lib/seo";
import { Menu } from "./Menu";
import { CallButtons, spaced } from "./CallButtons";
export { CallButtons, spaced };
import { StickyBar } from "./StickyBar";
import { BookingSheet } from "./BookingSheet";
import { TempLine } from "./LiveTemp";
import type { Lang } from "@/lib/types";
import { brandCopy, brandMessage, brandsFor, type BrandKind } from "@/lib/brands";
import { BANNERS, PHOTOS } from "@/lib/photos";


/** Sticky top bar: logo, language, call, and the side menu. */
export function SiteHeader({ c, lang, current }: { c: HeatCopy; lang: Lang; current: PageKey }) {
  return (
    <header className="h-top">
      <a href={pageHref("home", lang)} className="h-logo">
        <Image src="/logo-mark.png" alt="" width={46} height={37} preload className="h-logo__mark" />
        <span>{c.brand}</span>
      </a>
      <div className="h-top__actions">
        <a
          href={otherLangHref(current, lang)}
          hrefLang={c.langLink.hrefLang}
          lang={c.langLink.hrefLang}
          className="h-lang"
          aria-label={lang === "ar" ? "View the site in English" : "تصفح الموقع بالعربي"}
        >
          <svg viewBox="0 0 24 24" className="h-lang__globe" aria-hidden>
            <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2" />
            <path d="M3 12h18M12 3c2.6 2.6 3.8 5.6 3.8 9s-1.2 6.4-3.8 9c-2.6-2.6-3.8-5.6-3.8-9S9.4 5.6 12 3z" fill="none" stroke="currentColor" strokeWidth="2" />
          </svg>
          <span className="h-lang__full">{c.langLink.label}</span>
          <span className="h-lang__short">{lang === "ar" ? "EN" : "ع"}</span>
        </a>
        <Menu lang={lang} current={current} />
      </div>
    </header>
  );
}

export function FaqBlock({ h2, items, id = "faq" }: { h2: string; items: { q: string; a: string }[]; id?: string }) {
  return (
    <section id={id} className="h-ice h-faq">
      <h2 className="h-h2">{h2}</h2>
      {items.map((f) => (
        <details key={f.q} className="h-faq__item">
          <summary>{f.q}</summary>
          <p>{f.a}</p>
        </details>
      ))}
    </section>
  );
}

export function ContactBlock({ c }: { c: HeatCopy }) {
  return (
    <>
      <section id="contact" className="h-ice h-contact">
        <h2 className="h-h2">{c.contact.h2}</h2>
        <p className="h-lede">{c.contact.sub}</p>
        <div className="h-contact__grid">
          <dl className="h-facts">
            <div>
              <dt>{c.contact.phonesLabel}</dt>
              <dd>
                <a href={`tel:${PHONE_PRIMARY}`} data-lead="contact" dir="ltr">
                  {spaced(PHONE_PRIMARY)}
                </a>
                <small>{c.contact.primary}</small>
              </dd>
            </div>
            <div>
              <dt>{c.contact.addressLabel}</dt>
              <dd>
                <a href={MAPS_URL} target="_blank" rel="noreferrer" className="h-plain">
                  {c.contact.address}
                </a>
              </dd>
            </div>
            <div>
              <dt>{c.contact.hoursLabel}</dt>
              <dd>{c.contact.hours}</dd>
            </div>
            <div>
              <dd>
                <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="h-link h-link--small">
                  {c.contact.insta}
                </a>
              </dd>
            </div>
          </dl>
          <iframe
            className="h-map"
            title={c.contact.mapTitle}
            src={MAP_SRC}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </section>

      <div className="h-marquee" aria-label={c.contact.districtsLabel}>
        <div className="h-marquee__track">
          {[...c.contact.districts, ...c.contact.districts].map((d, i) => (
            <span key={i} aria-hidden={i >= c.contact.districts.length}>
              {d}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}

/** Hot-to-cold band. The logo sits where the orange turns to ice: the brand is what cools things down. */
export function Cooldown() {
  return (
    <div className="h-cooldown" aria-hidden>
      <Image src="/logo-mark.png" alt="" width={564} height={452} className="h-cooldown__mark" sizes="220px" />
    </div>
  );
}

/** The page heats back up for one last call to action. */
export function FinalCall({
  lang,
  h2,
  line,
  lineFallback,
  call,
  waLabel,
  waMsg,
}: {
  lang: Lang;
  h2: string;
  line: string;
  lineFallback: string;
  call: string;
  waLabel: string;
  waMsg: string;
}) {
  return (
    <section className="h-final">
      <div className="h-final__card">
        <span className="h-final__sun" aria-hidden />
        <h2 className="h-final__h2">{h2}</h2>
        <p className="h-final__line">
          <TempLine lang={lang} withTemp={line} fallback={lineFallback} />
        </p>
        <CallButtons call={call} waLabel={waLabel} waMsg={waMsg} lead="cta-band" />
      </div>
    </section>
  );
}

export function SiteFooter({ c, lang, current }: { c: HeatCopy; lang: Lang; current: PageKey }) {
  return (
    <footer className="h-footer">
      <div className="h-footer__brand">
        <Image src="/logo-mark-white.png" alt="" width={70} height={56} />
        <span>{c.brand}</span>
      </div>
      <p>{c.footer.tag}</p>
      {MENU.map((g) => (
        <div key={g.group.en} className="h-footer__group">
          <div className="h-footer__label">{g.group[lang]}</div>
          <ul className="h-footer__pages">
            {g.keys.map((k) => (
              <li key={k}>
                <a href={pageHref(k, lang)}>{PAGE_LABELS[k][lang]}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <p className="h-footer__small">
        © {new Date().getFullYear()} {c.brand} · {c.footer.rights} ·{" "}
        <a href={otherLangHref(current, lang)} hrefLang={c.langLink.hrefLang} lang={c.langLink.hrefLang}>
          {c.langLink.label}
        </a>
      </p>
    </footer>
  );
}

/** Visible breadcrumb trail plus its BreadcrumbList schema. */
export function Breadcrumbs({ lang, current }: { lang: Lang; current: PageKey }) {
  if (current === "home") return null;
  const items: [string, string][] = [
    [PAGE_LABELS.home[lang], pageHref("home", lang)],
    [PAGE_LABELS[current][lang], pageHref(current, lang)],
  ];
  const ld = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map(([name, href], i) => ({
      "@type": "ListItem",
      position: i + 1,
      name,
      item: `${SITE_URL}${href === "/" ? "" : href}`,
    })),
  };
  return (
    <nav className="h-crumbs" aria-label={lang === "ar" ? "مسار الصفحة" : "Breadcrumb"}>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdHtml(ld)} />
      <a href={items[0][1]}>{items[0][0]}</a>
      <span aria-hidden> / </span>
      <span aria-current="page">{items[1][0]}</span>
    </nav>
  );
}

/** Frame for every page: header with menu, content, the hot final call, footer, sticky phone bar. */
export function PageShell({
  lang,
  current,
  waMsg,
  final,
  children,
}: {
  lang: Lang;
  current: PageKey;
  waMsg: string;
  final?: { h2: string; line: string; lineFallback: string };
  children: React.ReactNode;
}) {
  const c = heatCopy[lang];
  const f = final ?? c.final;
  return (
    <div className="h-site">
      <SiteHeader c={c} lang={lang} current={current} />
      <main id="top">
        {children}
        <FinalCall
          lang={lang}
          h2={f.h2}
          line={f.line}
          lineFallback={f.lineFallback}
          call={c.final.call}
          waLabel={c.final.wa}
          waMsg={waMsg}
        />
      </main>
      <SiteFooter c={c} lang={lang} current={current} />
      <StickyBar call={c.sticky.call} waLabel={c.sticky.wa} waMsg={waMsg} />
      <BookingSheet lang={lang} />
    </div>
  );
}

export function faqJsonLd(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

/** Typographic wall of brands. Each name opens WhatsApp with the appliance and brand pre-written. */
export function BrandWall({ lang, kind, title, id = "brands" }: {
  lang: Lang;
  kind: BrandKind | "all";
  title?: string;
  id?: string;
}) {
  const list = brandsFor(kind);
  const t = brandCopy[lang];
  return (
    <section id={id} className="h-cold h-brands">
      <h2 className="h-h2">{title ?? t.h2}</h2>
      <p className="h-lede">{t.sub[kind]}</p>
      <ul className="h-brands__wall">
        {list.map((b, i) => {
          const name = lang === "ar" ? b.ar : b.en;
          const tier = i < 4 ? "xl" : i < 10 ? "l" : "m";
          return (
            <li key={b.en}>
              <a
                href={wa(brandMessage(kind, lang, name))}
                target="_blank"
                rel="noreferrer"
                data-lead={`brand:${b.en.toLowerCase().replace(/\s+/g, "-")}`}
                className={`h-brand h-brand--${tier}`}
                lang={lang}
              >
                {name}
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

/** Still photo banner used on every page except the homepage. */
export function PhotoBanner({ lang, page }: { lang: Lang; page: keyof typeof BANNERS }) {
  const b = BANNERS[page];
  if (!b) return null;
  const p = PHOTOS[b.k];
  return (
    <section className="pm-bsec">
    <figure className="pm-tile pm-banner">
      <div className="pp-pic">
        <Image src={p.src} alt={p.alt[lang]} fill sizes="(min-width: 1080px) 1080px, 100vw" style={b.pos ? { objectPosition: b.pos } : undefined} />
      </div>
      <figcaption>
        <span>{b.tag[lang]}</span>
        {b.title[lang]}
      </figcaption>
    </figure>
    </section>
  );
}
