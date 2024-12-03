// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2024-11-01",
    devtools: { enabled: true },
    modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts", "@nuxt/icon", "@pinia/nuxt"],
    googleFonts: {
        families: {
            Roboto: [100, 200, 300],
            "Yuji Mai": true,
        },
        display: "swap",
        preload: true,
    },

    pinia: {
        storesDirs: ['./stores/**'],
    }
});