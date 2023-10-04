import useTheme from "../../Hooks/useTheme";
import AboutSection from "./AboutSection";
import HeroSection from "./HeroSection";
import ProcessSection from "./ProcessSection";
import ProjectSection from "./ProjectSection";
import ServiceSection from "./ServiceSection";
import SpeechSection from "./SpeechSection";
import TestimonialSection from "./TestimonialSection";
import Hero_webp from "../../assets/Images/Hero.webp";
import Hero_png from "../../assets/Images/Hero.png";
import ServiceSlider from "../general/ServicesSlider";
import Image from "../general/Image";
import Branding from "../../assets/gif/web.mp4";

const RootSection = () => {
  const { theme } = useTheme();
  return (
    <main className="scrollbar-hide-firefox scrollbar-hide-chrome">
      <section aria-labelledby="hero">
        <HeroSection />
        <div className="mx-auto w-full max-w-[100vw] pt-8">
          <video
            loop
            autoPlay
            muted
            className=""
            width="100%"
            height="800"
          >
            <source src={Branding} type="video/mp4" />
            <track
              label="English Captions"
              kind="captions"
              srcLang="en"
              default
            ></track>
          </video>
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
