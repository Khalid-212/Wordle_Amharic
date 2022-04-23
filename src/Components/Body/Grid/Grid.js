import React from "react";
import './Grid.css';
import { ToastContainer, toast } from 'react-toastify';

import GridRow from './GridRow/GridRow';
//
function Grid({ words, final, evaluated, shake }) {
  const rowSize = [0, 0, 0, 0, 0, 0]
  return (
    <div className="grid_wrapper">
      {rowSize.map((k, i) => <GridRow key={i} row={i} word={words[i]} final={final[i]} evaluated={evaluated[i]} shake={shake} />)}
    </div>
  );
}

export default Grid;