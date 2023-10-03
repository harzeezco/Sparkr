import PropTypes from "prop-types";
import useTheme from "../../Hooks/useTheme";

const Card = ({ item }) => {
  const { num, heading, prgh } = item;
  const { theme } = useTheme();

  const isLight =
    theme === "light" ? "bg-light-secondary" : "bg-dark-secondary";
  
  return (
    <div className={`${isLight} p-5`}>
      <div className="mb-2 flex items-center gap-x-4">
        <p className="text-[20px] font-medium text-btnColor md:text-[30px]">
          {num}
        </p>
        <h1
          className={`text-[20px] font-medium capitalize text-${theme} md:text-[30px]`}
        >
          {heading}
        </h1>
      </div>
      <p className="leading-7 md:text-[17px]">{prgh}</p>
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
