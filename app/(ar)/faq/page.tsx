import type { Metadata } from "next";
import { InfoPageView } from "@/components/heat/InfoPages";
import { pagesCopy } from "@/lib/pages-copy";
import { PAGE_PATHS } from "@/lib/site-nav";
import { landingMetadata } from "@/lib/seo";

const { title, description } = pagesCopy.faq.ar.meta;

export const metadata: Metadata = landingMetadata("ar", PAGE_PATHS.faq, title, description, "/og-image.jpg");

export default function Page() {
  return <InfoPageView page="faq" lang="ar" />;
}
