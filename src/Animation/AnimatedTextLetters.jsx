import { useRef } from "react";
import PropTypes from "prop-types";
import { useInView, motion } from "framer-motion";

const AnimatedTextLetters = ({
  phrase,
  openDuration,
  closeDuration,
  delay,
  ...otherProps
}) => {
  const description = useRef(null);
  const isInView = useInView(description);

  const slideUp = {
    initial: {
      y: "100%",
    },
    open: (i) => ({
      y: "0%",
      transition: { duration: openDuration, delay: delay ? delay : 0.1 * i },
    }),
    closed: {
      y: "100%",
      transition: { duration: closeDuration },
    },
  };

  return (
    <div ref={description} className="description">
      <p className="body">
        {phrase.split(" ").map((word, index) => {
          return (
            <span key={index} className="masked">
              <motion.span
                variants={slideUp}
                custom={index}
                animate={isInView ? "open" : "closed"}
                key={index}
                {...otherProps}
              >
                {word}
              </motion.span>
            </span>
          );
        })}
      </p>
    </div>
  );
};

AnimatedTextLetters.propTypes = {
  phrase: PropTypes.string,
  closeDuration: PropTypes.number,
  openDuration: PropTypes.number,
  delay: PropTypes.number,
};

export default AnimatedTextLetters;
