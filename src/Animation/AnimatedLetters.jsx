import PropTypes from "prop-types";
import { motion } from "framer-motion";
import useTheme from "../Hooks/useTheme";
import { useContext } from "react";
import { BannerAnimationContext } from "../Contexts/BannerAnimationContext";

const letterAni = {
  initial: { y: 400 },
  animate: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 0.6,
    },
  },
};

const AnimatedLetters = ({ title, color }) => {
  const banner = useContext(BannerAnimationContext);
  const { theme } = useTheme();
  const textColor = color === "text-mode" ? `text-${theme}` : color;

  return (
    <motion.span
      className="row-title"
      variants={banner}
      initial="initial"
      animate="animate"
    >
      {[...title].map((letter, idx) => {
        return (
          <motion.span
            key={idx}
            className={`theme-transition relative inline-block whitespace-nowrap font-primary text-4xl font-bold  sm:text-[50px] lg:text-[94px] ${textColor}`}
            variants={letterAni}
          >
            {letter}
          </motion.span>
        );
      })}
    </motion.span>
  );
};

AnimatedLetters.propTypes = {
  title: PropTypes.string,
  color: PropTypes.string,
};

export default AnimatedLetters;
