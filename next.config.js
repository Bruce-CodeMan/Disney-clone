/*
 * @Date: 2023-12-28 14:51:02
 * @Author: Bruce Hsu
 * @Description: 
 */
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "links.papareact.com"
      },
      {
        protocol: "http",
        hostname: "image.tmdb.org"
      }
    ]
  }
}

module.exports = nextConfig
