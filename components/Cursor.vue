<template>
  <div class="cursor">
    <div class="cursor-dot"></div>
    <div class="cursor-outline"></div>
  </div>
</template>

<script setup>
import { onMounted, nextTick } from "vue";
import gsap from "gsap";
onMounted(() => {
  nextTick(() => {
    const cursorDot = document.querySelector(".cursor-dot");
    const cursorOutline = document.querySelector(".cursor-outline");

    let mouseX = 0,
      mouseY = 0;

    document.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      gsap.to(cursorDot, { x: mouseX, y: mouseY, duration: 0 });
      gsap.to(cursorOutline, { x: mouseX, y: mouseY, duration: 0.3, ease: "power2.out" });
    });

    // ✅ 전역 hover 감지
    document.addEventListener("mouseover", (e) => {
      const isHoverTarget = e.target.closest("a, button, summary");
      if (isHoverTarget) {
        gsap.to(cursorOutline, { scale: 1.8, duration: 0.3, ease: "power2.out" });
      }
    });

    document.addEventListener("mouseout", (e) => {
      const isHoverTarget = e.target.closest("a, button, summary");
      if (isHoverTarget) {
        gsap.to(cursorOutline, { scale: 1, duration: 0.3, ease: "power2.out" });
      }
    });
  });
});
</script>

<style scoped>
/* 기본 커서 숨기기 */
body {
  cursor: none;
}

/* 커스텀 커서 컨테이너 */
.cursor {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 9999;
  mix-blend-mode: difference;
}

/* 작은 원 (즉시 따라가는 점) */
.cursor-dot {
  position: absolute;
  width: 6px;
  height: 6px;
  background-color: white;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
}

/* 큰 원 (스무스하게 따라가는 테두리) */
.cursor-outline {
  position: absolute;
  width: 30px;
  height: 30px;
  border: 1px solid white;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
}
</style>
