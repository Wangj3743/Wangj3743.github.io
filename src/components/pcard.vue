<!-- project cards -->
<script>
export default {
    props: [
        'title', 
    ],
};
</script>



<template>
    <div class="btn rounded-xl w-full h-[100px] ">
        <img :src="getImageUrl()" alt="card image" />
        <br>
        <p class="capitalize text-white">
            {{ title }}
        </p>
    </div>
</template>



<script setup>
    const props = defineProps({
    iconFilename: String
    })

    function getImageUrl() {
    // This path must be correct for your file
    return new URL(`../assets/${props.iconFilename}`, import.meta.url)
    }

</script>