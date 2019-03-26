<template>
    <div id="article" class="blog">
      <div class="am-g am-g-fixed blog-fixed blog-content">
        <div class="am-u-md-8 am-u-sm-12">
          <article class="am-article blog-article-p">
            <div class="am-article-hd">
              <h1 class="am-article-title blog-text-center">{{list.title}}</h1>
              <p class="am-article-meta blog-text-center">
                <span><a href="#" class="blog-color">{{list.time}}&nbsp;</a></span>-
                <span><a href="#">@{{list.name}} &nbsp;</a></span>-
                <span><router-link :to="{name:'Category',params:{name:list.categoryName},query:{id: list.category}}" >{{list.categoryName}} &nbsp;&nbsp; &nbsp;&nbsp; </router-link></span>
                <!--<span><a href="#">{{list.categoryName}}&nbsp; &nbsp;&nbsp; </a></span>-->
                <span class="am-icon-eye"> {{list.views}}&nbsp; &nbsp;</span>
                <span class="am-icon-comments"> {{list.comment_count}}</span>
              </p>
            </div>
            <!--正文-->
            <div name="ckeditor">
              <p v-html="list.detail">
              </p>
            </div>


          </article>

          <!--标签-->
          <div class="am-g blog-article-widget blog-article-margin">
            <div class="am-u-lg-4 am-u-md-5 am-u-sm-7 am-u-sm-centered blog-text-center">
              <span class="am-icon-tags"> &nbsp;</span>
              <span class="tag" v-for="(items) in list['tags']">
                <router-link :to="{name:'Tag',params:{name:items.name},query:{id: items.id}}">{{items.name}}&nbsp; </router-link>
              <!--<a href="#">{{items.name}} &nbsp; </a>-->
              </span>
              <hr>

            </div>
          </div>

          <hr>
          <!--作者信息-->
          <div class="am-g blog-author blog-article-margin">
            <div class="am-u-sm-3 am-u-md-3 am-u-lg-2">
              <img :src="list.avatar" alt="" class="blog-author-img am-circle">
            </div>
            <div class="am-u-sm-9 am-u-md-9 am-u-lg-10">
              <h3><span>作者 &nbsp;: &nbsp;</span><span class="blog-color">{{list.name}}</span></h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
          </div>
          <hr>
          <ul class="am-pagination blog-article-margin">
            <li class="am-pagination-prev"><a href="#" class="">&laquo; 一切的回顾</a></li>
            <li class="am-pagination-next"><a href="">不远的未来 &raquo;</a></li>
          </ul>

          <Comment></Comment>

        </div>

        <Side></Side>
    </div>



    </div>
</template>

<script>
  //import "../../static/js/ckeditor";
  import {getArticlesDetail } from '../api/api';
  import Side from './page/Side'
  import Comment from './page/Comment'
    export default {
        name: "Article",
      components: {Comment, Side},
      data(){
          return {
            id: "",
            list:[],
      }

      },
      watch: {
        "$route": "getAllData"

      },
      methods:{
        getAllData () {
          this.id=this.$route.params.id

          this.getList();
        },
        getList(){
          getArticlesDetail(this.id)
            .then((response)=> {
              console.log(response)
              this.list = response.data;
            })
            .catch(function (error) {
              console.log(error);
            });
        },
      },
      created(){
        this.getAllData();


      }
    }
</script>

<style scoped>

</style>
