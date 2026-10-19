/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/desk',
        destination: '/access#desk-process',
        permanent: true
      },
      {
        source: '/page-old',
        destination: '/',
        permanent: true
      }
    ]
  },
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      'three/examples/js/libs/stats.min': path.resolve(
        __dirname,
        'node_modules/three/examples/jsm/libs/stats.module.js'
      )
    }
    return config
  }
}

module.exports = nextConfig
