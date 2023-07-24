/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    NEXTAUTH_SECRET: "arafatwithpurni",
    NEXTAUTH_URL: "http://localhost:3000",

    API_URL: "http://localhost:3000",
    DB_LOCAL_URI: "mongodb://localhost:27017/buyProduct",
    DB_URI:
      "mongodb+srv://testByProduct:ctg9kH74MaaXcUM4@cluster0.tjc9clz.mongodb.net/buyitnows?retryWrites=true&w=majority",

    CLOUD_NAME: "drtlu36nx",
    CLOUDINARY_API_KEY: "637927657165958",
    CLOUDINARY_API_SECRET: "kEtsHX0-DBJXJE7sIYeQNXtAkU8",

    STRIPE_PUBLIC_KEY:
      "pk_test_51M86TfDhs9jrqdoDGEhACOEVrEl8NGRbtjn2jT29zxfvcXTHFE1YkfSEgOURZVcw0LnOf3LhTiRXAjgSg1qJj3cB00ALr4kwZK",
    STRIPE_PRIVATE_KEY:
      "sk_test_51M86TfDhs9jrqdoDEBM6NI1IUKlTupqUiQxX6n3Zpadnp8fDbfSywh6GtYhhBmbvZ5G9PVx0Pc5sn4D6030HxHPy00rJ9Qg5B2",

    STRIPE_WEBHOOK_SECRET:
      "whsec_10d093e5a7af2f999cee087cf7635a254fd955c9c812f05b5da769e6e991083a",
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
};

module.exports = nextConfig;
