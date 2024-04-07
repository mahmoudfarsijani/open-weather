<template>
    <component :is="tag" class="column">
        <slot/>
    </component>
</template>


<script setup>
    import { defineProps } from 'vue';
    import { string } from 'vue-types';

    defineProps({
        tag:string().def('div')
    })
</script>



<style scoped>
    .column {
        @apply w-45 h-[490px] 
    }
</style>