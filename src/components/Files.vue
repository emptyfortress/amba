<template lang="pug">
.files
	img(:src="ur(item)" @click.stop="test(item)" v-for="item in data.files").file

</template>

<script>
import doc from '@/assets/img/filetype/doc.svg'
import pdf from '@/assets/img/filetype/pdf.svg'
import txt from '@/assets/img/filetype/txt.svg'
import xls from '@/assets/img/filetype/xls.svg'

export default {
	props: ['data'],
	data () {
		return {
			doc, pdf, xls, txt
		}
	},
	computed: {
	},
	methods: {
		test (e) {
			console.log(e)
		},
		ur (e) {
			switch (e) {
			case 'doc':
				return this.doc
			case 'pdf':
				return this.pdf
			case 'txt':
				return this.txt
			case 'xls':
				return this.xls
			}
		}
	}
}

</script>

<style scoped lang="scss">

.files {
	margin-top: 1rem;
	margin-bottom: .5rem;
	.file {
		width: 32px;
		margin-right: .3rem;
	}
}

</style>
