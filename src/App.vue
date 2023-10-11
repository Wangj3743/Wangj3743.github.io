<script>
import { ref, reactive, computed } from 'vue'
import marqueeVue from '/src/components/marquee.vue'
import projectCard from '/src/components/projectcard.vue'
import horizontalDivider from '/src/components/horizontalDivider.vue'
import darkModeToggle from '/src/components/darkModeToggle.vue'


var marqueePaused = ref(false);

function marqueePause() {
  marqueePaused.value = true;
  console.log(marqueePaused.value);
}

function marqueeUnpause() {
  marqueePaused.value = false;
  console.log(marqueePaused.value);
}

var skills = reactive([
  "/assets/skills/python.svg",
  "/assets/skills/java.svg",
  "/assets/skills/c.svg",
  "/assets/skills/cpp.svg",
  "/assets/skills/html.svg",
  "/assets/skills/css.svg",
  "/assets/skills/js.svg",
  "/assets/skills/ts.svg",
  "/assets/skills/vuejs.svg",
  "/assets/skills/tailwind.svg",
  "/assets/skills/arduino.svg",
  "/assets/skills/processing.svg",
  "/assets/skills/lua.svg",
  "/assets/skills/latex.svg",
  "/assets/skills/figma.svg",
])

var skillsDark = reactive([
  "/assets/skills/python-dark.svg",
  "/assets/skills/java-dark.svg",
  "/assets/skills/c-dark.svg",
  "/assets/skills/cpp-dark.svg",
  "/assets/skills/html-dark.svg",
  "/assets/skills/css-dark.svg",
  "/assets/skills/js-dark.svg",
  "/assets/skills/ts-dark.svg",
  "/assets/skills/vuejs-dark.svg",
  "/assets/skills/tailwind-dark.svg",
  "/assets/skills/arduino-dark.svg",
  "/assets/skills/processing-dark.svg",
  "/assets/skills/lua-dark.svg",
  "/assets/skills/latex-dark.svg",
  "/assets/skills/figma-dark.svg",
])

var projects = reactive([
  {title: "Wangj3743", desc: "This website", badge1: "GitHub Pages", badge2: "", imgSrc: "/assets/projects/wangj3743.png",  linkRef: "https://wangj3743.github.io/"},
  {title: "Graphic Design Portfolio", desc: "Hosts various graphic design projects from the years.", badge1: "GitHub Pages", badge2: "", imgSrc: "/assets/projects/portfolio.png", linkRef: "https://wangj3743.github.io/portfolio/"},
  {title: "Blog", desc: "Personal blog hosting website.", badge1: "Github Pages", badge2: "", imgSrc: "/assets/projects/placeholder.png",  linkRef: "https://wangj3743.github.io/blog"},
  {title: "RythmHacks", desc: "An Innovative High School Hackathon when one can Experience the Magic of Tech.", badge1: "Hackathon", badge2: "Organizer", imgSrc: "/assets/projects/RythmHacks.png",  linkRef: "https://rythmhacks.ca/"},
  {title: "JAMHacks", desc: "TBD", badge1: "Hackathon", badge2: "Organizer", imgSrc: "/assets/projects/JAMHacks.png",  linkRef: "https://jamhacks.ca/"},
  {title: "ClockHacks", desc: "ClockHacks is a hackathon founded by high school students whose mission is to make hackathons more accessible to students.", badge1: "Hackathon", badge2: "Organizer", imgSrc: "/assets/projects/ClockHacks.jpg",  linkRef: "https://clockhacks.dev/"},
  {title: "Sumo Bot", desc: "A sumo robot that pushes other bots out of a circular sumo ring, while staying in it using PIC16F628A, L293D, 74HC04 chips.", badge1: "Engineering", badge2: "", imgSrc: "/assets/eng/8O0A3762.JPG",  linkRef: ""},
  {title: "Line Follower Robot", desc: "A robot that follows a black line using LEDs, phototransistors, and a PIC12F675 IC.", badge1: "Engineering", badge2: "", imgSrc: "/assets/eng/8O0A3754.JPG",  linkRef: ""},
  {title: "LED Cube", desc: "An LED cube of 64 LEDs that create visually stunning patterns using a PIC16F887 IC.", badge1: "Engineering", badge2: "", imgSrc: "/assets/eng/8O0A3746.JPG",  linkRef: ""},
  {title: "Cricket PCB", desc: "A circuit board with a sensor activates a buzzer that creates a cricket sound using a 555 timer IC.", badge1: "Engineering", badge2: "", imgSrc: "/assets/eng/8O0A3740.JPG",  linkRef: ""},
  {title: "Traffic Lights PCB", desc: "A circuit board with two LEDs that alternate on and off using a 555 timer IC.", badge1: "Engineering", badge2: "", imgSrc: "/assets/eng/8O0A3735.JPG",  linkRef: ""},
  {title: "flip.py", desc: "Let's make studying enjoyable.", badge1: "Hackathon", badge2: "", imgSrc: "/assets/projects/flippy.png",  linkRef: "https://devpost.com/software/flippy-iaj1v4"},
  {title: "Once", desc: "Automate repetitive tasks on the web by just doing it ONCE.", badge1: "Hackathon", badge2: "", imgSrc: "/assets/projects/once.png",  linkRef: "https://devpost.com/software/autimeation"},
  {title: "BLOCKR", desc: "A website blocker with an incentive.", badge1: "Hackathon", badge2: "", imgSrc: "/assets/projects/blockr.jpg",  linkRef: "https://devpost.com/software/blockr-uh3e8a"},
  {title: "Re-Event", desc: "TBD", badge1: "Re-Event", badge2: "", imgSrc: "/assets/projects/re-event.png",  linkRef: "https://re-event.netlify.app"},
  // {title: "", desc: "", badge1: "", badge2: "", imgSrc: "/assets/",  linkRef: ""},
]);
</script>


<template>
  <darkModeToggle />

  <!-- title --> 
  <div class="bg-img bg-cover bg-center h-screen w-full flex items-center justify-center"> <!--bg image+blur-->
    <div class="blur-rectangle backdrop-blur-md absolute h-screen w-full"></div>
  </div>
  <div class="text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"> <!--text-->
    <span class="text-[120px] font-bold text-black dark:text-white">Jim Wang
      <div class="text-[40px] font-thin">Senior High School Student</div>
    </span>
  </div>
  

  <!-- content -->
  <div class="relative m-auto w-[70%]">
    <br><br>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 items-center">
      <div class="order-2 lg:order-1 lg:col-span-2">
        <h1 class="text-3xl">Hi there, my name is Jim Wang!</h1>
        <br>
        <li>
          I'm a high school student who has a strong passion for engineering, 
          programming, mathematics, science, and is actively searching for a 
          future career in electrical engineering.
        </li>
        <li>
          I enjoy working on hardware and software related projects and attending hackathons. 
        </li>
        <li>
          I also love stationery, photography, 
          <a href="https://www.worldcubeassociation.org/persons/2019WANJ20" 
          class="underline decoration-sky-500/30">
            speedsolving Rubik's Cubes
          </a>
          , games (Chess, Tetris, Minesweeper) and playing violin & piano.
        </li>
        <br>
      </div>
      <div class="order-1 lg:order-2 drop-shadow">
        <img v-if="isDark" src="/assets/jim4.png" alt="jim_darkmode" />
        <img v-else src="/assets/jim3.png" alt="jim_lightmode" />
      </div>
    </div>
  </div>


  <br><br><br>
   <!--+turtle, tikinter, taipy, picbasic, daisyuii, -->
  <!-- <marqueeVue
    @mouseover="marqueePause()"
    @mouseout="marqueeUnpause()"
    :speed="20000"
    :pause="marqueePaused"
    :width="80"
    id="marquee-slider-loop"
  > 
    <img v-if="isDark" v-for="(skill, j) in skillsDark" :key="j" :src="skill" /> 
    <img v-else v-for="(skill, i) in skills" :key="i" :src="skill" /> 
  </marqueeVue> -->
  <marqueeVue v-if="isDark" :speed="20000" :width="80" id="marquee-slider-loop"> 
    <img  v-for="(skill, j) in skillsDark" :key="j" :src="skill" /> 
  </marqueeVue>
  <marqueeVue v-else :speed="20000" :width="80" id="marquee-slider-loop"> 
    <img v-for="(skill, i) in skills" :key="i" :src="skill" /> 
  </marqueeVue>
  <br><br><br>


  <div class="relative m-auto w-[70%]">
    <h2 class="text-[40px] text-center font-bold">Projects</h2>
    <br>
    <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-col-4 gap-x-[7px] gap-y-[7px] ">
      <projectCard 
        v-for="(project, index) in projects" :key="index" 
        :title="project.title" 
        :desc="project.desc" 
        :imgSrc="project.imgSrc"
        :imgAlt="project.imgAlt"
        :badge1="project.badge1" 
        :badge2="project.badge2"
        :linkRef="project.linkRef"
      />
    </div>
    <br>
  </div>

<br><br><horizontalDivider /><br><br>

  <!-- footer -->
  <div class="bg flex flex-row gap-3 justify-center">
    <a class="hover:scale-[1.2] ease-in duration-200" href="mailto:jimwang314@gmail.com">
      <img v-if="isDark" class="iconSize" src="/assets/profiles/envelope-dark.svg" />
      <img v-else class="iconSize" src="/assets/profiles/envelope.svg" />
    </a>
    <a class="hover:scale-[1.2] ease-in duration-200" href="https://www.linkedin.com/in/jimwang2006/">
      <img v-if="isDark" class="iconSize" src="/assets/profiles/linkedin-dark.svg" />
      <img v-else class="iconSize" src="/assets/profiles/linkedin.svg" />
    </a>
    <a class="hover:scale-[1.2] ease-in duration-200" href="https://github.com/Wangj3743/">
      <img v-if="isDark" class="iconSize" src="/assets/profiles/github-dark.svg"/>
      <img v-else class="iconSize" src="/assets/profiles/github.svg" />
    </a>
  </div>
  <br>
  <p class="text-center">Jim Wang・2023</p>
  <br><br>
  <p class="flex flex-row gap-2 justify-center">
    <img v-if="isDark" src="/assets/skills/vuejs-dark.svg" class="w-[25px] h-[25px]" />
    <img v-else src="/assets/skills/vuejs.svg" class="w-[25px] h-[25px]" />
    +
    <img v-if="isDark" src="/assets/skills/tailwind-dark.svg" class="w-[25px] h-[25px]" />
    <img v-else src="/assets/skills/tailwind.svg" class="w-[25px] h-[25px]" />
  </p>
  <br>
</template>


<style>
  /* html, body {
    height: 100%;
  } */
  template, body, .bg {
    @apply bg-white dark:bg-[#1e2124];
  }

  h1, h2, h3, p, li, details, summary {
    @apply text-black dark:text-white fill-black;
  }

  a {
    @apply text-[#0015ff] dark:text-[paleturquoise]
  }

  .iconSize {
    height: 32px;
    width: 32px;
  }

  .bg-img-light {
    background-image: url('/assets/main/8O0A2595.JPG');
  }

  .bg-img-dark {
    background-image: url('/assets/main/8O0A3667.JPG');
  }

  .bg-img {
    @apply bg-img-light;
  }

  .dark .bg-img {
    @apply bg-img-dark;
  }
</style>


<script setup>
  import { useDark, useToggle } from '@vueuse/core';
  const isDark = useDark();
  const toggleDark = useToggle(isDark);
</script>
