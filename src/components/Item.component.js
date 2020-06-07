import React, { useState, useEffect } from "react";

const Item = props => {
  const [value, setValue] = useState(props.value)
  const [isDone, setDone] = useState(false)

  useEffect(() => setValue(props.value), [props.value])

  return (
    <div className={"item " + (isDone ? "done" : "")} onClick={() => setDone(true)}>
      {value}
    </div>
  )
};

export default Item;