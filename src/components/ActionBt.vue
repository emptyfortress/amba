<template lang="pug">
.action
	v-btn(text small color="primary" @click.stop="read") Прочитано
	v-btn(text small color="primary" v-for="(item, index) in list" :key="index" v-if="index < visible" @click.stop="") {{ item }}
	v-menu( transition="slide-x-transition" bottom right )
		template( v-slot:activator="{ on }" )
			v-btn(icon small v-on="on" @click.stop="")
				v-icon mdi-dots-vertical
		v-list
			v-list-item( v-for="(item, i) in list" :key="i" @click.stop="" v-if="i >= visible" )
				v-list-item-title {{ item }}

</template>

<script>

export default {
	props: ['list', 'visible'],
	data () {
		return {
		}
	},
	methods: {
		read () {
			this.$emit('read')
		}
	}
}

</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';

.action {
	margin-top: 1rem;
	display: flex;
	flex-wrap: wrap;
	/* justify-content: space-between; */
}
</style>
