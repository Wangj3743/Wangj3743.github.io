<script setup>
useHead({
  title: 'Jim Wang 1',
  meta: [
    { name: 'description', content: 'Jim Wangs portfolio 2' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'theme-color', content: '#1f1e33' },

    { property: 'og:title', content: 'Jim Wangs portfolio 3' },
    { property: 'og:description', content: 'Jim Wangs portfolio 4' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: '' },
    { property: 'og:image', content: '/public/meta/img.jpg' },
  ],
  link: [
    { rel: 'icon', href: '/public/meta/fav2.png' },
  ],
})
</script>



<template>
  <div>
    <NuxtPage />
  </div>
</template>


<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
