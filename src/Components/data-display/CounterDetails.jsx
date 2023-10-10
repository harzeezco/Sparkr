import PropTypes from "prop-types";
import useTheme from "../../Hooks/useTheme";
import AnimatedTextLetters from "../../Animation/AnimatedTextLetters";

const CounterDetails = ({
  counter,
  header,
  prgh_text,
  percent_symb,
  data_value,
}) => {
  const { theme } = useTheme();

  const num = `font-primary font-bold text-[40px] leading-[65px] text-${theme} sm:text-[35px] lg:text-[54px] theme-transition flex items-center`;

  return (
    <div className="pb-4 pt-4">
      <p className={`${num}`}>
        <span data-value={data_value} ref={counter}>
          <AnimatedTextLetters
            phrase={data_value}
            openDuration={0.5}
            closeDuration={0.5}
            delay={0.1}
          />
        </span>
        <AnimatedTextLetters
          phrase={percent_symb}
          className={`text-orangePrimary`}
          openDuration={0.5}
          closeDuration={0.5}
          delay={0.1}
        />
      </p>

      <AnimatedTextLetters
        phrase={header}
        className={`text-xl font-bold capitalize leading-[30px] text-${theme} pt-5 mb-2`}
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
