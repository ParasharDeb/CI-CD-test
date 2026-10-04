/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@repo/db"],
  serverExternalPackages: ["@prisma/client", "@prisma/adapter-pg", "pg"],
};

export default nextConfig;
