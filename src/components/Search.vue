<template lang="pug">
.search
	.group
		v-btn(text color="grey" @click="command = !command").mr-5 Команды
		span(v-if="command") d - Документы
		span(v-if="command") z - Задания
		span(v-if="command") a - Атрибуты
		span(v-if="command") i - Исполнители
		span(v-if="command") s - Срок
		span(v-if="command") (с большой буквы - исключение)
		p(v-if="command") Наберите букву и нажмите Tab
	.rel
		input-tag(v-model="tags"  placeholder="Что искать?" :add-tag-on-keys="keys" :before-adding="(tag) => norm(tag)").big
		i.icon-search

</template>

<script>
import InputTag from 'vue-input-tag'
import '@/assets/css/tags.scss'

export default {
	data () {
		return {
			search: '',
			command: false,
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
		font-size: 9rem;
		color: #eeeeeeaa;
		z-index: -2;
	}
}

.big {
	height: 48px;
	width: 100%;
	font-size: 3rem;
	background: transparent;
	outline: none;
	border: none !important;
}
/* .vue-input-tag-wrapper { */
/* 	.new-tag { */
/* 		height: 48px; */
/* 		width: 100%; */
/* 		font-size: 3.0rem; */
/* 		background: transparent; */
/* 		outline: none; */
/* 	} */
/* } */
.group {
	padding-top: 1rem;
	span {
		margin-right: 2rem;
		font-size: 0.9rem;
		color: #666;
	}
}
.rel {
	position: relative;
	margin-top: 30%;
	border-bottom: 1px dotted black;
}
</style>
