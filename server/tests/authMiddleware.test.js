// __tests__/authMiddleware.test.js
const request = require('supertest');
const app = require('../server'); // Assuming your Express app is initialized here

jest.mock('jsonwebtoken', () => ({
  verify: jest.fn(() => ({ userId: '12345' }))  // Mock JWT verify
}));

describe('Auth Middleware', () => {
  it('should call next if token is valid', async () => {
    const response = await request(app)
      .get('/api/auth/user_view/12345')
      .set('x-auth-token', 'valid_token'); // Simulate a valid token

    expect(response.status).toBe(200);
  });

  it('should return 401 if no token is provided', async () => {
    const response = await request(app)
      .get('/api/auth/user_view/12345');
    expect(response.status).toBe(401);
    expect(response.body.message).toBe('No token, authorization denied');
  });

  it('should return 401 if token is invalid', async () => {
    const response = await request(app)
      .get('/api/auth/user_view/12345')
      .set('x-auth-token', 'invalid_token');  // Simulate an invalid token

    expect(response.status).toBe(401);
    expect(response.body.message).toBe('Token is not valid');
  });
});
