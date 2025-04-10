import { Client } from "@notionhq/client";
import { createError, getQuery } from "h3";

export default defineEventHandler(async (event) => {
  const { id } = getQuery(event);

  if (!id || typeof id !== "string") {
    throw createError({ statusCode: 400, statusMessage: "Invalid ID" });
  }

  const notion = new Client({ auth: process.env.NOTION_TOKEN });

  // 🔥 핵심: notion-to-md는 require로 불러오기!
  const { NotionToMarkdown } = await import("notion-to-md");

  const n2m = new NotionToMarkdown({ notionClient: notion });

  const mdblocks = await n2m.pageToMarkdown(id);
  const markdown = n2m.toMarkdownString(mdblocks);

  return { markdown };
});
