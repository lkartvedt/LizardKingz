/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hb6ybfjjgf6kkdcu.public.blob.vercel-storage.com',
      },
    ],
  },
}

export default nextConfig
