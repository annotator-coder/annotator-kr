/** @type {import('next').NextConfig} */
const nextConfig = {
  // Prevent trailing-slash redirects from appearing as redirect errors in GSC
  trailingSlash: false,

  async headers() {
    return [
      {
        source: '/:path*',
        headers: [{ key: 'Content-Language', value: 'ko' }],
      },
      {
        source: '/en/:path*',
        headers: [{ key: 'Content-Language', value: 'en' }],
      },
      {
        source: '/en',
        headers: [{ key: 'Content-Language', value: 'en' }],
      },
    ]
  },

  async redirects() {
    return [
      // www → non-www (permanent)
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.annotator.kr' }],
        destination: 'https://annotator.kr/:path*',
        permanent: true,
      },
    ]
  },
}
module.exports = nextConfig
