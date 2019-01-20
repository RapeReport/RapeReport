// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import { store } from './store/index.js'
import firebase from 'firebase'

import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

Vue.use(Buefy)

Vue.config.productionTip = false

let app = null;

// wait for firebase auth to init before creating the app
// firebase.auth().onAuthStateChanged(() => {
	
	//init app if not already created
	// if(!app){
		new Vue({
			el: '#app',
			store: store,
		  	router,
		  	components: { App },
		 	template: '<App/>'
		})
	// }


// })

/* eslint-disable no-new */
