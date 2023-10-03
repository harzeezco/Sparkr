import PropTypes from "prop-types";

const Image = ({ defaultSrc, alternateSrc, alt, ...otherProps }) => {
  return (
    <picture>
      <source srcSet={defaultSrc} type="image/webp" alt={alt} {...otherProps} />
      <img src={alternateSrc} alt={alt} {...otherProps} />
    </picture>
  );
};

Image.propTypes = {
  defaultSrc: PropTypes.string,
  alternateSrc: PropTypes.string,
  alt: PropTypes.string,
};

export default Image;
