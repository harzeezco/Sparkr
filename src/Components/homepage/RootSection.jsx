import AboutSection from "./AboutSection";
import HeroSection from "./HeroSection";
import ProcessSection from "./ProcessSection";
import ProjectSection from "./ProjectSection";
import ServiceSection from "./ServiceSection";
import ServiceSliderSection from "./ServiceSliderSection";
import SpeechSection from "./SpeechSection";
import TestimonialSection from "./TestimonialSection";

const RootSection = () => {
  return (
    <main>
      <section aria-labelledby="hero" className="bg-colorDark">
        <HeroSection />
      </section>
      <section aria-labelledby="speech" className="relative bg-orangePrimary">
        <SpeechSection />
      </section>
      <section aria-labelledby="about" className="bg-colorDark">
        <AboutSection />
      </section>
      <section aria-labelledby="service" className="bg-colorDark">
        <ServiceSection />
      </section>
      <section aria-labelledby="project" className="bg-colorDark">
        <ProjectSection />
      </section>
      <section aria-labelledby="process" className="bg-colorDark">
        <ProcessSection />
      </section>
      <section aria-labelledby="service-slider" className="bg-colorDarkLight">
        <ServiceSliderSection />
      </section>
      <section aria-labelledby="testimonial" className="bg-orangePrimary">
        <TestimonialSection />
      </section>
    </main>
  );
};

export default RootSection;
