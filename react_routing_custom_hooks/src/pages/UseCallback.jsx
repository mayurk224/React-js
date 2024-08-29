import React, { useCallback, useState } from "react";
import Counter from "./Counter";

function UseCallback() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  const memo = useCallback(() => setCount(count + 1), [count]);
  const memo2 = useCallback(() => setCount2(count2 + 1), [count]);
  return (
    <div>
      <h1>UseCallback</h1>
      <Counter countValue={count} onClick={memo} />
      <Counter countValue={count2} onClick={memo2} />
    </div>
  );
}

export default UseCallback;
