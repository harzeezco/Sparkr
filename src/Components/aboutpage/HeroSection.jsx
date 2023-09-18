import useTheme from "../../Hooks/useTheme";
import Container from "../layouts/Container";

import AboutImg from "../../assets/Images/About.png"

const HeroSection = () => {
  const { theme } = useTheme();

  return (
    <Container id="hero" pb="[3rem]" pt="10">
      <h1
        className={`whitespace-nowrap font-primary text-3xl font-bold capitalize leading-10 text-${theme} theme-transition sm:text-[3.2rem] sm:leading-[60px] lg:text-[6.5vw] lg:leading-[90px]`}
      >
        Hello, We’re a <br />{" "}
        <span className="text-orangePrimary"> Creative </span> Agency{" "}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-[30%_60%] justify-between mt-5 mb-10 gap-y-4">
        <h4 className={`text-${theme} font-bold md:text-xl leading-[30px]`}>Professional Creative Design Agency Based in Bangladesh</h4>
        <p className="text-base md:text-xl leading-[30px]">
          A team of creative thinkers and doers who believe in the power of
          creativity to inspire change. Working seamlessly across brand and
          digital, we build modern brands with heart and spirit.{" "}
        </p>
      </div>

      <img className="w-full" src={AboutImg} alt="" />
    </Container>
  );
};

export default HeroSection;
