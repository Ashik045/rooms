/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['www.pexels.com', 'images.pexels.com', 'unsplash.com', 'https://unsplash.com', 'firebasestorage.googleapis.com']
  }
}

module.exports = nextConfig
