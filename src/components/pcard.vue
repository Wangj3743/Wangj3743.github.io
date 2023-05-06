<!-- project cards -->
<script>
export default {
  props: {
    title: String,
    badge1: String,
    badge2: String,
    desc: String,
    imgSrc: String,
    imgAlt: String,
    linkRef: String,
  },
};
</script>

<template>
  <a
    :href="linkRef"
    class="card bg-black dark:bg-base-100 shadow-xl hover:scale-[1.02] ease-in duration-150">
    <figure><img :src="imgSrc" :alt="imgAlt" /></figure>
    <div class="card-body">
      <h2 class="text-white dark:text-black card-title">{{ title }}</h2>
      <span>
        <h3 class="badge text-white text-sm">{{ badge1 }}</h3>
        <h3 v-if="badge2" class="badge text-white text-sm">{{ badge2 }}</h3>
      </span>
      <p class="text-white dark:text-black">{{ desc }}</p>
    </div>
  </a>
</template>