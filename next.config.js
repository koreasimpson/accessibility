/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa");

const nextConfig = {
  poweredByHeader: process.env.NODE_ENV === "development",
  pwa: {
    dest: "public",
    disable: process.env.NODE_ENV === "development",
  },
  reactStrictMode: process.env.NODE_ENV === "development",
};

module.exports = nextConfig;
