const { assert } = require('chai');
const LightCycle = require('../lib/LightCycle');

describe('LightCycle', () => {
  let lightCycle; 

  beforeEach('initialize the LightCycle', () => {
    lightCycle = new LightCycle(100, 100, 10, '#555666', 'Right');
  });

  it('should be an object', () => {
    assert.equal(typeof lightCycle, 'object');
  });

  it('should have a starting point', () => {
    assert.equal(lightCycle.x, 100);
    assert.equal(lightCycle.y, 100);
  });

  it('should have a color', () => {
    assert.equal(lightCycle.color, '#555666');
  });

  it('should have a speed equal to its scale', () => {
    assert.equal(lightCycle.speed, lightCycle.SCL);
  });

  it('should initialize a tails array', () => {
    assert.equal(Array.isArray(lightCycle.tails), true);
  });

  it('should start with an object at the tails array index [0]', () => {
    assert.equal(typeof lightCycle.tails[0], 'object');
  });

  it('should have tail starting point the same as the lightCycle', () => {
    assert.equal(lightCycle.tails[0].x, lightCycle.x);
    assert.equal(lightCycle.tails[0].y, lightCycle.y);
  });

  it('should have tail width & height the same as the lightCycle SCL', () => {
    assert.equal(lightCycle.tails[0].height, lightCycle.SCL);
    assert.equal(lightCycle.tails[0].width, lightCycle.SCL);
  });

  it('should start out with a direction of "Right"', () => {
    assert.equal(lightCycle.direction, 'Right');
  });

  it('should increase its x location if moving to the right', () => {
    lightCycle.direction = 'Right';
    lightCycle.move();
    assert.equal(lightCycle.tails[0].x, 110);
  });

  it('should decrease its x location if moving to the left', () => {
    lightCycle.direction = 'Left';
    lightCycle.move();
    assert.equal(lightCycle.tails[0].x, 90);
  });

  it('should increate its y location if moving down', () => {
    lightCycle.direction = 'Down';
    lightCycle.move();
    assert.equal(lightCycle.tails[0].y, 110);
  });

  it('should decrease its y location if moving up', () => {
    lightCycle.direction = 'Up';
    lightCycle.move();
    assert.equal(lightCycle.tails[0].y, 90);
  });
}
)

