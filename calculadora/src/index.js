import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import Caculator from "./main/calculator";

import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <h1>App React</h1>
    <Caculator />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
