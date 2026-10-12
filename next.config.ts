import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  // partialPrefetching is off: it streams the static shell before notFound()
  // runs, so unknown dynamic params answered 200 instead of 404.
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
