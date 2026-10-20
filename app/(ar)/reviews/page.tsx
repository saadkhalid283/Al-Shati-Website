import type { Metadata } from "next";
import { InfoPageView } from "@/components/heat/InfoPages";
import { pagesCopy } from "@/lib/pages-copy";
import { PAGE_PATHS } from "@/lib/site-nav";
import { landingMetadata } from "@/lib/seo";

const { title, description } = pagesCopy.reviews.ar.meta;

export const metadata: Metadata = landingMetadata("ar", PAGE_PATHS.reviews, title, description, "/og-image.jpg");

export default function Page() {
  return <InfoPageView page="reviews" lang="ar" />;
}
