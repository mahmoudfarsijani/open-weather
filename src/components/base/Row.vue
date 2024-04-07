<template>
    <component :is="tag" :class="['row',elementClass]">
        <slot/>
    </component>
</template>


<script setup>
    import { computed, defineProps } from 'vue';
    import { string,bool } from 'vue-types';

    const props = defineProps({
        tag:string().def('div'),
        isNoWrap:bool().def(false),
        isFlexCol:bool().def(false),
        isFlexRow:bool().def(false),
        isBetween:bool().def(false)
    });


    const elementClass = computed(() => ({
        'no-wrap':props?.isNoWrap,
        'flex-coll':props?.isFlexCol,
        'flex-rows':props?.isFlexRow,
        'between': props?.isBetween
    }))
</script>


<style scoped>
    .row {
        @apply w-full  flex items-center
    }

    .row.no-wrap {
        @apply flex-nowrap
    }

    .row.flex-coll {
        @apply flex-col
    }

    .row.flex-rows {
        @apply flex-row
    }

    .row.between {
        @apply justify-between
    }
    
</style>