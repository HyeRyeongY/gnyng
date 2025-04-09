<template>
  <ClientOnly>
    <div ref="container" class="home">
      <img ref="elements" src="/assets/images/1.jpg" />
      <img ref="elements" src="/assets/images/2.jpg" />
      <img ref="elements" src="/assets/images/3.jpg" />
      <img ref="elements" src="/assets/images/4.jpg" />
      <img ref="elements" src="/assets/images/5.jpg" />
      <img ref="elements" src="/assets/images/6.jpg" />
    </div>
  </ClientOnly>
</template>

<script setup>
import { onMounted, ref } from "vue";
import gsap from "gsap";
import Lenis from "@studio-freight/lenis";

const elements = ref([]);

onMounted(() => {
  // Lenis 부드러운 스크롤 적용
  const lenis = new Lenis({
    smooth: true,
    lerp: 0.1, // 감속 정도 조절
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  // 스크롤 속도 감지 & 요소에 적용
  let speed = 0;
  lenis.on("scroll", ({ velocity }) => {
    speed = velocity;
    applyWarpEffect(speed);
  });

  function applyWarpEffect(speed) {
    console.log("elements", elements.value);
    elements.value.forEach((el, index) => {
      gsap.to(el, {
        y: -speed * 50, // 속도에 따라 상승
        scale: 1 + Math.abs(speed) * 0.1, // 속도에 따라 확대
        opacity: Math.max(0.2, 1 - Math.abs(speed) * 0.2), // 속도가 빠를수록 투명해짐
        ease: "power4.out",
        duration: 0.5,
      });
    });
  }
});
</script>

<style scoped lang="scss">
.home {
  padding: 100px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  img {
    max-width: 400px;
    margin: 20px;
    transition: transform 0.2s ease-out;
    object-fit: cover;
  }
}
</style>
