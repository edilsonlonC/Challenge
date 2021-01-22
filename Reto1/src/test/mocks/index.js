const mock1 = {

data: [

	{
		id_de_caso: '1',
		edad: "20"
	},{
		id_de_caso: '2',
		edad: "30"
	},{
		id_de_caso: '3',
		edad: "40"
	},{
		id_de_caso: '4',
		edad: "80"
	},{
		id_de_caso: '5',
		edad: "10"
	},
	{
		id_de_caso: '6',
		edad:'35'
	}
]
}
const mock2 = [
	{
		id_de_caso: '1',
		edad: 20
	},{
		id_de_caso: '2',
		edad: 30
	},{
		id_de_caso: '3',
		edad: 40
	},{
		id_de_caso: '4',
		edad: 80
	},{
		id_de_caso: '5',
		edad: 10
	},
	{
		id_de_caso: '6',
		edad: 35
	}
]

const mockResponse = {
	data: {
		'0_20': [
			{
				id_de_caso: '5',
				edad:'10'
			}
		],
		'20_40':[
		{
				id_de_caso: '1',
				edad: '20'
			},
			{
			id_de_caso: '2',
			edad: '30'
			},
			{
				id_de_caso:'6',
				edad:'35'
			},
			
		],
		'40': [
			{
				id_de_caso: '3',
				edad: '40'
			},
			{
				id_de_caso:'4',
				edad:'80'
			}
			
		]
	}
}




module.exports = {
	mock1,
	mock2,
	mockResponse
}
