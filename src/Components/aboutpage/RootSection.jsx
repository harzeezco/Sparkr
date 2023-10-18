import useTheme from "../../Hooks/useTheme";
import HeroSection from "./HeroSection";
import IdeaSection from "./IdeaSection";
import ValueSection from "./ValueSection";

const RootSection = () => {
  const { theme } = useTheme();

  return (
    <main className="relative" id="about-content">
      <section aria-labelledby="hero">
        <HeroSection />
      </section>
      <section
        aria-labelledby="service-slider"
        className={`bg-${theme}-secondary mb-20`}
      ></section>
      <section aria-labelledby="idea">
        <IdeaSection />
      </section>
      <section aria-labelledby="value">
        <ValueSection />
      </section>
    </main>
  );
};

export default RootSection;
