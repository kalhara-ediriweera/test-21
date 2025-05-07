// __tests__/authRoutes.test.js
const request = require('supertest');
const app = require('../server');  // Assuming the Express app is in server.js

describe('POST /api/auth/register', () => {
  it('should register a user and return a token', async () => {
    const response = await request(app)
      .post('/api/auth/register')
      .send({
        username: 'newuser',
        email: 'new@example.com',
        password: 'password123'
      });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('token');
  });
});

describe('POST /api/auth/login', () => {
  it('should login a user and return a token', async () => {
    const response = await request(app)
      .post('/api/auth/login')
      .send({
        email: 'new@example.com',
        password: 'password123'
      });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('token');
  });
});
