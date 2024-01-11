import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import DataCenter from "./components/context/DataCenter.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DataCenter>
      <App />
    </DataCenter>
  </React.StrictMode>
);
