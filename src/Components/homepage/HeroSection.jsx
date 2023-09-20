
import VideoToggle from "../../assets/Images/VideoToggle.png";
import useTheme from "../../Hooks/useTheme";

const HeroSection = () => {
  const { theme } = useTheme();

  const isLightMode = theme === "light" ? "text-light-primary" : "text-dark";

  return (
    <div className="m-auto w-full lg:max-w-[85vw] " id="hero">
      <div className="grid pt-12">
        <h1
          className={`whitespace-nowrap font-primary text-4xl font-bold capitalize ${isLightMode} theme-transition md:hidden lg:text-[5.2rem]`}
        >
          We Are
        </h1>
        <div className="order-last block  items-center justify-between gap-x-6 md:order-first md:inline-flex">
          <h1
            className={`hidden whitespace-nowrap font-primary text-4xl font-bold capitalize ${isLightMode} theme-transition sm:text-[50px] md:block lg:text-[5rem]`}
          >
            We Are
          </h1>

          <p className="order-first text-base leading-[30px] md:order-last md:text-lg">
            We are helping people to grow their business. We are providing the
            best designs and development service for your next dream project.
          </p>
          <img className="mt-8 md:mt-0" src={VideoToggle} alt="Video play" />
        </div>

        <h1 className="font-primary text-[40px] font-bold capitalize leading-[50px] tracking-[-1px] text-orangePrimary sm:text-[7vw] md:whitespace-nowrap md:leading-snug lg:text-[6.5vw]">
          building{" "}
          <span className={`${isLightMode} theme-transition`}>digital</span>{" "}
          brands
        </h1>
      </div>
    </div>
  );
};

export default HeroSection;
