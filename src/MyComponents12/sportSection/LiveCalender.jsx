import React from 'react'
import Header2 from '../../MyComponent/Header2'
import GameList from '../../MyComponents2/GameList'
import TimeZone from '../../MyComponents2/TimeZone'
// import Table2 from "../../MyComponents2/Table2"
import CalenderTable from '../../MyComponents13/CalenderTable'

const LiveCalender = () => {
  return (
    <div>
        <GameList/>
        <TimeZone/>
        <CalenderTable/>
    </div>
  )
}

export default LiveCalender