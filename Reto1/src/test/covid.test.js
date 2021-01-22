let app = null
const request = require('supertest')
const axios  = require('axios')
const { mock1, mockResponse , mock2} = require('./mocks')
jest.mock('axios')



describe('response body should be the expected', ()=> {
	axios.get.mockResolvedValue(mock1)
	app = require('../')
	test('/api' ,() => {
		return request(app)
			.get('/api')
			.then(response => {
				expect(response.statusCode).toBe(200)
				expect(response.body).toEqual(mockResponse)
				
			})
	})
})

 
