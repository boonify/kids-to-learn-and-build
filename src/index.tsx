import * as React from "react";
import { render } from "react-dom";

import "./styles.css";

function App() {
  const items = [
    { id: 0, text: "Learn JavaScript", done: false },
    { id: 1, text: "Learn React", done: false },
    { id: 2, text: "Play around in glitch.com", done: false },
    { id: 3, text: "Build something awesome", done: true }
  ]
  return (
    <div>
        <h2>Todos:</h2>
        <ol>
        {items.map(item => (
          <li key={item.id}>
            <label>
              <input type="checkbox" disabled readOnly checked={item.done} /> 
              <span className={item.done ? "done" : ""}>{item.text}</span>
            </label>
          </li>
        ))}
        </ol>
      </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
