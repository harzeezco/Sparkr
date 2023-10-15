import PropTypes from "prop-types";
import { motion } from "framer-motion";

import ScrollToTopLink from "../../Animation/ScrollToTopLink";
import { useContext } from "react";
import { SmallScreenContext } from "../../Contexts/SmallScreenContext";

const slide = {
  initial: { x: 80 },
  enter: (i) => ({
    x: 0,
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i },
  }),
  exit: (i) => ({
    x: 80,
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i },
  }),
};

const scale = {
  open: { scale: 1, transition: { duration: 0.3 } },
  closed: { scale: 0, transition: { duration: 0.4 } },
};

export default function SideLink({ data, isActive, setSelectedIndicator }) {
  const { title, path, index } = data;
  const { setIsActive } = useContext(SmallScreenContext);

  return (
    <motion.div
      className="link"
      onMouseEnter={() => {
        setSelectedIndicator(path);
      }}
      custom={index}
      variants={slide}
      initial="initial"
      animate="enter"
      exit="exit"
      onClick={() => setIsActive(false)}
    >
      <motion.div
        variants={scale}
        animate={isActive ? "open" : "closed"}
        className="indicator"
      ></motion.div>
      <ScrollToTopLink
        to={path}
        className="text-light py-2 text-5xl capitalize"
      >
        {title}
      </ScrollToTopLink>
    </motion.div>
  );
}

SideLink.propTypes = {
  data: PropTypes.array,
  isActive: PropTypes.bool,
  setSelectedIndicator: PropTypes.func,
};
