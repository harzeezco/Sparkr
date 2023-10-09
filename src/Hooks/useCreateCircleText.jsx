import { useEffect, useRef } from "react";

const useCreateCircleText = () => {
  const textRef = useRef();

  useEffect(() => {
    const textElement = textRef.current;
    const text = textElement.innerText;

    textElement.innerHTML = text
      .split("")
      .map(
        (char, i) =>
          `<span style="transform: rotate(${i * 8.7}deg); position: absolute;">${char}</span>`,
      )
      .join("");
  }, []);
  return textRef;
};

export default useCreateCircleText;
