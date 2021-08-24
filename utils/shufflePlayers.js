const shufflePlayers = players => {
  var currentIndex = players.length,
    randomIndex;

  // Loop until the elements to shuffle are present
  while (currentIndex != 0) {
    // Pick a remaining element
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // swap the picked element with the current element
    [players[currentIndex], players[randomIndex]] = [
      players[randomIndex],
      players[currentIndex],
    ];
  }
  return players;
};

module.exports = shufflePlayers;
