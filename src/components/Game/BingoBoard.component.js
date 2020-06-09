import React from "react";
import Item from "./Item.component.js";


const BingoBoard = props => {

  return (
    <div id="board">
      {
        [...Array(16).keys()].map(i => {
          return <Item key={i} index={i} name={props.bingo[i].name} isDone={props.bingo[i].isDone} onClickItem={props.onClickItem}/>
        })
      }
    </div>
  )
}

export default BingoBoard;