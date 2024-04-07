<template>
    <div>
        <component :is="tag" class="container">
            <slot/>
        </component>
    </div>
</template>

<script setup>
    import { defineProps } from 'vue';
    import { string } from 'vue-types';

    defineProps({
        tag:string().def('div')
    })
</script>



<style scoped>
    .container {
        --max-width:100%;
        width: 100%;
        max-width: var(--max-width);
        margin-inline: auto;
        margin: auto ;
        background: rgba(0, 0, 0, 0.3);

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
</style>