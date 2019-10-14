<template lang="pug">
.lenta
	.switch
		span(@click="toggle").all Все
		v-switch(v-model="onlyNew" flat label="Новые" color="primary").mx-3
		v-spacer
		v-btn(icon @click="readAll")
			v-icon mdi-email-open-multiple-outline
		v-btn(icon)
			i.icon-adjust
	.search
		v-text-field(label="Найти" v-model="search")
	v-row( justify="space-around" )
		v-col.pa-0
			v-sheet.trans
				v-chip-group( mandatory show-arrows active-class="act" v-model="activeTag")
					v-chip( v-for="(tag, index) in tags" :key="tag.title" pill)
						| {{ tag.title }}
						v-avatar(right v-text="count(index+1)" v-if="count(index +1) > 0").num
	v-expansion-panels(v-model="panel" multiple)
		v-expansion-panel(v-for="(item,i) in datelist" :key="i" v-if="filteredItems.length").trans
			v-expansion-panel-header {{ item }}
			v-expansion-panel-content
				LentaList(ref="lentaList" :items="filteredItems")
	.space

</template>

<script>
import LentaList from '@/components/LentaList'

export default {
	data () {
		return {
			onlyNew: false,
			activeTag: 0,
			markAllRead: false,
			search: undefined,
			panel: [0, null, null, null],
			tags: [
				// { title: 'Мои подписки' },
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
	computed: {
		allitems () {
			return this.$store.getters.notifications
		},
		newItems () {
			if (this.onlyNew) {
				return this.allitems.filter(item => item.unread)
			} else return this.allitems
		},
		filteredItems () {
			let all = this.newItems
			if (this.search) {
				let my = this.search.toLowerCase()
				all = all.filter(item => {
					return item.title.toLowerCase().indexOf(my) !== -1 || item.subtitle.toLowerCase().indexOf(my) !== -1
				})
			}
			switch (this.activeTag) {
			case 1:
				return all.filter(item => item.attributes.vid === 'На исполнение')
			case 2:
				return all.filter(item => item.attributes.vid === 'На согласование')
			case 3:
				return all.filter(item => item.attributes.vid === 'На ознакомление')
			case 4:
				return all.filter(item => item.attributes.vid === 'Мои согласования')
			case 5:
				return all.filter(item => item.attributes.vid === 'Мои подписания')
			case 6:
				return all.filter(item => item.attributes.vid === 'Я - контролер')
			case 7:
				return all.filter(item => item.attributes.vid === 'Согласование. Возврат')
			default:
				return all
			// case 0:
			// 	return all.filter(item => item.fav)
			// case 2:
			// 	return all.filter(item => item.attributes.vid === 'На исполнение')
			// case 3:
			// 	return all.filter(item => item.attributes.vid === 'На согласование')
			// case 4:
			// 	return all.filter(item => item.attributes.vid === 'На ознакомление')
			// case 5:
			// 	return all.filter(item => item.attributes.vid === 'Мои согласования')
			// case 6:
			// 	return all.filter(item => item.attributes.vid === 'Мои подписания')
			// case 7:
			// 	return all.filter(item => item.attributes.vid === 'Я - контролер')
			// case 8:
			// 	return all.filter(item => item.attributes.vid === 'Согласование. Возврат')
			// default:
			// 	return all
			}
		}

	},
	methods: {
		count (e) {
			switch (e) {
			case 0:
				return this.$store.getters.notifications.filter(item => item.fav && item.unread).length
			case 1:
				return this.$store.getters.notifications.filter(item => item.unread).length
			case 2:
				return this.$store.getters.notifications.filter(item => item.attributes.vid === 'На исполнение' && item.unread).length
			case 3:
				return this.$store.getters.notifications.filter(item => item.attributes.vid === 'На согласование' && item.unread).length
			case 4:
				return this.$store.getters.notifications.filter(item => item.attributes.vid === 'На ознакомление' && item.unread).length
			case 5:
				return this.$store.getters.notifications.filter(item => item.attributes.vid === 'Мои согласования' && item.unread).length
			case 6:
				return this.$store.getters.notifications.filter(item => item.attributes.vid === 'Мои подписания' && item.unread).length
			case 7:
				return this.$store.getters.notifications.filter(item => item.attributes.vid === 'Я - контролер' && item.unread).length
			case 8:
				return this.$store.getters.notifications.filter(item => item.attributes.vid === 'Согласование. Возврат' && item.unread).length
			}
		},
		toggle () {
			this.onlyNew = !this.onlyNew
		},
		readAll () {
			this.$store.dispatch('readAll')
			// this.allitems.map(item => { return { unread: false } })
		}
	},
	components: {
		LentaList
	},
	created () {
		this.$store.dispatch('loadNotifications')
	}
}

</script>

<style scoped lang="scss">
.lenta {
	padding: .5rem 1rem;
	/* max-width: 600px; */
	margin: 0 auto;
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
	background: #efefef;
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
