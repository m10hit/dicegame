const validatePlayers = require('../../validations/playerValidator');

describe('validate the number of players input', () => {
  it('when input is a string', () => {
    const result = validatePlayers('random string');
    expect(result).toBeFalsy();
  });
  it('when input is a numerical string', () => {
    const result = validatePlayers('123');
    expect(result).toBeFalsy();
  });
  it('when input is a number', () => {
    const result = validatePlayers(3);
    expect(result).toBeTruthy();
  });
  it('when input is a number less than or equal to 1', () => {
    const result1 = validatePlayers(1);
    expect(result1).toBeFalsy();
    const result2 = validatePlayers(0);
    expect(result2).toBeFalsy();
  });
  it('when input is null', () => {
    const result = validatePlayers(null);
    expect(result).toBeFalsy();
  });
  it('when input is an empty array', () => {
    const result = validatePlayers([]);
    expect(result).toBeFalsy();
  });
});
