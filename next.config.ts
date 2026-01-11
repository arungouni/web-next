import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Required for Cloudflare Pages (static HTML output)
  output: "export",

  // Required because next/image optimization needs a server
  images: {
    unoptimized: true,
  },

  // Optional but good hygiene for static sites
  trailingSlash: true,
};

export default nextConfig;
