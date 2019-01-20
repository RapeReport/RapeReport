import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import WelcomePage from '@/components/WelcomePage/WelcomePage'
import LandingPage from '@/components/LandingPage/LandingPage'


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

  ]
})


export default router