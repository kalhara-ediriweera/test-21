// __tests__/authController.test.js
const request = require('supertest');
const app = require('../server');  // Assuming the entry point is server.js
const User = require('../models/User');
const bcrypt = require('bcryptjs');

jest.mock('../models/User');  // Mocking User model to avoid actual database calls

describe('POST /api/auth/register', () => {
  it('should register a user and return a token', async () => {
    User.findOne.mockResolvedValue(null);  // Ensure user doesn't exist
    User.prototype.save.mockResolvedValue({ _id: '12345', email: 'test@example.com' });

    const response = await request(app)
      .post('/api/auth/register')
      .send({
        username: 'testuser',
        email: 'test@example.com',
        password: 'testpassword'
      });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('token');
  });

  it('should return error if user already exists', async () => {
    User.findOne.mockResolvedValue({ email: 'test@example.com' });  // Simulate existing user

    const response = await request(app)
      .post('/api/auth/register')
      .send({
        username: 'testuser',
        email: 'test@example.com',
        password: 'testpassword'
      });

    expect(response.status).toBe(400);
    expect(response.body.message).toBe('User already exists');
  });
});

describe('POST /api/auth/login', () => {
  it('should login a user and return a token', async () => {
    const user = { _id: '12345', email: 'test@example.com', password: await bcrypt.hash('testpassword', 10) };
    User.findOne.mockResolvedValue(user);

    const response = await request(app)
      .post('/api/auth/login')
      .send({
        email: 'test@example.com',
        password: 'testpassword'
      });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('token');
  });

  it('should return error if credentials are invalid', async () => {
    User.findOne.mockResolvedValue(null);  // Simulate no user found

    const response = await request(app)
      .post('/api/auth/login')
      .send({
        email: 'invalid@example.com',
        password: 'wrongpassword'
      });

    expect(response.status).toBe(400);
    expect(response.body.message).toBe('Invalid credentials');
  });
});
