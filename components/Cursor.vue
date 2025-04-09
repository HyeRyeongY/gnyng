<template>
  <div class="cursor">
    <div class="cursor-dot"></div>
    <div class="cursor-outline"></div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import gsap from "gsap";

onMounted(() => {
  const cursorDot = document.querySelector(".cursor-dot");
  const cursorOutline = document.querySelector(".cursor-outline");

  // 마우스 좌표 저장
  let mouseX = 0,
    mouseY = 0;

  // 마우스 이동 이벤트
  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    // 작은 원은 즉시 이동
    gsap.to(cursorDot, { x: mouseX, y: mouseY, duration: 0 });

    // 큰 원은 부드럽게 이동
    gsap.to(cursorOutline, { x: mouseX, y: mouseY, duration: 0.3, ease: "power2.out" });
  });

  // hover 효과 (버튼이나 링크 위에서 커짐)
  document.querySelectorAll("a, button").forEach((el) => {
    el.addEventListener("mouseenter", () => {
      gsap.to(cursorOutline, { scale: 1.8, duration: 0.3, ease: "power2.out" });
    });
    el.addEventListener("mouseleave", () => {
      gsap.to(cursorOutline, { scale: 1, duration: 0.3, ease: "power2.out" });
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
