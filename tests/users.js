const request = require('supertest');
const app = require('../app');
const { factoryUser } = require('./factories/users');

const succesfulLogin = () => {};

// Tests need to be properly done ATM we just need for it to be deployed in AWS

describe('/api/users', () => {
  test('should get all available campaigns for current user', async done => {
    return request(app)
      .get('/api/users/campaigns')
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });

  test('should get current campaign info for current user', async done => {
    return request(app)
      .get('/api/users/campaign/1')
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
  test('should update current user info', async done => {
    return request(app)
      .put('/api/users/1')
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
  test('should apply ok for a campaign', async done => {
    return request(app)
      .post('/api/users/campaign/1')
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});
