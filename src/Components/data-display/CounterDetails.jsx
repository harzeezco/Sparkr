import PropTypes from "prop-types";

const CounterDetails = ({ item }) => {
  const { counter, pagh_text, percent_symb, data_value } = item;

  const num =
    "font-primary text-[40px] leading-[65px] text-white sm:text-[35px] lg:text-[54px]";

  const numPrgh =
    "text-[18px] capitalize leading-[35px] tracking-wider text-colorwhite-100";

  return (
    <div className=" border-b-[1px] border-colorwhite-100 pb-4 pt-4">
      <h1 className={`${num}`}>
        <span data-value={data_value} ref={counter}>
          0
        </span>
        <span className="text-orangePrimary ">{percent_symb}</span>
      </h1>
      <p className={`${numPrgh}`}>{pagh_text}</p>
    </div>
  );
};

CounterDetails.propTypes = {
  item: PropTypes.object,
  counter: PropTypes.object,
  pagh_text: PropTypes.string,
  percent_symb: PropTypes.string,
  data_value: PropTypes.string,
};

export default CounterDetails;
