import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images:{
    remotePatterns:[
      {
        hostname:'"www.psdstack.com',
        protocol: 'https',
        port:""
      },
      {
        hostname:"lh3.googleusercontent.com",
        protocol: 'https',
        port:""
      }
    ]
  }
};

export default nextConfig;
