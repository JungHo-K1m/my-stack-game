// src/pages/RankingPage.jsx
import React from 'react'
import { Link } from 'react-router-dom'

const RankingPage = () => {
  return (
    <div className="ranking-page">
      <h1>🏆 랭킹</h1>
      <ul>
        <li>1등: User123 - 50점</li>
        <li>2등: Guest456 - 45점</li>
        {/* TODO: 실제 localStorage나 서버 연동 */}
      </ul>
      <Link to="/"><button>게임으로 돌아가기</button></Link>
    </div>
  )
}

export default RankingPage // ✅ 이 줄이 있어야 App.jsx에서 불러올 수 있음
