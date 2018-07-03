const { assert } = require('chai');
const Tail = require('../lib/Tail');

describe('Tail', () => {
  it('should instantiate an object', () => {
    let tail = new Tail(100, 100, 10, 10, '#ffffff');

    assert.equal(typeof tail, 'object');
  });

  it('should have a starting point', () => {
    let tail = new Tail(100, 100, 10, 10, '#ffffff');

    assert.equal(tail.x, 100);
    assert.equal(tail.y, 100);
  });

  it('should have a width', () => {
    let tail = new Tail(100, 100, 10, 10, '#ffffff');

    assert.equal(tail.width, 10);
  });

  it('should have a height', () => {
    let tail = new Tail(100, 100, 10, 10, '#ffffff');

    assert.equal(tail.height, 10);
  });

  it('should have a color', () => {
    let tail = new Tail(100, 100, 10, 10, '#ffffff');

    assert.equal(tail.color, '#ffffff');
  });
});
