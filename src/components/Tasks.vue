<template>
  <div>

    <table class="pure-table pure-table-horizontal">
      <thead>
      <tr>
        <th>#</th>
        <th>目标</th>
        <th>截止日</th>
        <th>操作</th>
      </tr>
      </thead>

      <tbody>
      <tr>
        <td>1</td>
        <td>完成一个小任务</td>
        <td>今天</td>
        <td>
          <button class="button-secondary pure-button">计时</button>
          <button class="button-success pure-button">完成</button>
        </td>
      </tr>

      <tr>
        <td>2</td>
        <td>完成一个小任务</td>
        <td>明天</td>
        <td>
          <button class="button-secondary pure-button">计时</button>
          <button class="button-success pure-button">完成</button>
        </td>
      </tr>

      <tr>
        <td>3</td>
        <td>完成一个小任务</td>
        <td>后天</td>
        <td>
          <button class="button-secondary pure-button">计时</button>
          <button class="button-success pure-button">完成</button>
        </td>
      </tr>
      </tbody>
    </table>

  </div>
</template>

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
    created: function() { // 在组件被创建时候将会执行此函数  相当于进入页面的自执行
      Bus.$on('msg', function(data) { // 使用$on方法监听white属性并执行一个回调函数
        this.msg = data;
        console.log(this.msg)
      });
    }
  }

</script>
<style scoped>


  .button-success,
  .button-error,
  .button-warning,
  .button-secondary {
    color: white;
    border-radius: 4px;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  }

  .button-success {
    background: rgb(28, 184, 65); /* this is a green */
  }

  .button-error {
    background: rgb(202, 60, 60); /* this is a maroon */
  }

  .button-warning {
    background: rgb(223, 117, 20); /* this is an orange */
  }

  .button-secondary {
    background: rgb(66, 184, 221); /* this is a light blue */
  }


</style>
