import React from "react";
import "./leftcomponent.css";


function Option({ active, text, Icon,onClick }) {
  return (
      
    <span className="elements" onClick={onClick}>
      <h4><Icon />{text}</h4>
    </span>
    
  );
}

export default Option;