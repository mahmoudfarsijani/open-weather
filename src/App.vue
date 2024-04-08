<template>
  <div class="wrapper w-full h-screen bg-ulight-sky pt-[150px] relative">
    <Container class="relative z-0" :is-curve="true" :is-shadow-inner="true">
      <Row :is-between="true">
        <Column class="flex items-center justify-center">
          <form @submit.prevent="submit(inputValue)" class=" w-full flex flex-col gap-[20px] bg-lime-500">
            <Input v-model="inputValue" type="text" placeholder="Type City..." id="searchCity" :is-pill="true"/>
            <Button tag="button" type="submit" :is-icon-only="false" icon="search" :is-full="true" :is-light="true" :is-pill="true" class="text-white text-[17px]">
              Search
            </Button>
            {{ inputValue }}
          </form>
          
        </Column>

        <Column>
          <CardWeather/>
        </Column>
      </Row>
    </Container>
  </div>
</template>


<script setup>

  import { ref } from 'vue';


  import Row from '@/components/base/Row.vue'
  import Container from '@/components/base/Container.vue';
  import Button from '@/components/base/Button.vue'
  import Column from '@/components/base/Column.vue'
  import Input from '@/components/base/Input.vue'
  import CardWeather from '@/components/main/CardWeather.vue'


  const inputValue = ref('');
  const datas = ref(null)

  const key = '527170c8114fbb16ca85f4c0d8e97c58';

  const getData = (name) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${key}`).
      then(response => response.json()).
      then(data => {let dataCity = data
        datas.value = dataCity
      })
  }

  const submit = (i) => {
    console.log('submit');
    getData(i)
  }



</script>


<style scoped>
  .wrapper::before {
    content: '';
    position: absolute;
    top: 0;
    z-index: 0;
    width: 100%;
    height: 500px;
    background: #879CAA;
  }
</style>