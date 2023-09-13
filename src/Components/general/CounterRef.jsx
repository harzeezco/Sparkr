import { useRef } from "react";
import useCounter from "../../Hooks/useCounter";

const CounterRef = () => {
  const count1Ref = useRef();
  const countRef2 = useRef();
  const countRef3 = useRef();

  const counter1 = useCounter(count1Ref);
  const counter2 = useCounter(countRef2);
  const counter3 = useCounter(countRef3);

  return { counter1, counter2, counter3 };
};

export default CounterRef;
