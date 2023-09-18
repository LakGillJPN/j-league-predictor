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

const payload = 
{ userEmail: "joe@nufc.com",
  predications: [ [300001, 0, 1], [400001, 1, 3] ],
  current_gameweek: 'Gameweek 12'
}

const fakeload = {
  userEmail: [880],
  predications: [ [300001, 'num', 1], [400001, 1, 3] ],
  current_gameweek: []
}

describe('POST /api/predications', () => {
  it('should enter the data into the table ', async () => {
    const response = await request(app).post('/api/predications')
    .send(payload);
    expect(response.status).toBe(200);
    expect(response.text).toBe('Data entered into the predications table!')
    expect(response.body).toBeDefined(); // Check that the response contains data
  })

  it('should not enter the data into the table with the payload is incorrect ', async () => {
    const response = await request(app).post('/api/predications')
    .send(fakeload);
    expect(response.text).toBe('Error occurred while entering data!')
   // expect(response.status).toBe(500);
  })
});

describe('GET /api/predications', () => {
  it('should retrieve predications data when GET /api/predications', async () => {
    const response = await request(app).get('/api/predications');
    expect(response.status).toBe(200);
    expect(response.body).toBeDefined(); // Check that the response contains data
  })
});
