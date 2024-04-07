<template>
    <div>
        <component :is="tag" :class="['container',elementClasses]">
            <slot/>
        </component>
    </div>
</template>

<script setup>
    import { computed, defineProps } from 'vue';
    import { bool, string } from 'vue-types';

    const props = defineProps({
        tag:string().def('div'),
        isCurve:bool().def(false),
        isShadowInner:bool().def(false)
    });

    const elementClasses = computed(() => ({
        'is-curve': props?.isCurve,
        'is-shadow-inner': props?.isShadowInner
    }))
</script>



<style scoped>
    .container {
        --max-width:100%;
        width: 100%;
        max-width: var(--max-width);
        margin-inline: auto;
        margin: auto ;
        background: rgba(0, 0, 0, 0.2);
        overflow: hidden;

    }

    @media screen and (max-width:720px){
        .container {
            padding-inline: 20px;
        }
    }

    @media screen and (min-width:720px) and (max-width:1200px) {
        .container {
            --max-width:720px;
        }
    }

    @media screen and (min-width:1200px) {
        .container {
            --max-width:1200px;
        }
    }

    .container.is-curve {
        @apply rounded-lg
    }

    .container.is-shadow-inner {
        @apply shadow-gray-600 shadow-inner
    }
</style>