import useTheme from "../../Hooks/useTheme";
import AboutSection from "./AboutSection";
import HeroSection from "./HeroSection";
import ProcessSection from "./ProcessSection";
import ProjectSection from "./ProjectSection";
import ServiceSection from "./ServiceSection";
import ServiceSliderSection from "./ServiceSliderSection";
import SpeechSection from "./SpeechSection";
import TestimonialSection from "./TestimonialSection";

import Video from "../../assets/Images/Video.png";


const RootSection = () => {
  const {theme} = useTheme()
  return (
    <main>
      <section aria-labelledby="hero" className="mb-[6rem]">
        <HeroSection />
        <figure className="pt-8">
          <img className="w-full " src={Video} alt="working in progress" />
        </figure>
      </section>
      <section aria-labelledby="speech" className="relative bg-orangePrimary">
        <SpeechSection />
      </section>
      <section aria-labelledby="about">
        <AboutSection />
      </section>
      <section aria-labelledby="service">
        <ServiceSection />
      </section>
      <section aria-labelledby="project">
        <ProjectSection />
      </section>
      <section aria-labelledby="process">
        <ProcessSection />
      </section>
      <section
        aria-labelledby="service-slider"
        className={`bg-${theme}-secondary`}
      >
        <ServiceSliderSection />
      </section>
      <section aria-labelledby="testimonial" className="bg-orangePrimary">
        <TestimonialSection />
      </section>
    </main>
  );
};

export default RootSection;
