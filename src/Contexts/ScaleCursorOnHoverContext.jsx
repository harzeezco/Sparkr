import { createContext, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { useInView } from "react-cool-inview";
export const ScaleCursorOnHoverContext = createContext();

const ScaleCursorOnHoverProvider = ({ children }) => {
  const stickyElement = useRef();
  const [isProjectHovered, setIsProjectHovered] = useState(false);
  const [scaling, setScaling] = useState(false);
  const [isElementVisible, setIsElementVisible] = useState(false);

  const { observe, inView } = useInView({
    unobserveOnEnter: true,
  });

  useEffect(() => {
    setIsElementVisible(inView);
  }, [inView]);

  return (
    <ScaleCursorOnHoverContext.Provider
      value={{
        stickyElement,
        isProjectHovered,
        setIsProjectHovered,
        scaling,
        setScaling,
        isElementVisible,
        setIsElementVisible,
        observe,
      }}
    >
      {children}
    </ScaleCursorOnHoverContext.Provider>
  );
};

ScaleCursorOnHoverProvider.propTypes = {
  children: PropTypes.node,
};

export default ScaleCursorOnHoverProvider;
