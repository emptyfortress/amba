<template lang="pug">
v-container.my
	v-layout( text-center wrap )
		v-flex( xs12 )
			v-img( :src="require('../assets/logo.svg')" class="my-3" contain height="200" )
		v-flex( mb-4 )
			h1.display-2.font-weight-bold.mb-3 Welcome to Vuetify
			p( class="subheading font-weight-regular" )  For help and collaboration with other Vuetify developers,

			v-layout( justify-start )
				a( v-for="(next, i) in whatsNext" :key="i" :href="next.href" class="subheading mx-3" target="_blank" ) {{ next.text }}
		v-flex( xs12 mb-5 )

			v-layout( justify-end )
				a( v-for="(link, i) in importantLinks" :key="i" :href="link.href" class="subheading mx-3" target="_blank" ) {{ link.text }}
		v-flex( xs12 mb-5 )
			h2.headline.font-weight-bold.mb-3 Ecosystem

			v-layout( justify-center )
				a( v-for="(eco, i) in ecosystem" :key="i" :href="eco.href" class="subheading mx-3" target="_blank" ) {{ eco.text }}

			v-layout( justify-center )
				a( v-for="(eco, i) in ecosystem" :key="i" :href="eco.href" class="subheading mx-3" target="_blank" ) {{ eco.text }}
			v-layout( justify-center )
				a( v-for="(eco, i) in ecosystem" :key="i" :href="eco.href" class="subheading mx-3" target="_blank" ) {{ eco.text }}
</template>

<script>
export default {
	data: () => ({
		ecosystem: [
			{
				text: 'vuetify-loader',
				href: 'https://github.com/vuetifyjs/vuetify-loader'
			},
			{
				text: 'github',
				href: 'https://github.com/vuetifyjs/vuetify'
			},
			{
				text: 'awesome-vuetify',
				href: 'https://github.com/vuetifyjs/awesome-vuetify'
			}
		],
		importantLinks: [
			{
				text: 'Documentation',
				href: 'https://vuetifyjs.com'
			},
			{
				text: 'Chat',
				href: 'https://community.vuetifyjs.com'
			},
			{
				text: 'Made with Vuetify',
				href: 'https://madewithvuejs.com/vuetify'
			},
			{
				text: 'Twitter',
				href: 'https://twitter.com/vuetifyjs'
			},
			{
				text: 'Articles',
				href: 'https://medium.com/vuetify'
			}
		],
		whatsNext: [
			{
				text: 'Explore components',
				href: 'https://vuetifyjs.com/components/api-explorer'
			},
			{
				text: 'Select a layout',
				href: 'https://vuetifyjs.com/layout/pre-defined'
			},
			{
				text: 'Frequently Asked Questions',
				href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions'
			}
		]
	})
}
</script>

<style scoped lang="scss">
/* @import '@/assets/css/colors.scss'; */

.my {
	background: #ccc;
	height: 1000px;
}

</style>
