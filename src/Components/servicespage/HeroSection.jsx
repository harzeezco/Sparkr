import { BannerRowBottom } from "../general/BannerRowBottom";
import { BannerRowTop } from "../general/BannerRowTop";
import Services from "../general/Services";
import Container from "../layouts/Container";

const HeroSection = () => {

  return (
    <Container id="hero">
      <section className="pt-12">
        {/* <motion.h1
          className={`whitespace-nowrap font-primary text-3xl font-bold capitalize leading-10 text-${theme} theme-transition theme-transition sm:text-[3.2rem] sm:leading-[60px] lg:text-[6.5vw] lg:leading-[95px]`}
          initial={{ y: 0 }}
          animate={{ y: 0 }}
          transition={{ duration: 0, delay: 0, ease: "easeInOut" }}
        >
          <span className="text-orangePrimary">guiding </span>companies <br />{" "}
          through moments of <br />
          transformation.
        </motion.h1> */}

        <div className="flex h-[130px] items-center gap-x-4 overflow-hidden">
          <BannerRowTop title="guiding" color="text-mode" />
          <BannerRowTop title="brands" color="text-default" />
          <BannerRowTop title="through" color="text-default" />
        </div>

        <div className="-mt-7 flex h-[130px] items-center gap-x-5 overflow-hidden">
          <BannerRowBottom title="moments" color="text-mode" />
          <BannerRowBottom title="of" color="text-mode" />
        </div>

        <div className="-mt-7 flex h-[130px] items-center gap-x-5 overflow-hidden">
          <BannerRowBottom title="transformation." color="text-mode" />
        </div>

        <div className="pt-10">
          <Services />
        </div>
      </section>
    </Container>
  );
};

export default HeroSection;
