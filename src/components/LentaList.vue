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
									img(:src="item.avatar").av
								Flipped(:flipId="`type-${index}`")
									.type type
								Flipped(:flipId="`title-${index}`")
									.zag {{ item.title | truncate(25, '...') }}
						.new(@click.stop="")
				Flipped(v-else :flipId="`item-${index}`" @on-start="handleStart" )
					.my.expanded
						Flipped(:inverseFlipId="`item-${index}`" )
							.expandedcontent
								.add
									img(src="@/assets/img/filetype/pdf.svg").file
									img(src="@/assets/img/filetype/pdf.svg").file
									img(src="@/assets/img/filetype/pdf.svg").file
								v-icon.open mdi-window-close
								Flipped(:flipId="`avatar-${index}`" )
									img(:src="item.avatar").av
								.additional
									.fio Иванов В.И.
								Flipped(:flipId="`type-${index}`")
									.type type
								Flipped(:flipId="`title-${index}`" )
									.zag {{ item.title }}
								.additional
									div {{ item.subtitle }}
									.action
										v-btn(text small color="primary") Согласовать
										v-btn(text small color="error") Отклонить
						.new

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
		margin-top: .5rem;
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
			width: 32px;
			height: 32px;
			border-radius: 16px;
			margin-right: 1rem;
		}
		.type {
			float: left;
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
			width: 64px;
			height: 64px;
			border-radius: 32px;
			/* margin-bottom: .5rem; */
			/* align-self: flex-end; */
		}
		.zag {
			font-size: 1.3rem;
			margin-top: .5rem;
		}
		.fio {
			font-size: .9rem;
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
.action {
	margin-top: 1rem;
}
.flex {
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
}
.add {
	position: absolute;
	top: 1rem;
	right: 2rem;
	width: calc(100% - 150px);
	height: 62px;
	overflow: hidden;
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
