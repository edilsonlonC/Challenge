<template>
  <div id="app">
		<a href="#"> <i class= "fas fa-viruses"> </i>Challenge 1 </a>
		<div class="container">
		<div class="container">
		<div class="information container">		
		<button class="btn" v-on:click="age_0_20()"><li class="fa fa-shield-virus"> </li> 0 a 20 años </button>
		<button class="btn" v-on:click="age_20_40()"> <li class="fa fa-shield-virus"> </li> 20 a 40 años </button>
		<button class= 'btn' v-on:click="age_40()"> <li class="fa fa-shield-virus"> </li> 40 + </button>

			<age-pagination class="covid-info" :items="items" /><b-spinner v-if="!BarShow"/>
		</div>
				</div>
				</div>
		<div class="container" v-if="BarShow">
			<dougnut-gender  :data="datasets" :labels="labels"> </dougnut-gender>
			<bar-chart :data="dataCities" :labels="labelCities"/>
		</div>
		</div>  
</template>

<script>
import { dataCovid } from './services/covid.js'
import  AgePagination  from './components/AgePagination'
import DougnutGender from './components/DougnutGender' 
import BarChart from './components/BarChart.vue'
export default {
  name: 'App',
		data(){
			return {
				BarShow: false,
				DoughnutShow: false,
				items:[],
				covidInfo:[],
				labels:[],
				datasets:[],
				dataCities:[],
				labelCities:[],
				fontcolor: '#fff'
				
			}
			},
		mounted(){
		this.getData()
		},
  components: {
	AgePagination,
	DougnutGender,
	BarChart
  },
	methods:{
		async getData(){
			let gender = {}
			let cities = {}
			const covidInfo = await dataCovid()
				const filterCovidInfo = covidInfo.map(item => {
						return {
					Departamento: item.departamento_nom,
					Ciudad: item.ciudad_municipio_nom,
					sexo: item.sexo,
					Estado: item.estado,
					Ubicacion: item.ubicacion,
					edad: item.edad

					}
						})
				const filterAge = filterCovidInfo.reduce((previous, current)=>{
					if (!previous['0_20']) previous['0_20'] = []
					if (!previous['20_40']) previous['20_40'] = []
					if (!previous['40_']) previous['40_'] = []
					if (current.edad >= 0 && current.edad <20) previous['0_20'].push(current)
					else if (current.edad >= 20 && current.edad < 40) previous['20_40'].push(current)
					else if (current.edad >= 40) previous['40_'].push(current)
					gender[current.sexo] = !gender[current.sexo] ? 1: gender[current.sexo] + 1
					cities[current.Ciudad] = !cities[current.Ciudad] ? 1: cities[current.Ciudad] + 1
					return previous
					})
					this.labelCities = Object.keys(cities).slice(0,20)
					this.dataCities = Object.values(cities).slice(0.20)
					console.log(this.labelCities)
					console.log(this.dataCities)
					this.datasets.push(gender['F'])
					this.datasets.push(gender['M'])
					this.labels.push('Mujer')
					this.labels.push('Hombre')
					this.covidInfo = filterAge	
					this.items = this.covidInfo['0_20']
					this.BarShow = true
					this.DoughnutShow = true
					},
		age_0_20(){ 
			this.items =  this.covidInfo['0_20']
		},
		age_20_40(){ 
			this.items = this.covidInfo['20_40']
		},
		age_40(){
			this.items = this.covidInfo['40_']
		}

}
}
</script>

<style lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Potta+One&display=swap');
$font-color: #000;
$box-color:rgb(117,230,213);
$gradient: linear-gradient(90deg, rgba(117,230,213,1) 32%, rgba(255,255,255,1) 85%);
$card-color:rgb(255,255,241);
$gradient-card: linear-gradient(90deg, rgba(255,255,241,1) 19%, rgba(117,230,213,1) 77%);
#app{
	color: $font-color;
	background:$box-color;
	background:$gradient;
	text-align:center;
	padding-top: 20px;
	font-family: 'Potta One', cursive;
	a {
	text-decoration: none;
	font-size: 2em;
	color:#000;
	}
	

}

.information{
	font-size: 0.7em;
	background: $card-color;
	background:$gradient-card;
	border-radius: 20px;
	box-shadow: 1.8px 1.8px #333;
	margin-top:20px;
	&:hover{
		
	box-shadow: 1.8px 1.8px #ccc;
	}
	margin-bottom:10px;

}



</style>
