<template lang="pug">
Flipper(:flipKey="focused" spring="stiff").today.flexi
	div(v-for="( folder, index ) in list" :key="index" )
		div(v-if="focused === null")
			Flipped(:flipId="`folder-${index}`")
				.box(@click="toggle(index)")
					Flipped( :inverseFlipId="`folder-${index}`" )
						div
							Flipped(:flipId="`count-${index}`")
								.count {{ folder.total }}
							Flipped(:flipId="`chart-${index}`")
								v-sparkline(:value="folder.history" auto-draw padding="20" line-width="1" :gradient="grad")
							Flipped(:flipId="`hd-${index}`")
								.hd {{ folder.name }}
		div(v-else)
			Flipped(:flipId="`folder-${index}`" v-if="index === focused" @on-start="handleStart")
				.box.expanded(@click="toggle(null)")
					Flipped( :inverseFlipId="`folder-${index}`" )
						div
							Flipped(:flipId="`count-${index}`")
								.count {{ folder.total }}
							Flipped(:flipId="`chart-${index}`")
								v-sparkline(:value="folder.history" auto-draw).chart
							Flipped(:flipId="`hd-${index}`")
								.hd {{ folder.name }}
							.allbox
								.grid(v-for="(num,index) in Array(folder.total)" :key="num" )
									Doc(:item="index")

</template>

<script>
import { Flipper, Flipped } from 'vue-flip-toolkit'
import anime from 'animejs'
import Widget from '@/components/Widget'
import Doc from '@/components/Doc'

export default {
	data () {
		return {
			focused: null,
			grad: ['red', '#1976d2'],
			list: [
				 {
					name: 'Новые',
					total: 14,
					history: [59, 10, 40, 35, 58, 52]
				},
				{
					name: 'Приближается срок',
					total: 7,
					history: [31, 7, 99, 72, 0, 8]
				},
				{
					name: 'Важное',
					total: 5,
					history: [90, 2, 6, 10, 8, 43]
				}
			]
		}
	},
	components: {
		Widget,
		Flipper,
		Flipped,
		Doc
	},
	methods: {
		toggle (e) {
			this.focused = e
		},
		handleStart ({ el, id }) {
			const squares = el.querySelectorAll('.grid')
			anime({
				targets: squares,
				opacity: [0, 1],
				delay: anime.stagger(60, { start: 400 })
			})
		}
	}
}

</script>

<style scoped lang="scss">

.today {
	height: 100%;
	background: url('../assets/img/today.png') no-repeat left 90%;
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
			height: calc(100vh - 180px);
			width: 50vw;
			background: #ffffff44;
			.count {
				right: 10px;
				top: -54px;
				font-size: 2rem;
			}
			.hd {
				position: absolute;
				top: -64px;
				left: 0;
				font-size: 2rem;
			}
			.allbox {
				display: flex;
				flex-flow: row wrap;
				height: calc(100vh - 180px);
				justify-content: flex-start;
				overflow: hidden;
				/* align-items: center; */
				.grid {
					width: 20%;
					height: 33.3%;
					opacity: 0;
				}
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

</style>
