const playerStanding = (winnersList, players) => {
  const combinePlayerList = [...winnersList, ...players];
  combinePlayerList.sort((a, b) => b.totalScore - a.totalScore);
  //   let rank = winnersList.length + 1;

  if (winnersList.length) {
    winnersList.sort((a, b) => b.totalScore - a.totalScore);
  }

  for (let i = 1; i < combinePlayerList.length; i++) {
    if (
      combinePlayerList[i].totalScore === combinePlayerList[i - 1].totalScore
    ) {
      combinePlayerList[i].rank = combinePlayerList[i - 1].rank;
    } else {
      combinePlayerList[i].rank = i + 1;
    }
  }
  console.table(combinePlayerList, ['name', 'totalScore', 'rank']);
  return combinePlayerList;
};
module.exports = playerStanding;
