// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss'],
  // Add the global Tailwind entry so Nuxt includes Tailwind CSS styles
  css: ['~/assets/css/tailwind.css'],
})
