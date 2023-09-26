import { BrowserRouter } from "react-router-dom";
import AnimateRoute from "./Components/general/AnimateRoute";
import { useEffect } from "react";
import useTheme from "./Hooks/useTheme";
import { Suspense } from "react";
import CircleContact from "./Components/general/CircleContact";
import Loader from "./Components/general/Loader";

function App() {
  const { theme } = useTheme();

  const isLight = theme === "light" ? "#fff" : "#121418";

  useEffect(() => {
    document.body.style.backgroundColor = `${isLight}`;

    return () => {
      document.body.style.backgroundColor = "";
    };
  }, [isLight]);

  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        {/* <Cursor /> */}
        <CircleContact />
        <AnimateRoute />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
