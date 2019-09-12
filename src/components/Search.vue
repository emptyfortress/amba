<template lang="pug">
.search
	.group
		v-btn(text color="$grey") История
		v-btn(text color="$grey") Я - автор
	.rel
		input(v-model="search" placeholder="Что найти?" ).big
		i.icon-search

</template>

<script>

export default {
	data () {
		return {
			search: ''
		}
	},
	watch: {
		search: function (value) {
			value.length > 2 ? console.log('yes') : console.log('no')
		}
	}
}

</script>

<style scoped lang="scss">
.search {
	width: 50%;
	margin: 0 auto;
	i {
		position: absolute;
		top: -4rem;
		left: -6rem;
		font-size: 9.0rem;
		color: #eeeeeeaa;
		z-index: -2;
	}
}

.big {
	height: 48px;
	width: 100%;
	font-size: 3.0rem;
	border-bottom: 1px dotted black;
	&:focus {
		border-bottom: 1px solid black;
		outline: none;
	}
}
.group {
	padding-top: 1rem;
}
.rel {
	position: relative;
	margin-top: 30%;
}
</style>
