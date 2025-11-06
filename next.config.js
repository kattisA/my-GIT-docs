const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
})

const isProd = process.env.NODE_ENV === 'production'
const repo = 'my-GIT-docs'

module.exports = withNextra({
  images: { unoptimized: true },
  trailingSlash: true,
  basePath: isProd ? `/${repo}` : undefined,
  assetPrefix: isProd ? `/${repo}/` : undefined,
})
