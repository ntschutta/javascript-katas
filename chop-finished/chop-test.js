var myChop = require('./chop.js')
var assert = require('assert');

describe('chop (a binary search)', function(){
  it('should return -1 when item is not in the array', function(){
    assert.equal(-1, myChop.chop(3, []));
    assert.equal(-1, myChop.chop(3, [1]));
    assert.equal(-1, myChop.chop(0, [1, 3, 5]));
    assert.equal(-1, myChop.chop(2, [1, 3, 5]));
    assert.equal(-1, myChop.chop(4, [1, 3, 5]));
    assert.equal(-1, myChop.chop(6, [1, 3, 5]));
    assert.equal(-1, myChop.chop(0, [1, 3, 5, 7]));
    assert.equal(-1, myChop.chop(2, [1, 3, 5, 7]));
    assert.equal(-1, myChop.chop(4, [1, 3, 5, 7]));
    assert.equal(-1, myChop.chop(6, [1, 3, 5, 7]));
    assert.equal(-1, myChop.chop(8, [1, 3, 5, 7]));
  });
  it('should return 0 when item is first index', function(){
    assert.equal(0, myChop.chop(1, [1]));
    assert.equal(0, myChop.chop(1, [1, 3, 5]));
    assert.equal(0, myChop.chop(1, [1, 3, 5, 7]));
  });

  it('should return index when item is in array', function(){
    assert.equal(1, myChop.chop(3, [1, 3, 5]));
    assert.equal(2, myChop.chop(5, [1, 3, 5]));
    assert.equal(1, myChop.chop(3, [1, 3, 5, 7]));
    assert.equal(2, myChop.chop(5, [1, 3, 5, 7]));
    assert.equal(3, myChop.chop(7, [1, 3, 5, 7]));
  });
})
