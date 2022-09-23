import React from "react";

const Radio = ({ id, name, displayedText, isChecked, ...props }) => {
  return (
    <input
      checked={isChecked ? true: false}
      type="radio" 
      id={id} 
      name={name} 
      {...props}
    />
  );
};

export default Radio;
