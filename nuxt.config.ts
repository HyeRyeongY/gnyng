export default defineNuxtConfig({
  ssr: true,
  app: {
    head: {
      title: "YHR",
      meta: [{ name: "description", content: "This is yoonhyeryeong's project." }],
      link: [
        // Funnel Display
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Funnel+Display:wght@300..800&display=swap",
        },
        // Special Gothic
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Special+Gothic&display=swap",
        },
      ],
    },
  },
  modules: ["@nuxtjs/tailwindcss"],
  css: ["@/assets/css/reset.scss", "@/assets/css/global.scss"],
  runtimeConfig: {
    notionToken: process.env.NOTION_TOKEN,
    notionDatabaseId: process.env.NOTION_DATABASE_ID,
  },

  compatibilityDate: "2025-04-09",
});
