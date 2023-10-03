import useTheme from "../../Hooks/useTheme";
import Community_png from "../../assets/Images/VideoAboutImg.png";
import Community_webp from "../../assets/Images/VideoAboutImg.webp";
import Image from "../general/Image";
import Container from "../layouts/Container";

const CommunitySection = () => {
  const { theme } = useTheme();

  return (
    <Container id="community">
      <article className="grid grid-cols-1 items-center gap-x-16 gap-y-10 pt-12 md:grid-cols-2">
        <Image
          defaultSrc={Community_webp}
          alternateSrc={Community_png}
          alt="video image"
          width="100%"
          height="470"
        />
        <div>
          <h1
            className={`font-primary text-3xl font-bold capitalize leading-10 text-${theme} theme-transition sm:text-[2.9rem] sm:leading-[50px] lg:text-[3.5vw] lg:leading-[54px]`}
          >
            Our <span className="text-orangePrimary">Community</span> <br />{" "}
            Goes Beyond the <br /> Office
          </h1>
          <p className="mt-4 leading-[30px] sm:text-lg">
            A team of creative thinkers and doers who believe in the power of
            creativity to inspire change. Working seamlessly across brand and
            digital, we build modern brands with heart and spirit.{" "}
          </p>
        </div>
      </article>
    </Container>
  );
};

export default CommunitySection;
