import useTheme from "../../Hooks/useTheme";

import AboutImg from "../../assets/Images/About.png";

const HeroSection = () => {
  const { theme } = useTheme();

  return (
    <div
      className="m-auto w-full px-4 lg:max-w-[85vw]"
      id="hero"
    >
      <h1
        className={`whitespace-nowrap pt-12 font-primary text-3xl font-bold capitalize leading-10 text-${theme} theme-transition sm:text-[3.2rem] sm:leading-[60px] lg:text-[6.5vw] lg:leading-[90px]`}
      >
        Hello, We’re a <br />{" "}
        <span className="text-orangePrimary"> Creative </span> Agency{" "}
      </h1>

      <div className="mb-10 mt-5 grid grid-cols-1 justify-between gap-y-4 md:grid-cols-[30%_60%]">
        <h4
          className={`text-${theme} theme-transition font-bold leading-[30px] md:text-xl`}
        >
          Professional Creative Design Agency Based in Bangladesh
        </h4>
        <p className="text-base leading-[30px] md:text-xl">
          A team of creative thinkers and doers who believe in the power of
          creativity to inspire change. Working seamlessly across brand and
          digital, we build modern brands with heart and spirit.{" "}
        </p>
      </div>

      <img className="w-full" src={AboutImg} alt="" />
    </div>
  );
};

export default HeroSection;
