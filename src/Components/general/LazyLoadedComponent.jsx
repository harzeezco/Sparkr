import { useState, useEffect } from "react";
import { useInView } from "react-cool-inview";

// const LazyLoadedComponent = lazy(() => import("./LazyLoadedComponent"));

const LazyLoadedComponent = ({ children }) => {
  const [isElementVisible, setIsElementVisible] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);

  const { observe, inView } = useInView({
    // triggerDistance: "-40vh",
    rootMargin: "10px 0px",
  });
  
  useEffect(() => {
    if (inView && !hasLoaded) {
      setIsElementVisible(true);
      setHasLoaded(true); // Set hasLoaded to true to prevent re-rendering
    }
  }, [inView, hasLoaded]);

  const placeholder = <div className="text-dark">Loading...</div>;

  return <div ref={observe}>{isElementVisible ? children : placeholder}</div>;
};

export default LazyLoadedComponent;
