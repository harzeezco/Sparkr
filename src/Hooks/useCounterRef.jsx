import { useRef, useState } from "react";
import useCounter from "./useCounter";
import { useInView } from "react-cool-inview";

const useCounterRef = () => {
  const [isActive, setIsActive] = useState(false);

  const count1Ref = useRef();
  const countRef2 = useRef();
  const countRef3 = useRef();

  const counter1 = useCounter(count1Ref, isActive);
  const counter2 = useCounter(countRef2, isActive);
  const counter3 = useCounter(countRef3, isActive);

  const { observe } = useInView({
    unobserveOnEnter: true,
    rootMargin: "-100px 0px",
    onChange: ({ inView }) => setIsActive(inView),
  });

  return { counter1, counter2, counter3, observe };
};

export default useCounterRef;
