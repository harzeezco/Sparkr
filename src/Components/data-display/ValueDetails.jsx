import PropTypes from "prop-types";
import useTheme from "../../Hooks/useTheme";

const ValueDetails = ({ items }) => {
  const { icon, header, prgh_text, alt } = items;
  const { theme } = useTheme();

  return (
    <div className="flex gap-x-4">
      <img className="h-6" src={icon} alt={`${alt} image`} />
      <div className="">
        <h3
          className={`text-xl font-bold capitalize leading-[30px] text-${theme} theme-transition`}
        >
          {header}
        </h3>
        <p className="pt-2 leading-[30px]">{prgh_text}</p>
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
