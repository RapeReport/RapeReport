import Vue from 'vue'
import Router from 'vue-router'
import Vuex from 'vuex'

import * as firebase from 'firebase'
import db from '@/firebase/init'


Vue.use(Vuex)


export const store = new Vuex.Store({

	state: {
        auth: null,
        user: null
	},
	getters: {
        getAuth: (state) => {
            return state.auth
        },
        getUser: (state) => {
            return state.user
        }
 
	},
	mutations: {
        setAuth: (state, payload) => {
            state.auth = payload
        },
        setUser: (state, payload) => {
            state.user = payload
        },

	},
	actions: {


	},
})

