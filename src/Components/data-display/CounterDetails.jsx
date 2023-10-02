import PropTypes from "prop-types";
import useTheme from "../../Hooks/useTheme";

const CounterDetails = ({
  counter,
  header,
  prgh_text,
  percent_symb,
  data_value,
}) => {
  const { theme } = useTheme();

  const num = `font-primary font-bold text-[40px] leading-[65px] text-${theme} sm:text-[35px] lg:text-[54px] theme-transition`;

  return (
    <div className="pb-4 pt-4">
      <p className={`${num}`}>
        <span data-value={data_value} ref={counter}>
          {data_value}
        </span>
        <span className="text-orangePrimary">{percent_symb}</span>
      </p>
      <h2
        className={`text-xl font-bold capitalize leading-[30px] text-${theme} pt-2`}
      >
        {header}
      </h2>
      <p className="pt-2 leading-[30px]">{prgh_text}</p>
    </div>
  );
};

CounterDetails.propTypes = {
  item: PropTypes.object,
  counter: PropTypes.object,
  prgh_text: PropTypes.string,
  header: PropTypes.string,
  percent_symb: PropTypes.string,
  data_value: PropTypes.string,
};

export default CounterDetails;
