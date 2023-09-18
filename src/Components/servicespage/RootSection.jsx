import useTheme from "../../Hooks/useTheme";
import FeatureSection from "./FeatureSection";
import HeroSection from "./HeroSection";
import SpeechSetion from "./SpeechSetion";
import TrustedCompanies from "./TrustedCompanies";

const RootSection = () => {
  const { theme } = useTheme();

  return (
    <main>
      <section aria-labelledby="hero">
        <HeroSection />
      </section>

      <section
        className={`bg-${theme}-secondary theme-transition`}
        aria-labelledby="hero"
      >
        <SpeechSetion />
      </section>

      <section aria-labelledby="feature">
        <FeatureSection />
      </section>

      <section
        className={theme === "light" ? "bg-inherit" : "bg-dark-secondary"}
        aria-labelledby="trusted-companies"
      >
        <TrustedCompanies />
      </section>
    </main>
  );
};

export default RootSection;
