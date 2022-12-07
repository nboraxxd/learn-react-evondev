import React from 'react'

const Result = (props) => {
  return (
    <p className="game-result">
      {props.winner ? 'Winner is ' : ''}
      <span className={props.winner === 'X' ? 'game-cross' : 'game-circle'}>
        {props.winner ? props.winner : ''}
      </span>

      {props.equalList.length === 9 && !props.winner ? (
        <span>
          <span className="game-cross">X</span> and <span className="game-circle">O</span> is equal
        </span>
      ) : (
        ''
      )}
    </p>
  )
}

export default Result
