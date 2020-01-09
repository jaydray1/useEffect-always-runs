import React from "react";
import Check from "./Check";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Test useEffect</h1>
      <h2>
        Open your console and click either the checkbox or the button to see the
        useEffect run after every state update.
      </h2>
      <Check />
    </div>
  );
}
