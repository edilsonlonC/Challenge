import Vue from 'vue'
import Vuex from 'vuex'
import { url } from '../config/config'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		test: 'Challenge 2',
		data:[]
	},
	getters:{
		getTest: state => (state.test),
		getData: state => (state.data)
	},
	mutations: {
		addData: (state,data) => {
			state.data = data

		},
		removeData: (state,id) => {
			const data = state.data
			const deleted = data.filter( element => element.id_de_caso !== id )
			state.data = deleted
		}

  },
	actions: {
		requestInfo: context => {
			axios.get(url).then(response => context.commit('addData', response.data)).catch(e => console.error(e))
		},
		removeCase: (context,id) => {
			context.commit('removeData',id)
		}

  },
  modules: {
  }
})
