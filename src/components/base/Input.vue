<template>
    <input :type="type" :placeholder="placeholder" :id="id" :class="['n-put',elementClasses]">
</template>


<script setup>
    import { computed, defineProps } from 'vue';
    import { bool, oneOf, string } from 'vue-types';

    const props = defineProps({
        type:oneOf(['text','email','password']).def('text'),
        placeholder:string(),
        id:string(),
        isPill:bool().def(false)
    });


    const elementClasses = computed(() => ({
        'is-pill': props?.isPill
    }))
</script>



<style scoped>
    .n-put {
        @apply w-full py-[6px] px-[10px] bg-transparent
         border-white border-[1px] text-white outline-none
         
    }

    .n-put::placeholder {
        @apply text-white
    }


    .n-put.is-pill {
        @apply rounded-full
    }
</style>