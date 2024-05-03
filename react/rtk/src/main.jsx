import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { anbar } from "./Store/index.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={anbar}>
    <App />
  </Provider>
);
