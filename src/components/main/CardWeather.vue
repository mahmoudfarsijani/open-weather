<template>
    <Card>
        <template #header>
            <h1>
                tehran
            </h1>
        </template>
        <div>
            <h2 class="day">
                monday
            </h2>
            <p class="temp">
                21c
            </p>
            <span>
                MAX 27
            </span>
            <span>
                MIN 15
            </span>
        </div>

        <template #footer>
            
        </template>
    </Card>
</template>


<script setup>

    import Card from '@/components/base/Card.vue'

    import { defineProps } from 'vue';
    import { string } from 'vue-types';


    const props = defineProps({

    })
</script>