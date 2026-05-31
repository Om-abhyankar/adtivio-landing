import { readFileSync } from "node:fs";
import { join } from "node:path";
import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const packageJson = JSON.parse(
  readFileSync(join(process.cwd(), "package.json"), "utf8"),
) as { name?: string };
const repo = packageJson.name ?? "adtivio-landing";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: isProd ? `/${repo}` : "",
  assetPrefix: isProd ? `/${repo}/` : "",
};

export default nextConfig;
