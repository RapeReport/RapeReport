import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import WelcomePage from '@/components/WelcomePage/WelcomePage'

Vue.use(Router)


const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
   
     {
      path: '/WelcomePage',
      name: 'WelcomePage',
      component: WelcomePage
    },

  ]
})


export default router