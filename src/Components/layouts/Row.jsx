import PropTypes from "prop-types";
import useTheme from "../../Hooks/useTheme";
import AnimatedTextLetters from "../../Animation/AnimatedTextLetters";
import AnimatedImage from "../../Animation/AnimatedImage";

const Row = ({
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
      <AnimatedImage
        defaultSrc={defaultSrc}
        alternateSrc={alternateSrc}
        alt="The image showing our meeting curriculum"
        height="470"
        width="100%"
      />

      <article
        className={`${img_first && "order-first md:order-last"}
         ${text_first && "order-first md:order-first"}
        `}
      >
        {header && (
          <h1
            className={`pb-4 font-primary text-4xl leading-[48px] text-${theme} flex flex-col sm:flex-row items-center font-bold`}
          >
            <AnimatedTextLetters
              phrase={header}
              openDuration={0.3}
              closeDuration={0.3}
              delay={0.1}
            />
            <span className="pl-2">
              <AnimatedTextLetters
                phrase={header_highlight}
                className={`text-orangePrimary`}
                openDuration={0.3}
                closeDuration={0.3}
                delay={0.1}
              />
            </span>
          </h1>
        )}

        <div className="mb-7">
          <AnimatedTextLetters
            openDuration={0.5}
            closeDuration={0.5}
            delay={0.2}
            phrase={first_prgh}
            className="leading-[30px] sm:text-lg"
          />
        </div>
        {second_prgh ? (
          <div className="mb-7">
            <AnimatedTextLetters
              openDuration={0.5}
              closeDuration={0.5}
              delay={0.2}
              phrase={second_prgh}
              className="leading-[30px] sm:text-lg"
            />
          </div>
        ) : null}

        <a href="/about">
          {button && (
            <button className="btn">Let’s Spark Your Brand Today</button>
          )}
        </a>
      </article>
    </div>
  );
};

Row.propTypes = {
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

export default Row;
