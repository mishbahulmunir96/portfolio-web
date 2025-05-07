/** @type {import('next').NextConfig} */
const nextConfig = {
  // start: script dibawah ini dipakai saat deploy ke shared hosting
  output: "export",
  images: {
    unoptimized: true, //
  },
  // end
};

export default nextConfig;
