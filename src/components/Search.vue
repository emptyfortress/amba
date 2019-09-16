<template lang="pug">
.search
	.group
		v-btn(text color="grey") Команды
	.rel
		input-tag(v-model="tags"  placeholder="Что искать?" :add-tag-on-keys="keys" :before-adding="(tag) => norm(tag)")
		i.icon-search

</template>

<script>
import InputTag from 'vue-input-tag'
import '@/assets/css/tags.scss'

export default {
	data () {
		return {
			search: '',
			term: false,
			tags: [],
			keys: [188, 9]
		}
	},
	components: {
		InputTag
	},
	methods: {
		norm (e) {
			switch (e) {
			case 'd':
				return 'Документы'
			case 'D':
				this.minus()
				return 'Документы'
			case 'a':
				return 'Атрибуты'
			case 'A':
				this.minus()
				return 'Атрибуты'
			case 'z':
				return 'Задания'
			case 'Z':
				this.minus()
				return 'Задания'
			case 'i':
				return 'Исполнители'
			case 'I':
				this.minus()
				return 'Исполнители'
			case 's':
				return 'Срок'
			case 'S':
				this.minus()
				return 'Срок'
			}
		},
		minus () {
			setTimeout(function () {
				let ttt = document.querySelector('.input-tag:nth-last-child(-n+2)')
				ttt.className += ' minus'
			}, 10)
		}
	}
}

</script>

<style scoped lang="scss">
.search {
	width: 50%;
	margin: 0 auto;
	i {
		position: absolute;
		top: -4rem;
		left: -6rem;
		font-size: 9.0rem;
		color: #eeeeeeaa;
		z-index: -2;
	}
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
.group {
	padding-top: 1rem;
}
.rel {
	position: relative;
	margin-top: 30%;
	border-bottom: 1px dotted black;
}
</style>
