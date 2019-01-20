import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import MessagesPage from '@/components/MessagesPage/MessagesPage'

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
    },
    {
      path: '/messages',
      name: 'MessagesPage',
      component: MessagesPage
    }

  ]
})


export default router