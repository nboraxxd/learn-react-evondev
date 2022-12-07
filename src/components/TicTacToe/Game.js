import React, { useState } from 'react'
import { calculateWinner } from '../helpers'
import Board from './Board'
import './GameStyle.scss'
import Result from './Result'

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [crossIsNext, setCrossIsNext] = useState(true)
  const winner = calculateWinner(board)
  let equalList = board.filter((cell) => cell !== null)

  const handleClick = (index) => {
    const boardClone = [...board]
    if (winner || boardClone[index]) return

    boardClone[index] = crossIsNext ? 'X' : 'O'
    setBoard(boardClone)
    setCrossIsNext((crossIsNext) => !crossIsNext)
  }

  const handleResetGame = () => {
    setBoard(Array(9).fill(null))
    setCrossIsNext(true)
    equalList = []
  }

  return (
    <div className="game">
      <Board cellList={board} onClick={handleClick}></Board>
      <Result winner={winner} equalList={equalList}></Result>
      <button
        className="game-reset"
        onClick={handleResetGame}
        hidden={winner || equalList.length === 9 ? false : true}
      >
        Play Again!
      </button>
    </div>
  )
}

export default Game
