import PropTypes from "prop-types";

import OpenDark from "../../assets/Icons/upArrowDark.svg";
import OpenLight from "../../assets/Icons/upArrowLight.svg";
import Close from "../../assets/Icons/delete.svg";
import WorkImage from "../../assets/Images/Hero.webp";
import useTheme from "../../Hooks/useTheme";
import ImageWrapper from "./ImageWrapper";

const ServiceDetails = ({ service, onToggleService }) => {
  const { id, work, job, isOpen, borderb } = service;

  const { theme } = useTheme();

  function handleButtonMouseOver(event) {
    event.stopPropagation(); // Prevent the event from propagating to the div
  }

  return (
    <div className="mt-2 cursor-pointer">
      <div
        className="transition-el flex items-center  justify-between pb-6"
        onMouseOver={() => onToggleService(id, true)}
      >
        <h1 className={`heading-secondary text-${theme} theme-transition`}>
          {job}
        </h1>
        <div
          onMouseOver={handleButtonMouseOver}
          className="flex w-[10rem] justify-end"
        >
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
          <h2 className="heading-secondary uppercase text-orangePrimary">
            {work} <span className="capitalize ">Design</span>
          </h2>
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
          <img
            src={WorkImage}
            alt="The image showing a UI/UX Work"
            loading="lazy"
            height="624"
            width="100%"
          />
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
