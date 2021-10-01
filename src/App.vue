<template lang="pug">
v-app
	v-navigation-drawer(
		v-model="leftDrawer" app temporary floating hide-overlay
		width="400"
		src="@/assets/img/green.webp")
		router-link(to="/").ma-5 home
		router-link(to="/lenta").ma-5 lenta
		router-link(to="/test").ma-5 expand
	v-app-bar(app bottom clipped-left v-if="$route.path !== '/lenta'").transp
		v-app-bar-nav-icon(@click="leftDrawer = !leftDrawer")
		//- v-toolbar-title.headline
		//- 	span.font-weight-bold .dv
		//- 	span( class="font-weight-light" ) 2020
		v-spacer
		svg-transition(ref="transition" trigger="click")
			svg(slot="initial")
				use(href="#mini")
			svg
				use(href="#two")
		v-spacer
		v-btn( text to="/lenta" )
			span( class="mr-2" ) Лента
			v-icon mdi-open-in-new
		v-btn( text to="/" )
			span( class="mr-2" ) Домой
	v-content.bg
		div
			Flipper(:flipKey="key" stagger="gentle")
				router-view
	icons
</template>

<script>
import Flipper from "vue-flip-toolkit";
import icons from "@/components/svg.vue";

export default {
	name: "App",
	data: () => ({
		leftDrawer: false
	}),
	components: {
		Flipper,
		icons
	},
	computed: {
		key() {
			return this.$route.path;
		}
	}
};
</script>

<style scoped lang="scss">
.bg {
	padding: 0 !important;
	background: #caced3;
	background: -moz-linear-gradient(top, #caced3 0%, #cbbfc1 50%, #a2acb5 100%);
	background: -webkit-linear-gradient(
		top,
		#caced3 0%,
		#cbbfc1 50%,
		#a2acb5 100%
	);
	background: linear-gradient(to bottom, #caced3 0%, #cbbfc1 50%, #a2acb5 100%);
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#caced3', endColorstr='#a2acb5',GradientType=0 );
	background-attachment: fixed;
}
svg {
	cursor: pointer;
}
.theme--light.v-sheet.transp {
	background: linear-gradient(180deg, #ced7e3 0%, #b5c6bc 100%);
}
</style>
