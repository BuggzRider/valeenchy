/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'vallenchy-images.nyc3.cdn.digitaloceanspaces.com',
        port: '',
        pathname: '/images/**',
      },
    ],
  },
};
module.exports = nextConfig;
