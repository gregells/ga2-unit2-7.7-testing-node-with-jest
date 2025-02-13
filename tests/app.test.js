const request = require('supertest');
const { app, server } = require('../app');

describe('Test the root PATH', () => {
  test('It should respond with "Hello World!"', async () => {
    const response = await request(app).get('/');
    expect(response.text).toBe('Hello World!');
    expect(response.statusCode).toBe(200);
  });
});

afterAll(done => {
  // Close the connection to allow Jest to exit successfully:
  server.close();
  done();
});