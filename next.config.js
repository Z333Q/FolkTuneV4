const path = require("path");

module.exports = {
  reactStrictMode: true,
  experimental: {
    appDir: true, // Enable experimental app directory support
  },
  webpack: (config) => {
    config.resolve.alias["@"] = path.resolve(__dirname);
    return config;
  },
};
