import { createContext } from "react";
import PropTypes from "prop-types";

export const BannerAnimationContext = createContext();

const banner = {
  animate: {
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.2,
    },
  },
};

const BannerAnimationContextProvider = ({ children }) => {
  return (
    <BannerAnimationContext.Provider value={banner}>
      {children}
    </BannerAnimationContext.Provider>
  );
};

BannerAnimationContextProvider.propTypes = {
  children: PropTypes.node,
};

export default BannerAnimationContextProvider;
