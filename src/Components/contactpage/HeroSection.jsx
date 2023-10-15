import { BannerRowBottom } from "../general/BannerRowBottom";
import { BannerRowTop } from "../general/BannerRowTop";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div
      className="md:pt-${pt} m-auto mb-[3.5rem] w-full px-5 lg:max-w-[1100px]"
      id="hero"
    >
      <div className="flex h-[130px] items-center gap-x-4 overflow-hidden">
        <BannerRowTop title="Let’s" color="text-mode" />
        <BannerRowTop title="start" color="text-mode" />
        <BannerRowTop title="a" color="text-mode" />
      </div>

      <div className="-mt-16 flex h-[130px] items-center gap-x-5 overflow-hidden">
        <BannerRowBottom title="project" color="text-mode" />
        <BannerRowBottom title="together" color="text-default" />
      </div>

      <motion.p
        initial={{ opacity: 0, y: 70 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          stiffness: 300,
          delay: 1.5,
          type: "spring",
        }}
        className="text-base leading-[30px] md:w-[65%] md:text-xl"
      >
        Perhaps there’s a way your business could benefit by partnering with
        Route Agency? Please share your thoughts in the form below, and we’ll
        respond within 48 hours of receiving the inquiry.
      </motion.p>
    </div>
  );
};

export default HeroSection;
