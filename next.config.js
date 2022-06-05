/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
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
      "cdn.pixabay.com"
    ],
  },
}

module.exports = nextConfig
