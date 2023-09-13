import PropTypes from "prop-types";

const Card2 = ({ item }) => {
  const { num, heading, prgh } = item;
  return (
    <div className="bg-colorDarkLight p-5">
      <div className="mb-2 flex items-center gap-x-4">
        <h3 className="text-[20px] font-medium text-orangePrimary md:text-[30px]">
          {num}
        </h3>
        <h3 className="text-[20px] font-medium capitalize text-white md:text-[30px]">
          {heading}
        </h3>
      </div>
      <p className="leading-7 text-white opacity-[70%]">{prgh}</p>
    </div>
  );
};

Card2.propTypes = {
  item: PropTypes.object,
  num: PropTypes.string,
  heading: PropTypes.string,
  prgh: PropTypes.string,
};

export default Card2;
