import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)
import MiaTest from '@/tests/miatest'

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/miatest',
      name: 'MiaTest',
      component: MiaTest
    }
  ]
})


export default router