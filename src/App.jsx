import { BrowserRouter } from "react-router-dom";
import { useEffect } from "react";
import useTheme from "./Hooks/useTheme";
import { Suspense } from "react";
import CircleContact from "./Components/general/CircleContact";
import Loader from "./Components/general/Loader";
import AnimateRoute from "./Animation/AnimateRoute";
import Scroll from "./Animation/Scroll";
import Cursor from "./Animation/Cursor";
import { useContext } from "react";
import { StickyCursorContext } from "./Contexts/StickyCursorContext";
import SideNavContextProvider from "./Contexts/SideNavContext";

function App() {
  const { theme } = useTheme();
  const { scaling, isProjectHovered } = useContext(StickyCursorContext);

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
    <div>
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <CircleContact />
          <Scroll />
          <Cursor scaling={scaling} isProjectHovered={isProjectHovered} />
          <SideNavContextProvider>
            <AnimateRoute />
          </SideNavContextProvider>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
