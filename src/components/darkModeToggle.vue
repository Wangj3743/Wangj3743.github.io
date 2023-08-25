<script setup>
  import { useDark, useToggle } from '@vueuse/core';
  const isDark = useDark();
  const toggleDark = useToggle(isDark);
</script>

<template>
    <button @click="toggleDark()" class="btn h-[70px] w-[70px] fixed right-[10px] top-[10px] btn-active  bg-black dark:bg-white hover:bg-black z-50">
    <img v-if="isDark" src="/assets/moon-solid.svg" alt="moon" />
    <img v-else src="/assets/sun-solid.svg" alt="sun" />
  </button>
</template>