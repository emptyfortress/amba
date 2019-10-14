<template lang="pug">
.mt-1
	Flipper(:flipKey="focused" spring="stiff")
		ul.list
			li(v-for="(item, index) in items" @click="toggleItem(index)" :key="index" :class="item.unread ? 'unread' : '' ")
				Flipped(v-if="index !== focused" :flipId="`item-${index}`")
					.my
						Flipped(:inverseFlipId="`item-${index}`")
							.mycontent
								Flipped(:flipId="`avatar-${index}`")
									div
										span.av {{ item.av }}
										span(v-if="item.controller").control Kонтроль
										span(:class="item.overdue ? 'active' : ''").date
											i(v-if="item.deadline").icon-deadline
								Flipped(:flipId="`title-${index}`")
									.zag.ml-1 {{ item.title | truncate(textWidth, '...') }}
						.fav(v-if="item.files.length")
							i.icon-skrepka
							|{{ item.files.length }}

						.new(@click.stop="toggleNew(item)" :class="item.overdue ? 'active' : ''")
				Flipped(v-else :flipId="`item-${index}`" @on-start="handleStart" )
					.my.expanded
						Flipped(:inverseFlipId="`item-${index}`" )
							.expandedcontent
								.new(@click.stop="toggleNew(item)" :class="item.overdue ? 'active' : ''")
								Flipped(:flipId="`avatar-${index}`" )
									div
										span.av {{ item.avatar }}
										span(v-if="item.controller").control Kонтролер: {{ item.controller }}
										span(v-if="item.deadline" :class="item.overdue ? 'active' : ''").date
											i.icon-deadline
											span.ml-1 Срок: {{ item.deadline }}
											span.ml-2 (просрочено: {{ item.overdueDays}} дня)
								Flipped(:flipId="`title-${index}`" )
									.zag {{ item.title }}
								.additional
									//- .fav(@click.stop="fav(item, index)")
									//- 	svg-transition(trigger="click")
									//- 		svg(slot="initial")
									//- 			use(:href="item.fav ? '#star1' : '#star'")
									//- 		svg
									//- 			use(:href="!item.fav ? '#star' : '#star1'")
									div.sub {{ item.subtitle }}
									Files(:data="item")
									AttributeTable(:data="item")
									ActionBt(:list="item.actions" visible="3" @read="toggleNew(item)")
</template>

<script>
import { Flipper, Flipped } from 'vue-flip-toolkit'
import ActionBt from '@/components/ActionBt'
import AttributeTable from '@/components/AttributeTable'
import Files from '@/components/Files'

export default {
	props: ['items'],
	components: {
		Flipped,
		Flipper,
		ActionBt,
		AttributeTable,
		Files
	},
	data () {
		return {
			focused: null,
			window: {
				width: 0,
				height: 0
			}
		}
	},
	created () {
		window.addEventListener('resize', this.handleResize)
		this.handleResize()
	},
	destroyed () {
		window.removeEventListener('resize', this.handleResize)
	},
	computed: {
		textWidth () {
			return Math.floor((this.window.width - 55) / 11)
		}
	},
	methods: {
		handleResize () {
			this.window.width = window.innerWidth
			this.window.height = window.innerHeight
		},
		fav (e, i) {
			e.fav = !e.fav
		},
		toggleNew (e) {
			e.unread = !e.unread
		},
		clearUnread () {
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
			}, 400)
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
	margin: 0 -24px;
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
	opacity: .6;
	.mycontent {
		padding: .5rem;
		padding-left: 1rem;
		display: flex;
		flex-direction: row;
		align-items: center;
		div {
			/* white-space: nowrap; */
		}
		.control {
			margin: 0 .5rem;
			display: inline-block;
			padding: 0 .5rem;
			height: 21px;
			line-height: 21px;
			/* background: #880E4F; */
			background: #FF9800;
			text-align: center;
			color: white;
			font-size: .7rem;
			border-radius: 4px;
		}
		.date {
			&.active {
				color: red;
			}
			i {
				margin-right: .3rem;
			}
			margin: 0 .5rem;
			width: 21px;
			height: 21px;
			line-height: 21px;
			width: 90px;
			text-align: center;
		}
		.av {
			display: inline-block;
			width: 28px;
			height: 28px;
			border-radius: 14px;
			/* margin-right: .5rem; */
			background: #ccc;
			text-align: center;
			line-height: 28px;
			font-size: .9rem;
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
		.control {
			margin: 0 .5rem;
			display: inline-block;
			padding: 0 .5rem;
			height: 21px;
			line-height: 21px;
			background: #FF9800;
			text-align: center;
			color: white;
			font-size: .8rem;
			border-radius: 4px;
		}
		.date.active {
			color: red;
		}
		.zag {
			font-size: 1.1rem;
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
		/* border-radius: .3rem 0 0 .3rem; */
		/* background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAADCAYAAABWKLW/AAAAGElEQVQYV2NctmzZ/8jISAZGEGBAAigcAI4pBAQE47ttAAAAAElFTkSuQmCC) repeat; */
	}
}
.fav {
	position: absolute;
	top: .5rem;
	right: .5rem;
}
.unread .new {
	background-color: $accent;
	&.active {
		background-color: red;
	}
}
.unread .zag {
	color: black;
}
.unread .my {
	opacity: 1;
}

.additional {
	width: 100%;
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
