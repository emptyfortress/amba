<template lang="pug">
.lenta
	.logo
		span.font-weight-bold .dv
		span( class="font-weight-light" ) 2020
	.switch
		span(@click="toggle").all Все
		v-switch(v-model="type" flat label="Новые" color="primary").mx-3
		v-spacer
		v-btn(icon)
			v-icon mdi-email-open-multiple-outline
	.search
		v-text-field(label="Найти")
	v-row( justify="space-around" )
		v-col.pa-0
			v-sheet.trans
				v-chip-group( mandatory show-arrows active-class="act")
					v-chip( v-for="tag in tags" :key="tag" ) {{ tag }}
	v-col.px-0
		v-card.item
		v-card.item
		v-card.item

</template>

<script>

export default {
	data () {
		return {
			type: true,
			tags: [
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

</style>
