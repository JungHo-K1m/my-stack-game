// src/components/GameOver.jsx
import React from 'react'

const GameOver = ({ onRestart }) => {
  return (
    <div id="gameover" style={{ display: 'flex' }}>
      <div className="content">
        <h1>Game Over</h1>
        <p>Click to play again.</p>
        <button onClick={onRestart}>다시 시작</button>
      </div>
    </div>
  )
}

export default GameOver
