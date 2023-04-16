<script>
  import pcard from '/src/components/pcard.vue';

  export default {
    components: {
      pcard,
    }
  }
</script>



<template>
  <button @click="toggleDark()" class="btn h-[70px] w-[70px] fixed right-[10px] top-[10px] dark:bg-white ">
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
      <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-col-4 gap-x-[2px] gap-y-[2px]">
        <a href=""><pcard title="Ggraphic design portfolio" iconFilename="" /></a>
        <a href=""><pcard title="blog" iconFilename="" /></a>
        <a href=""><pcard title="re-Event" iconFilename="" /></a>
        <a href=""><pcard title="something" iconFilename="" /></a>
        <a href=""><pcard title="blockr" iconFilename="" /></a>
        <a href=""><pcard title="once" iconFilename="" /></a>
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