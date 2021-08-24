const validatePlayers = numberOfPlayers => {
  if (Number.isInteger(numberOfPlayers) && numberOfPlayers >= 2) {
    return true;
  }
  return false;
};

module.exports = validatePlayers;
