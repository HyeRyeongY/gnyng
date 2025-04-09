import Lenis from "@studio-freight/lenis";

export default defineNuxtPlugin(() => {
  const lenis = new Lenis({
    smooth: true,
  });

  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  return {
    provide: {
      lenis,
    },
  };
});
