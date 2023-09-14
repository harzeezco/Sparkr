import SwipeImage from "../../assets/Images/swipe.png";
import Container from "../layouts/Container";

const SpeechSection = () => { 
  return (
    <Container id="process" pb="0" py="14" pt="0" pr="8">
      <p className="text-primary font-primary text-left text-[30px] capitalize text-white sm:text-[45px] lg:text-[65px] lg:pr-10 lg:leading-[84px] font-normal">
        we look at yesterday&apos;s world and change the rule of the game a bit.
      </p>
      <div className="absolute right-0 top-[50%] max-w-[15vw] lg:max-w-[25vw]">
        <img className="w-[100%] max-w-[12vw]" src={SwipeImage} alt="" />
      </div>
    </Container>
  );
};

export default SpeechSection;
