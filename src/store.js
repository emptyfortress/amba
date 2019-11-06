import Vue from 'vue'
import Vuex from 'vuex'
// import { db } from './db'
import notific from '@/data/notifications.js'
import list from '@/data/list.js'
import items from '@/data/items.js'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		items: [],
		todayList: [],
		notifications: [],
		loading: false
	},
	mutations: {
		setItems (state, payload) { state.items = payload },
		setToday (state, payload) { state.todayList = payload },
		// setNewItems (state, payload) { state.newItems = payload },
		setNotifications (state, payload) { state.notifications = payload },
		setLoading (state, payload) { state.loading = payload },
		readAll () {
			this.state.notifications.map(function (item) {
				item.unread = false
			})
		}
	},
	getters: {
		items (state) { return state.items },
		notifications (state) { return state.notifications },
		todayList (state) { return state.todayList }
	},
	actions: {
		loadItems ({ commit }) {
			commit('setItems', items)
		},
		loadToday ({ commit }) {
			commit('setToday', list)
		},
		loadNotifications ({ commit }) {
			commit('setNotifications', notific)
		},
		readAll ({ commit }) {
			commit('readAll')
		}
	}
})
