/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "d23qowwaqkh3fj.cloudfront.net",
            port: "",
          },
          {
            protocol: "https",
            hostname: "media.licdn.com",
            port: "",
          },
        ],
      },
}

module.exports = nextConfig
