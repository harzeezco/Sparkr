import PropTypes from "prop-types";
import { Link as RouterLink } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const ScrollToTopLink = ({ to, children, ...otherProps }) => {
  const controls = useAnimation();

  const handleClick = async () => {
    await controls.start({
      opacity: 0,
      transition: { duration: 0.6, ease: "easeInOut" },
    });

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    controls.start({
      opacity: 1,
      transition: { duration: 0.6, ease: "easeInOut" },
    });
  });

  return (
    <motion.div animate={controls} {...otherProps}>
      <RouterLink to={to} onClick={handleClick}>
        {children}
      </RouterLink>
    </motion.div>
  );
};

ScrollToTopLink.propTypes = {
  to: PropTypes.string,
  children: PropTypes.node,
};

export default ScrollToTopLink;
