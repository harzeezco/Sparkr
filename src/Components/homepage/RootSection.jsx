import { lazy } from "react";
import useTheme from "../../Hooks/useTheme";
import HeroSection from "./HeroSection";
import TestimonialSection from "./TestimonialSection";
import ServiceSlider from "../general/ServicesSlider";
import Branding from "/videos/Web.mp4";
import VideoPlaceholder from "../general/VideoPlaceholder";

const ProcessSection = lazy(() => import("./ProcessSection"));
const ProjectSection = lazy(() => import("./ProjectSection"));
const SpeechSection = lazy(() => import("./SpeechSection"));
const AboutSection = lazy(() => import("./AboutSection"));
import ServiceSection from "./ServiceSection";

const RootSection = () => {
  const { theme } = useTheme();
  return (
    <>
      <section aria-labelledby="hero" data-scroll-section>
        <HeroSection />
        <div
          className="mx-auto w-full max-w-[100vw] pt-20"
          data-scroll
          data-scroll-speed="-10"
          data-scroll-position="top"
          data-scroll-delay="0.035"
        >
          <VideoPlaceholder src={Branding}  />
        </div>
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
        data-scroll-section
        aria-labelledby="service-slider"
        className={`bg-${theme}-secondary`}
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
    </>
  );
};

export default RootSection;
