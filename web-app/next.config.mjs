/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true
    },
    images: {
        domains: ["localhost","127.0.0.1","res.cloudinary.com"],
    },
};

export default nextConfig;