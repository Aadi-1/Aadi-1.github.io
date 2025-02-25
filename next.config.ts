import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Enables static site export
  distDir: "out", // Sets the output directory
  basePath: "/Aadi-1.github.io", // Set your repo name as the basePath
  images: {
    unoptimized: true, // Disables Next.js image optimization
  },
};

export default nextConfig;
