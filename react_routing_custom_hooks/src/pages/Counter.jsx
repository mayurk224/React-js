import React, { memo } from "react";

function Counter({ countValue, onClick }) {
  return (
    <div>
      <h2>Count {countValue}</h2>
      <button onClick={onClick}>Count</button>
    </div>
  );
}

export default memo(Counter);
