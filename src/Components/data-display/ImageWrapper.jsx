import PropTypes from "prop-types";
import useTheme from "../../Hooks/useTheme";

const ImageWrapper = ({ srcForDarkMode, src, alt, ...props }) => {
  const { theme } = useTheme();

  const finalSrc = theme === "dark" ? srcForDarkMode || src : src;

  return <img src={finalSrc} alt={alt} {...props} />;
};

ImageWrapper.propTypes = {
  srcForDarkMode: PropTypes.string,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default ImageWrapper;
