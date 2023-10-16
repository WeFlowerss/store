import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import "lazysizes";
import "lazysizes/plugins/parent-fit/ls.parent-fit";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
