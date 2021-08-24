const playerStanding = (winnersList, players) => {
  let clonePlayers = [...players];
  if (players.length) {
    clonePlayers.sort((a, b) => b.totalScore - a.totalScore);

    var tieScore = 0;
    clonePlayers[0].rank = winnersList.length + 1;
    for (let i = 1; i < clonePlayers.length; i++) {
      if (clonePlayers[i].totalScore === clonePlayers[i - 1].totalScore) {
        tieScore++;
        clonePlayers[i].rank = clonePlayers[i - 1].rank;
      } else {
        clonePlayers[i].rank = clonePlayers[i - 1].rank + 1 + tieScore;
        tieScore = 0;
      }
    }
  }
  const combinePlayerList = [...winnersList, ...clonePlayers];
  console.table(combinePlayerList, ['name', 'totalScore', 'rank']);
  return combinePlayerList;
};
module.exports = playerStanding;
