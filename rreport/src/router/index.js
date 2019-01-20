import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import WelcomePage from '@/components/WelcomePage/WelcomePage'
import LandingPage from '@/components/LandingPage/LandingPage'
import MessagesPage from '@/components/MessagesPage/MessagesPage'
import MiaTest from '@/tests/miatest'


Vue.use(Router)


const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'LandingPage',
      component: LandingPage
    },
   
     {
      path: '/WelcomePage',
      name: 'WelcomePage',
      component: WelcomePage
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