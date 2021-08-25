const validateWinningPoint = require('../../validations/pointValidator');

describe('validate the Winning Point input', () => {
  it('when input is a string', () => {
    const result = validateWinningPoint('random string');
    expect(result).toBeFalsy();
  });
  it('when input is a numerical string', () => {
    const result = validateWinningPoint('123');
    expect(result).toBeFalsy();
  });
  it('when input is a number', () => {
    const result = validateWinningPoint(3);
    expect(result).toBeTruthy();
  });
  it('when input is a number less than or equal to 0', () => {
    const result1 = validateWinningPoint(0);
    expect(result1).toBeFalsy();
    const result2 = validateWinningPoint(-1);
    expect(result2).toBeFalsy();
  });
  it('when input is null', () => {
    const result = validateWinningPoint(null);
    expect(result).toBeFalsy();
  });
  it('when input is an empty array', () => {
    const result = validateWinningPoint([]);
    expect(result).toBeFalsy();
  });
});
