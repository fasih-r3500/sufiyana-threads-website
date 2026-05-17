import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: __dirname,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'kafuzagkxrwfflshmfhk.supabase.co',
        pathname: '/storage/v1/object/public/product-images/**',
      },
    ],
  },
}

export default nextConfig
