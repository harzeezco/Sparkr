import Services from "../general/Services";
import Container from "../layouts/Container";

const HeroSection = () => {
  return (
    <Container id="hero" pb="[6rem]" pt="10">
      <section>
        <h1 className="whitespace-nowrap font-primary text-3xl font-bold capitalize leading-10 text-white sm:text-[3.2rem] sm:leading-[60px] lg:text-[6.5vw] lg:leading-[95px]">
          <span className="text-orangePrimary">guiding </span>companies <br />{" "}
          through moments of <br />
          transformation.
        </h1>

        <div className="pt-10">
          <Services />
        </div>
      </section>
    </Container>
  );
};

export default HeroSection;