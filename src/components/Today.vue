<template lang="pug">
.today
	v-row( align="center" justify="center").full
		v-col(cols="2")
			Widget(:folder="news")
		v-col(cols="2")
			Widget(:folder="due")
		v-col(cols="2")
			Widget(:folder="important")

</template>

<script>
import Widget from '@/components/Widget'

export default {
	data () {
		return {
			news: {
				name: 'Новые',
				items: 14,
				history: [59, 10, 40, 35, 58, 52]
			},
			due: {
				name: 'Приближается срок',
				items: 7,
				history: [31, 7, 99, 72, 0, 8]
			},
			important: {
				name: 'Важное',
				items: 5,
				history: [90, 2, 6, 10, 8, 43]
			}

		}
	},
	components: {
		Widget
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

</style>
