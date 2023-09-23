import useTheme from "../../Hooks/useTheme";
import { Link } from "react-router-dom";

import gif from "../../assets/gif/ch.mp4";
import useCreateCircleText from "../../Hooks/useCreateCircleText";

const CircleContact = () => {
  const { theme } = useTheme();
  const textRef = useCreateCircleText();

  // const isLight = theme === "light" ? "#fff" : "#121418";

  // useEffect(() => {
  //   document.body.style.backgroundColor = `${isLight}`;
  //   const textElement = textRef.current;
  //   const text = textElement.innerText;

  //   textElement.innerHTML = text
  //     .split("")
  //     .map((char, i) => {
  //       const span = document.createElement("span");
  //       span.textContent = char;
  //       span.style.transform = `rotate(${i * 5.5}deg)`;
  //       return span.outerHTML;
  //     })
  //     .join("");
  //   return () => {
  //     document.body.style.backgroundColor = "";
  //   };
  // }, [isLight]);

  return (
    <div className="fixed bottom-5 right-[40px] z-50">
      <Link to="/contact" className="circle">
        <div className={`text text-${theme}`}>
          <p ref={textRef}>Contact - Contact - Contact - Contact -</p>
        </div>

        <div className="centered-image">
          <video loop autoPlay muted className="">
            <source src={gif} type="video/mp4" />
          </video>
        </div>
      </Link>
    </div>
  );
};

export default CircleContact;
