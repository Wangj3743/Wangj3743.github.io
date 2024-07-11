<script>
import { ref, reactive, computed } from 'vue'
import marqueeVue from '/src/components/marquee.vue'
import projectCard from '/src/components/projectcard.vue'
import horizontalDivider from '/src/components/horizontalDivider.vue'
import darkModeToggle from '/src/components/darkModeToggle.vue'
import foot from '/src/components/footer.vue'


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
  // "/assets/skills/c.svg",
  "/assets/skills/cpp.svg",
  // "/assets/skills/html.svg",
  // "/assets/skills/css.svg",
  "/assets/skills/js.svg",
  // "/assets/skills/ts.svg",
  "/assets/skills/vuejs.svg",
  "/assets/skills/tailwind.svg",
  "/assets/skills/arduino.svg",
  "/assets/skills/processing.svg",
  // "/assets/skills/lua.svg",
  // "/assets/skills/latex.svg",
  // "/assets/skills/figma.svg",
])

var skillsDark = reactive([
  "/assets/skills/python-dark.svg",
  "/assets/skills/java-dark.svg",
  // "/assets/skills/c-dark.svg",
  "/assets/skills/cpp-dark.svg",
  // "/assets/skills/html-dark.svg",
  // "/assets/skills/css-dark.svg",
  "/assets/skills/js-dark.svg",
  // "/assets/skills/ts-dark.svg",
  "/assets/skills/vuejs-dark.svg",
  "/assets/skills/tailwind-dark.svg",
  "/assets/skills/arduino-dark.svg",
  "/assets/skills/processing-dark.svg",
  // "/assets/skills/lua-dark.svg",
  // "/assets/skills/latex-dark.svg",
  // "/assets/skills/figma-dark.svg",
])

var projects = reactive([
  // {title: "Wangj3743", desc: "This website", badge1: "GitHub Pages", badge2: "", imgSrc: "/assets/projects/wangj3743.png",  linkRef: "https://wangj3743.github.io/"},
  // {title: "Graphic Design Portfolio", desc: "Hosts various graphic design projects from the years.", badge1: "GitHub Pages", badge2: "", imgSrc: "/assets/projects/portfolio.png", linkRef: "https://wangj3743.github.io/portfolio/"},
  // {title: "Blog", desc: "Personal blog hosting website.", badge1: "Github Pages", badge2: "", imgSrc: "/assets/projects/placeholder.png",  linkRef: "https://wangj3743.github.io/blog"},
  {title: "JAMHacks", desc: "Join 200+ high school students from diverse backgrounds and skills to work on innovative projects.", badge1: "Hackathon", badge2: "Organizer", imgSrc: "/assets/projects/JAMHacks2.png",  linkRef: "https://jamhacks.ca/"},
  {title: "RythmHacks", desc: "An Innovative High School Hackathon when one can Experience the Magic of Tech.", badge1: "Hackathon", badge2: "Organizer", imgSrc: "/assets/projects/RythmHacks.png",  linkRef: "https://rythmhacks.ca/"},
  {title: "ClockHacks", desc: "ClockHacks is a hackathon founded by high school students whose mission is to make hackathons more accessible to students.", badge1: "Hackathon", badge2: "Organizer", imgSrc: "/assets/projects/ClockHacks.jpg",  linkRef: "https://clockhacks.dev/"},
  {title: "Firefighter Robot", desc: "A robot that can navigate mazes to locate and put out flames. Uses PIC16F18875 & L293D chips.", badge1: "Computer Engineering", badge2: "", imgSrc: "assets/projects/Screenshot 2024-07-01 221829.png",  linkRef: ""},
  {title: "Sumo Bot", desc: "A sumo robot that pushes other bots out of a circular sumo ring, while staying in it. Uses PIC16F628A, L293D, and 74HC04 chips.", badge1: "Computer Engineering", badge2: "", imgSrc: "/assets/projects/8O0A3762-min.JPG",  linkRef: ""},
  {title: "Line Follower Robot", desc: "A robot that follows a black line using LEDs, phototransistors, and a PIC12F675 IC.", badge1: "Computer Engineering", badge2: "", imgSrc: "/assets/projects/8O0A3754-min.JPG",  linkRef: ""},
  {title: "LED Cube", desc: "An LED cube of 64 LEDs that create visually stunning patterns using a PIC16F887 IC.", badge1: "Computer Engineering", badge2: "", imgSrc: "/assets/projects/8O0A3746-min.JPG",  linkRef: ""},
  {title: "Cricket PCB", desc: "A circuit board with a sensor activates a buzzer that creates a cricket sound using a 555 timer IC.", badge1: "Computer Engineering", badge2: "", imgSrc: "/assets/projects/8O0A3740-min.JPG",  linkRef: ""},
  {title: "Traffic Lights PCB", desc: "A circuit board with two LEDs that alternate on and off using a 555 timer IC.", badge1: "Computer Engineering", badge2: "", imgSrc: "/assets/projects/8O0A3735-min.JPG",  linkRef: ""},
  {title: "lambDAW", desc: "A simplified DAW program that can play sine, square, triangle, and saw waves to produce songs!", badge1: "Processing", imgSrc: "/assets/projects/lambdaw.png",  linkRef: "https://github.com/Wangj3743/lambdaw"},
  {title: "Waypoint PRO", desc: "Draw tracks and components to create circuit board diagrams with Waypoint!", badge1: "Processing", imgSrc: "/assets/projects/waypoint.png",  linkRef: "https://github.com/Wangj3743/WayPoint"},
  {title: "Tornado Cellular Automaton", desc: "A visualization of how tornadoes, wind, and heat can change the movement of debris.", badge1: "Processing", imgSrc: "/assets/projects/tornado.png",  linkRef: "https://github.com/soheilchavo/TornadoCellularAutomaton"},
  {title: "Mandelbrot Set", desc: "Mandelbrot visualization in Processing.", badge1: "Processing", imgSrc: "/assets/projects/mandelbrot.png",  linkRef: "https://github.com/Wangj3743/Mandelbrot-Set"},
  {title: "Scratch Lines", desc: "A simple and interesting line animation.", badge1: "Processing", imgSrc: "/assets/projects/scratchlines2.png",  linkRef: ""},
  // {title: "flip.py", desc: "Let's make studying enjoyable.", badge1: "Hackathon", badge2: "", imgSrc: "/assets/projects/flippy.png",  linkRef: "https://devpost.com/software/flippy-iaj1v4"},
  // {title: "Once", desc: "Automate repetitive tasks on the web by just doing it ONCE.", badge1: "Hackathon", badge2: "", imgSrc: "/assets/projects/once.png",  linkRef: "https://devpost.com/software/autimeation"},
  // {title: "BLOCKR", desc: "A website blocker with an incentive.", badge1: "Hackathon", badge2: "", imgSrc: "/assets/projects/blockr.jpg",  linkRef: "https://devpost.com/software/blockr-uh3e8a"},
  // {title: "Re-Event", desc: "TBD", badge1: "Re-Event", badge2: "", imgSrc: "/assets/projects/re-event.png",  linkRef: "https://re-event.netlify.app"},
  // {title: "", desc: "", badge1: "", badge2: "", imgSrc: "/assets/",  linkRef: ""},
]);
</script>



<template>
  <darkModeToggle />

  <!-- title --> 
  <div class="bg-img bg-cover bg-center h-screen w-full flex items-center justify-center"> <!--bg image+blur-->
    <div class="blur-rectangle backdrop-blur-md absolute h-screen w-full bg-black/25"></div>
  </div>
  <div class="w-[100%] md:w-[75%] text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"> <!--text-->
    <span class="text-[70px] md:text-[120px] font-bold text-white">Jim Wang
      <div class="text-[20px] md:text-[40px] font-thin">
        <div>Computer Engineering Student</div>
        <div class="text-[17px] md:text-[30px]">University of Toronto</div>
      </div>
    </span>
  </div>

  <!-- main -->
  <div class="relative m-auto w-[70%]">
    <br><br>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 items-center">
      <div class="order-2 lg:order-1 lg:col-span-2">
        <h1 class="text-3xl">Hi there, my name is <b>Jim Wang</b>!</h1>
        <br>
        <li>
          I'm a computer engineering student who has a strong passion for anything relating to engineering, programming, and hardware!
        </li>
        <li>
          I enjoy working on hardware and software related projects, as well as organizing and attending hackathons. 
        </li>
        <li>
          I also love stationery, photography, 
          <a href="https://www.worldcubeassociation.org/persons/2019WANJ20" class="underline decoration-sky-500/30" target="blank">
            speedsolving Rubik's Cubes</a>, Tetris, Minesweeper and playing violin & piano.
        </li>
        <br>
      </div>
      <div class="order-1 lg:order-2 drop-shadow">
        <img src="/assets/jim6.png" alt="jim_pfp" />
      </div>
    </div>
  </div>
  <br><br><br>
  <marqueeVue v-if="isDark" :speed="20000" :width="80" id="marquee-slider-loop"> 
    <img v-for="(skill, j) in skillsDark" :key="j" :src="skill" /> 
  </marqueeVue>
  <marqueeVue v-else :speed="20000" :width="80" id="marquee-slider-loop"> 
    <img v-for="(skill, i) in skills" :key="i" :src="skill" /> 
  </marqueeVue>
  <br><br><br>

  <!-- projects -->
  <div class="relative m-auto w-[70%]">
    <h2 class="text-[40px] text-center font-bold">Projects</h2>
    <br>
    <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-col-4 gap-x-[7px] gap-y-[20px] md:gap-y-[7px]">
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


<br><br>


  <!-- blog -->
  <!-- <div>

  </div>


  <br><br><horizontalDivider /><br><br> -->


  <!-- gallary -->
  <!-- <div>
    
  </div>


  <br><br><horizontalDivider /><br><br> -->


  <foot />
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
    background-image: url('/assets/main/kb2.JPG');
  }
</style>



<script setup>
  import { useDark, useToggle } from '@vueuse/core';
  const isDark = useDark();
  const toggleDark = useToggle(isDark);
</script>