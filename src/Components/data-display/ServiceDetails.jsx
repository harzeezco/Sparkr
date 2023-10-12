import PropTypes from "prop-types";

import OpenDark from "../../assets/Icons/upArrowDark.svg";
import OpenLight from "../../assets/Icons/upArrowLight.svg";
import Close from "../../assets/Icons/delete.svg";

import useTheme from "../../Hooks/useTheme";
import ImageWrapper from "./ImageWrapper";
import AnimatedTextLetters from "../../Animation/AnimatedTextLetters";

const ServiceDetails = ({ service, onToggleService }) => {
  const { id, work, job, isOpen, borderb, video } = service;

  const { theme } = useTheme();

  return (
    <div className="mt-2 cursor-pointer">
      <div
        className="transition-el flex items-center  justify-between pb-6"
        onMouseOver={() => onToggleService(id, true)}
      >
        <AnimatedTextLetters
          phrase={job}
          className={`heading-secondary text-${theme} theme-transition`}
          openDuration={0.5}
          closeDuration={0.5}
          delay={0.1}
        />
        <div className="flex w-[10rem] justify-end">
          <ImageWrapper
            src={OpenLight}
            srcForDarkMode={OpenDark}
            className="h-[18px] w-[18px]"
            alt="The Icon to open the service image"
          />
        </div>
      </div>

      {borderb || isOpen ? (
        <hr className={`mb-6 border-b-[1px] text-${theme} opacity-[40%]`} />
      ) : null}

      <div
        className={`${
          isOpen ? "visible h-[100%] opacity-100" : "invisible h-0  opacity-0"
        } cursor-pointer transition-opacity duration-[1s] ease-in-out group-hover:visible group-hover:opacity-100`}
      >
        <div className="mb-6 flex items-center justify-between">
          <AnimatedTextLetters
            phrase={`${work} Design`}
            className={`heading-secondary theme-transition text-orangePrimary`}
            openDuration={0.5}
            closeDuration={0.5}
            delay={0.1}
          />
          <button onMouseEnter={() => onToggleService(id, false)}>
            <img
              className="h-[18px] w-[18px]"
              src={Close}
              alt="Icon to close the service image"
              loading="lazy"
            />
          </button>
        </div>
        <div className="mx-auto w-full max-w-[100vw]">
          <video
            loop
            autoPlay
            muted
            className="rounded-[50px]"
            width="100%"
            height="60"
          >
            <source src={video} type="video/mp4" />
            <track
              label="English Captions"
              kind="captions"
              srcLang="en"
              default
            ></track>
          </video>
        </div>
      </div>
    </div>
  );
};

ServiceDetails.propTypes = {
  service: PropTypes.object,
  borderb: PropTypes.bool,
  onToggleService: PropTypes.func,
};

export default ServiceDetails;
