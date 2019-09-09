<template lang="pug">
v-app
	v-app-bar( app hide-on-scroll)
		v-toolbar-title.headline.text-uppercase
			span Vuetify
			span( class="font-weight-light" ) MATERIAL DESIGN
		v-spacer
		v-btn( text href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank" )
			span( class="mr-2" ) Latest Release
			v-icon mdi-open-in-new
	v-content
		router-view
</template>

<script>

export default {
	name: 'App',
	data: () => ({
		//
	})
}
</script>
