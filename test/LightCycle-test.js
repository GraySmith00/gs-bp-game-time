const { assert } = require('chai');
const LightCycle = require('../lib/LightCycle')

describe('LightCycle', () => {
  let lightCycle


  beforeEach('initialize the LightCycle', () => {
    lightCycle = new LightCycle(100, 100, 10, '#555666')
  })

  it('should be an object', () => {
    assert.equal(typeof lightCycle, 'object')
  })

  it('should have a starting point', () => {
    assert.equal(lightCycle.x, 100)
    assert.equal(lightCycle.y, 100)
  })

  it('should have a color', () => {
    assert.equal(lightCycle.color, '#555666')
  })

  it('should have a speed equal to its scale', () => {
    assert.equal(lightCycle.speed, lightCycle.SCL)
  })

  it('should initialize a tails array', () => {
    assert.equal(Array.isArray(lightCycle.tails), true)
  })

  it('should start with an object at the tails array index [0]', () => {
    assert.equal(typeof lightCycle.tails[0], 'object')
  })

  it('should have that objects starting point and scale be the same as the initialized lightCycle', () => {
    assert.equal(lightCycle.tails[0].x, lightCycle.x);
    assert.equal(lightCycle.tails[0].y, lightCycle.y);
    assert.equal(lightCycle.tails[0].height, lightCycle.SCL);
    assert.equal(lightCycle.tails[0].width, lightCycle.SCL);
  })
}
)

