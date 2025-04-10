import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_TOKEN });

const getChildrenRecursively = async (block) => {
  if (block.has_children) {
    const childrenRes = await notion.blocks.children.list({ block_id: block.id });
    block.children = await Promise.all(childrenRes.results.map(getChildrenRecursively));
  }
  return block;
};

export default defineEventHandler(async (event) => {
  const id = getQuery(event).id;

  const res = await notion.blocks.children.list({ block_id: id });
  const blocksWithChildren = await Promise.all(res.results.map(getChildrenRecursively));

  return { blocks: blocksWithChildren };
});
