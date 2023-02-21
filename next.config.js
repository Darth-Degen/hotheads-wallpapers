/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "www.arweave.net",
      "arweave.net",
      "shdw-drive.genesysgo.net",
      "magnum-ai-images.s3.us-west-1.amazonaws.com",
    ],
  },
};

module.exports = nextConfig;
