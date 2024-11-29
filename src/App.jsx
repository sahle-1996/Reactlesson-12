/**
 * App.jsx
 * Parent Component
 * Demonstrates createContext to pass a value to a child component.
 */

import React, { createContext } from "react";
import Child from "./Child";

// Create a context
export const AppContext = createContext();

function App() {
  const contextValue = "Hello from the Parent Component!";

  return (
    <div style={styles.parentContainer}>
      <h1 style={styles.title}>Parent Component</h1>
      {/* Provide context value to children */}
      <AppContext.Provider value={contextValue}>
        <Child />
      </AppContext.Provider>
    </div>
  );
}

const styles = {
  parentContainer: {
    textAlign: "center",
    margin: "2rem auto",
    padding: "2rem",
    backgroundColor: "#f3f4f6",
    borderRadius: "12px",
    maxWidth: "600px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  title: {
    fontSize: "1.8rem",
    color: "#333",
    marginBottom: "1.5rem",
  },
};

export default App;
