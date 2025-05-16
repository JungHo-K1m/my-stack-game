// src/App.jsx
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import GamePage from './pages/GamePage'
import RankingPage from './pages/RankingPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<GamePage />} />
      <Route path="/ranking" element={<RankingPage />} />
    </Routes>
  )
}

export default App
