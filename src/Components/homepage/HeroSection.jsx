import VideoImage from "../../assets/Images/Video.png";

const HeroSection = () => {
  return (
    <div className="m-auto flex w-full max-w-[70rem] items-center justify-between px-6 py-6">
      <div>
        <h1>We Are</h1>
        <img src={VideoImage} alt="" />
        <p>
          We are helping people to grow their business. We are providing the
          best designs and development service for your next dream project.
        </p>
        <h1>
          building <span>digital</span> brands
        </h1>
      </div>
    </div>
  );
};

export default HeroSection;
