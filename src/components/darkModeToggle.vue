<script setup>
  import { useDark, useToggle } from '@vueuse/core';
  const isDark = useDark();
  const toggleDark = useToggle(isDark);
</script>

<template>
  <button @click="toggleDark()" class="btn fixed h-[50px] w-[50px] right-[10px] top-[10px] btn-active bg-black/30 dark:bg-white/30 hover:bg-black/30 backdrop-blur-sm z-50 p-[10px]">
    <img v-if="isDark" src="/assets/moon-solid.svg" alt="moon" class="bottom-[10%] -translate-y-[10%]" />
    <img v-else src="/assets/sun-solid.svg" alt="sun" />
  </button>
    <!-- <button @click="toggleDark()" class="btn h-[70px] w-[70px] fixed right-[10px] top-[10px] btn-active bg-black dark:bg-white hover:bg-black z-50">
    <img v-if="isDark" src="/assets/moon-solid.svg" alt="moon" />
    <img v-else src="/assets/sun-solid.svg" alt="sun" />
  </button> -->
</template>