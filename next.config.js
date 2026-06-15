/** @type {import('next').NextConfig} */
const nextConfig = {
  // Prevent trailing-slash redirects from appearing as redirect errors in GSC
  trailingSlash: false,

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
