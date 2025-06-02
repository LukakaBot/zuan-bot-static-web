import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  // turbopack: {
  //   rules: {
  //     '*.svg': {
  //       as: '*.js',
  //       loaders: ['@svgr/webpack'],
  //     }
  //   }
  // },
  // webpack(config) {
  //   config.module.rules.push({
  //     test: /\.svg$/i,
  //     include: /src\/assets\/svg\/.*\.svg$/,
  //     use: ['@svgr/webpack'],
  //   });
  // }
};

export default nextConfig;
