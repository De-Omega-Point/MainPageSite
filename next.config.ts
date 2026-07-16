import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/MainPageSite",
  assetPrefix: "/MainPageSite/",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
