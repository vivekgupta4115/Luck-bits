import React from 'react'
import GameSearch from './GameSearch'
import AllGames from './AllGames'
import SlideGame from './SlideGame'

export default function GamePage() {
  return (
    <div>
      <SlideGame></SlideGame>
      <GameSearch></GameSearch>
    <AllGames></AllGames>
    </div>
  )
}
