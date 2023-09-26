import { useEffect, useRef } from "react";

const useCreateCircleText = () => {
  const textRef = useRef();

  useEffect(() => {
    const textElement = textRef.current;
    const text = textElement.innerText;

    textElement.innerHTML = text
      .split("")
      .map((char, i) => {
        const span = document.createElement("span");
        span.textContent = char;
        span.style.transform = `rotate(${i * 5.3}deg)`;
        return span.outerHTML;
      })
      .join("");
  }, []);
  return textRef;
};

export default useCreateCircleText;
