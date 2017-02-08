<template>


  <div class="layout">

    <header-component/>

    <div>
      <div class="pure-g">
        <div class="pure-u-1-4">
          <project-component/>
        </div>
        <div class="pure-u-3-4">
          <tasks-component/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import ProjectComponent from './Project.vue'
import TasksComponent from './Tasks.vue'
import HeaderComponent from './Header.vue'

export default {
  name: 'layout',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App111'
    }
  },
  components:{
    'project-component':ProjectComponent,
    'tasks-component': TasksComponent,
    'header-component': HeaderComponent
  }

}




</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
