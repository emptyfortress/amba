<template lang="pug">
ksvuefp( :options="options" :sections="sections" )
	ksvuefp-section( v-for="(section,index) in sections" :section="section" :key="section.bgColor" :section-index="index" :background-color="section.bgColor" )
		transition( name="fade" )
			h2( v-show="$ksvuefp.canAnimContent(index, true)" ) {{ section.content }}
</template>

<script>
import 'ks-vue-fullpage/dist/ks-vue-fullpage.min.css'
import velocity from 'velocity-animate'
// import hid from '@/components/svg.vue'

export default {
	data: () => ({
		sections: [
			{
				bgColor: '#ec407a',
				content: 'I am section 1'
			},
			{
				bgColor: '#42a5f5',
				content: 'I am section 2'
			},
			{
				bgColor: '#66bb6a',
				content: 'I am section 3'
			}
		],
		options: {
			// Your custom options here
			duration: 800,
			overlay: false
		}
	}),
	components: {
		velocity
	}
}
</script>

<style scoped lang="scss">

.home {
	padding: 3rem;
}

/* .ksvuefp { */
/* 	height: calc(100vh - 64px) !important; */
/* } */

/* .ksvuefp-section { */
/* 	display: flex; */
/* 	&.middle { */
/* 		align-items: center; */
/* 		background: red; */
/* 	} */
/* 	&.marg { */
/* 		padding-top: 2rem; */
/* 		background: green; */
/* 	} */
/* } */
.ksvuefp-section {
  display: flex;
  justify-content: center;
  align-items: center;
  h2 {
    text-align: center;
    color: white;
  }
}

.fade-enter-active, .fade-leave-active {
  transition: all .5s;
  opacity: 1;
}
.fade-enter, .fade-leave-active {
  opacity: 0;
}
</style>
