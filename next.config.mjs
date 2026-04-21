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
  async headers() {
    return [
      {
        // HTML/document routes: always fetch fresh content.
        source: '/((?!_next/static|_next/image|.*\\.[^/]+$).*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-store, no-cache, must-revalidate, max-age=0',
          },
        ],
      },
      {
        // Fingerprinted static assets: keep long immutable cache.
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;