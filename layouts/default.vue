<template>
  <div>
    <header>
      <ul class="gnb">
        <li>
          <a href="#yes" @click.prevent="navigateToAnchor('yes')"
            ><em>Y</em><span><strong>Yes.</strong><br />[ 네 ]</span></a
          >
        </li>
        <li>
          <a href="#here" @click.prevent="navigateToAnchor('here')"
            ><em>H</em><span><strong>Here.</strong><br />[ 여기 있습니다 ]</span></a
          >
        </li>
        <li>
          <a href="#ready" @click.prevent="navigateToAnchor('ready')"
            ><em>R</em><span><strong>Ready.</strong><br />[ 준비됐습니다 ]</span></a
          >
        </li>
      </ul>
    </header>

    <main>
      <slot />
    </main>

    <footer>
      <p>© 2025 yoonhyeryeong</p>
      <!-- 네, 여기 있습니다. 준비됐습니다. -->
    </footer>

    <Cursor v-if="isMouse" />
  </div>
</template>
<script setup>
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();

function navigateToAnchor(anchorId) {
  const targetPath = "/";
  const hash = `#${anchorId}`;

  if (route.path !== targetPath) {
    router.push({ path: targetPath, hash });
  } else {
    const el = document.getElementById(anchorId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }
}

import Cursor from "@/components/Cursor.vue";

import { onMounted, ref } from "vue";
const isMouse = ref(false);

onMounted(() => {
  isMouse.value = window.matchMedia("(hover: hover)").matches;
});
</script>
