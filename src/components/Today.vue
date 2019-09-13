<template lang="pug">
Flipper(:flipKey="focused").today
	v-row( align="center" justify="center").full
		v-col(cols="2" v-for="( item, index ) in list" v-if="focused === null" @click="toggle(index)" )
			Widget(:folder="item")
		v-col(cols="8" v-if="focused !== null" @click="toggle(null)")
			.look

</template>

<script>
import { Flipper, Flipped } from 'vue-flip-toolkit'
// import anime from 'animejs'
import Widget from '@/components/Widget'

export default {
	data () {
		return {
			focused: null,
			list: [
				 {
					name: 'Новые',
					items: 14,
					history: [59, 10, 40, 35, 58, 52]
				},
				{
					name: 'Приближается срок',
					items: 7,
					history: [31, 7, 99, 72, 0, 8]
				},
				{
					name: 'Важное',
					items: 5,
					history: [90, 2, 6, 10, 8, 43]
				}
			]
		}
	},
	components: {
		Widget,
		Flipper,
		Flipped
	},
	methods: {
		toggle (e) {
			this.focused = e
			console.log(e)
		}
	}
}

</script>

<style scoped lang="scss">

.today {
	height: 100%;
	background: url('../assets/img/today.png') no-repeat left 90%;
	.full {
		height: 70%;
	}
}
.look {
	height: 600px;
	/* width: 600px; */
	background: white;
}

</style>
