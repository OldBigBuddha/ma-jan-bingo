import React from "react";
import Item from "./Item.component.js";


const BingoBoard = props => {

  return (
    <div id="board">
      { [...Array(16).keys()].map(i => <Item key={i} value={props.bingo[i]}/>)}
    </div>
  )
}

export default BingoBoard;