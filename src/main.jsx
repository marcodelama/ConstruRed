import ReactDOM from "react-dom/client";

import App from "./App.jsx";

import { ConfigProvider } from "./Provider/ConfigProvider.jsx";
import "./index.css";

import { ThemeProvider } from "@material-tailwind/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ConfigProvider>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </ConfigProvider>
);
