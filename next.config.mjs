import withPWAInit from "@ducanh2912/next-pwa";

const withPWA = withPWAInit({
  dest: "public",
  disable: false,
  register: true,
  scope: "/",
  sw: "service-worker.js",
  runtimeCaching: [
    {
      urlPattern: /^\/_next\/static\/.*$/,
      handler: "CacheFirst",
      options: {
        cacheName: "static-assets",
        expiration: {
          maxAgeSeconds: 86400,
        },
      },
    },
  ],
  workboxOpts: {
    swDest: "public/service-worker.js",
    disableDevLogs: true,
  },
});

// Your Next config is automatically typed!
export default withPWA({
  // Your Next.js config
});
