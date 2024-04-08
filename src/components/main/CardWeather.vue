<template>
  <Card>
    <template #header>
      <div>
        <h1>tehran</h1>
        <h2>cloudy</h2>
      </div>
    </template>
    <div>
      <h3 class="day">monday</h3>
      <p class="temp">21c</p>
      <span> MAX 27 </span>
      <span> MIN 15 </span>
    </div>

    <template #footer>
        <div>
            <Icon :is-icon-only="true" icon="wind"/>
            12
        </div>
        <div>
            <Icon :is-icon-only="true" icon="humidity"/>
            49%
        </div>
    </template>
  </Card>
</template>

<script setup>
import Card from "@/components/base/Card.vue";
import Icon from '@/components/base/Button.vue'

import { defineProps } from "vue";
import { string } from "vue-types";

const props = defineProps({});
</script>
