/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {source: '/', destination: '/dashboard/reports', permanent: true }
    ]
  }
};

export default nextConfig;
