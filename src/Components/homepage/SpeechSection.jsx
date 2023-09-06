import SwipeImage from "../../assets/Images/swipe.png";

const SpeechSection = () => {
  return (
    <div id="speech" className="m-auto px-6 py-14 pr-8 lg:max-w-[80vw]">
      <p className="text-primary text-left text-[30px] capitalize text-white sm:text-[45px] lg:text-[65px] lg:pr-10 lg:leading-[84px] font-normal">
        we look at yesterday&apos;s world and change the rule of the game a bit.
      </p>
      <div className="absolute right-0 top-[50%] max-w-[15vw] lg:max-w-[25vw]">
        <img className="" src={SwipeImage} alt="" />
      </div>
    </div>
  );
};

export default SpeechSection;
