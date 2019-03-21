<template>
  <div id="content" class="blog">

  <!-- content srart -->
  <div class="am-g am-g-fixed blog-fixed">
    <div class="am-u-md-8 am-u-sm-12">

      <div class="series_list" v-for="items in list">

        <article class="am-g blog-entry-article">
          <div class="am-u-lg-6 am-u-md-12 am-u-sm-12 blog-entry-img">
            <img :src="items.img" alt="" class="am-u-sm-12">
          </div>
          <div class="am-u-lg-6 am-u-md-12 am-u-sm-12 blog-entry-text">
            <span><a href="" class="blog-color">{{items.categoryName}} &nbsp;</a></span>
            <span> @{{items.name}} &nbsp;</span>
            <span>{{items.time}}</span>
            <h1><a href="">{{items.title}}</a></h1>
            <p>{{items.desc}}
            </p>
            <p><a href="" class="blog-continue">continue reading</a></p>
          </div>
        </article>

      </div>



      <ul class="am-pagination">
        <li class="am-pagination-prev"><a href="">&laquo; Prev</a></li>
        <li class="am-pagination-next"><a href="">Next &raquo;</a></li>
      </ul>
    </div>
    <!-- 侧边栏 -->
    <Side></Side>

  </div>
  <!-- content end -->
  </div>
</template>

<script>
  import Side from './Side'
  import {getArticles} from '../../api/api'
    export default {
        name: "Content",
      components: {Side},
      data(){
        return {
          list:[]
        }
      },
      methods:{
        getList(){
          getArticles()
            .then((response)=> {
              //跳转到首页页response.body面
              console.log(response)
              this.list = response.data.results;
            })
            .catch(function (error) {
              console.log(error);
            });
        }
      },
      created(){
          this.getList();
      }
    }
</script>

<style scoped>

</style>
