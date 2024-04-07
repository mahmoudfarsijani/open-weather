<template>
    <component :is="tag" :class="['bt',`bt-${ isIconOnly ? 'default' : 'simple'}`,elementClasses]">
        <slot v-if="!isIconOnly"/>
        <Icon v-if="icon" :name="icon"/>
    </component>
</template>



<script setup>
    import { computed, defineProps } from 'vue';
    import { bool, oneOf,string } from 'vue-types';

    import Icon from '@/components/base/Icon.vue';

    const props = defineProps({
        tag:oneOf(['button','a','span','router-link']).def('button'),
        icon:string(),
        isIconOnly:bool().def(false),
        isDark:bool().def(false),
        isLight:bool().def(false),
        isEleph:bool().def(false),
        isFull:bool().def(false),
        isPill:bool().def(false)
    })

    const elementClasses = computed(() => ({
        'is-dark':props?.isDark,
        'is-light':props?.isLight,
        'is-eleph':props?.isEleph,
        'is-full': props?.isFull,
        'is-pill': props?.isPill
    }))
</script>


<style scoped>
    .bt {
        @apply cursor-pointer flex items-center justify-center gap-[10px]
    }

    .bt-default {
        @apply rounded-full
    }

    .bt-simple {
        @apply  rounded-md py-[7px] px-[10px]
    }

    .bt.is-dark {
        @apply bg-dark-oil
    }

    .bt.is-light {
        @apply bg-oil
    }

    .bt.is-eleph {
        @apply bg-elephent
    }

    .bt.is-full {
        @apply w-full
    }

    .bt.is-pill {
        @apply rounded-full
    }
</style>