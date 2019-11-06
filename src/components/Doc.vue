<template lang="pug">
.doc
	.user
		v-avatar( size="42" ).bg
			img( v-if="img" :src="source(item)" alt="avatar" )
			span( v-else ) VJ
	//- .h3 lakjs

</template>

<script>

export default {
	props: ['item'],
	data () {
		return {
			img: true
		}
	},
	methods: {
		source (e) {
			return require('@/assets/img/users/user' + e + '.svg')
		}
	}
}

</script>

<style scoped lang="scss">

.doc {
	/* border: 1px solid black; */
	height: 100%;
	background: white;
}
.user {
	.bg {
		background: #ccc;
	}

}

</style>
