/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.sivillage.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
