<template>
  <div id="filter" class="blog">

    <!-- content srart -->
    <div class="am-g am-g-fixed blog-fixed">
      <div class="am-u-md-8 am-u-sm-12">

        <ol class="am-breadcrumb">
          <li class="am-active">{{type}}</li>
          <li class="am-active">{{word}} &nbsp; &nbsp;</li>
          <span class="am-icon-sort"> &nbsp;{{list.count}}</span>
        </ol>
        <div class="series_list" v-for="items in list['results']">

          <article class="am-g blog-entry-article">
            <div class="am-u-lg-6 am-u-md-12 am-u-sm-12 blog-entry-img">
              <img :src="items.img" alt="" class="am-u-sm-12">
            </div>
            <div class="am-u-lg-6 am-u-md-12 am-u-sm-12 blog-entry-text">

              <span><router-link :to="{name:'Category',params:{name:items.categoryName},query:{id: items.category}}" class="blog-color">{{items.categoryName}} &nbsp;</router-link></span>
              <span> @{{items.name}} &nbsp;</span>
              <span>{{items.time}}</span>
              <h1><router-link :to="{name:'Article',params:{id:items.id,title:items.title}}" >{{items.title}}</router-link></h1>
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
  import Side from './page/Side'
  import {getArticles} from '../api/api'
    export default {
        name: "Filter",
      components: {Side},
      data(){
        return {
          type:'',
          name:'',
          word:'',
          id:'',
          list:[],
        }
      },
      watch: {
        "$route": "getAllData"

      },
      methods:{
        getAllData () {
          console.log(this.$route)
          this.type=this.$route.name
          this.word=this.$route.params.name
          this.id=this.$route.query.id

          this.getList();
        },
        getList(){
          if(this.type=="Search"){
            getArticles({
              search:this.word
            })
              .then((response)=> {
                console.log(response)
                this.list = response.data;
              })
              .catch(function (error) {
                console.log(error);
              });
          }
          if (this.type == "Tag") {
            getArticles({
              tags: this.id
            })
              .then((response) => {
                console.log(response)
                this.list = response.data;
              })
              .catch(function (error) {
                console.log(error);
              });
            }
          if (this.type == "Category") {
            getArticles({
              category: this.id
            })
              .then((response) => {
                console.log(response)
                this.list = response.data;
              })
              .catch(function (error) {
                console.log(error);
              });
            }

          }


      },
      mounted(){

      },
      created(){
        this.getAllData()
      }
    }
</script>

<style scoped>

</style>
