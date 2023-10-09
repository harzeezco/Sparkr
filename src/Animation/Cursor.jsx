import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import useTheme from "../Hooks/useTheme";

const Cursor = ({ scaling, isProjectHovered }) => {
  const { theme } = useTheme();

  const [largecircle, setlargecircle] = useState({ x: 0, y: 0 });
  const [smallcircle, setsmallcircle] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const mousemove = (e) => {
      setlargecircle({ x: e.clientX, y: e.clientY });
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
      {/* <motion.div
        animate={{
          x: largecircle.x - 32,
          y: largecircle.y - 32,
          transition: { type: "spring", mass: 3 },
        }}
        className="large_circle"
        style={{ scale: scaling ? 0.8 : 1 }}
      ></motion.div> */}
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
        className={`pointer-events-none fixed z-30 grid  place-items-center rounded-full text-lg transition-transform duration-100 ${isTextLight} ${isBgLight}`}
      >
        {scaling ? "Swipe" : null}
        {isProjectHovered ? "Explore" : null}
      </motion.div>
    </div>
  );
};

export default Cursor;
