import React, { useState, useEffect, useRef } from "react";
import "./styles.css";

const useBeforeLeave = (onBefore) => {
  if (typeof onBefore !== "function") {
    return;
  }
  const handle = (event) => {
    const { clientY } = event;
    if (clientY <= 0) {
      onBefore();
    }
  };
  useEffect(() => {
    document.addEventListener("mouseleave", handle);
    return () => document.removeEventListener("mouseleave", handle);
  }, []);
};

const App = () => {
  const begforLife = () => console.log("Pls dont leave");
  useBeforeLeave(begforLife);
  return (
    <div className="App">
      <h1>Hi</h1>
    </div>
  );
};

export default App;
