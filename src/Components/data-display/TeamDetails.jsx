import PropTypes from "prop-types";
import useTheme from "../../Hooks/useTheme";

const TeamDetails = ({ items }) => {
  const { img, name, position } = items;
  const { theme } = useTheme();

  return (
    <div>
      <img className="w-full" src={img} alt={position} />
      <div className="pt-4 text-center">
        <h3 className={`font-bold md:text-[26px] md:leading-9 text-${theme} theme-transition`}>
          {name}
        </h3>
        <p className="text-sm">{position}</p>
      </div>
    </div>
  );
};

TeamDetails.propTypes = {
  items: PropTypes.object,
  img: PropTypes.string,
  name: PropTypes.string,
  position: PropTypes.string,
};

export default TeamDetails;
