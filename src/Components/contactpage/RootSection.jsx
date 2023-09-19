import FormSection from "./FormSection";
import HeroSection from "./HeroSection";
import JobOpeningSection from "./JobOpeningSection";

const RootSection = () => {
  return (
    <main>
      <section id="hero">
        <HeroSection />
      </section>

      <section id="form">
        <FormSection />
      </section>

      <section id="job-opening">
        <JobOpeningSection />
      </section>
    </main>
  );
};

export default RootSection;
