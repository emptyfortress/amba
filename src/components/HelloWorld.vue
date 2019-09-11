<template lang="pug">
div.pa-5
	h2 laksjdl
	svg-transition(:size="size" ref="transition" trigger="click")
		svg(slot="initial")
			use(href="#one")
		svg
			use(href="#two")
	hid

</template>

<script>
import hid from '@/components/svg.vue'

export default {
	data: () => ({
		size: {
			width: 148,
			height: 148
		}
	}),
	components: {
		hid
	}
}
</script>

<style scoped lang="scss">

.my {
}

</style>
