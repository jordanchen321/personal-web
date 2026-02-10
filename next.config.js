/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Export static assets for GitHub Pages (project site: username.github.io/personal-web/)
  output: "export",
  trailingSlash: true,
  basePath: "/personal-web",
  assetPrefix: "/personal-web/",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
