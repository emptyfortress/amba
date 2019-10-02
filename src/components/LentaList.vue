<template lang="pug">
.mt-5
	Flipper(:flipKey="focused" spring="stiff")
		ul.list
			li(v-for="(item, index) in items" @click="toggleItem(index)" :key="index")
				Flipped(v-if="index !== focused" :flipId="`item-${index}`")
					.my
						Flipped(:inverseFlipId="`item-${index}`")
							.mycontent
								Flipped(:flipId="`avatar-${index}`")
									img(:src="item.avatar")
								Flipped(:flipId="`title-${index}`")
									.text {{ item.title }}
				Flipped(v-else :flipId="`item-${index}`" @on-start="handleStart" )
					.my.expanded
						Flipped(:inverseFlipId="`item-${index}`" )
							.expandedcontent
								Flipped(:flipId="`avatar-${index}`" )
									img(:src="item.avatar")
								Flipped(:flipId="`title-${index}`" )
									.text {{ item.title }}
								.additional
									div {{ item.subtitle }}
									div {{ item.subtitle }}

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
	&.expanded {
		/* height: 300px; */
	}
	.mycontent {
		padding: .5rem;
		display: flex;
		flex-direction: row;
		align-items: center;
		img {
			width: 32px;
			height: 32px;
			border-radius: 16px;
			margin-right: 1rem;
		}
	}
	.expandedcontent {
		padding: 1em;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
		img {
			width: 128px;
			height: 128px;
			border-radius: 64px;
			margin-bottom: 1rem;
		}
		.text {
			font-size: 1.5rem;
		}
		.additional div {
			margin-top: 1rem;
		}
	}
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
.additional > div + div {
	float: right;
		/* margin-top: 1rem; */
}
</style>
