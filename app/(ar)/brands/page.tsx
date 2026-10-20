import type { Metadata } from "next";
import { InfoPageView } from "@/components/heat/InfoPages";
import { pagesCopy } from "@/lib/pages-copy";
import { PAGE_PATHS } from "@/lib/site-nav";
import { landingMetadata } from "@/lib/seo";

const { title, description } = pagesCopy.brands.ar.meta;

export const metadata: Metadata = landingMetadata("ar", PAGE_PATHS.brands, title, description, "/og-image.jpg");

export default function Page() {
  return <InfoPageView page="brands" lang="ar" />;
}
