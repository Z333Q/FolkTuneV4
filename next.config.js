const withNetlify = import('@netlify/plugin-nextjs');

module.exports = withNetlify({
  reactStrictMode: true,
  experimental: {
    outputStandalone: true,
  },
  debug: true,
});

