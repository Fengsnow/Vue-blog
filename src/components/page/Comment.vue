<template>
    <div id="comment" class="blog">
      <form class="am-form am-g">
        <h3 class="blog-comment">评论</h3>
        <fieldset>
          <div class="am-form-group am-u-sm-4 blog-clear-left">
            <input type="text" class="" placeholder="名字">
          </div>
          <div class="am-form-group am-u-sm-4">
            <input type="email" class="" placeholder="邮箱">
          </div>

          <div class="am-form-group am-u-sm-4 blog-clear-right">
            <input type="password" class="" placeholder="网站">
          </div>

          <div class="am-form-group">
            <textarea class="" rows="5" placeholder="一字千金"></textarea>
          </div>

          <p><button type="submit" class="am-btn am-btn-default">发表评论</button></p>
        </fieldset>
      </form>
    </div>
</template>

<script>
    export default {
        name: "Comment"
    }
</script>

<style scoped>

</style>
