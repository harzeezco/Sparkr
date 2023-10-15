import AnimatedTextLetters from "../../Animation/AnimatedTextLetters";
import SwipeImage from "../../assets/Images/swipe.png";
import Container from "../layouts/Container";

const SpeechSection = () => {
  return (
    <Container id="speech" py="[3rem]">
      <article
        className="py-[2rem]"
        data-scroll
        data-scroll-speed="-10"
        data-scroll-position="top"
        data-scroll-delay="0.035"
      >
        <AnimatedTextLetters
          phrase={`We Spark New Ways of Thinking About your Digital Branding`}
          className="text-primary px-1 text-left font-primary text-[30px] font-normal capitalize text-white sm:text-[45px] lg:text-[65px] lg:leading-[84px]"
          openDuration={0.3}
          closeDuration={0.3}
        />
        <div className="absolute right-0 top-[50%] w-full max-w-[135px]">
          <img
            src={SwipeImage}
            alt="swipe image for beautify"
            loading="lazy"
            height="90"
            width="100%"
          />
        </div>
      </article>
    </Container>
  );
};

export default SpeechSection;
