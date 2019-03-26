<template>
  <div id="side" class="blog">
  <div class="am-u-md-4 am-u-sm-12 blog-sidebar">
    <div class="blog-clear-margin blog-sidebar-widget blog-bor am-g ">
      <h2 class="blog-title"><span>Article Category</span></h2>
      <div class="am-u-sm-12 blog-clear-padding" >
        <div class="series_list" v-for="items in categoryList">
          <router-link :to="{name:'Category',params:{name:items.name},query:{id: items.id}}" class="blog-tag">{{items.name}}</router-link>
          <!--<a href="" class="blog-tag">{{items.name}}</a>-->
        </div>
      </div>
    </div>
    <div class="blog-sidebar-widget blog-bor">
      <h2 class="blog-text-center blog-title"><span>Contact ME</span></h2>
      <p>
        <a href=""><span class="am-icon-qq am-icon-fw am-primary blog-icon"></span></a>
        <a href="https://github.com/Fengsnow"><span class="am-icon-github am-icon-fw blog-icon"></span></a>
        <a href=""><span class="am-icon-weibo am-icon-fw blog-icon"></span></a>
        <a href=""><span class="am-icon-reddit am-icon-fw blog-icon"></span></a>
        <a href=""><span class="am-icon-weixin am-icon-fw blog-icon"></span></a>
      </p>
    </div>
    <div class="blog-clear-margin blog-sidebar-widget blog-bor am-g ">
      <h2 class="blog-title"><span>TAG cloud</span></h2>
      <div class="b_10_3">

      <canvas width="300" height="300" id="myCanvas"></canvas>

      <div id="tags" >

        <div class="series_list" v-for="items in tagList">
          <router-link :to="{name:'Tag',params:{name:items.name},query:{id: items.id}}" class="blog-tag">{{items.name}}</router-link>
          <!--<a href="#">{{items.name}}</a>-->
        </div>


      </div>

    </div>
    </div>
    <div class="blog-sidebar-widget blog-bor">
      <h2 class="blog-title"><span>文章推荐</span></h2>
      <ul class="am-list" v-for="items in hotList">

        <li><router-link :to="{name:'Article',params:{id:items.id,title:items.title}}">{{items.title}}</router-link></li>
      </ul>
    </div>
  </div>
<</div>
</template>

<script>

  import {getCategory,getTag,getHotArticle } from '../../api/api';
    export default {
        name: "side",
      data(){
          return{
              categoryList:[],
              tagList:[],
              hotList:[]
          }
      },
      mounted(){
        this.getCategroyList()
        this.getTagList()
        this.getHotArticleList()

      },
      created(){

        // this.show()
      },
      methods:{
          show(){
              TagCanvas.Start('myCanvas', 'tags', {
                textColour: '#40485b',
                outlineColour: '#10D07A',
                reverse: true,
                maxSpeed: 0.05,
                dragControl: true,
                decel:0.95,
                initial: [-0.2, 0]
              });

          },
          getCategroyList(){
            getCategory()
              .then((response)=> {
                console.log(response)
                this.categoryList = response.data
              })
              .catch(function (error) {
                console.log(error);
              });
          },
        getTagList(){
          getTag()
            .then((response)=> {
              console.log(response)
              this.tagList = response.data
              setTimeout(() =>{
                this.show()
              },50);

            })
            .catch(function (error) {
              console.log(error);
            });
        },
        getHotArticleList(){
          getHotArticle()
            .then((response)=> {
              console.log(response)
              this.hotList = response.data
              setTimeout(() =>{
                this.show()
              },50);

            })
            .catch(function (error) {
              console.log(error);
            });
        },
      },

    }
</script>

<style scoped>

</style>
