var chai = require('chai');
var should = chai.should();
var file = require('../base.js');

describe('diff function', function() { 
  it('returnt the diff of both params', function() {
    file.diff(3,2).should.equal(1));
  });
  it('return the diff of both params', function() {
    file.diff(8-5).should.not.equal(13));
  });
  it('return the diff of both params', function() {
    file.diff(10,10).should.not.deep.equal(5));
  });
});

describe('product function', function() { 
  it('returnt the quotient of both params', function() {
    file.quotient(6,3).should.equal(2));
  });
  it('return the quotient of both params', function() {
    file.quotient(10,10).should.not.equal(9));
  });
  it('return the quotient of both params', function() {
    file.quotient(25,5).should.not.deep.equal(10));
  });
});
