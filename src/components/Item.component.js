import React from "react";

const Item = props => {

  return (
    <div className={"item " + (props.isDone ? "done" : "")} onClick={ () => props.onClickItem(props.index) }>
      {props.name}
    </div>
  )
};

export default Item;