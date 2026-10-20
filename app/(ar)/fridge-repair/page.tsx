import type { Metadata } from "next";
import { ApplianceLanding } from "@/components/heat/ApplianceLanding";
import { landingCopy, LANDING_PATHS } from "@/lib/landing-copy";
import { landingMetadata } from "@/lib/seo";

const { title, description } = landingCopy.fridge.ar.meta;

export const metadata: Metadata = landingMetadata("ar", LANDING_PATHS.fridge, title, description, "/og-fridge.jpg");

export default function Page() {
  return <ApplianceLanding appliance="fridge" lang="ar" />;
}
