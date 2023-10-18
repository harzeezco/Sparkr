import PropTypes from "prop-types";
import AnimatedLetters from "../../Animation/AnimatedLetters";

export const BannerRowTop = ({ title, color, isInView, view, text_large }) => (
  <h1>
    <AnimatedLetters
      title={title}
      color={color}
      isInView={isInView}
      view={view}
      text_large={text_large}
    />
  </h1>
);

BannerRowTop.propTypes = {
  title: PropTypes.string,
  color: PropTypes.string,
  isInView: PropTypes.bool,
  view: PropTypes.bool,
  text_large: PropTypes.bool,
};
