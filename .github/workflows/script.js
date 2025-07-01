function predictWinner() {
  const team1 = document.getElementById("team1").value;
  const team2 = document.getElementById("team2").value;
  const result = document.getElementById("result");

  if (!(team1 in teamsData) || !(team2 in teamsData)) {
    result.innerHTML = "Both teams must be from the list: " + Object.keys(teamsData).join(", ");
    return;
  }

  const winRate1 = teamsData[team1].wins / (teamsData[team1].wins + teamsData[team1].losses);
  const winRate2 = teamsData[team2].wins / (teamsData[team2].wins + teamsData[team2].losses);

  const total = winRate1 + winRate2;
  const rand = Math.random() * total;

  const predictedWinner = rand < winRate1 ? team1 : team2;

  result.innerHTML = `Based on past stats, <strong>${predictedWinner}</strong> is more likely to win.`;
}

