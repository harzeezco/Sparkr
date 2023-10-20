import { BrowserRouter } from "react-router-dom";
import { useEffect, useContext, Suspense, useState } from "react";
import useTheme from "./Hooks/useTheme";
import CircleContact from "./Components/general/CircleContact";
import Loader from "./Components/general/Loader";
import AnimateRoute from "./Animation/AnimateRoute";
import Cursor from "./Animation/Cursor";
import { ScaleCursorOnHoverContext } from "./Contexts/ScaleCursorOnHoverContext";
import SmallScreenContextProvider from "./Contexts/SmallScreenContext";
import GoogleTag from "./Components/general/GoogleAnalyticsTag";
import CurveSideNav from "./Components/navigation/CurveSideNav";
import { registerSW } from "virtual:pwa-register";

// const googleAnalyticsId = import.meta.env.VITE_GOOGLE_ANALYTICS_ID;

function App() {
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const { theme } = useTheme();
  const { scaling, isProjectHovered } = useContext(ScaleCursorOnHoverContext);

  // Use useEffect to set isInitialLoad to false after a delay
  useEffect(() => {
    const delay = 1000; // Adjust the delay time as needed
    const initialLoadTimeout = setTimeout(() => {
      setIsInitialLoad(false);
    }, delay);

    return () => {
      clearTimeout(initialLoadTimeout);
    };
  }, []);

  const isLight = theme === "light" ? "#fff" : "#121418";

  // if ("serviceWorker" in navigator) {
  //   navigator.serviceWorker
  //     .register("/service-worker")
  //     .then((registration) => {
  //       console.log(
  //         "Service Worker registered with scope:",
  //         registration.scope,
  //       );
  //     })
  //     .catch((error) => {
  //       console.error("Service Worker registration failed:", error);
  //     });
  // }

  if ("serviceWorker" in navigator) {
    // && !/localhost/.test(window.location)) {
    registerSW();
  }

  useEffect(() => {
    document.body.style.backgroundColor = `${isLight}`;

    return () => {
      document.body.style.backgroundColor = "";
    };
  }, [isLight]);

  return (
    <BrowserRouter>
      <Suspense>
        {isInitialLoad && <Loader />}
        <GoogleTag />
        <SmallScreenContextProvider>
          <CurveSideNav />
          <CircleContact />
          <Cursor scaling={scaling} isProjectHovered={isProjectHovered} />

          <AnimateRoute />
        </SmallScreenContextProvider>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
