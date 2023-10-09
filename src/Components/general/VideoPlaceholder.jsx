import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const VideoPlaceholder = ({ src, image }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    const videoElement = document.createElement("video");
    videoElement.src = src;
    videoElement.oncanplaythrough = () => {
      if (isMounted) {
        setIsLoading(false);
      }
    };

    return () => {
      setIsMounted(false);
    };
  }, [src, isMounted]);

  if (isLoading) {
    return (
      <img
        src={image}
        alt="Placeholder image"
        style={{ filter: "blur(10px)" }}
        width="100%"
        height="800"
        loading="lazy"
      />
    );
  } else {
    return (
      <video width="100%" height="800" loop autoPlay muted>
        <source src={src} type="video/mp4" />
      </video>
    );
  }
};

VideoPlaceholder.propTypes = {
  src: PropTypes.string,
  image: PropTypes.string,
};

export default VideoPlaceholder;
