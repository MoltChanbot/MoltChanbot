/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  webpack: (config) => {
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      // Strip Supabase and AI SDK (no server during static export)
      "@supabase/supabase-js": false,
      "@supabase/postgrest-js": false,
      "@supabase/realtime-js": false,
      "@supabase/storage-js": false,
      "@supabase/functions-js": false,
      ai: false,
      "@ai-sdk/groq": false,
    };
    return config;
  },
};

export default nextConfig;
