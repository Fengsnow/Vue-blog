<template>
    <div id="home">
      <Headers></Headers>
      <router-view></router-view>

      <Footer></Footer>
    </div>
</template>

<script>

  import Headers from './Header'
  import Footer from './Footer'
    export default {
      name: "Home",
      components:{
        Headers,
        Footer,
      }


    }
</script>

<style scoped>

</style>
