import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";
import { localePaths } from "@/lib/seo";
import { PAGE_PATHS } from "@/lib/site-nav";

/* Arabic paths; each gets its /en twin with hreflang alternates. */
const pages = Object.values(PAGE_PATHS);

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.flatMap((path) => {
    const { ar, en } = localePaths(path);
    const languages = { ar: `${SITE_URL}${ar}`, en: `${SITE_URL}${en}` };
    return [
      { url: `${SITE_URL}${ar === "/" ? "" : ar}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: ar === "/" ? 1 : ["/washing-machine-repair", "/fridge-repair", "/ac-repair"].includes(ar) ? 0.9 : 0.6, alternates: { languages } },
      { url: `${SITE_URL}${en}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8, alternates: { languages } },
    ];
  });
}
