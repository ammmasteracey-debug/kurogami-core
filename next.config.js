/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  reactStrictMode: true,
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
