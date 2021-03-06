import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Test from './views/Test.vue'
import Lenta from './views/Lenta.vue'
import IconDetail from './views/IconDetail.vue'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home
		},
		{
			path: '/lenta',
			name: 'lenta',
			component: Lenta
		},
		{
			path: '/test',
			name: 'test',
			component: Test
		},
		{
			path: '/icons/:set',
			name: 'detail',
			component: IconDetail
		},
		{
			path: '/about',
			name: 'about',
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
		}
	]
})
