import React from "react";

function CommonInput({ label, name, type, id, value, onChange, placeholder }) {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        type={type || "text"}
        name={name}
        id={id}
        placeholder={placeholder || "Enter Value"}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default CommonInput;
