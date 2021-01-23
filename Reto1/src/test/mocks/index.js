const mock1 = {

  data: [

    {
      id_de_caso: '1',
      edad: '20',
      sexo: 'F'
    }, {
      id_de_caso: '2',
      edad: '20',
      sexo: 'M'
    }, {
      id_de_caso: '3',
      edad: '30',
      sexo: 'F'
    }, {
      id_de_caso: '4',
      edad: '30',
      sexo: 'M'
    }, {
      id_de_caso: '5',
      edad: '40',
      sexo: 'F'
    }, {
      id_de_caso: '6',
      edad: '40',
      sexo: 'M'
    }, {
      id_de_caso: '7',
      edad: '80',
      sexo: 'F'
    }, {
      id_de_caso: '8',
      edad: '10',
      sexo: 'M'
    },
    {
      id_de_caso: '9',
      edad: '35',
      sexo: 'F'
    },
    {
      id_de_caso: '10',
      edad: '7',
      sexo: 'F'
    }
  ]
}
const mock2 = [
  {
    id_de_caso: '1',
    edad: 20
  }, {
    id_de_caso: '2',
    edad: 30
  }, {
    id_de_caso: '3',
    edad: 40
  }, {
    id_de_caso: '4',
    edad: 80
  }, {
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
		'0_20_F': [
		{
      id_de_caso: '10',
      edad: '7',
      sexo: 'F'
    }
    ],
    '0_20_M': [
      {
        id_de_caso: '8',
        edad: '10',
        sexo: 'M'
      }
    ],
    '20_40_F': [
      {
        id_de_caso: '1',
        edad: '20',
        sexo: 'F'
      }, {
        id_de_caso: '3',
        edad: '30',
        sexo: 'F'
      }, {
        id_de_caso: '9',
        edad: '35',
        sexo: 'F'
      }

    ],
    '20_40_M': [
      {
        id_de_caso: '2',
        edad: '20',
        sexo: 'M'
      }, {
        id_de_caso: '4',
        edad: '30',
        sexo: 'M'
      }

    ],
    '40_F': [
      {
        id_de_caso: '5',
        edad: '40',
        sexo: 'F'
      }, {
        id_de_caso: '7',
        edad: '80',
        sexo: 'F'
      }
    ],
    '40_M': [
      {
        id_de_caso: '6',
        edad: '40',
        sexo: 'M'
      }

    ]
  }
}

module.exports = {
  mock1,
  mock2,
  mockResponse
}
