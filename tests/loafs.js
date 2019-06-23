const request = require('supertest');
const moment = require('moment');
const app = require('../app');
const { parseCoordinate } = require('../app/utils/kneader');

describe('/admin/breadcrumb', () => {
  test('should create a breadcrumb', done => {
    const customBreadcrumb = {
      trackerId: 1,
      position: parseCoordinate('-58.475418090820305', '-34.539510169014584'),
      time: moment().format()
    };
    return request(app)
      .post('/admin/breadcrumb')
      .send(customBreadcrumb)
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });

  test('should create a linestring area', done => {
    const customLineStringArea = {
      coords: [[1, 0], [0, 1]],
      name: 'Burzaco'
    };
    return request(app)
      .post('/admin/area')
      .send(customLineStringArea)
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});
