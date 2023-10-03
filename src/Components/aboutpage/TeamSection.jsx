import SwipeImage from "../../assets/Images/swipe.png"
import Container from "../layouts/Container";

const TeamSection = () => {

  return (
    <Container id="team">
      <article className="py-[3rem]">
        <h1 className="text-primary text-left font-primary text-[30px] font-normal capitalize text-white sm:text-[45px] lg:pr-20 lg:text-[60px] lg:leading-[84px]">
          EACH OF OUR DESIGNERS WAS THE BEST AMONG SEVERAL OTHERS IN HIS NICHE
        </h1>
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

export default TeamSection;
