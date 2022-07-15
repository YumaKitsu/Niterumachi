import React from "react";
import ReactDOM from "react-dom/client";
import App from './App'
import { ContextProvider } from "./contexts/SearchContext";
import { APIContextProvider } from "./contexts/APIContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ContextProvider>
    <APIContextProvider>
      <App />
    </APIContextProvider>
  </ContextProvider>
);
