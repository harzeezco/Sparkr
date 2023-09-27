import useTheme from "../../Hooks/useTheme";
import AboutSection from "./AboutSection";
import HeroSection from "./HeroSection";
import ProcessSection from "./ProcessSection";
import ProjectSection from "./ProjectSection";
import ServiceSection from "./ServiceSection";
import SpeechSection from "./SpeechSection";
import TestimonialSection from "./TestimonialSection";
import Video from "../../assets/Images/Hero.webp";
import ServiceSlider from "../general/ServicesSlider";

const RootSection = () => {
  const { theme } = useTheme();
  return (
    <main>
      <section aria-labelledby="hero">
        <HeroSection />
        <div className="mx-auto w-full max-w-[100vw] pt-8">
          <img
            src={Video}
            alt="working in progress"
            loading="lazy"
            height="624"
            width="100%"
          />
        </div>
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
