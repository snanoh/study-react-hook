import React, { useState, useEffect, useRef } from "react";
import "./styles.css";

const useNetwork = (onChange) => {
  const [status, setStatus] = useState(navigator.onLine);
  const handelChange = () => {
    if (typeof onChange === "function") {
      onChange(navigator.onLine);
    }
    setStatus(navigator.onLine);
  };
  useEffect(() => {
    window.addEventListener("online", handelChange);
    window.addEventListener("offline", handelChange);
    () => {
      window.removeEventListener("online", handelChange);
      window.removeEventListener("offline", handelChange);
    };
  }, []);

  return status;
};

const App = () => {
  const handleNetworkChange = (online) => {
    console.log(online ? "We just went online" : "We are offline");
  };
  const onLine = useNetwork(handleNetworkChange);
  return (
    <div className="App">
      <h1>{onLine ? "Online" : "Offline"}</h1>
    </div>
  );
};

export default App;
