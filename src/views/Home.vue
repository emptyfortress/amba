<template lang="pug">
ksvuefp( :options="options" :sections="sections" )
	ksvuefp-section( v-for="(s,index) in sections" :section="s" :key="s.bgColor" :section-index="index" :background-image="'url('+ s.img_url +')'")
		h2( v-if="index === 0" ) {{ s.id }}
		h2( v-if="index === 1" ) {{ s.id }}
		h2( v-if="index === 2" ) {{ s.id }}

</template>

<script>
import 'ks-vue-fullpage/dist/ks-vue-fullpage.min.css'
import velocity from 'velocity-animate'

export default {
	data: () => ({
		sections: [
			{ id: 1, cl: 'middle', img_url: '' },
			{ id: 2, cl: 'marg', img_url: '' },
			{ id: 3, img_url: '' }
		],
		options: {
			// Your custom options here
			duration: 400,
			overlay: true,
			// overflow: hidden,
			// easing: [1, 0, 0, 1],
			dotNavEnabled: true,
			dotNavPosition: 'right',
			dotNavColor: '#fff',
			loopBottom: true,
			loopTop: true,
			parallax: true,
			parallaxOffset: 0.5
		}
	}),
	components: {
		velocity
	}
}
</script>

<style scoped lang="scss">

.ksvuefp-section {
	display: flex;
	justify-content: center;
	align-items: center;
	h2 {
		text-align: center;
		color: white;
	}
}
</style>
