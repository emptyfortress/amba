<template lang="pug">
ksvuefp( :options="options" :sections="sections" )
	ksvuefp-section( v-for="(s,index) in sections" :section="s" :key="s.id" :section-index="index" :class="s.cl" )
		Today( v-if="index === 0" )
		Search(v-if="index === 1")
		.center( v-if="index === 2" )
			br
			br
			br
			br
			br
			h2 id: {{ s.id }} index: {{ index }}
			.card
				p Aliquam erat volutpat.  Nunc eleifend leo vitae magna.  In id erat non orci commodo lobortis.  Proin neque massa, cursus ut, gravida ut, lobortis eget, lacus.  Sed diam.  Praesent fermentum tempor tellus.  Nullam tempus.  Mauris ac felis vel velit tristique imperdiet.  Donec at pede.  Etiam vel neque nec dui dignissim bibendum.  Vivamus id enim.  Phasellus neque orci, porta a, aliquet quis, semper a, massa.  Phasellus purus.  Pellentesque tristique imperdiet tortor.  Nam euismod tellus id erat.

		.center( v-if="index === 3" )
			br
			br
			br
			br
			br
			h2 id: {{ s.id }} index: {{ index }}
			.card
				p Pellentesque dapibus suscipit ligula.

</template>

<script>
import 'ks-vue-fullpage/dist/ks-vue-fullpage.min.css'
import velocity from 'velocity-animate'
import Today from '@/components/Today'
import Search from '@/components/Search'

export default {
	data: () => ({
		sections: [
			{ id: 0, cl: 'one', img_url: './img/today.png' },
			{ id: 1, cl: 'marg', img_url: '' },
			{ id: 2, cl: 'marg', img_url: '' },
			{ id: 3, img_url: '' }
		],
		options: {
			duration: 400,
			overlay: true,
			dotNavEnabled: true,
			dotNavPosition: 'right',
			dotNavColor: '#fff',
			loopBottom: true,
			loopTop: true,
			parallax: true,
			parallaxOffset: 0.5,
			preloaderText: 'Терпение...',
			preloaderBgColor: '#CAC7CB'
		}
	}),
	components: {
		velocity,
		Today,
		Search
	}
}
</script>

<style scoped lang="scss">
.ksvuefp-section {
	display: flex;
	height: 100%;
}
.center {
	text-align: center;
	align-self: center;
	justify-self: center;
}
.card {
	margin: 0 auto;
	width: 500px;
}
</style>
