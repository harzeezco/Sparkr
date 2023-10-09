import PropTypes from "prop-types";
import AnimatedLetters from "../../Animation/AnimatedLetters";

export const BannerRowTop = ({ title, color, isInView, view }) => (
  <h1>
    <AnimatedLetters title={title} color={color} isInView={isInView} view={view}/>
  </h1>
);

BannerRowTop.propTypes = {
  title: PropTypes.string,
  color: PropTypes.string,
  isInView: PropTypes.bool,
  view: PropTypes.bool,
};
