/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "html.design",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
