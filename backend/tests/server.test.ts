const request = require('supertest');
import { setupServer } from '../server'

// Initialize the Express server
let app = setupServer();

beforeAll(() => {
  app = setupServer();
});

afterAll((done) => {
  // Clean up any resources or connections after testing
  done();
});


describe('GET /api/data', () => {
  it('should respond with a 200 status code', async () => {
    const response = await request(app).get('/hello');
    expect(response.status).toBe(200);
    expect(response.text).toBe('world');
  })
});

describe('GET /api/fixtures', () => {
  it('should retrieve fixtures from the database when GET /api/fixtures', async () => {
    const response = await request(app).get('/api/fixtures');
    expect(response.status).toBe(200);
    expect(response.body).toBeDefined(); // Check that the response contains data
  })
});

describe('GET /api/users', () => {
  it('should retrieve users from the database when GET /api/users', async () => {
    const response = await request(app).get('/api/users');
    expect(response.status).toBe(200);
    expect(response.body).toBeDefined(); // Check that the response contains data
  })
});

describe('GET /api/gameweek', () => {
  it('should retrieve gameweek data when GET /api/gameweek', async () => {
    const response = await request(app).get('/api/gameweek');
    expect(response.status).toBe(200);
    expect(response.body).toBeDefined(); // Check that the response contains data
  })
});