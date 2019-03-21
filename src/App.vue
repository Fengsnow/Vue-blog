<template>
  <div id="app" class="app">
    <!--<img src="./assets/logo.png">-->
    <!--<Header></Header>-->
    <!--<Card></Card>-->
    <!--<Content></Content>-->
    <router-view></router-view>

    <!--<Footer></Footer>-->
  </div>
</template>

<script>

export default {
  name: 'App',
  components:{

  }
}
</script>

<style>
.app{
  width: 100%;
  height: 100%;
}
</style>
