import { BannerRowBottom } from "../general/BannerRowBottom";
import { BannerRowTop } from "../general/BannerRowTop";
import Services from "../general/Services";
import Container from "../layouts/Container";

const HeroSection = () => {

  return (
    <Container id="hero">
      <section className="pt-12">

        <div className="flex h-[130px] items-center gap-x-4 overflow-hidden">
          <BannerRowTop title="guiding" color="text-mode" />
          <BannerRowTop title="brands" color="text-default" />
          <BannerRowTop title="through" color="text-default" />
        </div>

        <div className="-mt-14 flex h-[130px] items-center gap-x-5 overflow-hidden">
          <BannerRowBottom title="moments" color="text-mode" />
          <BannerRowBottom title="of" color="text-mode" />
          <BannerRowBottom title="transformation." color="text-mode" />
        </div>


        <div>
          <Services />
        </div>
      </section>
    </Container>
  );
};

export default HeroSection;
