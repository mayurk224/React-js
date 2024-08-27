import React from "react";

function CommonSelect({ name, label, id }) {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <select name={name} id={id}>
        
      </select>
    </div>
  );
}

export default CommonSelect;
