import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "gkdcbqgmdxrbnhotcfnd.supabase.co",
      },
    ],
  },
};

export default nextConfig;
