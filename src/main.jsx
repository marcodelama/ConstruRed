import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./Routers/App";
import { ConfigProvider } from "./Provider/ConfigProvider";
import { PrimeReactProvider } from "primereact/api";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ConfigProvider>
      <PrimeReactProvider>
        <App />
      </PrimeReactProvider>
    </ConfigProvider>
  </React.StrictMode>
);
