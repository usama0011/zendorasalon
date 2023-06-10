/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images:{
    domains:['res.cloudinary.com']
  },
  env: {
    MONGODB_URI:
      "mongodb+srv://roger513042:Zendora123@cluster0.x5shn2f.mongodb.net/?retryWrites=true&w=majority",
    CLOUDINARY_API_KEY: "198771764136896",
    CLOUDINARY_API_SECRET: "q7ofpcpeSMg6QPyXmPy5eTV41UI",
    CLOUDINARY_NAME: "dbbtqwy3w",
  },
};

module.exports = nextConfig;
