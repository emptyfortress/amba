<template lang="pug">
.inf
	table
		tr
			td Тип:
			td {{ item.attributes.type }}
		tr
			td Вид:
			td {{ item.attributes.vid }}
		tr
			td Номер:
			td {{ item.attributes.num }}
		tr
			td Создано:
			td {{ item.attributes.date }}
		tr
			td Срок:
			td {{ item.deadline }}
	table.second
		tr
			td Подписант:
			td {{ item.attributes.author }}
		tr
			td Поручение:
			td {{ item.attributes.task }}
		tr
			td Автор поручения:
			td {{ item.attributes.taskauthor }}
		tr
			td Ответственный:
			td {{ item.attributes.main }}
		tr
			td Контролер:
			td {{ item.controller }}

</template>

<script>

export default {
	props: ['data'],
	data () {
		return {
			item: this.data
		}
	}
}

</script>

<style scoped lang="scss">
.inf {
	width: 100%;
	font-size: .77rem;
	border-bottom: 2px dotted #ccc;
	border-top: 2px dotted #ccc;
	display: flex;
	flex-wrap: wrap;
	/* justify-content: space-around; */
	padding: .5rem;
	td {
		padding: 0;
	}
	tr > td:first-child {
		color: rgba(0,0,0,.5);
		text-align: right;
		padding-right: .5rem;
	}
}
.second {
	margin-left: 3rem;
}
</style>
