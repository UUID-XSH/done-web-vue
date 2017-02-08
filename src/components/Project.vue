<template xmlns:v-on="http://www.w3.org/1999/xhtml">
  <div>

    <ul class="pure-menu-list">
      <li class="pure-menu-item"><a v-on:click="goPage" class="pure-menu-link">今日目标</a></li>
      <li class="pure-menu-item"><a href="#" class="pure-menu-link">近7日</a></li>
      <li class="pure-menu-heading">项目列表</li>
      <div></div>

      <li class="pure-menu-item"><a href="#" class="pure-menu-link">打豆豆</a></li>
      <li class="pure-menu-item"><a href="#" class="pure-menu-link">你猜猜</a></li>
      <li class="pure-menu-item"><a href="#" class="pure-menu-link">想不出来了</a></li>
    </ul>


  </div>
</template>
<style>

</style>
<script>

  import Bus from '../Bus.js'

  export default{
    data(){
      return {
        msg: 'hello vue'
      }
    },
    components: {
      Bus
    },
    methods: {
      goPage: function () {
        Bus.$emit('msg', '克里斯，关下门') ;// 使用$emit方法创建一个键值对
      }
    },
  }
</script>
