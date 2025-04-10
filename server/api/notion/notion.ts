// server/api/notion/notion.ts
import { Client } from "@notionhq/client";

export default defineEventHandler(async () => {
  const notion = new Client({ auth: process.env.NOTION_TOKEN });

  const databaseId = process.env.NOTION_DATABASE_ID!;
  const response = await notion.databases.query({
    database_id: databaseId,
  });

  return response;
});
