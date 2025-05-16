import React, { useRef } from 'react'
import CanvasContainer from '../components/CanvasContainer'
import GameOver from '../components/GameOver'
import Instructions from '../components/Instructions'
import Score from '../components/Score'
import { useGameStore } from '../store/useGameStore'

const GamePage = () => {
  const canvasRef = useRef()
  const resetGameState = useGameStore((state) => state.resetGameState)

  const handleRestart = () => {
    // 상태 초기화
    resetGameState()
    // canvas 초기화 (CanvasContainer 내부에서 expose 예정)
    canvasRef.current?.resetGame?.()
  }

  return (
    <div className="game-page">
      <Instructions />
      <GameOver onRestart={handleRestart} />
      <Score />
      <CanvasContainer ref={canvasRef} />
    </div>
  )
}

export default GamePage
