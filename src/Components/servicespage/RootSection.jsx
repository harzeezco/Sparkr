import FeatureSection from "./FeatureSection";
import HeroSection from "./HeroSection";
import SpeechSetion from "./SpeechSetion";
import TrustedCompanies from "./TrustedCompanies";

const RootSection = () => {
  return (
    <main>
      <section className="bg-colorDark" aria-labelledby="hero">
        <HeroSection />
      </section>

      <section className="bg-colorDarkLight" aria-labelledby="hero">
        <SpeechSetion />
      </section>

      <section className="bg-colorDark" aria-labelledby="feature">
        <FeatureSection />
      </section>

      <section className="bg-colorDarkLight" aria-labelledby="trusted-companies">
        <TrustedCompanies />
      </section>
    </main>
  );
};

export default RootSection;
