import gif from "../../assets/gif/Web.mp4";
import useTheme from "../../Hooks/useTheme";
import { motion } from "framer-motion";

const banner = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};

const HeroSection = () => {
  const { theme } = useTheme();

  const isLightMode = theme === "light" ? "text-light-primary" : "text-dark";

  return (
    <motion.div
      className="scrollbar-hide-chrome m-auto w-full px-5 lg:max-w-[1100px]"
      id="hero"
      variants={banner}
    >
      <div className="grid pt-12">
        <h1
          className={`whitespace-nowrap font-primary text-4xl font-bold capitalize ${isLightMode} theme-transition md:hidden lg:text-[5.2rem]`}
        >
          We Are
        </h1>
        <div className="order-last block items-center justify-between gap-x-6 md:order-first md:inline-flex">
          <motion.h1
            initial={{ opacity: 0, y: 90 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              ease: "easeInOut",
              duration: 0,
              delay: 0,
            }}
            className={`hidden whitespace-nowrap font-primary text-4xl font-bold capitalize ${isLightMode} theme-transition sm:text-[50px] md:block lg:text-[5rem]`}
          >
            We Are
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              ease: "easeInOut",
              duration: 0,
              delay: 0,
            }}
            className="order-first text-base leading-[30px] md:order-last  md:text-lg"
          >
            We are helping people to grow their business. We are providing the
            best designs and development service for your next dream project.
          </motion.p>
          <motion.div
            className="mt-4 max-w-[170px] rounded-[40px] md:mt-0"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              ease: "easeInOut",
              duration: 0,
              delay: 0,
            }}
          >
            <video
              loop
              autoPlay
              muted
              className="rounded-[50px]"
              width="100%"
              height="80"
            >
              <source src={gif} type="video/mp4" />
              <track
                label="English Captions"
                kind="captions"
                srcLang="en"
                default
              ></track>
            </video>
          </motion.div>
        </div>
        <motion.h1
          initial={{ opacity: 0, y: 110 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            ease: "easeInOut",
            duration: 0,
            delay: 0,
          }}
          id="header-text"
          className="font-primary text-[40px] font-bold capitalize leading-[50px] tracking-[-1px] text-orangePrimary sm:text-[7vw] md:whitespace-nowrap md:leading-snug lg:text-[6.5vw]"
        >
          building{" "}
          <span className={`${isLightMode} theme-transition`}>digital</span>{" "}
          brands
        </motion.h1>
      </div>
    </motion.div>
  );
};

export default HeroSection;
