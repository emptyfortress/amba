<template lang="pug">
.mt-5
	Flipper(:flipKey="focused" spring="stiff")
		ul.list
			li(v-for="(item, index) in items" @click="toggleItem(index)" :key="index").unread
				Flipped(v-if="index !== focused" :flipId="`item-${index}`")
					.my
						Flipped(:inverseFlipId="`item-${index}`")
							.mycontent
								Flipped(:flipId="`avatar-${index}`")
									div
										span.av {{ item.av }}
										v-icon.mr-1 mdi-calendar
										i.icon-control
								Flipped(:flipId="`title-${index}`")
									.zag.ml-4 {{ item.title | truncate(33, '...') }}
						.new(@click.stop="")
				Flipped(v-else :flipId="`item-${index}`" @on-start="handleStart" )
					.my.expanded
						Flipped(:inverseFlipId="`item-${index}`" )
							.expandedcontent
								.new
								Flipped(:flipId="`avatar-${index}`" )
									div
										span.av {{ item.avatar }}
										v-icon.opac mdi-calendar
										span {{ item.deadline }}
										i.icon-control.ml-3.opac
										span {{ item.controller}}
								Flipped(:flipId="`title-${index}`" )
									.zag {{ item.title }}
								.additional
									.fav(@click.stop="")
										svg-transition(ref="transition" trigger="click")
											svg(slot="initial")
												use(:href="favorite (item)")
											svg
												use(:href="favorite1 (item)")
									div.sub {{ item.subtitle }}
									Files(:data="item")
									AttributeTable(:data="item")
									ActionBt(:list="item.actions" visible="3")
</template>

<script>
import { Flipper, Flipped } from 'vue-flip-toolkit'
import ActionBt from '@/components/ActionBt'
import AttributeTable from '@/components/AttributeTable'
import Files from '@/components/Files'
import data from '@/components/notifications.js'

export default {
	components: {
		Flipped,
		Flipper,
		ActionBt,
		AttributeTable,
		Files
	},
	data () {
		return {
			items: data,
			focused: null
		}
	},
	methods: {
		favorite (e) {
			if (e.fav === true) {
				return '#star1'
			} else return '#star'
		},
		favorite1 (e) {
			if (e.fav === true) {
				return '#star'
			} else return '#star1'
		},
		toggleItem (index) {
			if (this.focused === index) {
				this.focused = null
			} else {
				this.focused = index
			}
			this.items[index].open = !this.items[index].open
		},
		shouldFlip (index) {
			return (prev, current) => {
				return index === prev || index === current
			}
		},
		handleStart ({ el }) {
			setTimeout(() => {
				el.classList.add('animated-in')
			}, 600)
		}
	}
}

</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';

ul {
	margin: 0;
	padding: 0;
}

.list {
	list-style-type: none;
	display: flex;
	flex-direction: column;
	padding: 0;
}

.list li {
	list-style-type: none;
	cursor: pointer;
	width: 100%;
	&+ li {
		margin-top: .2rem;
	}
}

.my {
	width: 100%;
	background: #ffffff;
	border-radius: .3rem;
	position: relative;
	.mycontent {
		padding: .5rem;
		padding-left: 1rem;
		display: flex;
		flex-direction: row;
		align-items: center;
		.av {
			display: inline-block;
			width: 28px;
			height: 28px;
			border-radius: 14px;
			margin-right: .5rem;
			background: #ccc;
			text-align: center;
			line-height: 28px;
			font-size: .9rem;
		}
		.cont {
			margin-left: 1rem;
		}
		.zag {
		}
	}
	.expandedcontent {
		padding: 1rem;
		padding-left: 1.3rem;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: flex-start;
		.av {
			width: auto;
			display: inline-block;
			height: 28px;
			border-radius: 14px;
			background: #ccc;
			padding: 0 1rem;
			line-height: 28px;
			margin-right: 1rem;
			font-size: .8rem;
		}
		.zag {
			font-size: 1.1rem;
			font-weight: bold;
			margin-top: 1.5rem;
			margin-bottom: .5rem;
			line-height: 120%;
		}
		.fio {
			font-size: .9rem;
			color: #666;
		}
		.opac {
			opacity: .6;
		}
		.sub {
			font-size: .95rem;
			line-height: 110%;
			color: #666;
		}
	}
	.new {
		width: 8px;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		border-radius: .3rem 0 0 .3rem;
		background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAADCAYAAABWKLW/AAAAGElEQVQYV2NctmzZ/8jISAZGEGBAAigcAI4pBAQE47ttAAAAAElFTkSuQmCC) repeat;
	}
}
.fav {
	position: absolute;
	top: .4rem;
	right: .1rem;
}
.unread .new {
	background-color: $accent;
}

.additional > div {
		opacity: 0;
}
@keyframes fadeIn {
	0% {
			opacity: 0;
			transform: translateY(20px);
	}
	100% {
			opacity: 1;
	}
}
.animated-in .additional > div {
		animation: fadeIn 0.3s forwards;
}
.additional > div:nth-of-type(2) {
		animation-delay: 0.1s;
}
.additional > div:nth-of-type(3) {
		animation-delay: 0.15s;
}
.additional > div:nth-of-type(4) {
		animation-delay: 0.2s;
}
.additional > div:nth-of-type(5) {
		animation-delay: 0.3s;
}
.flex {
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
}
</style>
