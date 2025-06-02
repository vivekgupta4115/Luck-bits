import React from 'react'
import Option from './Option'
import Game from './Game'
import Table from './Table'

export default function Livepage() {
     const disclaimerText =
       "The time display shown within live betting serves as an indicator. The company takes no responsibility for the correctness and currentness of the displayed information like score or time.";
  return (
    <div>
      <Option></Option>
      <Game></Game>
      <Table></Table>
      {/* I am founder code live page. */}
      <div className="flex items-center justify-center mt-5">
        <div
          className="text-[#adb1b9] p-0 rounded-lg max-w-2xl w-full align-content-center"
          // style={{ padding: "5vh 10px" }}
        >
          <p className="text-sm sm:text-base text-center">
            {disclaimerText}
          </p>
        </div>
      </div>
    </div>
  );
}
