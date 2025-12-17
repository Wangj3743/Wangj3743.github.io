<script setup>
const props = defineProps({
  current: Number,
});

const pages = [
{ title: "Projects", link: "" },
{ title: "Blog", link: ""},
{ title: "About", link: ""},
]
</script>


<template>
  <div class="absolute left-1/2 -translate-x-1/2 top-[30px] text-[20px] z-10 flex gap-[15px]">
    <NuxtLink v-for="(page, index) in pages" :key="index" :to="page.link" class="font-[TeXGyreAdventor] text-white text-shadow-lg">{{ page.title }}</NuxtLink> <!-- fix drop shadow -->
  </div>
</template>


<style>
.bg-img {
  background-size: cover;
  background-position: center;
  height: 100vh;
}
</style>
