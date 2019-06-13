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
                .send({ 'nom': '', 'prenom': '' })
                .end((err, res) => {
                    should.not.exist(err);
                    res.status.should.eql(500);
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

    describe('HTTP PUT /profil/:id', () => {
        it('should update a SINGLE blob on /profil/<id> PUT', function(done) {
            chai.request(app)
              .get('/profil')
              .end(function(err, res){
                chai.request(app)
                  .put('/profil/'+res.body[1]._id)
                  .send({'nom': 'Spider', 'prenom': 'man'})
                  .end(function(err, res){
                    should.not.exist(err);
                    res.status.should.eql(200);
                    done();
                });
              });
          });
    });

    describe('HTTP PUT /profil/:id', () => {
        it('should delete a SINGLE profil on /profil/<id> DELETE', function(done) {
            chai.request(app)
              .get('/profil')
              .end(function(err, res){
                chai.request(app)
                  .delete('/profil/'+res.body[5]._id)
                  .end(function(error, response){
                    should.not.exist(err);
                    res.status.should.eql(200);
                    done();
                });
              });
          });
    });

});