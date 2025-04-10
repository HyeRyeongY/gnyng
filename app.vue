<template>
  <NuxtLayout>
    <Cursor v-if="isMouse" />
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup>
import Cursor from "@/components/Cursor.vue";

import { onMounted, ref } from "vue";
const isMouse = ref(false);

onMounted(() => {
  isMouse.value = window.matchMedia("(hover: hover)").matches;
});
</script>
