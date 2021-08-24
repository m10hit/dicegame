const validateWinningPoint = winningPoint => {
  if (Number.isInteger(winningPoint) && winningPoint > 0) {
    return true;
  }
  return false;
};

module.exports = validateWinningPoint;
