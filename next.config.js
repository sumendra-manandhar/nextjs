/** @type {import('next').NextConfig} */
const nextConfig = {}

// next.config.js

module.exports = {
    // Other Next.js configurations...
    async rewrites() {
      return [
        // Add any necessary rewrites here if needed
      ];
    },
    async redirects() {
      return [
        // Add any necessary redirects here if needed
      ];
    },
    async generateStaticParams() {
      // Specify the paths of the pages you want to export
      return [
        // Example: { page: '/', query: {} },
        // Add your pages here
      ];
    },
  };
  