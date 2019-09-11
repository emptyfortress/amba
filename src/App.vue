<template lang="pug">
v-app
	v-navigation-drawer(
		v-model="leftDrawer" app temporary dark floating hide-overlay
		width="400"
		src="/globe-bg.jpg")
		v-list
			v-list-tile(router to="/")
				v-list-tile-content
					v-list-tile-title Home

			v-list-tile(router to="/flip")
				v-list-tile-content
					v-list-tile-title Flip

			a(href="https://uxdesign.cc/introducing-mercury-os-f4de45a04289") mercury
	v-app-bar( app hide-on-scroll bottom clipped-left)
		v-app-bar-nav-icon(@click="leftDrawer = !leftDrawer")
		v-toolbar-title.headline.text-uppercase
			span.font-weight-bold DV
			span( class="font-weight-light" ) 2020
		v-spacer
		svg-transition(ref="transition" trigger="click")
			svg(slot="initial")
				use(href="#one")
			svg
				use(href="#two")
		v-spacer
		v-btn( text href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank" )
			span( class="mr-2" ) WhitePaper
			v-icon mdi-open-in-new
	v-content.bg
		div
			Flipper(:flipKey="key" stagger="gentle")
				router-view
	icons
</template>

<script>
import Flipper from 'vue-flip-toolkit/src/Flipper'
import icons from '@/components/svg.vue'

export default {
	name: 'App',
	data: () => ({
		leftDrawer: false
	}),
	components: {
		Flipper,
		icons
	},
	computed: {
		key () {
			return this.$route.path
		}
	}
}
</script>

<style scoped lang="scss">
.bg {
	background: #ccc;
}
svg {
	cursor: pointer;
}

</style>
