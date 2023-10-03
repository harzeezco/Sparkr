import PropTypes from "prop-types";
import { Link as RouterLink } from "react-router-dom";
import { motion, useAnimation } from "framer-motion"; // Import useAnimation
import { useEffect } from "react";

const ScrollToTopLink = ({ to, children }) => {
  const controls = useAnimation(); // Initialize Framer Motion controls

  const handleClick = async () => {
    // Trigger opacity animation
    await controls.start({
      opacity: 0,
      transition: { duration: 0.6, ease: "easeInOut" },
    });

    // Scroll to the top
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Trigger opacity animation when scrolling is complete
  };

  useEffect(() => {
    controls.start({
      opacity: 1,
      transition: { duration: 0.6, ease: "easeInOut" },
    });
  });

  return (
    <motion.div animate={controls}>
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
