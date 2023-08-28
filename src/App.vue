<script>
import { ref, reactive } from 'vue'
import projectCard from '/src/components/projectcard.vue'
import horizontalDivider from '/src/components/horizontalDivider.vue'
import darkModeToggle from '/src/components/darkModeToggle.vue'

var foo = reactive({
  bar: []
})

var projects = reactive([
  {title: "Wangj3743", desc: "This website", badge1: "GitHub Pages", badge2: "", imgSrc: "/assets/projects/wangj3743.png",  linkRef: "https://wangj3743.github.io/"},
  {title: "Graphic Design Portfolio", desc: "Hosts various graphic design projects from the years.", badge1: "GitHub Pages", badge2: "", imgSrc: "/assets/projects/portfolio.png", linkRef: "https://wangj3743.github.io/portfolio/"},
  {title: "Blog", desc: "Personal blog hosting website", badge1: "Github Pages", badge2: "", imgSrc: "/assets/projects/placeholder.png",  linkRef: "https://wangj3743.github.io/blog"},
  {title: "Traffic Lights PCB", desc: "A circuit board that alternates two LEDs using a 555 timer IC.", badge1: "Engineering", badge2: "", imgSrc: "/assets/eng/8O0A3735.JPG",  linkRef: ""},
  {title: "Cricket PCB", desc: "A circuit board with a sensor that creates a cricket sound using a 555 time IC.", badge1: "Engineering", badge2: "", imgSrc: "/assets/eng/8O0A3740.JPG",  linkRef: ""},
  {title: "LED Cube", desc: "TBD", badge1: "Engineering", badge2: "", imgSrc: "/assets/eng/8O0A3746.JPG",  linkRef: ""},
  {title: "Line Follower Robot", desc: "A robot that follows a black line using a PIC12F675 IC.", badge1: "Engineering", badge2: "", imgSrc: "/assets/eng/8O0A3754.JPG",  linkRef: ""},
  {title: "Sumo Bot", desc: "A sumo robot that pushes other bots out of a circular sumo ring, while staying in it using PIC16F628A, L293D, 74HC04 chips.", badge1: "Engineering", badge2: "", imgSrc: "/assets/eng/8O0A3762.JPG",  linkRef: ""},
  {title: "RythmHacks", desc: "An Innovative High School Hackathon", badge1: "RythmHacks", badge2: "Marketing Organizer", imgSrc: "/assets/projects/RythmHacks.png",  linkRef: "https://rythmhacks.ca/"},
  {title: "Re-Event", desc: "TBD", badge1: "Re-Event", badge2: "", imgSrc: "/assets/projects/re-event.png",  linkRef: "https://re-event.netlify.app"},
  {title: "BLOCKR", desc: "A website blocker with an incentive.", badge1: "JamHacks V (2021)", badge2: "", imgSrc: "/assets/projects/blockr.jpg",  linkRef: "https://devpost.com/software/blockr-uh3e8a"},
  {title: "Once", desc: "Automate repetitive task on the web by just doing it ONCE.", badge1: "ClockHacks (2022)", badge2: "", imgSrc: "/assets/projects/once.png",  linkRef: "https://devpost.com/software/autimeation"},
  {title: "flip.py", desc: "Let's make studying enjoyable", badge1: "HackThe6ix (2023)", badge2: "", imgSrc: "/assets/projects/flippy.png",  linkRef: "https://devpost.com/software/flippy-iaj1v4"},
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
    <span class="text-[120px] font-bold text-white">Jim Wang
      <div class="text-[40px] font-thin">Senior High School Student</div>
    </span>
  </div>
  

  <!-- content -->
  <div class="relative m-auto w-[70%]">
    <br>
    <h2 class="text-[40px] text-center font-bold">About</h2>
    <br>
    <p>Hi, my name is Jim. I'm a high school student who has a strong passion for mathematics, science, programming, and engineering.</p>
    <br>
    <details>
      <summary>Programming Languages</summary>
      <li>HTML</li>
      <li>CSS (+Tailwind (+DaisyUI))</li>
      <li>JavaScript</li>
      <li>Python (+Turtle, +Tkinter, +Taipy)</li>
      <li>C++</li>
      <li>Vue.js (+VueUse)</li>
      <li>Markdown</li>
      <li>Lua</li>
      <li>LaTeX</li>
      <li>PICBASIC/Great Cow BASIC</li>
    </details>
    <br>
    <details>
      <summary>Hobbies</summary>
      <li>Stationary</li>
      <li>Mechanical Keyboards</li>
      <li>Photography</li>
      <li>Violin</li>
      <li>Piano (self taught)</li>
      <li>Composing</li>
      <li>Video Editing</li>
      <li>Graphic design</li>
      <li>CAD</li>
      <li>Chess</li>
      <li>Rubik's Cubes</li>
      <li>Tetris</li>
      <li>Minesweeper</li>
    </details>
  </div>
    
    <br><br><horizontalDivider /><br><br>

  <div class="relative m-auto w-[70%]">
    <h2 class="text-[40px] text-center font-bold">Projects</h2>
    <br>
    <div class=" grid sm:grid-cols-2 md:grid-cols-3 lg:grid-col-4 gap-x-[7px] gap-y-[7px]">
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
  <div class="bg flex flex-row gap-2 justify-center">
    <a class="hover:scale-[1.2] ease-in duration-200" href="mailto:jimwang314@gmail.com">
      <img v-if="isDark" class="iconSize" src="/assets/profiles/envelope-dark.svg" />
      <img v-else class="iconSize" src="/assets/profiles/envelope.svg" />
    </a>
    <a class="hover:scale-[1.2] ease-in duration-200" href="https://www.linkedin.com/in/jim-wang-263877212/">
      <img v-if="isDark" class="iconSize" src="/assets/profiles/linkedin-dark.svg" />
      <img v-else class="iconSize" src="/assets/profiles/linkedin.svg" />
    </a>
    <a class="hover:scale-[1.2] ease-in duration-200" href="https://github.com/Wangj3743/">
      <img v-if="isDark" class="iconSize" src="/assets/profiles/github-dark.svg"/>
      <img v-else class="iconSize" src="/assets/profiles/github.svg" />
    </a>
  </div>
  <br>
  <div class="text-center">
    <!-- <a href="legacy\legacy.html">legacy</a> -->
    <br>
    <p class="text-center">Jim Wang・2023</p>
    <br>
  </div>
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

  .bg-img {
  background-image: url('/assets/eng/8O0A3799.JPG');
  }
</style>


<script setup>
  import { useDark, useToggle } from '@vueuse/core';
  const isDark = useDark();
  const toggleDark = useToggle(isDark);
</script>