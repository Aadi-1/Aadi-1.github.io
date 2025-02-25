import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Enables static export for GitHub Pages
  images: {
    unoptimized: true, // Required for static export if using next/image
  },
  basePath: "/Aadi-1.github.io", // Change this to your actual GitHub repo name
  assetPrefix: "/Aadi-1.github.io", // Ensures assets load correctly
};

export default nextConfig;
