import { BrowserRouter } from "react-router-dom";
import Cursor from "./Components/general/Cursor";
import AnimateRoute from "./Components/general/AnimateRoute";
import { useEffect } from "react";
import useTheme from "./Hooks/useTheme";

function App() {
  const { theme } = useTheme();

  const isLight = theme === "light" ? "#fff" : "#121418";
  console.log();
  useEffect(() => {
    document.body.style.backgroundColor = `${isLight}`;
    // Clean up by resetting the background color when the component unmounts
    return () => {
      document.body.style.backgroundColor = "";
    };
  });
  return (
    <BrowserRouter>
      {/* <Cursor /> */}
      <AnimateRoute />
    </BrowserRouter>
  );
}

export default App;
