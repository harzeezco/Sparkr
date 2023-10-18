import { BannerRowBottom } from "../general/BannerRowBottom";
import { BannerRowTop } from "../general/BannerRowTop";
import Services from "../general/Services";
import Container from "../layouts/Container";

const HeroSection = () => {
  return (
    <Container id="hero">
      <section className="pt-12">
        <div className="flex flex-shrink flex-wrap items-center gap-x-2 overflow-hidden sm:h-[130px] sm:gap-x-4">
          <BannerRowTop title="Guiding" color="text-mode" />
          <BannerRowTop title="brands" color="text-default" />
          <BannerRowTop title="through" color="text-default" />
        </div>

        <div className="flex flex-wrap items-center gap-x-2 overflow-hidden sm:-mt-20 sm:h-[130px] sm:gap-x-4 md:-mt-14">
          <BannerRowBottom title="moments" color="text-mode" />
          <BannerRowBottom title="of" color="text-mode" />
          <BannerRowBottom title="transformation." color="text-mode" />
        </div>

        <div className="mt-20">
          <Services />
        </div>
      </section>
    </Container>
  );
};

export default HeroSection;
