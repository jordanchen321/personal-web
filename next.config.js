/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Export static assets for GitHub Pages
  output: "export",
  trailingSlash: true,
  images: {
    // Disable next/image optimization for static export
    unoptimized: true,
  },
};

module.exports = nextConfig;
