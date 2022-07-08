import React from "react";

const AdvanceBox = (props) => {

    return (
      <div>
        <label>{props.tag}</label>
        <input type={props.type} onClick={props.func} onChange={props.func1}/>
      </div>
    );
  };
  
export default AdvanceBox;
