/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "links.papereact.com",
      "firebaseestorage.googleapis.com",
      "platform-lookaside.fbsbx.com",
      "logodownload.org",
      "external.fmaa5-1.fna.fbcdn",
      "external.fmaa5-1.fna.fbcdn.net",
      "www.srec.ac.in",
      "cdn.searchenginejournal.com",
      "cdn.pixabay.com",
      "firebasestorage.googleapis.com",
      "imgs.search.brave.com"
    ],
  },

}


module.exports = nextConfig
