import FooterNavDetails from "../data-display/FooterNavDetails";
import RegularList from "../general/RegularList";
import SocialLink from "../navigation/SocialLink";
import Container from "./Container";

import upArrow from "../../assets/Icons/upArrow2.svg";
import Logo from "../../assets/Icons/Route.svg";
import Line from "../../assets/Images/Line.png";
import {
  FOOTER_1_NAV_LINKS,
  FOOTER_2_NAV_LINKS,
  SOCIAL_LINKS,
} from "../../lib/data";


const Footer = () => {
  return (
    <Container pb="14" pt="20" id='footer'>
      <div className="grid grid-cols-1 items-center gap-y-6 md:grid-cols-[1fr_40%]">
        <h1 className="heading-primary">
          let’s make your <br />{" "}
          <span className="text-orangePrimary">product</span> together
        </h1>
        <button className="flex h-[60px] w-full max-w-[60px] items-center justify-center justify-self-start rounded-full bg-white md:ml-8 md:h-[100px] md:max-w-[100px]">
          <img src={upArrow} className="h-6 md:h-8" alt="arrow icon" />
        </button>
      </div>
      <div className="mt-20 grid grid-cols-1 gap-y-8 pb-10 sm:grid-cols-[3fr_1fr_1fr] lg:grid-cols-[3fr_1fr_1fr_1fr]">
        <div>
          <div className="mb-8 flex items-center gap-x-3">
            <img src={Logo} alt="" />
            <div className="flex items-center gap-x-3">
              <span className="inline-block">
                <img className="h-full" src={Line} alt="a line" />
              </span>
              <p className="inline-block text-[18px] text-white">
                The Creative Agency
              </p>
            </div>
          </div>
          <div>
            <h4 className="text-[20px] font-bold leading-[20px] text-white md:leading-[30px]">
              Follow us
            </h4>
            <ul className="flex items-center justify-start gap-x-4 pt-5">
              <RegularList
                items={SOCIAL_LINKS}
                resourceName="items"
                itemComponent={SocialLink}
              />
            </ul>
          </div>
        </div>

        <FooterNavDetails
          heading="about"
          items={FOOTER_1_NAV_LINKS}
          link={true}
        />

        <FooterNavDetails
          heading="support"
          items={FOOTER_2_NAV_LINKS}
          link={true}
        />

        <FooterNavDetails
          heading="join community"
          link={false}
          content="Community@agency.com"
        />
      </div>

      <hr className="my-8 w-full border-b-[1px] text-white opacity-[30%]" />

      <p className="text-center text-sm text-white opacity-[70%]">
        Copyright 2023 all rights Flowgiri reserved
      </p>
    </Container>
  );
};

export default Footer;
