import Vue from 'vue'
import Router from 'vue-router'
import Vuex from 'vuex'

import * as firebase from 'firebase'
import db from '@/firebase/init'


Vue.use(Vuex)


export const store = new Vuex.Store({

	state: {
        auth: null,
        selectedConversation: null,
	},
	getters: {
        getAuth: (state) => {
            return state.auth
        },
        getSelectedConversation: (state) => {
            return state.selectedConversation
        }
 
	},
	mutations: {
        setAuth: (state, payload) => {
            state.auth = payload
        },
        setSelectedConversation: (state, payload) => {
            state.selectedConversation = payload
        }        

	},
	actions: {


	},
})

