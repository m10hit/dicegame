#!/usr/bin/env node
const inquirer = require('inquirer');
const validatePlayers = require('./validations/playerValidator');
const validateWinningPoint = require('./validations/pointValidator');
const shufflePlayers = require('./utils/shufflePlayers');
const startGame = require('./utils/startGame');

questions = [
  {
    type: 'number',
    name: 'numberOfPlayers',
    message: 'Enter the number of players',
  },
  {
    type: 'number',
    name: 'winningPoint',
    message: 'Enter the winning point',
  },
];

/* --------------------------------------TODO-----------------------------------------
 * Player-1 to Player-N
 * Prompt a message when a players turn arrives
 * Simulate dice role, and add points to the player's score
 * Print rank table after each round
 * Apt message for consecutive change on getting a 6 or skip chance on getting 1 twice
 * When user completes the game, print a message
 * -----------------------------------------------------------------------------------
 */
const play = async () => {
  const players = [];
  const winnersList = []; //to hold the winning players
  try {
    const { numberOfPlayers, winningPoint } = await inquirer.prompt(questions);
    // Validate no. of players and winning point input given by the user
    if (
      !validatePlayers(numberOfPlayers) ||
      !validateWinningPoint(winningPoint)
    ) {
      console.log(
        'Either number of players or winning point is invalid.. Please Try again'
      );
      throw new Error('Invalid input');
    } else {
      for (let player = 1; player <= numberOfPlayers; player++) {
        const playerCreation = {
          name: `Player-${player}`,
          totalScore: 0,
          rank: 1,
          lastPoint: 0,
          skip: false,
        };
        players.push(playerCreation);
      }
      console.table(players, ['name', 'totalScore', 'rank']);
      console.log('------------------------------------');
      console.log('   The game of dice has started');
      console.log('------------------------------------');
      shufflePlayers(players);
      startGame(players, numberOfPlayers, winningPoint, winnersList);
    }
  } catch (err) {
    console.error(err);
  }
};

play();
