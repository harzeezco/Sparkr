import PropTypes from "prop-types";
import useTheme from "../../Hooks/useTheme";
import Image from "../general/Image";
import ScrollToTopLink from "../../Animation/ScrollToTopLink";

const ColumnGrid2 = ({
  defaultSrc,
  alternateSrc,
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
    <div className="grid items-center justify-between gap-x-20 gap-y-10 pt-2 md:grid-cols-2 md:flex-row lg:pt-12">
      <div className="mx-auto w-full max-w-[100vw]">
        <Image
          defaultSrc={defaultSrc}
          alternateSrc={alternateSrc}
          alt="The image showing our meeting curriculum"
          loading="lazy"
          height="470"
          width="100%"
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

        <ScrollToTopLink to="/about">
          {button && <button className="btn-primary mt-6">learn more</button>}
        </ScrollToTopLink>
      </article>
    </div>
  );
};

ColumnGrid2.propTypes = {
  defaultSrc: PropTypes.string,
  alternateSrc: PropTypes.string,
  first_prgh: PropTypes.string,
  second_prgh: PropTypes.string,
  button: PropTypes.bool,
  header: PropTypes.string,
  header_highlight: PropTypes.string,
  img_first: PropTypes.bool,
  text_first: PropTypes.bool,
};

export default ColumnGrid2;
