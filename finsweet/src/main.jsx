import 'atropos/css'
import React from "react";
import App from "./App.jsx";
import "./Assets/css/style.css";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap-grid.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
