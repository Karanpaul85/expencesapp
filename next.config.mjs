import withPWA from "@ducanh2912/next-pwa";

export default withPWA({
  pwa: {
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
  },
});
