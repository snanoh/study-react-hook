import React, { useState, useEffect, useRef } from "react";
import "./styles.css";

const usePreventLeave = () => {
  const listener = (event) => {
    event.preventDefault();
    event.returnValue = "";
  };
  const enablePrevent = () => window.addEventListener("beforeunload", listener);
  const disenablePrevent = () =>
    window.removeEventListener("beforeunload", listener);
  return { enablePrevent, disenablePrevent };
};

const App = () => {
  const { enablePrevent, disenablePrevent } = usePreventLeave();
  return (
    <div className="App">
      <button onClick={enablePrevent}>Protect</button>
      <button onClick={disenablePrevent}>Unprotect</button>
    </div>
  );
};

export default App;
