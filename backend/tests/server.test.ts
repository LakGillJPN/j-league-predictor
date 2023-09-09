const server = require('../server')
const request = require('supertest');
import { setupServer } from '../server'

// Initialize the Express server
const app = setupServer();

describe('GET /api/data', () => {
  it('should respond with a 200 status code', async () => {
    const response = await request(app).get('/hello');
    expect(response.status).toBe(200);
  })
})