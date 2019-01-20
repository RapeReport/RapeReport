import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase'

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
      component: LandingPage,

    },
   
     {
      path: '/WelcomePage',
      name: 'WelcomePage',
      component: WelcomePage,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/miatest',
      name: 'MiaTest',
      component: MiaTest
    },
    {
      path: '/messages',
      name: 'MessagesPage',
      component: MessagesPage,
      meta: {
        requiresAuth: true
      }
    }

  ]
})

router.beforeEach((to, from, next) => {
	// check to see if route requires auth
	if(to.matched.some(rec => rec.meta.requiresAuth)) {
		// check auth state of user
		let user = firebase.auth().currentUser
		if(user){
			// user signed in, proceed to route
			next()
		} else {
			// no user signed in, redirect to login
			next({ name: 'LandingPage' })
		}
	} else {
		next()
	}
})

export default router