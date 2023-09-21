

import { BrowserRouter } from "react-router-dom";
// import Cursor from "./Components/general/Cursor";
import AnimateRoute from "./Components/general/AnimateRoute";
import { useEffect, useRef } from "react";
import useTheme from "./Hooks/useTheme";
import Image from "../src/assets/Images/image.png";
import gif from "../src/assets/gif/ch.mp4";
import ReactDOM from "react-dom/client";

function App() {
  const textRef = useRef();
  const { theme } = useTheme();

  const isLight = theme === "light" ? "#fff" : "#121418";

  useEffect(() => {
    document.body.style.backgroundColor = `${isLight}`;
    const textElement = textRef.current;
    const text = textElement.innerText;

    // const spans = text.split("").map((char, i) => (
    //   <span key={i} style={{ transform: `rotate(${i * 8.8}deg)` }}>
    //     {char}
    //   </span>
    // ));
    textElement.innerHTML = text
      .split("")
      .map((char, i) => {
        const span = document.createElement("span");
        span.textContent = char;
        span.style.transform = `rotate(${i * 5.5}deg)`;
        return span.outerHTML;
      })
      .join("");
    // console.log(spans);
    // textElement.innerHTML = spans;
    // Clean up by resetting the background color when the component unmounts
    return () => {
      document.body.style.backgroundColor = "";
    };
  });
  return (
    <BrowserRouter>
      <div className="fixed bottom-5 right-[40px] z-50">
        <div className="circle">
          <div className={`text text-${theme}`}>
            <p ref={textRef}>Contact - Contact - Contact - Contact -</p>
          </div>

          <div className="centered-image">
            <video loop autoPlay muted className="">
              <source src={gif} type="video/mp4" />
            </video>
          </div>
          {/* <img src={Image} alt="Your Image" className="centered-image" /> */}
        </div>
      </div>

      {/* <Cursor /> */}
      <AnimateRoute />
    </BrowserRouter>
  );
}

export default App;
