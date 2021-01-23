import axios from 'axios'

const url = 'https://www.datos.gov.co/resource/gt2j-8ykr.json'
export async function dataCovid(){

	const { data } = await axios.get(url).catch(e => console.err(e))
	return data

}
