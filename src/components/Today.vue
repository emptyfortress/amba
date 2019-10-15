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
				.box.expanded(v-click-outside="close")
					Flipped( :inverseFlipId="`folder-${index}`" )
						div
							Flipped(:flipId="`count-${index}`")
								.count {{ folder.total }}
							Flipped(:flipId="`chart-${index}`")
								v-sparkline(:value="folder.history" auto-draw).chart
							Flipped(:flipId="`hd-${index}`")
								.hd {{ folder.name }}
							v-window(v-model="step" show-arrows show-arrows-on-hover )
								v-window-item(:value="1")
									.allbox
										.grid(v-for="(num,index) in gridList(folder.total)" :key="num" )
											Doc(:item="mypage(num)")
								v-window-item(:value="2" v-if="folder.total > 15")
									.allbox
										.grid(v-for="(num,index) in secondList(folder.total)" :key="num" )
											Doc(:item="mypage(num)")
					.button
						svg-transition(ref="transition" trigger="click")
							svg(slot="initial")
								use(href="#unread")
							svg
								use(href="#read")

</template>

<script>
import { Flipper, Flipped } from 'vue-flip-toolkit'
import anime from 'animejs'
import vClickOutside from 'v-click-outside'
import Widget from '@/components/Widget'
import Doc from '@/components/Doc'

export default {
	data () {
		return {
			focused: null,
			step: 1,
			grad: ['red', '#1976d2'],
			page: 0
		}
	},
	computed: {
		list () {
			return this.$store.getters.todayList
		}
	},
	components: {
		Widget,
		Flipper,
		Flipped,
		Doc
	},
	methods: {
		gridList (e) {
			if (e > 15) {
				return 15
			} else return e
		},
		secondList (e) {
			return e - 15
		},
		close () {
			this.focused = null
		},
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
	},
	directives: {
		clickOutside: vClickOutside.directive
	},
	created () {
		this.$store.dispatch('loadToday')
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
		cursor: pointer;
		&:hover {
			box-shadow: 0 3px 5px -1px rgba(0,0,0,.2),0 5px 8px 0 rgba(0,0,0,.14),0 1px 14px 0 rgba(0,0,0,.12);

		}
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
			/* height: calc(100vh - 180px); */
			width: 60vw;
			background: #ffffff44;
			&:hover {
				box-shadow: none;
			}
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
				display: grid;
				grid-template-columns: repeat(5, 1fr);
				grid-auto-rows: 200px;
				grid-gap: 4px;
				overflow: hidden;
			}
			.button {
				position: absolute;
				top: 0;
				right: -70px;
				width: 54px;
				height: 54px;
				display: flex;
				justify-content: center;
				cursor: pointer;
				transition: all .3s ease;
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
.big {
	height: 608px;
}
</style>
