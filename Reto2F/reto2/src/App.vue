<template>
  <div id="app">
	<h3> {{ $store.getters.getTest }}</h3>
	<div class="overflow-auto"> 
		<b-pagination
		v-model="currentPage"
		:total-rows="$store.state.data.length"
		:per-page = 'perPage'
		aria-controls="table"

		> </b-pagination>
	<b-table
	id='table'
	:items = "$store.state.data"
	:per-page="perPage"
	:current-page="currentPage"
	:fields="fields"
	small
	>
	<template #cell(delete)="data">
		<button class="btn btn-danger" @click="remove(data.item.id_de_caso)"> Eliminar </button>
	</template>
	</b-table>	
	</div>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
	data(){
		return {
fields: [
'id_de_caso',
'ciudad_municipio_nom',
'sexo',
'ubicacion',
'estado',
'delete',

],
		perPage : 5,
		currentPage:1
		}
	},
mounted(){
	this.thread()
				},
methods:{
					thread() {
						setTimeout(() => {
						this.$store.dispatch('requestInfo')
						this.thread()
						console.log('request')
								},3000)
					},
					remove(id){
					this.$store.dispatch('removeCase', id)

					}
				}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
