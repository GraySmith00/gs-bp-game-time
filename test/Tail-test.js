const { assert } = require('chai');
const Tail = require('../lib/Tail');

describe('Tail', function() {
  it('should instantiate an object', function() {
    let tail = new Tail(100, 100, 10, 10, '#ffffff');

    assert.equal(typeof tail, 'object');
  });

  it('should have a starting point', function() {
    let tail = new Tail(100, 100, 10, 10, '#ffffff');

    assert.equal(tail.x, 100);
    assert.equal(tail.y, 100);
  });

  it('should have a width', function() {
    let tail = new Tail(100, 100, 10, 10, '#ffffff');

    assert.equal(tail.width, 10);
  });

  it('should have a height', function() {
    let tail = new Tail(100, 100, 10, 10, '#ffffff');

    assert.equal(tail.height, 10);
  });

  it('should have a color', function() {
    let tail = new Tail(100, 100, 10, 10, '#ffffff');

    assert.equal(tail.color, '#ffffff');
  });
});
