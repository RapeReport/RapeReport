import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import LandingPage from '@/components/LandingPage/LandingPage'

Vue.use(Router)
import MiaTest from '@/tests/miatest'

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'LandingPage',
      component: LandingPage
    },
    {
      path: '/miatest',
      name: 'MiaTest',
      component: MiaTest
    }
  ]
})


export default router