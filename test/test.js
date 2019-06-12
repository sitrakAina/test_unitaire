const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../index');

const should = chai.should();
//const expect = chai.expect;
chai.use(chaiHttp);

describe('=== Test POST and GET profil==', () => {

    // Test POST Client
    describe('HTTP POST /profil', () => {
        it('POST profil should return the result', function (done) {
            chai.request(app)
                .post('/profil')
                .send({ 'nom': 'Marina', 'prenom': 'marina' })
                .end((err, res) => {
                    should.not.exist(err);
                    res.status.should.eql(200);
                    done();
                });
        });;
    });

    // Test GET Client
    describe('HTTTP GET /profil', () => {
        it('should list ALL profil on /profil GET', function (done) {
            chai.request(app)
                .get('/profil')
                .end(function (err, res) {
                    res.should.have.status(200);
                    done();
                });
        });
    });

});