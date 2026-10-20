import type { NextConfig } from "next";
import path from "path";
import { fileURLToPath } from "url";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  turbopack: {
    root: projectRoot,
  },
  /* hide the "N" route badge in local development; it never shows on the live site */
  devIndicators: false,
};

export default nextConfig;
