<script>
  import pcard from '/src/components/pcard.vue';

  export default {
    components: {
      pcard,
    },
    data () {
      return {
        // portfolio
        img1: "/src/assets/project-files/portfolio.png",
        alt1: "Graphic Design Portfolio",
        link1: "https://wangj3743.github.io/portfolio/",
        // blog
        img2: "/src/assets/project-files/placeholder.png",
        alt2: "Blog",
        link2: "https://wangj3743.github.io/blog",
        // Re-Event
        img3: "/src/assets/project-files/placeholder.png",
        alt3: "Re-Event",
        link3: "https://re-event.netlify.app",
        // Blockr
        img4: "/src/assets/project-files/blockr.jpg",
        alt4: "Blockr",
        link4: "https://devpost.com/software/blockr-uh3e8a",
        // Once
        img5: "/src/assets/project-files/once.png",
        alt5: "Once",
        link5: "https://devpost.com/software/autimeation",
      }
    }
  }
</script>



<template>
  <button @click="toggleDark()" class="btn h-[70px] w-[70px] fixed right-[10px] top-[10px] dark:bg-white z-50">
    <img v-if="isDark" src="src/assets/moon-solid.svg" alt="moon">
    <img v-else src="src/assets/sun-solid.svg" alt="sun">
    <!-- <p v-if="isDark">del(currently dark mode)</p>
    <p v-else>del(currently light mode)</p> -->
  </button>

  <div class="m-auto w-[70%]">
    <div>
      <!--section 00: header-->
      <img src="\src\assets\cube.jpg" alt="pfp" class="rounded-[100%] scale-75">
      <h1 class="text-[80px] font-bold">Jim Wang</h1>
    </div>

    <!-- hr --><svg class="w-screen h-[2px]"><rect class="w-[70%] h-[2px] fill-black dark:fill-white " /></svg><br><br><br><br><br>

    <div>
      <!--section 01: about-->
      <h2 class="text-[40px] font-bold">About</h2>
      <!-- hr --><svg class="w-screen h-[1px]"><rect class="w-[70%] h-[2px] fill-black dark:fill-white" /></svg>
      <br>
      <p>Hi, my name is Jim. I'm a high school student who</p>
      <br><br>
    </div>

    <div>
      <!--section 02: projects-->
      <h2 class="text-[40px] font-bold">Projects</h2>
      <!-- hr --><svg class="w-screen h-[1px]"><rect class="w-[70%] h-[2px] fill-black dark:fill-white" /></svg>
      <br>
      <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-col-4 gap-x-[7px] gap-y-[7px]">
        <pcard :linkRef="link1" :imgSrc="img1" :imgAlt="alt1" title="Graphic Design Portfolio" desc="test" />
        <pcard :linkRef="link2" :imgSrc="img2" :imgAlt="alt2" title="Blog" desc="test" />
        <pcard :linkRef="link3" :imgSrc="img3" :imgAlt="alt3" title="Re-Event" desc="test" />
        <pcard :linkRef="link4" :imgSrc="img4" :imgAlt="alt4" title="Blockr" desc="test" />
        <pcard :linkRef="link5" :imgSrc="img5" :imgAlt="alt5" title="Once" desc="test" />
      </div>
      <br><br>
    </div>

    <div>
      <!--section 3: profiles-->
      <h2 class="text-[40px] font-bold">Profiles</h2>
      <!-- hr --><svg class="w-screen h-[1px]"><rect class="w-[70%] h-[2px] fill-black dark:fill-white" /></svg>
      <br>
      <div class="flow-root">
        <!--GitHub-->
        <a href="https://github.com/Wangj3743/">
          <img src="src/assets/github.svg" class="w-[32px] h-[32px]">
          Github
        </a>
        <br>
      </div>
      <br><br>
    </div>
  </div><br><br><br><br><br><br>

  <div>
      <!-- section -1: footer -->
       <!-- hr --><svg class="w-screen h-[2px]"><rect class="w-[100%] h-[2px] fill-black dark:fill-white" /></svg>
  </div><br><br><br><br><br>
</template>



<style>
  body {
    @apply transition ease-in-out delay-150 bg-white dark:bg-black duration-300
  }

  h1, h2, h3, p {
    @apply text-black dark:text-white fill-black
  }

  a {
    color: paleturquoise;
  }
</style>



<script setup>
  import { useDark, useToggle } from '@vueuse/core';
  const isDark = useDark();
  const toggleDark = useToggle(isDark);
</script>