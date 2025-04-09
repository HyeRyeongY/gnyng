<template>
  <div class="main">
    <!-- yes -->
    <section id="yes" class="yes">
      <canvas ref="canvasRef"></canvas>
      <div class="scroll">
        <span>scroll</span>
        <img src="/assets/common/scroll.svg" />
        <img src="/assets/common/scroll.svg" />
      </div>
    </section>
    <!-- here -->
    <section id="here" class="here">
      <h2>Here.</h2>
      <ul>
        <li v-for="(item, index) in studyList" :key="index">
          <a :href="item.url" target="_blank">
            {{ item.properties.title.title[0].plain_text || "제목 없음" }}</a
          >
        </li>
      </ul>
    </section>
    <!-- ready -->
    <section id="ready" class="ready">
      <h2>Ready.</h2>
      <h3>Work Experience</h3>
      <ul class="experience">
        <li>
          <strong>티허브 <sub>| 일주지앤에스</sub></strong
          ><br />
          <span>web publisher | 2022.03 ~ 현재</span>
        </li>
      </ul>

      <!-- <h3>Skills</h3>
      <ul class="skills">
        <li>
          <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <title>HTML5</title>
            <path
              d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"
              fill="#ffffff"
            />
          </svg>
          <em>HTML</em>
          <span data-percent="90">고급</span>
          <p>
            1)핵심 태그들의 역할과 특징을 파악하고 적재 적소에 사용할 수 있습니다.
            <br />
            2)HTML5의 시멘틱 태그를 이해하고 효율적으로 적용할 수 있습니다.
          </p>
        </li>
        <li>
          <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <title>CSS3</title>
            <path
              d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"
              fill="#ffffff"
            />
          </svg>
          <em>CSS</em>
          <span data-percent="90">고급</span>
          <p>
            기본적인 스타일은 물론, 원하는 애니메이션 개발을 위한 keyframe 애니메이션이 가능합니다.
            브라우저 호환성을 위한 브라우저의 속성 활용 범위를 파악하고 있습니다.
          </p>
        </li>
        <li>
          <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <title>JavaScript</title>
            <path
              d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"
              fill="#ffffff"
            />
          </svg>
          <em>JavaScript</em>
          <span data-percent="80">중상급</span>
          <p>
            1) 다양한 레퍼런스 코드를 분석하고, 필요에 맞게 수정하여 커스텀 적용할 수 있습니다.
            <br />
            2) 마우스 이벤트 및 기타 사용자 이벤트 처리에 익숙하여, 이를 활용한 인터랙티브
            애니메이션을 적용할 수 있습니다.
            <br />
            3) 배열과 객체 데이터 구조를 이해하고 있어 데이터를 이용한 로직 구현이 가능합니다.
          </p>
        </li>
        <li>
          <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <title>Vue.js</title>
            <path
              d="M24,1.61H14.06L12,5.16,9.94,1.61H0L12,22.39ZM12,14.08,5.16,2.23H9.59L12,6.41l2.41-4.18h4.43Z"
              fill="#ffffff"
            />
          </svg>
          <em>Vue.js</em>
          <span data-percent="70">중급</span>
          <p>
            1) Vue.js 기반의 프로젝트를 초기 설정할 수 있으며, NPM 패키지를 활용하여 필요한
            라이브러리를 효율적으로 사용할 수 있습니다.
            <br />
            2) Vue의 라이프사이클을 이해하고 애니메이션 라이브러리를 적용하여 인터랙티브한 UI를
            구현할 수 있습니다.
          </p>
        </li>
        <li>
          <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <title>Nuxt</title>
            <path
              d="M13.4642 19.8295h8.9218c.2834 0 .5618-.0723.8072-.2098a1.5899 1.5899 0 0 0 .5908-.5732 1.5293 1.5293 0 0 0 .216-.783 1.529 1.529 0 0 0-.2167-.7828L17.7916 7.4142a1.5904 1.5904 0 0 0-.5907-.573 1.6524 1.6524 0 0 0-.807-.2099c-.2833 0-.5616.0724-.807.2098a1.5904 1.5904 0 0 0-.5907.5731L13.4642 9.99l-2.9954-5.0366a1.5913 1.5913 0 0 0-.591-.573 1.6533 1.6533 0 0 0-.8071-.2098c-.2834 0-.5617.0723-.8072.2097a1.5913 1.5913 0 0 0-.591.573L.2168 17.4808A1.5292 1.5292 0 0 0 0 18.2635c-.0001.2749.0744.545.216.783a1.59 1.59 0 0 0 .5908.5732c.2454.1375.5238.2098.8072.2098h5.6003c2.219 0 3.8554-.9454 4.9813-2.7899l2.7337-4.5922L16.3935 9.99l4.3944 7.382h-5.8586ZM7.123 17.3694l-3.9083-.0009 5.8586-9.8421 2.9232 4.921-1.9572 3.2892c-.7478 1.1967-1.5972 1.6328-2.9163 1.6328z"
              fill="#ffffff"
            />
          </svg>
          <em>Nuxt.js</em>
          <span data-percent="60">중급</span>
          <p>
            Nuxt 기반의 프로젝트를 초기 설정부터 빌드 및 배포까지 진행하고, Fetch API를 사용하여
            서버와 데이터 통신을 한 경험이 있습니다.
          </p>
        </li>
      </ul> -->
    </section>
  </div>
</template>

<script setup>
import { onMounted, ref, watchEffect } from "vue";

const { data: notionData } = await useFetch("/api/notion");
const studyList = ref([]);

watchEffect(() => {
  if (notionData.value?.results) {
    studyList.value = notionData.value.results.filter(
      (item) => item.properties.category?.select?.name === "study"
    );
  }
});

const canvasRef = ref(null);

// Configurable parameters
const config = {
  particleCount: 8000,
  textArray: ["Yes,", "Here.", "Ready."],
  mouseRadius: 0.1,
  particleSize: 2,
  forceMultiplier: 0.001,
  returnSpeed: 0.02,
  velocityDamping: 0.85,
  colorMultiplier: 40000,
  saturationMultiplier: 1000,
  textChangeInterval: 5000,
  rotationForceMultiplier: 0.5,
};

let currentTextIndex = 0;
let nextTextTimeout;
let textCoordinates = [];
const mouse = {
  x: -500,
  y: -500,
  radius: config.mouseRadius,
};
const particles = [];
for (let i = 0; i < config.particleCount; i++) {
  particles.push({ x: 0, y: 0, baseX: 0, baseY: 0, vx: 0, vy: 0 });
}

onMounted(() => {
  // canvas가 DOM에 추가된 후에 getContext 호출
  const canvas = canvasRef.value;

  if (!canvas) {
    console.error("Canvas element is not found");
    return;
  }

  const gl = canvas.getContext("webgl");

  if (!gl) {
    console.error("Unable to initialize WebGL. Your browser may not support it.");
    return;
  }

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  gl.viewport(0, 0, canvas.width, canvas.height);

  // WebGL Shader Setup
  const vertexShaderSource = `
    attribute vec2 a_position;
    attribute float a_hue;
    attribute float a_saturation;
    varying float v_hue;
    varying float v_saturation;
    void main() {
        gl_PointSize = ${config.particleSize.toFixed(1)};
        gl_Position = vec4(a_position, 0.0, 1.0);
        v_hue = a_hue;
        v_saturation = a_saturation;
    }
  `;
  const fragmentShaderSource = `
    precision mediump float;
    varying float v_hue;
    varying float v_saturation;
    void main() {
       gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
    }
  `;
  // float c = v_hue * 6.0;
  // float x = 1.0 - abs(mod(c, 2.0) - 1.0);
  // vec3 color;
  // if (c < 1.0) color = vec3(1.0, x, 0.0);
  // else if (c < 2.0) color = vec3(x, 1.0, 0.0);
  // else if (c < 3.0) color = vec3(0.0, 1.0, x);
  // else if (c < 4.0) color = vec3(0.0, x, 1.0);
  // else if (c < 5.0) color = vec3(x, 0.0, 1.0);
  // else color = vec3(1.0, 0.0, x);
  // vec3 finalColor = mix(vec3(1.0), color, v_saturation);
  // gl_FragColor = vec4(finalColor, 1.0);

  function createShader(gl, type, source) {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      console.error(gl.getShaderInfoLog(shader));
      gl.deleteShader(shader);
      return null;
    }
    return shader;
  }

  function createProgram(gl, vertexShader, fragmentShader) {
    const program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error(gl.getProgramInfoLog(program));
      gl.deleteProgram(program);
      return null;
    }
    return program;
  }

  const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
  const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);
  const program = createProgram(gl, vertexShader, fragmentShader);
  const positionAttributeLocation = gl.getAttribLocation(program, "a_position");
  const hueAttributeLocation = gl.getAttribLocation(program, "a_hue");
  const saturationAttributeLocation = gl.getAttribLocation(program, "a_saturation");

  const positionBuffer = gl.createBuffer();
  const hueBuffer = gl.createBuffer();
  const saturationBuffer = gl.createBuffer();

  const positions = new Float32Array(config.particleCount * 2);
  const hues = new Float32Array(config.particleCount);
  const saturations = new Float32Array(config.particleCount);

  function getTextCoordinates(text) {
    const ctx = document.createElement("canvas").getContext("2d");
    ctx.canvas.width = canvas.width;
    ctx.canvas.height = canvas.height;
    const fontSize = Math.min(canvas.width / 8, canvas.height / 8);
    ctx.font = `900 ${fontSize}px 'Funnel Display'`;
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(text, canvas.width / 2, canvas.height / 2);
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
    const coordinates = [];
    for (let y = 0; y < canvas.height; y += 4) {
      for (let x = 0; x < canvas.width; x += 4) {
        const index = (y * canvas.width + x) * 4;
        if (imageData[index + 3] > 128) {
          coordinates.push({
            x: (x / canvas.width) * 2 - 1,
            y: (y / canvas.height) * -2 + 1,
          });
        }
      }
    }
    return coordinates;
  }

  function createParticles() {
    textCoordinates = getTextCoordinates(config.textArray[currentTextIndex]);
    for (let i = 0; i < config.particleCount; i++) {
      const randomIndex = Math.floor(Math.random() * textCoordinates.length);
      const { x, y } = textCoordinates[randomIndex];
      particles[i].x = particles[i].baseX = x;
      particles[i].y = particles[i].baseY = y;
    }
  }

  function updateParticles() {
    for (let i = 0; i < config.particleCount; i++) {
      const particle = particles[i];
      const dx = mouse.x - particle.x;
      const dy = mouse.y - particle.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const forceDirectionX = dx / distance;
      const forceDirectionY = dy / distance;
      const maxDistance = mouse.radius;
      const force = (maxDistance - distance) / maxDistance;
      const directionX = forceDirectionX * force * config.forceMultiplier;
      const directionY = forceDirectionY * force * config.forceMultiplier;
      const angle = Math.atan2(dy, dx);
      const rotationForceX = Math.sin(
        -Math.cos(angle * -1) *
          Math.sin(config.rotationForceMultiplier * Math.cos(force)) *
          Math.sin(distance * distance) *
          Math.sin(angle * distance)
      );
      const rotationForceY = Math.sin(
        Math.cos(angle * 1) *
          Math.sin(config.rotationForceMultiplier * Math.sin(force)) *
          Math.sin(distance * distance) *
          Math.cos(angle * distance)
      );
      if (distance < mouse.radius) {
        particle.vx -= directionX + rotationForceX;
        particle.vy -= directionY + rotationForceY;
      } else {
        particle.vx += (particle.baseX - particle.x) * config.returnSpeed;
        particle.vy += (particle.baseY - particle.y) * config.returnSpeed;
      }
      particle.x += particle.vx;
      particle.y += particle.vy;
      particle.vx *= config.velocityDamping;
      particle.vy *= config.velocityDamping;
      const speed = Math.sqrt(particle.vx * particle.vx + particle.vy * particle.vy);
      const hue = (speed * config.colorMultiplier) % 360;
      hues[i] = hue / 360;
      saturations[i] = Math.min(speed * config.saturationMultiplier, 1);
      positions[i * 2] = particle.x;
      positions[i * 2 + 1] = particle.y;
    }

    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, positions, gl.DYNAMIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, hueBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, hues, gl.DYNAMIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, saturationBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, saturations, gl.DYNAMIC_DRAW);
  }

  function animate() {
    updateParticles();
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.vertexAttribPointer(positionAttributeLocation, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(positionAttributeLocation);
    gl.bindBuffer(gl.ARRAY_BUFFER, hueBuffer);
    gl.vertexAttribPointer(hueAttributeLocation, 1, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(hueAttributeLocation);
    gl.bindBuffer(gl.ARRAY_BUFFER, saturationBuffer);
    gl.vertexAttribPointer(saturationAttributeLocation, 1, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(saturationAttributeLocation);
    gl.useProgram(program);
    gl.drawArrays(gl.POINTS, 0, config.particleCount);
    requestAnimationFrame(animate);
  }

  canvas.addEventListener("mousemove", (event) => {
    mouse.x = (event.clientX / canvas.width) * 2 - 1;
    mouse.y = (event.clientY / canvas.height) * -2 + 1;
  });

  canvas.addEventListener("mouseleave", () => {
    mouse.x = -500;
    mouse.y = -500;
  });

  window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    gl.viewport(0, 0, canvas.width, canvas.height);
    createParticles();
  });

  function changeText() {
    currentTextIndex = (currentTextIndex + 1) % config.textArray.length;
    const newCoordinates = getTextCoordinates(config.textArray[currentTextIndex]);
    for (let i = 0; i < config.particleCount; i++) {
      const randomIndex = Math.floor(Math.random() * newCoordinates.length);
      const { x, y } = newCoordinates[randomIndex];
      particles[i].baseX = x;
      particles[i].baseY = y;
    }
    nextTextTimeout = setTimeout(changeText, config.textChangeInterval);
  }

  gl.clearColor(0, 0, 0, 1);
  createParticles();
  animate();
  nextTextTimeout = setTimeout(changeText, config.textChangeInterval);
});
</script>
