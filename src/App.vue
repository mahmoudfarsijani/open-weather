<template>
  <div class="wrapper w-full h-screen bg-ulight-sky pt-[150px] relative">
    <Container class="relative z-0">
      <Row :is-between="true">
        <Column class="flex items-center justify-center">
          <form class=" w-full flex flex-col gap-[20px] bg-lime-500">
            <Input placeholder="Type City..." id="searchCity" :is-pill="true"/>
            <Button :is-icon-only="false" icon="search" :is-full="true" :is-light="true" :is-pill="true" class="text-white text-[17px]">
              Search
            </Button>
          </form>
        </Column>

        <Column>
        </Column>
      </Row>
    </Container>
  </div>
</template>


<script setup>
  import Row from '@/components/base/Row.vue'
  import Container from '@/components/base/Container.vue';
  import Button from '@/components/base/Button.vue'
  import Column from '@/components/base/Column.vue'
  import Input from '@/components/base/Input.vue'
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