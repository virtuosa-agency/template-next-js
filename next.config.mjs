// next.config.mjs est le fichier de configuration pour Next.js

import bundleAnalyzer from "@next/bundle-analyzer";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lottie.host",
        port: "",
        pathname: "/files/**",
      },
      {
        protocol: "https",
        hostname: "dam.malt.com",
        port: "",
        pathname: "/files/**",
      },
    ],
  },
  productionBrowserSourceMaps: true,

  poweredByHeader: false,
  compress: true,

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "index, follow",
          },
        ],
      },
    ];
  },
};

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
  openAnalyzer: false,
});

export default withBundleAnalyzer(nextConfig);
