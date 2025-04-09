<template>
  <div>
    <header>
      <ul class="gnb">
        <li>
          <a href="#yes"
            ><em>Y</em><span><strong>Yes.</strong><br />[ 네 ]</span></a
          >
        </li>
        <li>
          <a href="#here"
            ><em>H</em><span><strong>Here.</strong><br />[ 여기 있습니다 ]</span></a
          >
        </li>
        <li>
          <a href="#ready"
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
  </div>
</template>
