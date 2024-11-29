import React, { useContext } from "react";
import { AppContext } from "./App";
import "./Child.css";

const Child = () => {
  const value = useContext(AppContext); // Use the context value from the parent
  return (
    <div className="child-container">
      <h2 className="child-title">Child Component</h2>
      <p className="child-value">Received Value: {value}</p>
    </div>
  );
};

export default Child;