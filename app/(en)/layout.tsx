import type { Metadata, Viewport } from "next";
import "../globals.css";
import { RootShell } from "@/components/RootShell";
import { siteMetadata } from "@/lib/seo";

export const metadata: Metadata = siteMetadata("en");

export const viewport: Viewport = {
  themeColor: "#ff4f17",
  width: "device-width",
  initialScale: 1,
};

export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return <RootShell lang="en">{children}</RootShell>;
}
