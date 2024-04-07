<template>
  <div class="wrapper w-full h-screen bg-elephent pt-[150px]">
    <Container>
      <Row :is-between="true">
        <Column>
          <form>
            <Input placeholder="Type City..." id="searchCity" :is-pill="true"/>
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