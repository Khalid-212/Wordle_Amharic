export const endGame = (obj) => {
  const results = localStorage.results ? JSON.parse(localStorage.results) : [];
  obj.date = new Date().toDateString();
  results.push(obj);
  localStorage.results = JSON.stringify(results);
};
export const gameData = () => {
  const results = localStorage.results
    ? JSON.parse(localStorage.results)
    : false;
  let totalPlayed = results.length;
  let winCount = 0;
  let winPercent = 0;
  let maxStreak = 0;
  let currentStreak = 0;
  const progress = new Array(6).fill(0);
  const today = new Array(6).fill(false);
  if (results) {
    winCount = results.filter((r) => r.win).length;
    winPercent = Math.floor((winCount * 100) / totalPlayed);
    results.forEach((result) => {
      if (result.win) {
        progress[result.rowCount] += 1;
        currentStreak += 1;
      } else {
        currentStreak = 0;
      }
      maxStreak = Math.max(currentStreak, maxStreak);
    });
    const last = results[totalPlayed - 1]
    today[last.rowCount] = last.win
  }

  return {totalPlayed,winCount,winPercent,maxStreak,currentStreak,progress,today}
};
