import PropTypes from "prop-types";
import useTheme from "../../Hooks/useTheme";

const ValueDetails = ({ items }) => {
  const { icon, header, prgh_text, alt } = items;
  const { theme } = useTheme();

  return (
    <div className="flex gap-x-4">
      <div className="pt-1"> 
        <img
          height="30"
          width="35"
          src={icon}
          alt={`${alt} image`}
          loading="lazy"
        />
      </div>
      <div className="">
        <h1
          className={`text-xl font-bold capitalize leading-[30px] text-${theme} theme-transition`}
        >
          {header}
        </h1>
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
