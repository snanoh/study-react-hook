import React, { useState, useEffect, useRef } from "react";
import "./styles.css";

const useFadeIn = (duration = 1, delay = 0) => {
  if (typeof duration !== "number" || typeof delay !== "number") {
    return;
  }
  const element = useRef();
  useEffect(() => {
    const { current } = element;
    current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
    current.style.opacity = 1;
  }, []);
  return { ref: element, style: { opacity: 0 } };
};

const App = () => {
  const fadeinH1 = useFadeIn(1, 2);
  const fadeinP = useFadeIn(5, 10);
  return (
    <div className="App">
      <h1 {...fadeinH1}>Hi</h1>
      <p {...fadeinP}>lorem ipsum alalalal</p>
    </div>
  );
};

export default App;
