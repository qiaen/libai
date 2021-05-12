import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./assets/css/base.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
