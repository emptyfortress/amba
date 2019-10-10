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
		setLoading (state, payload) { state.loading = payload }
	},
	getters: {
		notifications (state) { return state.notifications }
	},
	actions: {
		loadNotifications ({ commit }) {
			// let temp = [...data]
			commit('setLoading', true)
			commit('setNotifications', data)
			// db.ref('notifications').once('value', snapshot => {
			// 	const items = snapshot.val()
			// 	commit('setNotifications', items)
			// })
		}

	}
	// firebase: {
	// 	notifications: db.ref('notifications')
	// }
})
