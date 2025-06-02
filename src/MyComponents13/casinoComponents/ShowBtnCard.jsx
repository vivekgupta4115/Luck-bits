import React from 'react'
import Ortak from '../showCardItems/Ortak';
import BfthArena from '../showCardItems/BfthArena';
import New from '../showCardItems/New';
import PopularGames from '../showCardItems/PopularGames';

const ShowBtnCard = () => {
  return (
    <div>
        <Ortak/>
        <BfthArena/>
        <New/>
        <PopularGames/>
    </div>
  )
}

export default ShowBtnCard;