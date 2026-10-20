import type { Metadata } from "next";
import { ApplianceLanding } from "@/components/heat/ApplianceLanding";
import { landingCopy, LANDING_PATHS } from "@/lib/landing-copy";
import { landingMetadata } from "@/lib/seo";

const { title, description } = landingCopy.ac.en.meta;

export const metadata: Metadata = landingMetadata("en", LANDING_PATHS.ac, title, description, "/og-image.jpg");

export default function Page() {
  return <ApplianceLanding appliance="ac" lang="en" />;
}
