/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/benefits-of-balanced-diet',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/pcos-diet-guide',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/weight-loss-mistakes',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blog/benefits-of-balanced-diet',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blog/pcos-diet-guide',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blog/weight-loss-mistakes',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blog/:slug',
        destination: '/:slug',
        permanent: true,
      },
      {
        source: '/contact',
        destination: '/contact-us',
        permanent: true,
      },
      {
        source: '/about',
        destination: '/about-us',
        permanent: true,
      },
      {
        source: '/weight-loss',
        destination: '/services/indian-diet-plan-for-weight-loss',
        permanent: true,
      },
      {
        source: '/services/weight-loss',
        destination: '/services/indian-diet-plan-for-weight-loss',
        permanent: true,
      },
      {
        source: '/services/pcod',
        destination: '/services/diet-plan-for-pcod',
        permanent: true,
      },
      {
        source: '/services/diabetes',
        destination: '/services/diet-plan-for-diabetes',
        permanent: true,
      },
      {
        source: '/services/thyroid',
        destination: '/services/diet-for-thyroid-patients',
        permanent: true,
      },
      {
        source: '/services/pregnant',
        destination: '/services/diet-plan-for-pregnant-women',
        permanent: true,
      },
      {
        source: '/services/weight-gain',
        destination: '/services/diet-plan-for-weight-gain',
        permanent: true,
      },
      {
        source: '/services/hair',
        destination: '/services/diet-plan-for-hair-growth',
        permanent: true,
      },
      {
        source: '/services/post-pregnancy',
        destination: '/services/post-pregnancy-diet-plan',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
