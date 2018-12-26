import * as React from "react";
import { render } from "react-dom";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>New Year 2019 Resolution</h1>
      <h2>Join a coding class to learn and build!</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
