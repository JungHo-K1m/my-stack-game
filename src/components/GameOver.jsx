// src/components/GameOver.jsx
import React from 'react'
import { Link } from 'react-router-dom'
import { useGameStore } from '../store/useGameStore'

const GameOver = ({ onRestart }) => {
  const isGameOver = useGameStore((state) => state.isGameOver)

  if (!isGameOver) return null

  return (
    <div id="gameover" style={{ display: 'flex' }}>
      <div className="content">
        <h1>Game Over</h1>
        <p>Click to play again.</p>
        <button onClick={onRestart}>다시 시작</button>
        <Link to="/ranking"><button>순위표 보기</button></Link>
      </div>
    </div>
  )
}

export default GameOver
