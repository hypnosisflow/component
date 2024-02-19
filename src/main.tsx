import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ModalsContextWrapper } from "./ModalContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ModalsContextWrapper>
      <App />
    </ModalsContextWrapper>
  </React.StrictMode>
);
