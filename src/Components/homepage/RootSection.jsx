import useTheme from "../../Hooks/useTheme";
// import AboutSection from "./AboutSection";
import HeroSection from "./HeroSection";
// import ServiceSection from "./ServiceSection";
// import SpeechSection from "./SpeechSection";
import TestimonialSection from "./TestimonialSection";
import ServiceSlider from "../general/ServicesSlider";
import Branding from "/videos/Web.mp4";
import { lazy } from "react";
import VideoPlaceholder from "../general/VideoPlaceholder";

const ProcessSection = lazy(() => import("./ProcessSection"));
const ProjectSection = lazy(() => import("./ProjectSection"));
// const ServiceSlider = lazy(() => import("../general/ServicesSlider"));
const ServiceSection = lazy(() => import("./ServiceSection"));
// const TestimonialSection = lazy(() => import("./TestimonialSection"));
const SpeechSection = lazy(() => import("./SpeechSection"));
const AboutSection = lazy(() => import("./AboutSection"));
import Hero from "../../assets/Images/Hero.webp";

const RootSection = () => {
  const { theme } = useTheme();
  return (
    <div className="scrollbar-hide-firefox scrollbar-hide-chrome">
      <section aria-labelledby="hero">
        <HeroSection />
        <div className="mx-auto w-full max-w-[100vw] pt-20">
          <VideoPlaceholder src={Branding} image={Hero} />
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
    </div>
  );
};

export default RootSection;
