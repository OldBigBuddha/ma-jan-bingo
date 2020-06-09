import React, { useState } from "react";

const GenerateForm = props => {

  const [isCoincidence, setCoincidence] = useState(false);
  const [isYakuman, setYakuman] = useState(false);
  const [isWYakuman, setWYakuman] = useState(false);

  return(
    <form className="mr-5">
      <div className="form-group">
        <label htmlFor="coincidence">偶然役</label>
        <input type="checkbox" id="coincidence" checked={isCoincidence} onChange={e => setCoincidence(e.currentTarget.checked)}></input>
      </div>
      <div className="form-group">
        <label htmlFor="yakuman">役満</label>
        <input type="checkbox" id="yakuman" checked={isYakuman} onChange={e => setYakuman(e.currentTarget.checked)}></input>
      </div>
      <div className="form-group">
        <label htmlFor="w-yakuman">W役満</label>
        <input type="checkbox" id="w-yakuman" checked={isWYakuman} onChange={e => setWYakuman(e.currentTarget.checked)}></input>
      </div>
      <button className="btn btn-primary" type="button" onClick={() => props.onSubmit(isCoincidence, isYakuman, isWYakuman)}>作成</button>
    </form>
  )
};

export default GenerateForm;