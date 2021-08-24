const inquirer = require('inquirer');
const diceRoll = require('../utils/diceRoll');

const startGame = async (players, numberOfPlayers, winningPoint) => {
  const winners = []; //to hold the winning players
  for (let player of players) {
    const playerInfo = await rollingDice(player, numberOfPlayers, winningPoint);
    if (playerInfo.totalScore >= winningPoint) {
      winners.push(playerInfo);
      const winnerIndex = array.indexOf(playerInfo);
      if (winnerIndex >= -1) {
        players.splice(winnerIndex, 1);
      }
    }
  }
};

const rollingDice = async (player, numberOfPlayers, winningPoint) => {
  playerTurn = [
    {
      type: 'list',
      name: 'pointsEarned',
      message: `${player.name} its your turn to roll the dice`,
      choices: ['r'],
    },
  ];
  if (player.skip) {
    player.lastPoint = 0;
    player.skip = false;
    return player;
  }
  try {
    await inquirer.prompt(playerTurn);
    const pointsEarned = diceRoll();
    player.totalScore += pointsEarned;
    if (player.totalScore >= winningPoint) {
      return player;
    }
    if (pointsEarned === 6) {
      console.log(`${player.name} got 6. They get another chance`);
      player.lastPoint = 6;
      rollingDice(player, numberOfPlayers, winningPoint);
    } else if (pointsEarned === 1 && player.lastPoint === 1) {
      player.skip = true;
      console.log(`${player.name} will be skipped in the next round`);
    } else {
      console.log(`The number on the dice is ${pointsEarned}`);
      player.lastPoint = pointsEarned;
    }
    return player;
  } catch (err) {
    console.error(err);
  }
};

module.exports = startGame;
