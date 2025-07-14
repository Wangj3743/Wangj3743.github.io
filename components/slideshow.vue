<template>
  <div class="relative h-screen w-full overflow-hidden">
  <slide v-if="slides[i]" v-bind="slides[i]" :key="i" />

    <button v-if="notFirst" @click="prev" type="button" class="absolute left-7 top-1/2 -translate-y-1/2 z-10 cursor-pointer size-[50px] flex items-center justify-center">
      <img src="/icons/prev.svg" class="size-[25px]">
    </button>
    <button v-if="notLast" @click="next" type="button" class="absolute right-7 top-1/2 -translate-y-1/2 z-10 cursor-pointer size-[50px] flex items-center justify-center">
      <img src="/icons/next.svg" class="size-[25px] absolute">
      <img src="/icons/next.svg" class="size-[25px] animate-ping" :hidden="next">
    </button>
    
    <div class="absolute left-1/2 -translate-x-1/2 bottom-[20px] font-[TeXGyreAdventor] text-white z-10">
      {{ i+1 }} / {{ slides.length }}
    </div>
  </div>
  
</template>


<script setup>
const props = defineProps({
  index: Number,
});

let i = ref(props.index);
let notFirst = computed(() => props.index > 0);
let notLast = computed(() => props.index < slides.length - 1);

const slides = [
  {title: 'Tactile Interfaces', imgsrc: '/projects/1-rgcons/cover.jpg', link: '/tactile-interfaces'},
  {title: 'Machines in Motion', imgsrc: '/projects/2-embedded/cover.jpg', link: '/machines-in-motion'},
  {title: 'Synthesization and Simulation', imgsrc: '/projects/1-rgcons/cover.jpg', link: '/synthesization-and-simulation'},
];

function prev() {
  if (i.value > 0) {
    i.value--;
    notFirst = i.value > 0;
    notLast = i.value < slides.length - 1;
    console.log("prev");
    console.log(i.value);
  }
}

function next() {
  if (i.value < slides.length - 1) {
    i.value++;
    notFirst = i.value > 0;
    notLast = i.value < slides.length - 1;
    console.log("next");
    console.log(i.value);
  }
}


function handleKey(e) {
  if (e.key === 'ArrowLeft') prev()
  else if (e.key === 'ArrowRight') next()
}

onMounted(() => {
  window.addEventListener('keydown', handleKey)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKey)
})
</script>
