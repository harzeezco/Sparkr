import PropTypes from "prop-types";
import useTheme from "../../Hooks/useTheme";
import AnimatedTextLetters from "../../Animation/AnimatedTextLetters";

const ValueDetails = ({ items }) => {
  const { icon, header, prgh_text, alt } = items;
  const { theme } = useTheme();

  return (
    <div
      className={`${theme == "dark" ? "bg-dark-secondary" : ""} flex gap-x-4 px-4 py-8`}
    >
      <div className="pt-1">
        <img
          height="50"
          width="55"
          src={icon}
          alt={`${alt} image`}
          loading="lazy"
        />
      </div>
      <div className="grid gap-y-2">
        <AnimatedTextLetters
          phrase={header}
          className={`text-xl font-bold capitalize leading-[20px] text-${theme} theme-transition`}
          openDuration={0.3}
          closeDuration={0.3}
        />
        <AnimatedTextLetters
          openDuration={0.5}
          closeDuration={0.5}
          delay={0.5}
          phrase={prgh_text}
          className="leading-[20px]"
        />
      </div>
    </div>
  );
};

ValueDetails.propTypes = {
  items: PropTypes.object,
  alt: PropTypes.string,
  img: PropTypes.node,
  header: PropTypes.string,
  prgh_text: PropTypes.string,
};

export default ValueDetails;
