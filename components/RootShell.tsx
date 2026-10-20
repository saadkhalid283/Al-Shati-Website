import Script from "next/script";
import { Fustat, Kufam } from "next/font/google";
import { AW_ID } from "@/lib/constants";
import { businessJsonLd, jsonLdHtml } from "@/lib/seo";
import type { Lang } from "@/lib/types";
import { GtagEvents } from "./GtagEvents";

/* Kufam: geometric Kufic headlines. Fustat: calm, readable body text. */
const display = Kufam({
  subsets: ["arabic", "latin"],
  display: "swap",
  variable: "--font-display",
});
const body = Fustat({
  subsets: ["arabic", "latin"],
  display: "swap",
  variable: "--font-body",
});

/** Shared <html> shell for the Arabic (root) and English (/en) root layouts. */
export function RootShell({ lang, children }: { lang: Lang; children: React.ReactNode }) {
  return (
    <html lang={lang} dir={lang === "ar" ? "rtl" : "ltr"} className={`${display.variable} ${body.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLdHtml(businessJsonLd(lang))}
        />
        {children}
        {/* Google Ads tag (gtag.js) */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${AW_ID}`}
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${AW_ID}');`}
        </Script>
        <GtagEvents />
      </body>
    </html>
  );
}
