// server/api/notion.ts
export default defineEventHandler(async () => {
  const config = useRuntimeConfig();

  const response = await fetch(
    "https://api.notion.com/v1/databases/" + config.notionDatabaseId + "/query",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${config.notionToken}`,
        "Notion-Version": "2022-06-28",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    }
  );

  const data = await response.json();
  return data;
});
