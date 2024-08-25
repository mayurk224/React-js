import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function ContextText() {
  const { theme } = useContext(GlobalContext);
  return (
    <h1 style={{ color: theme === "light" ? "#fff" : "#000" }}>Hello World!</h1>
  );
}

export default ContextText;
