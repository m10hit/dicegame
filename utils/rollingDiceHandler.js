const inquirer = require('inquirer');
const diceRoll = require('../utils/diceRoll');

const rollingDiceHandler = async (player, numberOfPlayers, winningPoint) => {
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
      console.log(`The number on the dice is ${pointsEarned}`);
      return player;
    }
    if (pointsEarned === 6) {
      console.log(`${player.name} got 6. They get another chance`);
      player.lastPoint = 6;
      player = await rollingDiceHandler(player, numberOfPlayers, winningPoint);
    } else if (pointsEarned === 1 && player.lastPoint === 1) {
      player.skip = true;
      console.log(
        `${player.name} got 1 again.... they will be skipped in the next round`
      );
    } else {
      console.log(`The number on the dice is ${pointsEarned}`);
      player.lastPoint = pointsEarned;
    }
    return player;
  } catch (err) {
    console.error(err);
  }
};

module.exports = rollingDiceHandler;
