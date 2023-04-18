const scoreGen = (
  home, away, homeWin, awayWin, 
  resultHome, resultAway, resultHomeWin, resultAwayWin
  ) => {

  let score = 0;
  let string = []

    if (home === resultHome) {
      score+=20
      string.push('Home Score Correct')

    }
    if (away === resultAway) {
      score+=20
      string.push('Away Score Correct')
    }
    if (homeWin === resultHomeWin || awayWin === resultAwayWin) {
      score+=50
      string.push('Outcome Correct!')
    }
    
    if (string.length === 3) {
      score+=10
      string.push('All Correct!');
    }
  
  string.push(score)
  return string
}

export default scoreGen;