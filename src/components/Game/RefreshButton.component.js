import React from "react";

export default props => {
  return (
    <button className="btn btn-outline-secondary mb-3" onClick={() => props.onClickRefresh() }>やり直す</button>
  )
}