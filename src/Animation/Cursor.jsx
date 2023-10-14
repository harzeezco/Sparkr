import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import useTheme from "../Hooks/useTheme";

const Cursor = ({ scaling, isProjectHovered = true }) => {
  const { theme } = useTheme();

  const [smallcircle, setsmallcircle] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mousemove = (e) => {
      setsmallcircle({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", mousemove);

    return () => {
      window.removeEventListener("mousemove", mousemove);
    };
  }, []);

  const isBgLight = theme === "light" ? "bg-dark" : "bg-light-primary";
  const isTextLight = theme === "light" ? "text-dark" : "text-light";

  return (
    <div>
      <motion.div
        animate={{
          x: smallcircle.x - 8,
          y: smallcircle.y - 8,
          transition: { type: "spring", mass: 2 },
        }}
        style={{
          scale: scaling ? 1 : 0.8,
          width: scaling || isProjectHovered ? "94px" : "16px",
          height: scaling || isProjectHovered ? "94px" : "16px",
        }}
        className={`pointer-events-none fixed z-30 grid  place-items-center rounded-full text-lg transition-transform duration-100 ${isTextLight} ${isBgLight} hidden md:block`}
      >
        {scaling ? "Swipe" : null}
        {isProjectHovered ? "Explore" : null}
      </motion.div>
    </div>
  );
};

Cursor.propTypes = {
  scaling: PropTypes.bool,
  isProjectHovered: PropTypes.bool,
};

export default Cursor;
