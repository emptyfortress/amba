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
										span.av K
										v-icon.mr-1 mdi-calendar
										i.icon-control
								Flipped(:flipId="`title-${index}`")
									.zag.ml-4 Новый на согласование
									//- .zag.ml-4 {{ item.title | truncate(37, '...') }}
						.new(@click.stop="")
				Flipped(v-else :flipId="`item-${index}`" @on-start="handleStart" )
					.my.expanded
						Flipped(:inverseFlipId="`item-${index}`" )
							.expandedcontent
								.new
								//- v-icon.open mdi-window-close
								Flipped(:flipId="`avatar-${index}`" )
									div
										span.av Я на Контроле
										v-icon.opac mdi-calendar
										span 22 окт
										i.icon-control.ml-3.opac
										span Иванов И.Г.
								//- Flipped(:flipId="`type-${index}`")
								//- 	.cont
								//- 		v-icon mdi-glasses
								Flipped(:flipId="`title-${index}`" )
									.zag Это примерный заголовок для эксперимента
									//- .zag {{ item.title }}
								.additional
									.fav(@click.stop="")
										svg-transition(ref="transition" trigger="click")
											svg(slot="initial")
												use(href="#star")
											svg
												use(href="#star1")
									div.sub {{ item.subtitle }}
									v-expansion-panels
										v-expansion-panel(@click.stop="")
											v-expansion-panel-header Item
											v-expansion-panel-content telakjsdl alksdj alksjd lak
									.add
										img(src="@/assets/img/filetype/pdf.svg").file
										img(src="@/assets/img/filetype/pdf.svg").file
										img(src="@/assets/img/filetype/pdf.svg").file
									.action
										v-btn(text small color="primary") Согласовать
										v-btn(text small color="error") Отклонить

</template>

<script>
import { Flipper, Flipped } from 'vue-flip-toolkit'
import data from '@/components/notifications.js'

export default {
	components: {
		Flipped,
		Flipper
	},
	data () {
		return {
			items: data,
			focused: null
		}
	},
	methods: {
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
	top: .6rem;
	right: .6rem;
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
		animation: fadeIn 0.4s forwards;
}
.additional > div:nth-of-type(2) {
		animation-delay: 0.15s;
}
.additional > div:nth-of-type(3) {
		animation-delay: 0.3s;
}
.additional > div:nth-of-type(4) {
		animation-delay: 0.4s;
}
.additional > div:nth-of-type(5) {
		animation-delay: 0.5s;
}
.action {
	margin-top: 1rem;
}
.flex {
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
}
.add {
	/* position: absolute; */
	/* top: 1rem; */
	/* right: 2rem; */
	/* width: calc(100% - 150px); */
	height: 62px;
	/* overflow: hidden; */
	text-align: right;
	.file {
		margin-right: .3rem;

	}
}
.open {
	position: absolute;
	top: 0;
	right: 0;
	color: #ccc;
}
</style>
