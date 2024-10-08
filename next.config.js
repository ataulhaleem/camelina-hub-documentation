const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx'
});

module.exports = withNextra({
  output: 'export',
  basePath: '/camelina-hub-documentation',
  images: {
    unoptimized: true
  },
});
