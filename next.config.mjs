/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // ignore eslint errors in production builds
    ignoreDuringBuilds: true,
  },
  typescript: {
    // ignore typescript errors in production builds
    ignoreBuildErrors: true,
  },
};

export default nextConfig; 