<template lang="pug">
div
	//- v-layout( column v-if="loading" align-center justify-center)
	//- 	v-flex.mt-5
	//- 		v-progress-circular( indeterminate color="primary" )

	v-hover
		v-card(flat slot-scope="{ hover }" :class="`elevation-${hover ? 5 : 0}`" ).big
			v-sparkline( :value="folder.history" smooth="5" line-width="2" padding="10" auto-draw :gradient="colors")
			.counter {{ folder.items }}
			.folder {{ folder.name }}
			//- v-layout( row align-center)
			//- 	v-flex
			//- 		.counter {{ folder.items }}
			//- 	v-flex
			//- 		v-sparkline( :value="folder.history" smooth="5" line-width="2" padding="10" auto-draw :gradient="colors")
			//- .folder {{ folder.name }}

</template>

<script>
export default {
	props: ['folder'],
	data () {
		return {
			loading: false,
			colors: [ 'red', '#42b3f4' ]
		}
	},
	computed: {
		// loading () {
		// 	return this.$store.getters.loading
		// }
	},
	methods: {
	}
}
</script>

<style scoped lang="scss">
.v-card {
	cursor: pointer;
	position: relative;
	.counter {
		font-weight: 200;
		font-size: 2.5rem;
		position: absolute;
		top: 1rem;
		right: 1rem;
	}
	&.big {
		padding: 1rem;
		.folder {
			font-size: 1.5rem;
		}
	}
	&.small {
		padding: .7rem;
		.folder {
			font-size: 1.2rem;
		}
	}
}

</style>
