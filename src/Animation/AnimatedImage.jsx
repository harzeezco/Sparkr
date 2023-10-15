import PropTypes from "prop-types";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import Image from "../Components/general/Image";

const AnimatedImage = ({ defaultSrc, alternateSrc, ...otherProps }) => {
  const image = useRef(null);

  const { scrollYProgress } = useScroll({
    target: image,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.65, 1], [1, 1, 0]);
  const scale = useTransform(
    scrollYProgress,
    [0, 0.6, 0.8, 0.9],
    [1, 0.8, 0.8, 0],
  );

  return (
    <motion.div
      className="mx-auto w-full max-w-[100vw]"
      ref={image}
      style={{
        opacity,
        scale,
      }}
    >
      <Image
        defaultSrc={defaultSrc}
        alternateSrc={alternateSrc}
        loading="lazy"
        {...otherProps}
      />
    </motion.div>
  );
};

AnimatedImage.propTypes = {
  defaultSrc: PropTypes.string,
  alternateSrc: PropTypes.string,
};

export default AnimatedImage;
