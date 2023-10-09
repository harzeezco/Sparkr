import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ThemeProvider from "./Contexts/ThemeContexts.jsx";
import StickyCursorProvider from "./Contexts/StickyCursorContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <StickyCursorProvider>
        <App />
      </StickyCursorProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
