import type { Metadata } from "next";
import { ApplianceLanding } from "@/components/heat/ApplianceLanding";
import { landingCopy, LANDING_PATHS } from "@/lib/landing-copy";
import { landingMetadata } from "@/lib/seo";

const { title, description } = landingCopy.washer.ar.meta;

export const metadata: Metadata = landingMetadata("ar", LANDING_PATHS.washer, title, description, "/og-washer.jpg");

export default function Page() {
  return <ApplianceLanding appliance="washer" lang="ar" />;
}
