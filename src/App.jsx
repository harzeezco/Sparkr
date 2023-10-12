import { BrowserRouter } from "react-router-dom";
import { useEffect, useContext, Suspense } from "react";
import useTheme from "./Hooks/useTheme";
import CircleContact from "./Components/general/CircleContact";
import Loader from "./Components/general/Loader";
import AnimateRoute from "./Animation/AnimateRoute";
import Scroll from "./Animation/Scroll";
import Cursor from "./Animation/Cursor";
import { ScaleCursorOnHoverContext } from "./Contexts/ScaleCursorOnHoverContext";
import SmallScreenContextProvider from "./Contexts/SmallScreenContext";
import GoogleTag from "./Components/general/GoogleAnalyticsTag";

// const googleAnalyticsId = import.meta.env.VITE_GOOGLE_ANALYTICS_ID;

function App() {
  const { theme } = useTheme();
  const { scaling, isProjectHovered } = useContext(ScaleCursorOnHoverContext);

  const isLight = theme === "light" ? "#fff" : "#121418";

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
        <GoogleTag />
        <CircleContact />
        <Scroll />
        <Cursor scaling={scaling} isProjectHovered={isProjectHovered} />
        <SmallScreenContextProvider>
          <AnimateRoute />
        </SmallScreenContextProvider>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
