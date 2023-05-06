<script>
  import pcard from '/src/components/pcard.vue';
  import hd from '/src/components/horizontalDivider.vue';

  export default {
    name: 'App',
    components: {
      pcard,
      hd,
    },
    data() {
      return {
        // portfolio
        img1: '/src/assets/project-files/portfolio.png',
        alt1: 'Graphic Design Portfolio',
        link1: 'https://wangj3743.github.io/portfolio/',
        // blog
        img2: '/src/assets/project-files/placeholder.png',
        alt2: 'Blog',
        link2: 'https://wangj3743.github.io/blog',
        // Re-Event
        img3: '/src/assets/project-files/placeholder.png',
        alt3: 'Re-Event',
        link3: 'https://re-event.netlify.app',
        // Blockr
        img4: '/src/assets/project-files/blockr.jpg',
        alt4: 'Blockr',
        link4: 'https://devpost.com/software/blockr-uh3e8a',
        // Once
        img5: '/src/assets/project-files/once.png',
        alt5: 'Once',
        link5: 'https://devpost.com/software/autimeation',
      };
    },
  };
</script>

<template>
  <button @click="toggleDark()" class="btn h-[70px] w-[70px] fixed right-[10px] top-[10px] dark:bg-white z-50">
    <img v-if="isDark" src="/src/assets/moon-solid.svg" alt="moon" />
    <img v-else src="/src/assets/sun-solid.svg" alt="sun" />
  </button>

  <div class="m-auto w-[70%]">
    <div>
      <!--section 00: title-->
      <img src="\src\assets\cube.jpg" alt="pfp" class="rounded-[100%] scale-75" />
      <h1 class="text-[80px] font-bold">Jim Wang</h1>
    </div>

    <hd />

    <div class="translate-y-[100px]">
      <div>
        <!--section 01: about-->
        <h2 class="text-[40px] font-bold">About</h2>
        <hd />
        <br>
        <p>
          Hi, my name is Jim. I'm a high school student who has a strong passion
          for mathematics, science, programming, and engineering.
        </p>
        <br>
        <details>
          <summary>Programming Languages</summary>
          <p>I use:</p>
          <li>Python</li>
          <li>Vue.js</li>
          <li>TailwindCSS</li>
          <li>HTML/CSS/JS</li>
          <br>
          <p>and I know a bit of:</p>
          <li>C++</li>
          <li>Lua</li>
        </details>
        
        <br>
        <details>
          <summary>Hobbies</summary>
          <li>Stationary</li>
          <li>Mechanical Keyboards</li>
          <li>Photography</li>
          <li>Violin</li>
          <li>Piano (self taught)</li>
          <li>Composing</li>
          <li>VIdeo Editing</li>
          <li>Graphic design</li>
          <li>CAD</li>
          <li>Rubik's Cubes</li>
          <li>Tetris</li>
          <li>Minesweeper</li>
        </details>
        <br><br>
      </div>

      <div>
        <!--section 02: projects-->
        <h2 class="text-[40px] font-bold">Projects</h2>
        <hd />
        <br>
        <div class=" grid sm:grid-cols-2 md:grid-cols-3 lg:grid-col-4 gap-x-[7px] gap-y-[7px]">
          <pcard :linkRef="link1" :imgSrc="img1" :imgAlt="alt1" title="Graphic Design Portfolio" badge1="Github Pages" desc="Hosts various graphic design projects from the years."/>
          <pcard :linkRef="link2" :imgSrc="img2" :imgAlt="alt2" title="Blog" badge1="Github Pages" badge2="Unfinished" desc="Personal blog hosting website"/>
          <pcard :linkRef="link3" :imgSrc="img3" :imgAlt="alt3" title="Re-Event" badge1="Re-Event" badge2="Unfinished" desc="TBD"/>
          <pcard :linkRef="link4" :imgSrc="img4" :imgAlt="alt4" title="BLOCKR" badge1="Jamhacks V (2021)" desc="A website blocker with an incentive."/>
          <pcard :linkRef="link5" :imgSrc="img5" :imgAlt="alt5" title="Once" badge1="ClockHacks (2022)" badge2="Unfinished" desc="Automate repetitive task on the web by just doing it ONCE." />
        </div>
        <br><br>
      </div>
      <br><br><br><br><br><br>
    </div>
  </div>

  <!-- section -1: footer -->
  <br><br><br><br><br><br><br><br>
  <hd />
  <div class="bg m-auto w-[70%]">
    <br><br>
    <div class="bg flex flex-row gap-2 justify-center">
      <a class="hover:scale-[1.2] ease-in duration-200" href="mailto:jimwang314@gmail.com">
        <img v-if="isDark" class="iconSize" src="/src/assets/profiles/envelope-dark.svg" />
        <img v-else class="iconSize" src="/src/assets/profiles/envelope.svg" />
      </a>
      <a class="hover:scale-[1.2] ease-in duration-200" href="https://www.linkedin.com/in/jim-wang-263877212/">
        <img v-if="isDark" class="iconSize" src="/src/assets/profiles/linkedin-dark.svg" />
        <img v-else class="iconSize" src="/src/assets/profiles/linkedin.svg" />
      </a>
      <a class="hover:scale-[1.2] ease-in duration-200" href="https://github.com/Wangj3743/">
        <img v-if="isDark" class="iconSize" src="/src/assets/profiles/github-dark.svg"/>
        <img v-else class="iconSize" src="/src/assets/profiles/github.svg" />
      </a>
    </div>
    <br><br>
    <p class="text-center">Jim Wang・2023</p>
    <br>
  </div>
</template>



<style>
body, .bg {
  @apply transition ease-in-out delay-150 bg-white dark:bg-[#1e2124] duration-300;
}

h1, h2, h3, p, li, details, summary {
  @apply text-black dark:text-white fill-black;
}

a {
  color: paleturquoise;
}

.iconSize {
  height: 32px;
  width: 32px;
}
</style>



<script setup>
  import { useDark, useToggle } from '@vueuse/core';
  const isDark = useDark();
  const toggleDark = useToggle(isDark);
</script>