import React from "react";

const GenerateForm = props => {
  return(
    <form>
      <div className="form-group">
        <label htmlFor="coincidence">偶然役</label>
        <input type="checkbox" id="coincidence"></input>
      </div>
      <div className="form-group">
        <label htmlFor="yakuman">役満</label>
        <input type="checkbox" id="yakuman"></input>
      </div>
      <div className="form-group">
        <label htmlFor="w-yakuman">W役満</label>
        <input type="checkbox" id="w-yakuman"></input>
      </div>
      <button className="btn btn-primary" type="button" onClick={() => props.onSubmit()}>作成</button>
    </form>
  )
};

export default GenerateForm;