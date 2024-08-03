/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: { serverComponentsExternalPackages: ["yjs"] },
};

module.exports = nextConfig;
