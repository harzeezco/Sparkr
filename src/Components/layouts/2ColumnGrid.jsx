import PropTypes from "prop-types";
import useTheme from "../../Hooks/useTheme";

const ColumnGrid2 = ({
  img,
  first_prgh,
  second_prgh,
  button,
  text_first,
  img_first,
  header,
  header_highlight,
}) => {
  const { theme } = useTheme();

  return (
    <div className="grid md:grid-cols-2 items-center justify-between gap-x-20 gap-y-10 pt-12 md:flex-row">
      <div className="mx-auto w-full max-w-[100vw]">
        <img
          className="h-[470px] w-full"
          src={img}
          alt="The image showing our meeting curriculum"
          loading="lazy"
        />
      </div>

      <article
        className={`${img_first && "order-first md:order-last"}
         ${text_first && "order-first md:order-first"}
        `}
      >
        {header && (
          <h2
            className={`pb-4 font-primary text-4xl leading-[48px] text-${theme} font-bold`}
          >
            {header}{" "}
            <span className="text-orangePrimary">{header_highlight}</span>
          </h2>
        )}
        <p className="leading-[30px] sm:text-[18px]">{first_prgh}</p>
        <p className="leading-[30px] sm:text-[18px] md:mb-8 md:pt-8">
          {second_prgh}
        </p>

        {button && <button className="btn-primary">learn more</button>}
      </article>
    </div>
  );
};

ColumnGrid2.propTypes = {
  img: PropTypes.node,
  first_prgh: PropTypes.string,
  second_prgh: PropTypes.string,
  button: PropTypes.bool,
  header: PropTypes.bool,
  header_highlight: PropTypes.string,
  img_first: PropTypes.bool,
  text_first: PropTypes.bool,
};

export default ColumnGrid2;
