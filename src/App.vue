<template>
  <div class="wrapper w-full h-screen bg-elephent pt-[150px]">
    <Container>
      <Row :is-between="true">
        <Column>
          <form class="flex flex-col gap-[20px]">
            <Input placeholder="Type City..." id="searchCity" :is-pill="true"/>
            <Button :is-icon-only="false" icon="search" :is-full="true" :is-dark="true" :is-pill="true">
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