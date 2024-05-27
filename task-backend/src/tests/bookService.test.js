const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');
const sequelize = require('../config/database');

chai.use(chaiHttp);
const expect = chai.expect;

describe('Book Service', () => {
  before(async () => {
    await sequelize.sync({ force: true });
  });

  it('should create a new book', (done) => {
    chai.request(app)
      .post('/api/books')
      .send({ code: 'JK-45', title: 'Harry Potter', author: 'J.K Rowling', stock: 1 })
      .end((err, res) => {
        expect(res).to.have.status(201);
        expect(res.body).to.have.property('code', 'JK-45');
        done();
      });
  });

  it('should get all books', (done) => {
    chai.request(app)
      .get('/api/books')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('array');
        done();
      });
  });
});
