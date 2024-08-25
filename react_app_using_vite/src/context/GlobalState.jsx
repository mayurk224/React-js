import React, { createContext, useState } from "react";

export const GlobalContext = createContext(null);
function GlobalState({ children }) {
  const [theme, setTheme] = useState("light");
  function handleClick() {
    setTheme(theme == "light" ? "dark" : "light");
  }
  return (
    <GlobalContext.Provider value={{ theme, handleClick }}>
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalState;
