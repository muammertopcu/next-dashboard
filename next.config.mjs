/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {source: '/', destination: '/dashboard/reports', permanent: true }
    ]
  },
  images: {
    remotePatterns: [
      {protocol: 'https', hostname: 'picsum.photos'},
      {protocol: 'https', hostname: 'i.pravatar.cc'},
    ],
  },
};

export default nextConfig;
