import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ThemeProvider from "./Contexts/ThemeContexts.jsx";
import ScaleCursorOnHoverProvider from "./Contexts/ScaleCursorOnHoverContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <ScaleCursorOnHoverProvider>
        <App />
      </ScaleCursorOnHoverProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
