import React from "react";

function CommonTextArea({
  label,
  name,
  value,
  cols,
  id,
  placeholder,
  onChange,
}) {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <textarea
        name={name}
        id={id}
        cols={cols}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      ></textarea>
    </div>
  );
}

export default CommonTextArea;
