import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Basic redirect
      {
        source: "/",
        destination: "/pixel-art",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
