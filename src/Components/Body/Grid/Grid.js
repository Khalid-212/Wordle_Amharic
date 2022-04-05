import React from "react";
import './Grid.css';

import GridRow from './GridRow/GridRow';
//
function Grid() {
  const rowSize = [0,0,0,0,0]
  return (
    <div className="grid_wrapper">
      {rowSize.map(()=><GridRow />)}
    </div>
  );
}

export default Grid;