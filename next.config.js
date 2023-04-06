/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env:{
    API_URL: "http://localhost:3000",
    DB_URI: "mongodb://localhost:27017/buyProduct",
    NEXTAUTH_SECRET: "arafatpurnimaritumahiandothers"
  },
  images:{
    domains: ["res.cloudinary.com"]
  }
}

module.exports = nextConfig
