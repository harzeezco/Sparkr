import EmailSection from "./EmailSection";
import FormSection from "./FormSection";
import HeroSection from "./HeroSection";

const RootSection = () => {
  return (
    <main>
      <section id="hero">
        <HeroSection />
      </section>

      <section id="form">
        <FormSection />
      </section>

      <section id="email">
        <EmailSection />
      </section>
    </main>
  );
};

export default RootSection;
