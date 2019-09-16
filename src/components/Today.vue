<template lang="pug">
Flipper(:flipKey="focused" spring="stiff").today.flexi
	div(v-for="( item, index ) in list" :key="index" )
		div(v-if="focused === null")
			Flipped(:flipId="`item-${index}`")
				.box(@click="toggle(index)")
					Flipped( :inverseFlipId="`item-${index}`" )
						div
							Flipped(:flipId="`count-${index}`")
								.count {{ item.items }}
							Flipped(:flipId="`chart-${index}`")
								v-sparkline(:value="item.history" auto-draw padding="20")
							Flipped(:flipId="`hd-${index}`")
								.hd {{ item.name }}
		div(v-else)
			Flipped(:flipId="`item-${index}`" v-if="index === focused")
				.box.expanded(@click="toggle(null)")
					Flipped( :inverseFlipId="`item-${index}`" )
						div
							Flipped(:flipId="`count-${index}`")
								.count {{ item.items }}
							Flipped(:flipId="`chart-${index}`")
								v-sparkline(:value="item.history" auto-draw).chart
							Flipped(:flipId="`hd-${index}`")
								.hd {{ item.name }}

</template>

<script>
import { Flipper, Flipped } from 'vue-flip-toolkit'
// import anime from 'animejs'
import Widget from '@/components/Widget'

export default {
	data () {
		return {
			one: 'one',
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
		}
	}
}

</script>

<style scoped lang="scss">

.today {
	height: 100%;
	background: url('../assets/img/today.png') no-repeat left 90%;
}
.look {
	height: 600px;
	width: 800px;
	background: white;
}

.flexi {
		display: flex;
		justify-content: center;
		align-items: center;
	.box {
		margin: 0 .5rem;
		width: 300px;
		background: white;
		position: relative;
		.count {
			position: absolute;
			top: -60px;
			right: 0;
			font-size: 3rem;
			font-weight: 300;
		}
		.hd {
			font-size: 1.2rem;
			padding: 1rem;

		}
		&.expanded {
			width: 900px;
			height: 700px;
			.count {
				right: 10px;
				font-size: 2rem;
			}
			.hd {
				position: absolute;
				top: -64px;
				left: 0;
				font-size: 2rem;
			}
		}
	}
}
.chart {
	width: 100px;
	position: absolute;
	top: -44px;
	right: 71px;
}
/* .mycontent { */
/* 		cursor: pointer; */
/* 		width: 300px; */
/* 		height: 150px; */
/* 		background: white; */
/* 	/\* width: 100px; *\/ */
/* 	/\* height: 100px; *\/ */
/* 	/\* background: white; *\/ */
/* } */

</style>
