import { createContext, useRef, useState } from "react";
import PropTypes from "prop-types";
export const ScaleCursorOnHoverContext = createContext();

const ScaleCursorOnHoverProvider = ({ children }) => {
  const stickyElement = useRef();
  const [isProjectHovered, setIsProjectHovered] = useState(false);
  const [scaling, setScaling] = useState(false);

  return (
    <ScaleCursorOnHoverContext.Provider
      value={{
        stickyElement,
        isProjectHovered,
        setIsProjectHovered,
        scaling,
        setScaling,
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
