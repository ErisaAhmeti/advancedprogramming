const request = require('supertest');
const app = require('../server');
const User = require('../src/models/userModel');

beforeEach(async () => {
  await User.deleteAll(); // Sigurohuni që kjo metodë ekziston dhe fshin të dhënat
});

describe('User Routes', () => {
  it('POST /users → should register a new user', async () => {
    const res = await request(app).post('/users').send({
      email: 'test2@example.com',
      password: '12345678',
      name: 'Test User'
    });

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('id');
  });

  it('POST /auth/login → should login user and return token', async () => {
    await request(app).post('/users').send({
      email: 'login@example.com',
      password: '12345678',
      name: 'Login User'
    });

    const res = await request(app).post('/auth/login').send({
      email: 'login@example.com',
      password: '12345678'
    });

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('token');
    expect(res.body).toHaveProperty('userId');
  });
});
