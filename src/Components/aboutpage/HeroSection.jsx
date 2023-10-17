import useTheme from "../../Hooks/useTheme";

import { BannerRowTop } from "../general/BannerRowTop";
import { BannerRowBottom } from "../general/BannerRowBottom";
import AnimatedTextLetters from "../../Animation/AnimatedTextLetters";
import AnimatedImage from "../../Animation/AnimatedImage";

import About_webp from "../../assets/Images/About.webp";
import About_png from "../../assets/Images/About.png";

const HeroSection = () => {
  const { theme } = useTheme();

  return (
    <div className="m-auto w-full px-5 lg:max-w-[1100px]" id="hero">
      <div className="flex h-[130px] items-center gap-x-4 overflow-hidden">
        <BannerRowTop title="Hello," color="text-mode" />
        <BannerRowTop title="We're" color="text-mode" />
        <BannerRowTop title=" a" color="text-mode" />
      </div>

      <div className="-mt-24 flex h-[130px] items-center gap-x-5 overflow-hidden sm:-mt-14">
        <BannerRowBottom title="Creative" color="text-default" />
        <BannerRowBottom title="Agency" color="text-mode" />
      </div>

      <div className="mb-10 mt-0 grid grid-cols-1 justify-between gap-y-4 sm:mt-5 md:grid-cols-[30%_60%]">
        <AnimatedTextLetters
          phrase={`Professional Creative Design Agency Based in Nigeria`}
          className={`text-${theme} theme-transition font-bold leading-[30px] md:text-xl`}
          openDuration={0.2}
          closeDuration={0.2}
        />
        <AnimatedTextLetters
          openDuration={0.2}
          closeDuration={0.5}
          delay={0.2}
          phrase={`A team of creative thinkers and doers who believe in the power of creativity to inspire change. Working seamlessly across brand and digital, we build modern brands with heart and spirit.`}
          className="text-base leading-[30px] md:text-xl"
        />
      </div>

      <AnimatedImage
        defaultSrc={About_webp}
        alternateSrc={About_png}
        alt="community image"
        width="100%"
        height="570"
      />
    </div>
  );
};

export default HeroSection;
