import type { NextConfig } from "next";

// Static export for GitHub Pages (served at /eko-dalmacija-v3/)
const nextConfig: NextConfig = {
  output: "export",
  basePath: process.env.NODE_ENV === "production" ? "/eko-dalmacija-v3" : "",
  images: { unoptimized: true },
};

export default nextConfig;
