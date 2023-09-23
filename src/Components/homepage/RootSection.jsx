import useTheme from "../../Hooks/useTheme";
import AboutSection from "./AboutSection";
import HeroSection from "./HeroSection";
import ProcessSection from "./ProcessSection";
import ProjectSection from "./ProjectSection";
import ServiceSection from "./ServiceSection";
import SpeechSection from "./SpeechSection";
import TestimonialSection from "./TestimonialSection";
import { motion } from "framer-motion";
import Video from "../../assets/Images/Video.png";
import ServiceSlider from "../general/SrvicesSlider";

const RootSection = () => {
  const { theme } = useTheme();
  return (
    <main>
      <section aria-labelledby="hero" className="" data-scroll-section>
        <HeroSection />
        <motion.figure
          initial={{ opacity: 0, y: 110 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            ease: "easeInOut",
            duration: 1,
            delay: 3,
          }}
          className="pt-8"
          data-scroll-section
        >
          <img className="w-full " src={Video} alt="working in progress" loading="lazy"/>
        </motion.figure>
      </section>
      <section
        aria-labelledby="speech"
        className="relative mt-[-20px] bg-orangePrimary"
        data-scroll-section
      >
        <SpeechSection />
      </section>
      <section aria-labelledby="about" data-scroll-section>
        <AboutSection />
      </section>
      <section aria-labelledby="service" data-scroll-section>
        <ServiceSection />
      </section>
      <section aria-labelledby="project" data-scroll-section>
        <ProjectSection />
      </section>
      <section aria-labelledby="process" data-scroll-section>
        <ProcessSection />
      </section>
      <section
        aria-labelledby="service-slider"
        className={`bg-${theme}-secondary`}
        data-scroll-section
      >
        <ServiceSlider />
      </section>
      <section
        aria-labelledby="testimonial"
        className="bg-orangePrimary"
        data-scroll-section
      >
        <TestimonialSection />
      </section>
    </main>
  );
};

export default RootSection;
