const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  async rewrites() {
    return [
      {
        source: '/admin',
        destination: '/admin/index.html',
      },
    ]
  },
  distDir: 'out',
  output: isProd ? 'export' : undefined
}
