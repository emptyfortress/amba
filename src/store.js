import Vue from 'vue'
import Vuex from 'vuex'
// import { db } from './db'
import notific from '@/data/notifications.js'
import list from '@/data/list.js'
import newitems from '@/data/newItems.js'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		todayList: [],
		notifications: [],
		newItems: [],
		loading: false
	},
	mutations: {
		setToday (state, payload) { state.todayList = payload },
		setNewItems (state, payload) { state.newItems = payload },
		setNotifications (state, payload) { state.notifications = payload },
		setLoading (state, payload) { state.loading = payload },
		readAll () {
			this.state.notifications.map(function (item) {
				item.unread = false
			})
		}
	},
	getters: {
		notifications (state) { return state.notifications },
		todayList (state) { return state.todayList },
		newItems (state) { return state.newItems }
	},
	actions: {
		loadToday ({ commit }) {
			commit('setToday', list)
		},
		loadNewItems ({ commit }) {
			commit('setNewItems', newitems)
		},
		loadNotifications ({ commit }) {
			commit('readAl', true)
			commit('setNotifications', notific)
		},
		readAll ({ commit }) {
			commit('readAll')
		}
	}
})
