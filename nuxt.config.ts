export default defineNuxtConfig({
  ssr: true,
  app: {
    head: {
      title: "YoonHR",
      meta: [{ name: "description", content: "This is yoonhyeryeong's project." }],
    },
  },
  css: ["@/assets/css/reset.scss", "@/assets/css/global.scss"],
  runtimeConfig: {
    notionToken: process.env.NOTION_TOKEN,
    notionDatabaseId: process.env.NOTION_DATABASE_ID,
  },
});
