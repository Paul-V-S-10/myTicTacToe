import React, { useEffect, useState } from 'react'
import './App.css'

const App = () => {
  const [isNext, setIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(''));
  const [winner, setWinner] = useState(null);

  const resetGame = () => {
    setIsNext(true);
    setSquares(Array(9).fill(''));
    setWinner(null)
  }

  const handleSquare = (i) => {
    if (squares[i] === "" && !winner) {
      setSquares((previous) => {
        const updatedSquare = [...previous];
        updatedSquare[i] = isNext ? '⛌' : '〇';
        return updatedSquare;

      });
      setIsNext(!isNext)
    }
  };

  useEffect(() => {
    const checkWinner = () =>{
      const combos = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
      ]

      for(let combo of combos){
        const [a,b,c] = combo;
        if(squares[a] !=='' && squares[a]===squares[b] && squares[a] ===squares[c]){
          return squares[a]
        }
      };

      if(squares.every((square)=>square!='')){
        return 'draw'
      }
      return null
    }

    const winner = checkWinner()
    if(winner){
      setWinner(winner)
      setTimeout(()=>{
        alert(winner === 'draw' ? 'It\'s a draw!!' : `Congratulations! ${winner} is the winner`);
        resetGame();
      },100)
    }
  },[squares])

  return (
    <div className='app'>
      <div className="container">
        <h1 className='heading' >TIC-TAC-TOE</h1>
        <div className="newGame" onClick={resetGame}><button className='newGameButton'>New Game</button></div>
        <div className="row">
          <div className="column" onClick={() => handleSquare(0)}>
            {squares[0]}
          </div>
          <div className="column" onClick={() => handleSquare(1)}>
            {squares[1]}
          </div>
          <div className="column" onClick={() => handleSquare(2)}>
            {squares[2]}
          </div>
        </div>
        <div className="row">
          <div className="column" onClick={() => handleSquare(3)}>
            {squares[3]}
          </div>
          <div className="column" onClick={() => handleSquare(4)}>
            {squares[4]}
          </div>
          <div className="column" onClick={() => handleSquare(5)}>
            {squares[5]}
          </div>
        </div>
        <div className="row">
          <div className="column" onClick={() => handleSquare(6)}>
            {squares[6]}
          </div>
          <div className="column" onClick={() => handleSquare(7)}>
            {squares[7]}
          </div>
          <div className="column" onClick={() => handleSquare(8)}>
            {squares[8]}
          </div>
        </div>
        <div className="players">
          <div className={isNext ? 'xPlayerP' : 'xPlayer'}>⛌</div>
          <div className={isNext ? 'yPlayer' : 'yPlayerP'}>〇</div>
        </div>
      </div>
    </div>
  )
}

export default App