import { useEffect } from "react";

const useCounter = (value) => {
  useEffect(() => {
    let initialValue = 0;
    const domValue = parseInt(value.current.dataset.value);
    const increment = Math.ceil(domValue / 1000);
    const el = value.current;

    const increaseCount = setInterval(() => {
      initialValue += increment;
      if (initialValue > domValue) {
        el.textContent = domValue;
        clearInterval(increaseCount);
        return;
      }

      if (domValue < 10) {
        el.textContent = `0${domValue}`;
        clearInterval(increaseCount);
        return;
      }
      el.textContent = initialValue;
    }, 100);

    return () => clearInterval(increaseCount);
  }, [value]);

  return value;
};

export default useCounter;
