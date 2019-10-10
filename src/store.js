import Vue from 'vue'
import Vuex from 'vuex'
// import { db } from './db'
import data from '@/components/notifications.js'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		notifications: [],
		loading: false
	},
	mutations: {
		setNotifications (state, payload) { state.notifications = payload },
		setLoading (state, payload) { state.loading = payload },
		readAll () {
			this.state.notifications.map(function (item) {
				item.unread = false
			})
		}
	},
	getters: {
		notifications (state) { return state.notifications }
	},
	actions: {
		loadNotifications ({ commit }) {
			commit('readAl', true)
			commit('setNotifications', data)
		},
		readAll ({ commit }) {
			commit('readAll')
		}
	}
})
