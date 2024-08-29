import React, { useEffect, useRef } from "react";

function Hooks() {
  const countValue = useRef(0);
  const divElem = useRef();
  const inputRefElem = useRef();
  function handleClick() {
    countValue.current++;
    console.log("Clicked", countValue.current);
  }

  useEffect(() => {
    const getDivRef = divElem.current;
    inputRefElem.current.focus();
    getDivRef.style.color = "red";
    setTimeout(() => {
      getDivRef.style.color = "green";
    }, 2000);
    console.log(getDivRef);
  });
  return (
    <div>
      <h1> useRef, useCallback , useMemo</h1>
      <button onClick={handleClick}>Click</button>
      <div ref={divElem}>Random Text</div>
      <input name="name" type="name" id="name" ref={inputRefElem} />
    </div>
  );
}

export default Hooks;
