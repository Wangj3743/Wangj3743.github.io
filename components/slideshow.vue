<template>
  <div class="relative h-screen w-full overflow-hidden">
    <slide v-bind="slides[i]" class="z-0" />
    <button v-if="notFirst" @click="prev" type="button" class="absolute left-4 top-1/2 -translate-y-1/2 text-white z-10 cursor-pointer">prev</button>
    <button v-if="notLast" @click="next" type="button" class="absolute right-4 top-1/2 -translate-y-1/2 text-white z-10 cursor-pointer">next</button>
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
</script>
