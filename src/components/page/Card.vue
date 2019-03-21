<template>
  <div id="card" class="blog">

    <!-- banner start -->
    <div class="am-g am-g-fixed blog-fixed am-u-sm-centered blog-article-margin">
      <div data-am-widget="slider" class="am-slider am-slider-b1" data-am-slider='{&quot;controlNav&quot;:false}' >
        <ul class="am-slides">
          <li>
            <img src="/static/i/b1.jpg">
            <div class="blog-slider-desc am-slider-desc ">
              <div class="blog-text-center blog-slider-con">
                <span><a href="" class="blog-color">Article &nbsp;</a></span>
                <h1 class="blog-h-margin"><a href="">总在思考一句积极的话</a></h1>
                <p>那时候刚好下着雨，柏油路面湿冷冷的，还闪烁着青、黄、红颜色的灯火。
                </p>
                <span class="blog-bor">2015/10/9</span>
                <br><br><br><br><br><br><br>
              </div>
            </div>
          </li>
          <li>
            <img src="/static/i/b3.jpg">
            <div class="blog-slider-desc am-slider-desc ">
              <div class="blog-text-center blog-slider-con">
                <span><a href="" class="blog-color">Article &nbsp;</a></span>
                <h1 class="blog-h-margin"><a href="">总在思考一句积极的话</a></h1>
                <p>那时候刚好下着雨，柏油路面湿冷冷的，还闪烁着青、黄、红颜色的灯火。
                </p>
                <span class="blog-bor">2015/10/9</span>
                <br><br><br><br><br><br><br>
              </div>
            </div>
          </li>
          <!--<div class="series_list" v-for="items in list">-->
          <!--<li>-->
            <!--<img :src="items.img">-->
            <!--<div class="blog-slider-desc am-slider-desc ">-->
              <!--<div class="blog-text-center blog-slider-con">-->
                <!--<span><a href="" class="blog-color">Article &nbsp;</a></span>-->
                <!--<h1 class="blog-h-margin"><a href="">{{items.title}}</a></h1>-->
                <!--<p>{{items.desc}}</p>-->
                <!--<span class="blog-bor">{{items.time}}</span>-->
                <!--<br><br><br><br><br><br><br>-->
              <!--</div>-->
            <!--</div>-->
          <!--</li>-->
          <!--</div>-->
        </ul>
      </div>
    </div>
    <!-- banner end -->
  </div>
</template>

<script>
  import {geCardArticle } from '../../api/api';
    export default {
        name: "Card",
      data(){
        return {
          list:[]
        }
      },
      methods:{
        getList(){
          geCardArticle()
            .then((response)=> {
              //跳转到首页页response.body面
              console.log(response)
              this.list = response.data;
            })
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
