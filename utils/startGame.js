const rollingDiceHandler = require('./rollingDiceHandler');
const playerStanding = require('./playerStanding');

const startGame = async (
  players,
  numberOfPlayers,
  winningPoint,
  winnersList
) => {
  for (let player of players) {
    player = await rollingDiceHandler(player, numberOfPlayers, winningPoint);
    const combinedPlayerList = playerStanding(winnersList, players);
    if (player.totalScore >= winningPoint) {
      winnersList.push(player);
      console.log(
        `Congratulations ${player.name}!!! you have got rank ${player.rank}`
      );
      const winningPlayerIndex = players.indexOf(player);

      // Remove the winning player from the list of players
      if (winningPlayerIndex >= -1) {
        players.splice(winningPlayerIndex, 1);
      }
    }
  }
  // Displays player standing
  if (players.length > 0) {
    numberOfPlayers -= 1;
    await startGame(players, numberOfPlayers, winningPoint, winnersList);
  }
};

module.exports = startGame;
