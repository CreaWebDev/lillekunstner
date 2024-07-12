// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  alias: {
    assets: "/<rootDir>/assets", // lillekunstner med??
    public: "/<rootDir>/public"
  },
  modules: [
    // "@nuxtjs/i18n",
    // "@pinia/nuxt",
  ],
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  ssr: false
})
