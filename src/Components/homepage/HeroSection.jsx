import { useContext } from "react";
import branding from "/videos/Branding.mp4";
import { motion } from "framer-motion";
import { BannerAnimationContext } from "../../Contexts/BannerAnimationContext";
import { BannerRowTop } from "../general/BannerRowTop";
import { BannerRowBottom } from "../general/BannerRowBottom";

const HeroSection = () => {
  const banner = useContext(BannerAnimationContext);

  return (
    <motion.div
      className="m-auto w-full px-5 lg:max-w-[1100px]"
      id="hero"
      variants={banner}
      data-scroll
      data-scroll-speed="1"
      data-scroll-position="top"
    >
      <div className="grid pt-10">
        <div
          className="flex h-[130px] items-center gap-x-5 overflow-hidden md:hidden"
          data-scroll
          data-scroll-speed="-1"
          data-scroll-position="top"
        >
          <BannerRowTop title="We" color="text-mode" text_large />
          <BannerRowTop title="spark" color="text-default" text_large />
        </div>
        <div>
          <div className="hidden md:block">
            <div
              className="flex h-[130px] items-center gap-x-4 overflow-hidden"
              data-scroll
              data-scroll-speed="-1"
              data-scroll-position="top"
            >
              <BannerRowTop title="We" color="text-mode" text_large />
              <BannerRowTop title="spark" color="text-default" text_large />
            </div>
          </div>
          <div
            className="flex h-[130px] items-center overflow-hidden md:gap-x-10 gap-x-6"
            data-scroll
            data-scroll-speed="-4"
            data-scroll-position="top"
          >
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                ease: "easeInOut",
                duration: 1,
                delay: 0.4,
              }}
              className="clip mt-4 max-w-[170px] rounded-[40px] md:mt-0"
            >
              <video
                loop
                autoPlay
                muted
                className="rounded-[50px]"
                width="100%"
                height="40"
              >
                <source src={branding} type="video/mp4" />
                <track
                  label="English Captions"
                  kind="captions"
                  srcLang="en"
                  default
                ></track>
              </video>
            </motion.div>

            <BannerRowTop title="Digital" color="text-mode" text_large />
          </div>
        </div>

        <div
          className="flex h-[130px] items-center gap-x-2 overflow-hidden"
          data-scroll
          data-scroll-speed="-1"
          data-scroll-position="top"
        >
          <BannerRowBottom title="Brands" color="text-default" text_large />
          <BannerRowBottom title="that" color="text-mode" text_large />
          <BannerRowBottom title="Strive" color="text-default" text_large />
        </div>
      </div>
    </motion.div>
  );
};

export default HeroSection;
