// src/store/useGameStore.js
import { create } from 'zustand'

export const useGameStore = create((set) => ({
  isGameStarted: false,
  isGameOver: false,
  score: 0,
  resetGameState: () => set({ isGameStarted: false, isGameOver: false, score: 0 }),
  setGameOver: () => set({ isGameOver: true }),
  incrementScore: () => set((state) => ({ score: state.score + 1 })),
}))
