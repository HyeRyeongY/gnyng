<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import NotionContent from "~/components/NotionContent.vue";

const route = useRoute();
const pageId = route.params.id;
const blocks = ref([]);

onMounted(async () => {
  const data = await $fetch(`/api/notion/block?id=${pageId}`);
  blocks.value = data.blocks || [];
});
</script>

<template>
  <div>
    <NotionContent :blocks="blocks" />
  </div>
</template>
