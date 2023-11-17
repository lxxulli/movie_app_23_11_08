import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./\bRouter";
import { GlobalStyled } from "./style/GlogalStyled";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyled />
    <Router />
  </React.StrictMode>
);
