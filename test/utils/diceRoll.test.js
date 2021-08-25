const diceRoll = require('../../utils/diceRoll');

describe('test the roll dice function', () => {
  it('dice roll generates a random number between 1 and 6', () => {
    const result = diceRoll();
    expect(result).not.toBeLessThan(1);
    expect(result).not.toBeGreaterThan(6);
  });
});
