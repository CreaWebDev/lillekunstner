// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss'],
  // Add the global Tailwind entry so Nuxt includes Tailwind CSS styles
  css: ['~/assets/css/tailwind.css'],

  runtimeConfig: {
    // Server-side environment variables
    smtpHost: process.env.SMTP_HOST,
    smtpPort: process.env.SMTP_PORT,
    smtpSecure: process.env.SMTP_SECURE === 'true',
    smtpUser: process.env.SMTP_USER,
    smtpPass: process.env.SMTP_PASS,
    smtpFrom: process.env.SMTP_FROM,
    orderEmail: process.env.ORDER_EMAIL,
  }
})
