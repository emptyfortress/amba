<template lang="pug">
div
	div( class="grid pa-4" )
		Flipped( :flipId="set.slug" v-for="set in iconSets" :key="set.slug" )
			div
				Flipped( :inverseFlipId="set.slug" )
					div( class="card pa-4 elevation-1" role="button" @click="handleNavigate(set.slug)" )
						h3 {{ set.label }}
						div( class="icon-grid" )
							template( v-for="icon in set.icons" )
								Flipped( v-if="icon.flipped" :flipId="`${set.slug}-${icon.key}`" :key="`${set.slug}-${icon.key}`" translate scale )
									div( class="icon flipped bg-green" )
								div( v-else class="icon bg-grey" :key="`${set.slug}-${icon.key}`" )

</template>

<script>
import Flipped from 'vue-flip-toolkit'
import iconData from './icon-data'

export default {
	data: () => ({
		iconSets: iconData
	}),
	components: {
		Flipped
	},
	methods: {
		handleNavigate (slug) {
			this.$router.push(`/icons/${slug}`)
		}
	}
}
</script>

<style scoped lang="scss">

.flow {
  /* font-family: "flow"; */
}
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 16px;
}
.card {
  background: white;
}
.icon {
  display: inline-block;
  margin: 0 auto;
  width: 48px;
  height: 48px;
  border-radius: 4px;
}
.icon-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-rows: 48px;
  grid-gap: 16px;
  grid-auto-flow: dense;
}
.bg-green {
	background: green;
}
.bg-grey {
	background: #ccc;
}
</style>
