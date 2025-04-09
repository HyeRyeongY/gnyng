export default defineNuxtConfig({
  ssr: false, // 클라이언트 사이드 렌더링
  nitro: {
    preset: "static",
  },
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
