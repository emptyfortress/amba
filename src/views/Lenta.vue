<template lang="pug">
.lenta
	router-link(to="/")
		.logo
			span.font-weight-bold .dv
			span( class="font-weight-light" ) 2020
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
				v-chip-group( mandatory show-arrows active-class="act")
					v-chip( v-for="tag in tags" :key="tag" ).rel {{ tag }}
						.badge
							span 2

	LentaList

</template>

<script>
import LentaList from '@/components/LentaList'

export default {
	data () {
		return {
			type: false,
			tags: [
				'Мои подписки',
				'Все',
				'На исполнение',
				'На согласование',
				'На ознакомление',
				'Мои согласования',
				'Мои подписания',
				'Мои поручения',
				'Я - контролер',
				'Делегировано'
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
	position: relative;
	height: 100vh;
}
.logo {
	position: absolute;
	bottom: 1rem;
	left: 1rem;
	color: black;
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

</style>
