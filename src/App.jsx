import { BrowserRouter } from "react-router-dom";
import { useEffect, useRef } from "react";
import useTheme from "./Hooks/useTheme";
import { Suspense } from "react";
import CircleContact from "./Components/general/CircleContact";
import Loader from "./Components/general/Loader";
import AnimateRoute from "./Animation/AnimateRoute";

function App() {
  const { theme } = useTheme();

  const isLight = theme === "light" ? "#fff" : "#121418";
  const websocketInstance = useRef(null);

  useEffect(() => {
    // Initialize WebSocket connection
    try {
      websocketInstance.current = new WebSocket("ws://localhost:5173");

      websocketInstance.current.onopen = () => {};
    } catch (error) {
      console.log("WebSocket could not be initialized:", error);
    }

    // Attach event listener to close WebSocket
    const handleBeforeUnload = () => {
      if (websocketInstance.current) {
        websocketInstance.current.close();
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    // Cleanup
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      if (websocketInstance.current) {
        websocketInstance.current.close();
      }
    };
  }, []);
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("/service-worker")
      .then((registration) => {
        console.log(
          "Service Worker registered with scope:",
          registration.scope,
        );
      })
      .catch((error) => {
        console.error("Service Worker registration failed:", error);
      });
  }

  useEffect(() => {
    document.body.style.backgroundColor = `${isLight}`;

    return () => {
      document.body.style.backgroundColor = "";
    };
  }, [isLight]);

  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <CircleContact />
        <AnimateRoute />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
