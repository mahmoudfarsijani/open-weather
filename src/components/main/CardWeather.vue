<template>
  <Card v-if="data"  class="bg-purple-600 px-[5px]">
    <template #header>
      <div>
        <h1
          class="capitalize font-roboto font-ubold text-[60px] flex items-center flex-nowrap gap-[20px] text-black"
        >
          <Icon
            tag="span"
            icon="location"
            :is-icon-only="true"
            class="inline-block"
          />
          {{ data?.name }}
        </h1>
        <h2 class="capitalize text-black font-roboto font-medium text-[45px] mt-[5px]">
            {{ weather}}
        </h2>
      </div>
    </template>
    <div>
      <div class="flex flex-nowrap gap-[10px] items-center bg-purple-400 mt-[10px] justify-between">
        <h3 class="day font-roboto text-black font-normal uppercase text-[20px]">{{ day }}</h3>
        <span class="inline-block text-[17px]">
            {{ month }}
        </span>
      </div>
      <p class="temp text-black flex flex-nowrap items-center text-[20px] gap-[5px]">
        {{ temp }} 
        <span v-html="symbolC"></span>
        <Icon
          tag="span"
          icon="temp"
          :is-icon-only="true"
          class="inline-block"
        />
      </p>
      <div class="pt-[10px]">
        <span> MAX 27 </span>
        <span> MIN 15 </span>
      </div>
    </div>

    <template #footer>
      <div class="flex flex-nowrap items-center gap-[20px] pt-[30px]">
        <div class="flex flex-col flex-nowrap items-center">
          <Icon tag="span" :is-icon-only="true" icon="wind" />
          <span class="text-center text-black"> 12 </span>
        </div>
        <div class="flex flex-col flex-nowrap items-center">
          <Icon tag="span" :is-icon-only="true" icon="humidity" />
          <span class="text-center text-black"> 49% </span>
        </div>
      </div>
    </template>
  </Card>
</template>

<script setup>
import Card from "@/components/base/Card.vue";
import Icon from "@/components/base/Button.vue";

import { computed, defineProps } from "vue";
import { array, number, shape, string } from "vue-types";

const props = defineProps({
    data:shape({
        coord:shape({
            lon:number(),
            lat:number()
        }),
        weather:array({
            id:number(),
            main:string(),
            description:string(),
            icon:string()
        }),
        main:shape({
            temp:number(),
            feels_like:number(),
            temp_min:number(),
            temp_max:number(),
            pressure:number(),
            humidity:number()
        }),
        visibility:number(),
        wind:shape({
            speed:number(),
            deg:number()
        }),
        sys:shape({
            type:number(),
            id:number(),
            country:string(),
            sunrise:number(),
            sunset:number()
        }),
        name:string()
    })
});

const weather = computed(() => {
    return props.data?.weather[0]?.main
})

const dates = new Date();

const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const day = computed(() => {
    return dayNames[dates.getDay()]
})
const monthNames = ["January","February","March","April","May","June","July",
            "August","September","October","November","December"];
const month = computed(() => {
    return monthNames[dates.getMonth()]
})

const symbolC = computed(() => {
    const symbol = '&deg;C'
    return `<span>${symbol}</span>`
})

const temp = computed(() => {
    const tempNum = props.data?.main?.temp;
    const convertTemp = tempNum - 273;
    const finalTemp = Math.ceil(convertTemp)
    return finalTemp
})

</script>
