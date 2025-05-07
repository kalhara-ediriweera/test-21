// __tests__/userModel.test.js
const mongoose = require('mongoose');
const User = require('../models/User');

describe('User Model Test', () => {
  it('should save a new user to the database', async () => {
    const newUser = new User({
      username: 'testuser',
      email: 'test@example.com',
      password: 'testpassword'
    });

    const savedUser = await newUser.save();
    expect(savedUser._id).toBeDefined();
    expect(savedUser.email).toBe('test@example.com');
  });

  it('should find a user by email', async () => {
    const user = await User.findOne({ email: 'test@example.com' });
    expect(user).toBeDefined();
    expect(user.email).toBe('test@example.com');
  });
});
