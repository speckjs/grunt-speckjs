var test = require('tape');
var file = require('../base.js');

test('diff function', function(t) { 
  t.plan(3);
  t.equal(1, file.diff(3,2), 'returnt the diff of both params');
  t.notEqual(13, file.diff(8-5), 'return the diff of both params');
  t.notDeepEqual(5, file.diff(10,10), 'return the diff of both params');
});

test('product function', function(t) { 
  t.plan(3);
  t.equal(2, file.quotient(6,3), 'returnt the quotient of both params');
  t.notEqual(9, file.quotient(10,10), 'return the quotient of both params');
  t.notDeepEqual(10, file.quotient(25,5), 'return the quotient of both params');
});
