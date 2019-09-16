<template lang="pug">
ksvuefp( :options="options" :sections="sections" )
	ksvuefp-section( v-for="(s,index) in sections" :section="s" :key="s.id" :section-index="index" :class="s.cl" )
		Today( v-if="index === 0" )
		Search(v-if="index === 1")
		h2( v-if="index === 2" ) {{ s.id }} {{ index }}
		h2( v-if="index === 3" ) {{ s.id }}

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
}
</style>
