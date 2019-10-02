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

export default {
	components: {
		Flipped,
		Flipper
	},
	data () {
		return {
			focused: null,
			items: [
				{
					id: 1,
					avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
					title: 'Brunch this weekend?',
					open: false,
					subtitle: "Ali Connors &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
				},
				{
					id: 2,
					avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
					title: 'Summer BBQ',
					open: false,
					subtitle: "to Alex, Scott, Jennifer &mdash; Wish I could come, but I'm out of town this weekend."
				},
				{
					id: 3,
					avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
					title: 'Oui oui',
					open: false,
					subtitle: 'Sandra Adams &mdash; Do you have Paris recommendations? Have you ever been?'
				}
			]

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
	/* height: 100vh; */
	padding: 0;
}

.list li {
	list-style-type: none;
	cursor: pointer;
	width: 100%;
	/* background: #fff; */
	&+ li {
			margin-top: .5rem;
	}
}

.my {
	width: 100%;
	background: #ffffff;
	border-radius: .5rem;
	&.expanded {
		height: 300px;
	}
	.mycontent {
		padding: 1em;
		display: flex;
		flex-direction: row;
		align-items: center;
		img {
			width: 48px;
			height: 48px;
			border-radius: 24px;
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

</style>
