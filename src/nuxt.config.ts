// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  nitro: {
    prerender: {
      concurrency: 4,
      interval: 500,
    },
    compressPublicAssets: { gzip: true, brotli: true },
    routeRules: {
      "/_nuxt/**": {
        headers: { "Cache-Control": "public, max-age=31536000, immutable" },
      },
      "/public/**": {
        headers: { "Cache-Control": "public, max-age=2592000, immutable" }, // 30 дней
      },
      "/image/**": {
        headers: { "Cache-Control": "public, max-age=604800, immutable" }, // 7 дней
      },
    },
  },
  app: {
    head: {
      viewport:
        "width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no",
      htmlAttrs: { dir: "ltr", lang: "ru" },
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon/favicon.ico" },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon/favicon.svg",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "96x96",
          href: "/favicon/favicon-96x96.png",
        },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/favicon/apple-touch-icon.png",
        },
        { rel: "manifest", href: "/favicon/site.webmanifest" },
      ],
      meta: [
        { name: "mobile-web-app-capable", content: "yes" },
        { name: "apple-mobile-web-app-status-bar-style", content: "default" },
      ],
    },
    baseURL: "/",
  },
  ssr: true,

  components: [
    {
      path: "~/components",
    },
  ],

  css: ["~/assets/scss/main.scss"],

  devtools: {
    enabled: true,
    timeline: {
      enabled: true,
    },
  },
  modules: [
    "@pinia/nuxt",
    "@nuxt/image",
    "nuxt-lazy-hydrate",
    "nuxt-svgo",
    "nuxt-viewport",
  ],

  viewport: {
    breakpoints: {
      mobile: 320,
      mobileMedium: 375,
      mobileWide: 500,
      tabletWide: 621,
      tablet: 1025,
      tabletStart: 1025,
      desktop: 1220,
      desktopMedium: 1440,
      desktopWide: 1720,
    },
  },

  pages: true,

  experimental: {
    componentIslands: {
      selectiveClient: true,
    },
  },

  vite: {
    build: {
      target: ["esnext", "es2022"],
    },
    esbuild: {
      target: "es2022",
    },
    optimizeDeps: {
      esbuildOptions: {
        target: "es2022",
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @import "~/assets/scss/color-variables";
            @import "~/assets/scss/fonts/typography";
            @import "~/assets/scss/mixins/popup";
          `,
        },
      },
    },
  },


  svgo: {
    global: "false",
  },

  runtimeConfig: {
    public: {
      apiUrl: process.env.STRAPI_SERVER,
    },
  },

  compatibilityDate: "2024-11-01",
});