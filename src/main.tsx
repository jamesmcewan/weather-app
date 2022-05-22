import App from "./components/App";
import { Provider } from "jotai";
import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>
);