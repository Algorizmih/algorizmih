/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "another-example.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
