/** @type {import('next').NextConfig} */
const nextConfig = {
  // start: script dibawah ini dipakai saat deploy ke shared hosting. hapus jika akan hosting ke vps
  output: "export",
  images: {
    unoptimized: true, //
  },
  // end
};

export default nextConfig;
