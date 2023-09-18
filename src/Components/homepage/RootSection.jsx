import useTheme from "../../Hooks/useTheme";
import AboutSection from "./AboutSection";
import HeroSection from "./HeroSection";
import ProcessSection from "./ProcessSection";
import ProjectSection from "./ProjectSection";
import ServiceSection from "./ServiceSection";
import ServiceSliderSection from "./ServiceSliderSection";
import SpeechSection from "./SpeechSection";
import TestimonialSection from "./TestimonialSection";

const RootSection = () => {
  const {theme} = useTheme()
  return (
    <main>
      <section aria-labelledby="hero" className="">
        <HeroSection />
      </section>
      <section aria-labelledby="speech" className="relative bg-orangePrimary">
        <SpeechSection />
      </section>
      <section aria-labelledby="about" className="">
        <AboutSection />
      </section>
      <section aria-labelledby="service" className="">
        <ServiceSection />
      </section>
      <section aria-labelledby="project" className="">
        <ProjectSection />
      </section>
      <section aria-labelledby="process" className="">
        <ProcessSection />
      </section>
      <section aria-labelledby="service-slider" className={`bg-${theme}-secondary`}>
        <ServiceSliderSection />
      </section>
      <section aria-labelledby="testimonial" className="bg-orangePrimary">
        <TestimonialSection />
      </section>
    </main>
  );
};

export default RootSection;
