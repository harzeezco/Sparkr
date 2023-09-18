import CommunitySection from "./CommunitySection";
import HeroSection from "./HeroSection";
import IdeaSection from "./IdeaSection";
import ValueSection from "./ValueSection";

const RootSection = () => {
  return (
    <main>
      <section aria-labelledby="hero">
        <HeroSection />
      </section>
      <section aria-labelledby="idea">
        <IdeaSection />
      </section>
      <section aria-labelledby="value">
        <ValueSection />
      </section>
      <section aria-labelledby="value">
        <CommunitySection />
      </section>
    </main>
  );
};

export default RootSection;
