import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import './i18n';

import { BrowserRouter } from "react-router-dom"; // ✅ Import this

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter> {/* ✅ Wrap your app here */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

