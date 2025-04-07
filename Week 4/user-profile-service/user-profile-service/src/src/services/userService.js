const UserService = require('../src/services/userService');
const User = require('../src/models/userModel');

beforeEach(async () => {
  await User.deleteAll(); // Sigurohuni që kjo metodë është asinkrone dhe fshin të dhënat
});

describe('UserService', () => {
  it('should register a new user with valid input', async () => {
    const user = await UserService.registerUser({
      email: 'test@example.com',
      password: '12345678',
      name: 'Test User'
    });

    expect(user).toHaveProperty('id');
    expect(user).toHaveProperty('email', 'test@example.com');
  });

  it('should not register a user with duplicate email', async () => {
    await UserService.registerUser({
      email: 'duplicate@example.com',
      password: '12345678',
      name: 'User One'
    });

    await expect(UserService.registerUser({
      email: 'duplicate@example.com',
      password: '87654321',
      name: 'User Two'
    })).rejects.toThrow('Email already in use');
  });
});
