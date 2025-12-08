import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

// IMPORTANT: your GitHub Pages repo name = snig-portfolio
const basePath = isProd ? "/snig-portfolio" : "";

const nextConfig: NextConfig = {
  output: "export",

  basePath,
  assetPrefix: basePath ? `${basePath}/` : "",

  images: {
    unoptimized: true, // required for static export
  },

  trailingSlash: true,

  eslint: {
    ignoreDuringBuilds: true,
  },

  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
