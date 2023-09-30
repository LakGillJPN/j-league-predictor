import { scoreGen as ScoreGenInterface } from "../../globals";

const scoreGen: ScoreGenInterface = (
  predicatedHomeScore, 
  predicatedAwayScore, 
  predicatedHomeWin, 
  predicatedAwayWin, 
  actualHomeScore, 
  actualAwayScore, 
  actualHomeWin, 
  actualAwayWin
  )  => {

  let score = 0;
  let string = []

    if (predicatedHomeScore === actualHomeScore) {
      score+=20
      string.push('Home Score Correct')
    }

    if (predicatedAwayScore === actualAwayScore) {
      score+=20
      string.push('Away Score Correct')
    }
    if (predicatedHomeWin === actualHomeWin || predicatedAwayWin === actualAwayWin) {
      score+=50
      string.push('Outcome Correct!')
    }
    
    if (string.length === 3) {
      score+=10
      string.push('All Correct!');
    }
  
  string.push(score)
  return score
}

export default scoreGen;