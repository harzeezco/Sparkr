import PropTypes from "prop-types";
import AnimatedTextLetters from "../../Animation/AnimatedTextLetters";

const Header = ({ text }) => {
  const { phrase, className } = text;

  return (
    <AnimatedTextLetters
      openDuration={0.5}
      closeDuration={0.5}
      delay={0.3}
      phrase={phrase}
      className={className}
    />
  );
};

Header.propTypes = {
  text: PropTypes.object,
};

export default Header;
