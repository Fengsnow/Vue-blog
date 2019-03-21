<template>
  <div id="index">
  <Card></Card>
  <Content></Content>
  </div>
</template>

<script>
  import Card from './page/Card'
  import Content from './page/Content'
    export default {
      name: "Index",
      components:{
        Card,
        Content,
      }
    }
</script>

<style scoped>

</style>
