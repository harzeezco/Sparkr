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
      ease: [0.9, 0.08, -0.05, 0.95],
      duration: 0.75,
    },
  },
};

const AnimatedLetters = ({ title, color, text_large }) => {
  const banner = useContext(BannerAnimationContext);
  const { theme } = useTheme();
  const textColor = color === "text-mode" ? `text-${theme}` : color;

  const large_text = `lg:text-[95px] sm:text-[55px] text-4xl`;
  return (
    <motion.span
      className="row-title"
      variants={banner}
      initial="initial"
      animate="animate"
    >
      {title.split(" ").map((letter, idx) => {
        return (
          <motion.span
            key={idx}
            className={`theme-transition relative inline-block whitespace-nowrap font-primary font-bold text-4xl sm:text-[45px] lg:text-[65px] ${textColor} ${
              text_large ? large_text : null
            }`}
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
  text_large: PropTypes.bool,
};

export default AnimatedLetters;
