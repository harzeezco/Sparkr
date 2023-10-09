import PropTypes from "prop-types";
import useTheme from "../../Hooks/useTheme";
import AnimatedTextLetters from "../../Animation/AnimatedTextLetters";

const Card = ({ item }) => {
  const { num, heading, prgh } = item;
  const { theme } = useTheme();

  const isLight =
    theme === "light" ? "bg-light-secondary" : "bg-dark-secondary";

  return (
    <div className={`${isLight} p-5`}>
      <div className="mb-2 flex items-center gap-x-4">
        <AnimatedTextLetters
          openDuration={0.5}
          closeDuration={0.5}
          delay={0.3}
          phrase={num}
          className="text-[20px] font-medium text-btnColor md:text-[30px]"
        />
   

        <AnimatedTextLetters
          phrase={heading}
          className={`text-[20px] font-medium capitalize text-${theme} md:text-[30px]`}
          openDuration={0.5}
          closeDuration={0.5}
          delay={0.1}
        />
      </div>
      <div></div>
      <AnimatedTextLetters
        openDuration={0.5}
        closeDuration={0.5}
        delay={0.3}
        phrase={prgh}
        className="leading-7 md:text-[17px]"
      />
    </div>
  );
};

Card.propTypes = {
  item: PropTypes.object,
  num: PropTypes.string,
  heading: PropTypes.string,
  prgh: PropTypes.string,
};

export default Card;
