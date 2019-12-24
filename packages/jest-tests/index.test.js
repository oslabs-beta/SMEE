/* eslint-disable no-undef */
const math = require('@smee/exported');

describe('Math add tests', () => {
  const sum = math.add(3, 4);
  it('Add up to 7', () => {
    expect(sum).toBe(7);
  });
  it('The type should be a number', () => {
    expect(typeof math.add(3, 4)).toBe('number');
  });
});
