import Card1Image from '../../assets/Images/Card1.png'
import Card2Image from "../../assets/Images/Card2.png";
import Card3Image from "../../assets/Images/Card3.png";


import Card from "../Common/Card";

const ProjectSection = () => {
  return (
    <div id="project" className="m-auto w-full px-6  pb-[6rem] lg:max-w-[85vw]">
      <h1 className="heading-primary">
        our latest <span className="text-orangePrimary">project</span>
      </h1>
      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Card img={Card1Image} job_title="Email Marketing Landing Page" />
        <Card img={Card3Image} job_title="Marketer Portfolio Landing Page" />
        <Card img={Card2Image} job_title="Agency Landing Page Design" />
        <Card img={Card3Image} job_title="Email Marketing Tool Landing Page" />
      </div>

      <div className="mt-8 text-center">
        <button className="btn-primary">view all project</button>
      </div>
    </div>
  );
};

export default ProjectSection;
