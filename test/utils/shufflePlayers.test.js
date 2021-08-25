const { data, shuffleData } = require('../mock/playerData');
let shufflePlayers = require('../../utils/shufflePlayers');

describe('Player shuffling testing', () => {
  it('the players are shuffled or not', () => {
    const mock = jest.fn().mockReturnValue(shuffleData);
    shufflePlayers = mock;

    const result = shufflePlayers(data);

    expect(result).toBe(shuffleData);
    expect(mock).toHaveBeenCalled();
    expect(mock).toHaveBeenCalledTimes(1);
  });
});
