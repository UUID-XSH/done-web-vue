import Vue from 'vue'
import Router from 'vue-router'
import Hello from 'components/Hello'
import Layout from 'components/Layout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/layout',
      name: 'Layout',
      component: Layout
    },
  ]
})
