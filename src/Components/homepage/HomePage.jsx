import HeroSection from "./HeroSection";
import SpeechSection from "./SpeechSection";

const HomePage = () => {
  return (
    <div>
      <section aria-labelledby="hero" className="bg-colorDark">
        <HeroSection />
      </section>
      <section aria-labelledby="speech" className="bg-orangePrimary relative">
        <SpeechSection />
      </section>
    </div>
  );
};

export default HomePage;
