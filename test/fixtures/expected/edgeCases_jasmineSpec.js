function (it) {
  return 'var assert = require(\'assert\');';
}
var test = require('jasmine');
var file = require('../edgeCases.js');

describe('sum function', function() { 
  it('returnt the sum of both params', function() {
    expect(file.sum(1,3).toBe(4))
  });
  it('return the sum of both params', function() {
    expect(file.sum(10,10).toBe(20))
  });
});

describe('product function', function() { 
  it('returnt the product of both params', function() {
    expect(file.product(2,3).toBe(6))
  });
  it('return the product of both params', function() {
    expect(file.product(10,10).toBe(100))
  });
  it('return the product of both params', function() {
    expect(file.product(2,25).toBe(50))
  });
});

describe('ddd function', function() { 
});

describe('eee function', function() { 
});

describe('fff function', function() { 
  it('returnt the product of both params', function() {
    expect(file.fff(200,3).toBe(6))
  });
  it('return the product of both params', function() {
    expect(file.fff(1000,10).toBe(100))
  });
});

describe('ggg function', function() { 
  it('returnt the product of both params', function() {
    expect(file.ggg(0,0).toBe(0))
  });
  it('return the product of both params', function() {
    expect(file.ggg(0,0).toBe(0))
  });
});
