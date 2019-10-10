import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import { rtdbPlugin } from 'vuefire'
import vuetify from './plugins/vuetify'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import '@/assets/css/support.css'
import SvgTransition from 'vue-svg-transition'
import KsVueFullpage from 'ks-vue-fullpage'
import ScrollView from 'vue-scrollview'

Vue.config.productionTip = false
Vue.use(SvgTransition)
Vue.use(KsVueFullpage)
Vue.use(ScrollView)
// Vue.use(rtdbPlugin)

var filter = function (text, length, clamp) {
	clamp = clamp || '...'
	var node = document.createElement('div')
	node.innerHTML = text
	var content = node.textContent
	return content.length > length ? content.slice(0, length) + clamp : content
}

Vue.filter('truncate', filter)

new Vue({
	router,
	store,
	vuetify,
	render: h => h(App)
}).$mount('#app')
