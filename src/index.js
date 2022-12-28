import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import IptrackerApp from "./components/IptrackerApp";
import "./stylesheets/index.css";
import "./stylesheets/IptrackerApp.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HashRouter>
    <IptrackerApp />
  </HashRouter>
);
