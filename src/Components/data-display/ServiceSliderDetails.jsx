import PropTypes from "prop-types";
import useTheme from "../../Hooks/useTheme";

const ServiceSliderDetails = ({ items }) => {
  const { theme } = useTheme();

  const { name, icon } = items;
  return (
    <div className="slide">
      <div className="flex items-center gap-x-8 px-4">
        <h1 className={`font-primary text-[38px] font-bold text-${theme}`}>
          {name}
        </h1>
        <img src={icon} alt="Star" loading="lazy" className="h-[38px] w-[38px]" />
      </div>
    </div>
  );
};

ServiceSliderDetails.propTypes = {
  items: PropTypes.object,
  name: PropTypes.string,
  icon: PropTypes.node,
};

export default ServiceSliderDetails;
