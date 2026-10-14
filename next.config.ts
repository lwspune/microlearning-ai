import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Inlined at build time, so the review flag can't differ between a page's
  // prerendered shell and its request-time render (src/lib/review.ts).
  env: { REVIEW_ENABLED: process.env.REVIEW_ENABLED ?? "" },
  cacheComponents: true,
  // With partialPrefetching the App Shell streams before notFound() runs, so an
  // unknown dynamic param renders the not-found UI with noindex but status 200
  // (documented Next.js behaviour). scripts/smoke-routes.ts asserts exactly that.
  partialPrefetching: true,
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
