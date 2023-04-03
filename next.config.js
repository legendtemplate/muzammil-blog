/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.sanity.io','preview.colorlib.com'],
  }
}

module.exports = nextConfig
