import React from "react";
import ReactDom from "react-dom";
import "./index.css";
import Game from "./components/Game";

ReactDom.render(
  <React.StrictMode>
    <Game />
  </React.StrictMode>,
  document.getElementById("root")
);
