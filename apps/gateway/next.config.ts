// apps/gateway/next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/admin/:path*",
        destination: "http://localhost:3001/admin/:path*", // Proxy to admin app
      },
      {
        source: "/:path*",
        destination: "http://localhost:3000/:path*", // Proxy to web app
      },
    ];
  },
};

module.exports = nextConfig;
