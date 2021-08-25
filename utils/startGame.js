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
    if (player.totalScore >= winningPoint) {
      player.rank = winnersList.length + 1;
      winnersList.push(player);
      console.log(
        `Congratulations ${player.name}!!! you have got rank ${player.rank}`
      );
    }
  }

  // Filter players if total score is more than winning point
  players = players.filter(player => player.totalScore < winningPoint);

  // Displays player standing
  playerStanding(winnersList, players);
  if (players.length > 0) {
    numberOfPlayers -= 1;
    await startGame(players, numberOfPlayers, winningPoint, winnersList);
  } else {
    process.exit(0);
  }
};

module.exports = startGame;
