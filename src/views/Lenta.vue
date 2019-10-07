<template lang="pug">
.lenta
	.switch
		span(@click="toggle").all Все
		v-switch(v-model="type" flat label="Новые" color="primary").mx-3
		v-spacer
		v-btn(icon)
			v-icon mdi-email-open-multiple-outline
		v-btn(icon)
			i.icon-adjust
	.search
		v-text-field(label="Найти")
	v-row( justify="space-around" )
		v-col.pa-0
			v-sheet.trans
				v-chip-group( mandatory show-arrows active-class="act" v-model="activeTag")
					v-chip( v-for="tag in tags" :key="tag.title" pill )
						| {{ tag.title }}
						v-avatar(right).num 2
	v-expansion-panels(v-model="panel" multiple)
		v-expansion-panel(v-for="(item,i) in datelist" :key="i").trans
			v-expansion-panel-header {{ item }}
			v-expansion-panel-content
				LentaList(:scope="activeTag")
	.space
	router-link(to="/").logo
		span.font-weight-bold .dv
		span( class="font-weight-light" ) 2020

</template>

<script>
import LentaList from '@/components/LentaList'

export default {
	data () {
		return {
			type: false,
			activeTag: 1,
			panel: [0, null, null, null],
			tags: [
				{ title: 'Мои подписки' },
				{ title: 'Все' },
				{ title: 'На исполнение' },
				{ title: 'На согласование' },
				{ title: 'На ознакомление' },
				{ title: 'Мои согласования' },
				{ title: 'Мои подписания' },
				{ title: 'Я - контролер' },
				{ title: 'Делегировано' }
			],
			datelist: [
				'Сегодня, 7 октября, понедельник',
				'Вчера, 6 октября, воскресенье',
				'5 октября, суббота',
				'4 октября, пятница'
			]
		}
	},
	methods: {
		toggle () {
			this.type = !this.type
		}
	},
	components: {
		LentaList
	}
}

</script>

<style scoped lang="scss">
.lenta {
	padding: .5rem 1rem;
}
.logo {
	display: block;
	color: black;
	text-decoration: none;
	margin-top: 1rem;
	position: fixed;
	bottom: 1rem;
	left: 1rem;
	background: #A3ADB5;
	padding: 0 .5rem;
	z-index: 10;
}
.switch {
	font-size: 1.0rem;
	display: flex;
	justify-content: center;
	align-items: center;
}
.all {
	color: rgba(0,0,0,0.54);
	cursor: pointer;
	margin-bottom: .5rem;
}
.v-text-field {
	margin-top: 0;
	padding-top: 0;
}
.trans {
	background: transparent;
}
.v-chip-group .v-chip--active {
	background: #1976d2;
	color: white !important;
}
.num {
	background: #fff;
}
.v-chip--active .num {
	/* color: red; */
	background: #1a528a;
}
.v-text-field {
	font-size: 1.3rem;
}
.item {
	background: #eee;
	width: 100%;
	height: 100px;
	box-shadow: none;
	margin-bottom: .5rem;
}
.rel {
	position: relative;
}
.badge {
	position: absolute;
	right: -3px;
	top: -10px;
	/* background: #333; */
	/* padding: .3rem; */
	span {
		font-size: 1.0rem;
		color: black;
	}
}
.icon-adjust {
	font-size: 1.4rem;
}
.space {
	height: 100px;
}
.trans {
	background: transparent !important;
	padding: 0 !important;
	&::before {
		box-shadow: none;
	}
}
.v-expansion-panel-header {
	padding: 0;
}
.v-expansion-panel-content__wrap {
	background: red;
	padding: 0px !important;
	margin: 0 !important;
	/* padding: 0 !important; */
	/* margin: 0 !important; */
}
</style>
