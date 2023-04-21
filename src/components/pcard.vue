<!-- project cards -->
<script>
export default {
    props: {
        title: String, 
        desc: String,
        imgSrc: String,
        imgAlt: String,
        linkRef: String,
    }, 
}
</script>



<template>
    <!-- <a :href="linkRef" class="btn w-96 bg-black dark:bg-base-100 shadow-xl">
        <figure><img :src="imgSrc" :alt="imgAlt"></figure>
        <div class="">
            <h2 class="text-white dark:text-black">{{ title }}</h2>
            <p class=" text-white dark:text-black">{{ desc }}</p>
        </div>
    </a> -->
    <a :href="linkRef" class="card bg-black dark:bg-base-100 shadow-xl">
        <figure><img :src="imgSrc" :alt="imgAlt"></figure>
        <div class="card-body">
            <h2 class="text-white dark:text-black card-title">{{ title }}</h2>
            <p class=" text-white dark:text-black">{{ desc }}</p>
        </div>
    </a>
</template>