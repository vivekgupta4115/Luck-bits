import React from 'react'
import Header3 from './Header3'
import FilterPannel from "./FilterPannel";
import DropDownTable from './DropDownTable';

export default function Result() {
  return (
    <div>
      <Header3 />
      <FilterPannel />
      <DropDownTable/>
    </div>
  );
}
