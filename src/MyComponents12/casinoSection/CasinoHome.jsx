import React from 'react'
import Navbar from "../../MyComponents13/casinoComponents/Navbar";
import ImageSlider from "../../MyComponents13/casinoComponents/ImageSlider";
import GameSlider from "../../MyComponents13/casinoComponents/GameSlider";
import SearchOption from "../../MyComponents13/casinoComponents/SearchOption";

import Cards from '../../MyComponents13/casinoComponents/Cards'
import ShowBtnCard from "../../MyComponents13/casinoComponents/ShowBtnCard";



const CasinoHome = () => {
  return (
    <div>
        <div>
            <ImageSlider/>
            <GameSlider/>
            <SearchOption/>
            {/* <Cards/> */}
            {/* <ShowBtnCard/> */}
        </div>
    </div>
  )
}

export default CasinoHome


