<template lang="pug">
Flipped( :flipId="flipId" @on-complete="handleComplete" )
	div( class="card-detail" )
		Flipped( :inverseFlipId="flipId" )
			div( class="flex h-full" )
				div( class="w-1/2 border-r" )
					div( class="p-6" )
						router-link( class="text-xs text-green uppercase tracking-wide inline-block mb-2 no-underline" to="/test" ) Back
						<h1 class="text-xl mb-4 font-semibold" ) {{ iconSet.label }}
						p( class="flow text-grey" ) Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto beatae iure omnis magnam perspiciatis voluptatibus, sunt vero quam debitis vitae consectetur voluptas molestias inventore reprehenderit quae aliquam veniam ad eius.
						p( class="flow text-grey my-3" ) Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto beatae iure omnis magnam perspiciatis voluptatibus, sunt vero quam debitis vitae consectetur voluptas molestias inventore reprehenderit quae aliquam veniam ad eius.
						p( class="flow text-grey my-3" ) Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto beatae iure omnis magnam perspiciatis voluptatibus, sunt vero quam debitis vitae consectetur voluptas molestias inventore reprehenderit quae aliquam veniam ad eius.
				div( class="w-1/2 p-6 overflow-y-auto" )
					div( class="icon-grid" )
						template( v-for="icon in fullIconSet" )
							Flipped( v-if="icon.flipped" :flipId="`${iconSet.slug}-${icon.key}`" :key="`${iconSet.slug}-${icon.key}`" )
								div( class="icon flipped bg-green" )
							div( v-else class="icon bg-grey" :key="`${iconSet.slug}-${icon.key}`" )

</template>

<script>
import Flipped from 'vue-flip-toolkit/src/Flipped'
import anime from 'animejs'
import iconData from '@/views/icon-data'

const shuffle = ([...arr]) => {
	let m = arr.length
	while (m) {
		const i = Math.floor(Math.random() * m--);
		[arr[m], arr[i]] = [arr[i], arr[m]]
	}
	return arr
}

export default {
	data () {
		return {
			icons: Array(16),
			loaded: false
		}
	},
	components: {
		Flipped
	},
	computed: {
		iconSet () {
			return iconData.find(set => set.slug === this.$route.params.set)
		},
		flipId () {
			return this.$route.params.set
		},
		fullIconSet () {
			const randomIcons = Array.from(Array(20), (x, index) => ({
				flipped: false,
				key: index.toString()
			}))
			return shuffle(this.iconSet.icons.concat(randomIcons))
		}
	},
	methods: {
		handleComplete ({ el, id }) {
			this.loaded = true
			const nonFlippable = el.querySelectorAll('.icon:not(.flipped)')
			anime({
				targets: nonFlippable,
				opacity: [0, 1],
				duration: 3000,
				delay: anime.stagger(50)
			})
		},
		handleHeaderEnter (el, done) {
			anime({
				targets: el,
				easing: 'linear',
				opacity: [0, 1],
				duration: 300,
				translateY: [10, 0],
				complete: function () {
					done()
				}
			})
		}
	}
}

</script>
