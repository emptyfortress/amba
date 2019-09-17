<template lang="pug">
.doc
	.user
		v-avatar( size="48" )
			img( v-if="img" src="@/assets/img/users/user1.svg" alt="avatar" )
			span( v-else ) VJ
	h2 {{ i }}

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
			return '@/assets/img/users/user' + this.e + '.svg'
		}
	}
}

</script>

<style scoped lang="scss">
.user {

}

</style>
