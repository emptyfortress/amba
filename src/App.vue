<template lang="pug">
v-app
	<!-- v-app-bar( app hide-on-scroll) -->
	<!-- 	v-toolbar-title.headline.text-uppercase -->
	<!-- 		span Vuetify -->
	<!-- 		span( class="font-weight-light" ) MATERIAL DESIGN -->
	<!-- 	v-spacer -->
	<!-- 	v-btn( text href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank" ) -->
	<!-- 		span( class="mr-2" ) Latest Release -->
	<!-- 		v-icon mdi-open-in-new -->
	v-content.bg
		div
			Flipper(:flipKey="key" stagger="gentle")
				router-view
</template>

<script>
import Flipper from 'vue-flip-toolkit/src/Flipper'

export default {
	name: 'App',
	data: () => ({
		//
	}),
	components: {
		Flipper
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

</style>
