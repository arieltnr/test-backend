const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');
const sequelize = require('../config/database');

chai.use(chaiHttp);
const expect = chai.expect;

describe('Member Service', () => {
  before(async () => {
    await sequelize.sync({ force: true });
  });

  it('should create a new member', (done) => {
    chai.request(app)
      .post('/api/members')
      .send({ code: 'M001', name: 'Angga' })
      .end((err, res) => {
        expect(res).to.have.status(201);
        expect(res.body).to.have.property('code', 'M001');
        done();
      });
  });

  it('should get all members', (done) => {
    chai.request(app)
      .get('/api/members')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('array');
        done();
      });
  });
});
