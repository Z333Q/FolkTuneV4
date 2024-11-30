const withNetlify = require('@netlify/plugin-nextjs');

module.exports = withNetlify({
  reactStrictMode: true,
  experimental: {
    outputStandalone: true,
  },
  debug: true,
});

