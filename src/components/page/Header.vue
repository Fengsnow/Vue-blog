<template>
  <div id="header" class="blog">
    <header class="am-g am-g-fixed blog-fixed blog-text-center blog-header">
      <div class="am-u-sm-8 am-u-sm-centered">
        <img width="250" src="static/images/feng1.png" alt="Logo"/>
        <h2 class="am-hide-sm-only">放弃治疗的开源日记本</h2>
      </div>
    </header>
    <hr>
    <!-- nav start -->
    <nav class="am-g am-g-fixed blog-fixed blog-nav">
      <button class="am-topbar-btn am-topbar-toggle am-btn am-btn-sm am-btn-success am-show-sm-only blog-button" data-am-collapse="{target: '#blog-collapse'}" ><span class="am-sr-only">导航切换</span> <span class="am-icon-bars"></span></button>

      <div class="am-collapse am-topbar-collapse" id="blog-collapse">
        <ul class="am-nav am-nav-pills am-topbar-nav">

          <li v-for="(item,index) in routes" :class="{'am-active':index == currentIndex}" @click="activeHander(index)">
            <router-link :to="item.url">{{item.title}}</router-link>
          </li>


        </ul>
        <form class="am-topbar-form am-topbar-left am-form-inline" role="search">
          <div class="am-form-group">
            <input type="text" v-model="input" class="am-form-field am-input-sm" placeholder="搜索" @keyup.enter="seachFun">
          </div>

        </form>

        <div class="am-topbar-right">
          <div class="am-dropdown" data-am-dropdown="{boundary: '.am-topbar'}">
            <button class="am-btn am-btn-success am-topbar-btn am-btn-sm am-dropdown-toggle" data-am-dropdown-toggle>Menu  <span class="am-icon-caret-down"></span></button>
            <ul class="am-dropdown-content">
              <li><router-link to="/login/">登录</router-link></li>
              <li><a href="http://127.0.0.1:8000/xadmin/articles/article/add/" target="_blank">写文章</a></li>
              <li><a href="http://127.0.0.1:8000/xadmin/">后台管理</a></li>
            </ul>
          </div>
        </div>



      </div>
    </nav>
    <hr>
    <!-- nav end -->
  </div>
</template>

<script>
    export default {
        name: "Header",
      data(){
          return{
            routes:[
              {url:'/',title:"首页"},
              {url:'/tool',title:"工具库"},
              {url:'/timeline',title:"归档"}
            ],
            input:'',
            currentIndex:0,
          }
      },
      methods:{
        activeHander(index){
          this.currentIndex =index

        },
        seachFun(e){
          var keyCode =window.event?e.keyCode:e.which;
          // console.log('回车搜索',keyCode,e);
          // console.log('输入框',this.input);
          if(keyCode == 13 && this.input){
            this.$router.push({path:'/search/'+this.input});
          // <router-link :to="{name:'Filter',params:{type:'tag',name:items.name}}" class="blog-tag">{{items.name}}</router-link>
            //this.$router.push({name:'Filter',params:{type:'search',name:this.input}});
            this.input=""
          }

        }
      },
      created(){
          // console.log(this.$route)

        for(var i =0;i<this.routes.length;i++){
          if(this.routes[i].url == this.$route.path){
            this.currentIndex=i;
            return;
          }
        }
      }
    }
</script>

<style scoped>

</style>
