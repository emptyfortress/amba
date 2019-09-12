<template lang="pug">
ksvuefp( :options="options" :sections="sections" )
	ksvuefp-section( v-for="(s,index) in sections" :section="s" :key="s.id" :section-index="index" :class="s.cl" )
		Today( v-if="index === 0" ) {{ s.id }}
		//- .search(v-if="index === 0")
		//- 	input(v-model="search" placeholder="Привет! Что ищем?" autofocus).big
		h2( v-if="index === 1" ) {{ s.id }}
		h2( v-if="index === 2" ) {{ s.id }}

</template>

<script>
import 'ks-vue-fullpage/dist/ks-vue-fullpage.min.css'
import velocity from 'velocity-animate'
import Today from '@/components/Today'

export default {
	data: () => ({
		search: '',
		sections: [
			{ id: 0, cl: 'one', img_url: './img/today.png' },
			{ id: 1, cl: 'marg', img_url: '' },
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
		velocity,
		Today
	},
	watch: {
		search: function (value) {
			value.length > 2 ? console.log('yes') : console.log('no')
		}
	}
}
</script>

<style scoped lang="scss">

.ksvuefp-section {
	display: flex;
	/* justify-content: center; */
	/* align-items: center; */
	h2 {
		text-align: center;
		color: white;
	}
}
.search {
	width: 50%;
	height: 100%;
	margin: 0 auto;
	/* border-bottom: 1px solid black; */
}
.big {
	height: 48px;
	width: 100%;
	font-size: 3.0rem;
	border-bottom: 1px dotted black;
	&:focus {
		border-bottom: 1px solid black;
		outline: none;
	}
}
.one {
	/* background: url('../assets/img/today.png') no-repeat contain; */
	/* background-attachment: fixed; */
	/* background-size: 50%; */
	/* background-position: 5% 90% */
}
</style>
