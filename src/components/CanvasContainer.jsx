// src/components/CanvasContainer.jsx
import React, { useEffect, useImperativeHandle, forwardRef, useRef } from 'react'
import { disposeGame, gameLoop, handleWindowResize, init } from '../lib/game'
import { resetStack } from '../lib/stack'

const CanvasContainer = forwardRef((_, ref) => {
  const canvasRef = useRef()

  useEffect(() => {
    init(canvasRef)
    window.addEventListener('click', gameLoop)
    window.addEventListener('resize', handleWindowResize)

    return () => {
      disposeGame(canvasRef)
      resetStack()
    }
  }, [])

  useImperativeHandle(ref, () => ({
    resetGame: () => {
      disposeGame(canvasRef)
      resetStack()
      init(canvasRef)
    },
  }))

  return <div id="container" ref={canvasRef}></div>
})

export default CanvasContainer
