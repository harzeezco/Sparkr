import PropTypes from "prop-types";

import upArrow from "../../assets/Icons/upArrow.svg";

const Card = ({ card }) => {
  const { img, job_title } = card;
  return (
    <article className="mb-6">
      <div className="group relative">
        <img src={img} alt="Your Image" className="w-full" />
        <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-1000 group-hover:opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center text-white">
          <button className="z-100 relative flex h-10 w-10 items-center justify-center rounded-full bg-orangePrimary  opacity-0 transition-opacity duration-1000 group-hover:opacity-100">
            <img className="h-[15px]" src={upArrow} alt="" />
          </button>
        </div>
      </div>

      <div className="my-6 flex gap-x-4">
        <button className="project-btn cursor-auto">website</button>
        <button className="project-btn cursor-auto">design</button>
        <button className="project-btn cursor-auto">development</button>
      </div>
      <h3 className="whitespace-nowrap text-[1.3rem] font-bold text-white md:text-[2.4vw]">
        {job_title}
      </h3>
    </article>
  );
};

Card.propTypes = {
  card: PropTypes.object,
  img: PropTypes.node,
  job_title: PropTypes.string,
};

export default Card;
