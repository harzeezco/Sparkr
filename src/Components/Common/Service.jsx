import PropTypes from "prop-types";

import Open from "../../assets/Icons/upArrow.svg";
import Close from "../../assets/Icons/delete.svg";
import WorkImage from "../../assets/Images/Video.png";

const Service = ({ service, onToggleService }) => {
  const { id, work, job, isOpen, borderb } = service;

  return (
    <div className="mt-8">
      <div className="flex items-center justify-between  pb-6 ">
        <h3 className="heading-secondary text-white ">{job}</h3>
        <button onMouseOver={() => onToggleService(id, true)}>
          <img
            src={Open}
            className="h-[18px]"
            alt="The Icon to open the sevice image"
          />
        </button>
      </div>

      {borderb && (
        <hr className="mb-6 border-b-[1px] text-white opacity-[30%]" />
      )}

      {isOpen && (
        <>
          {" "}
          <div className="mb-6 flex items-center justify-between">
            <h3 className="heading-secondary uppercase text-orangePrimary">
              {work} <span className="capitalize ">Design</span>
            </h3>
            <button onMouseEnter={() => onToggleService(id, false)}>
              <img
                className="h-[18px]"
                src={Close}
                alt="The Icon to close the sevice image"
              />
            </button>
          </div>
          <img
            src={WorkImage}
            className="w-full"
            alt="The image showing a UI/UX Work"
          />
        </>
      )}
    </div>
  );
};

Service.propTypes = {
  service: PropTypes.object,
  borderb: PropTypes.bool,
  onToggleService: PropTypes.func,
};

export default Service;
