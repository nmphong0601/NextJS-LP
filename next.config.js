/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: 'imgix',
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    path: process.env.NEXT_HOST
  },
  module: {
    rules: [
      {
        test: /\.(jpe?g|png|webp)$/i,
        use: {
          loader: 'responsive-loader',
          options: {
            // If you want to enable sharp support:
            adapter: require('responsive-loader/sharp'),
          },
        },
      },
    ],
  },
}

module.exports = nextConfig
