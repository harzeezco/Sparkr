import SwipeImage from "../../assets/Images/swipe.png";
import Container from "../layouts/Container";

const SpeechSection = () => {
  return (
    <Container id="speech" py="[3rem]">
      <article className="py-[2rem]">
        <h1 className="text-primary text-left font-primary text-[30px] font-normal capitalize text-white sm:text-[45px] lg:pr-20 lg:text-[65px] lg:leading-[84px]">
          we look at yesterday&apos;s world and change the rule of the game a
          bit.
        </h1>
        <div className="absolute right-0 top-[50%] max-w-[15vw] lg:max-w-[25vw]">
          <img className="w-[100%] max-w-[12vw]" src={SwipeImage} alt="swipe image for beautify" loading="lazy"/>
        </div>
      </article>
    </Container>
  );
};

export default SpeechSection;
