<script setup>
const props = defineProps({
  title: String,
  imgsrc: String,
  link: String,
});
</script>


<template>
  <div :style="{backgroundImage: `url(${imgsrc})`}" class="bg-cover bg-center h-screen z-0">
    <div class="absolute h-screen w-full bg-radial from-* from-40% to-black z-0"></div>
  </div>
  <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
    <NuxtLink :to="link" class="text-[50px] font-[TeXGyreAdventor] text-gray-950 tracking-tighter text-balance text-white text-center text-shadow-lg">{{ props.title }}</NuxtLink>
  </div>
</template>


<style>
.bg-img {
  background-size: cover;
  background-position: center;
  height: 100vh;
}
</style>
