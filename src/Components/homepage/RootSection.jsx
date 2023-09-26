import useTheme from "../../Hooks/useTheme";
import AboutSection from "./AboutSection";
import HeroSection from "./HeroSection";
import ProcessSection from "./ProcessSection";
import ProjectSection from "./ProjectSection";
import ServiceSection from "./ServiceSection";
import SpeechSection from "./SpeechSection";
import TestimonialSection from "./TestimonialSection";
import Video from "../../assets/Images/Hero.webp";
import ServiceSlider from "../general/SrvicesSlider";

const RootSection = () => {
  const { theme } = useTheme();
  return (
    <main>
      <section aria-labelledby="hero">
        <HeroSection />
        <figure className="pt-8">
          <img className="w-[100vw]" src={Video} alt="working in progress" loading="lazy"/>
        </figure>
      </section>
      <section
        aria-labelledby="speech"
        className="relative mt-[-20px] bg-orangePrimary"
      >
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
        <ServiceSlider />
      </section>
      <section aria-labelledby="testimonial" className="bg-orangePrimary">
        <TestimonialSection />
      </section>
    </main>
  );
};

export default RootSection;
