const nextConfig = {
  output: 'export',
  /** Required for static hosting: each route becomes `folder/index.html` so `/contact-us/` maps to a real path. Without this, Apache only has `contact-us.html` and pretty URLs often 404/503. */
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
};

export default nextConfig;