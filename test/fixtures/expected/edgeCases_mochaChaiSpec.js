var chai = require('chai');
var should = chai.should();
var file = require('../edgeCases.js');

describe('sum function', function() { 
  it('returnt the sum of both params', function() {
    file.sum(1,3).should.equal(4));
  });
  it('return the sum of both params', function() {
    file.sum(10,10).should.equal(20));
  });
});

describe('product function', function() { 
  it('returnt the product of both params', function() {
    file.product(2,3).should.equal(6));
  });
  it('return the product of both params', function() {
    file.product(10,10).should.equal(100));
  });
  it('return the product of both params', function() {
    file.product(2,25).should.equal(50));
  });
});

describe('ddd function', function() { 
});

describe('eee function', function() { 
});

describe('fff function', function() { 
  it('returnt the product of both params', function() {
    file.fff(200,3).should.equal(6));
  });
  it('return the product of both params', function() {
    file.fff(1000,10).should.equal(100));
  });
});

describe('ggg function', function() { 
  it('returnt the product of both params', function() {
    file.ggg(0,0).should.equal(0));
  });
  it('return the product of both params', function() {
    file.ggg(0,0).should.equal(0));
  });
});
