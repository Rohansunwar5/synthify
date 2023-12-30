/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ["uxfdjimnfkidglwobztn.supabase.co"],
  },
};

module.exports = nextConfig;
