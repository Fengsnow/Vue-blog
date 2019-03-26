<template>
    <div id="timeline">
      <!-- content srart -->
      <div class="am-g am-g-fixed blog-fixed blog-content">
        <div class="am-u-sm-12">
          <h1 class="blog-text-center">-- 归档 --</h1>
          <div v-for="(item,year) in list">
          <div class="timeline-year">
            <h1>{{year}}</h1>
            <hr>
            <div v-for="(day,month) in item">
            <ul>

              <h3>{{month}}</h3>
              <hr>
              <div v-for="(content) in day">
              <li>
                <span class="am-u-sm-4 am-u-md-2 timeline-span">{{content.time}}</span>
                <span class="am-u-sm-8 am-u-md-6"><router-link :to="{name:'Article',params:{id:content.id,title:content.title}}">{{content.title}}</router-link></span>
                <span class="am-u-sm-4 am-u-md-2 am-hide-sm-only">{{content.categoryName}}</span>
                <span class="am-u-sm-4 am-u-md-2 am-hide-sm-only">{{content.name}}</span>
              </li>
                <br>
              </div>
            </ul>
            <br>

            </div>
            <!--<div v-for="(day,month) in item">-->
              <!--<br>-->
            <!--<ul >-->
              <!--<h3>{{month}}</h3>-->
              <!--<hr>-->
              <!--<div v-for="(content) in day">-->
              <!--<li>-->
                <!--<span class="am-u-sm-4 am-u-md-2 timeline-span">{{content.time}}</span>-->
                <!--<span class="am-u-sm-8 am-u-md-6"><a href="article">{{content.title}}</a></span>-->
                <!--<span class="am-u-sm-4 am-u-md-2 am-hide-sm-only">{{content.categoryName}}</span>-->
                <!--<span class="am-u-sm-4 am-u-md-2 am-hide-sm-only">{{content.name}}</span>-->
              <!--</li>-->
              <!--</div>-->
            <!--</ul>-->
              <!--<br>-->
            <!--</div>-->


          </div>

          </div>



          <hr>
        </div>


      </div>
      <!-- content end -->
    </div>
</template>

<script>
  import {getTimeLine } from '../api/api';
    export default {
        name: "Timeline",
      data(){
        return {
          list:[],
        }
      },
      methods:{
        getList(){
          getTimeLine()
            .then((response)=> {
                //跳转到首页页response.body面
                console.log(response)
                this.list=response.data
              }
            )
            .catch(function (error) {
              console.log(error);
            });
        }
      },
      created(){

      },
      mounted(){
        this.getList();
      }
    }
</script>

<style scoped>

</style>
