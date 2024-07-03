const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx'
});

module.exports = withNextra({
  output: 'export',
  basePath: '/documentation',
  trailingSlash: true,
  assetPrefix: '/',
  images: {
    unoptimized: true
  },
});