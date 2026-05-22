import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/mbti',
  images: { unoptimized: true },
};

export default nextConfig;
