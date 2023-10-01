import { createContext, useRef } from "react";

export const StickyCursorContext = createContext();

const StickyCursorProvider = ({ children }) => {
  const stickyElement = useRef();

  return (
    <StickyCursorContext.Provider value={stickyElement}>
      {children}
    </StickyCursorContext.Provider>
  );
};

export default StickyCursorProvider;
