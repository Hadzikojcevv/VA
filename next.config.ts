import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

const nextConfig: NextConfig = {
  webpack: (config, { dev }) => {
    // Prevent recurring corrupted cache / missing chunk issues in dev:
    // - ENOENT rename errors under .next/cache/webpack
    // - missing *.js chunks + "e[o] is not a function" in webpack-runtime
    if (dev) {
      config.cache = false;
    }
    return config;
  },
};

export default withNextIntl(nextConfig);
