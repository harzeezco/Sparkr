import FooterNavDetails from "../data-display/FooterNavDetails";
import RegularList from "../general/RegularList";
import SocialLink from "../navigation/SocialLink";

import upArrow from "../../assets/Icons/upArrow2.svg";
import LogoLightMode from "../../assets/Svg/LogoLightMode.svg";
import LogoDarkMode from "../../assets/Svg/LogoDarkMode.svg";
import Line from "../../assets/Images/Line.png";
import LineLight from "../../assets/Icons/LineLight.svg";
import {
  FOOTER_1_NAV_LINKS,
  FOOTER_2_NAV_LINKS,
  SOCIAL_LINKS,
} from "../../lib/data";
import ImageWrapper from "../data-display/ImageWrapper";
import useTheme from "../../Hooks/useTheme";
import ScrollToTopLink from "../../Animation/ScrollToTopLink";
import Header from "../general/Header";

const Footer = () => {
  const { theme } = useTheme();
  const currentDate = new Date().getFullYear();

  const headerText = `theme-transition font-primary text-[30px] font-bold sm:text-[45px] md:leading-[74px] lg:text-[60px]`;

  const NAVBARHEADER = [
    {
      id: 1,
      phrase: "let’s",
      className: `${headerText} text-${theme}`,
    },
    {
      id: 2,
      phrase: "make",
      className: `${headerText} text-${theme}`,
    },
    {
      id: 3,
      phrase: "your",
      className: `${headerText} text-${theme}`,
    },
    {
      id: 4,
      phrase: "product",
      className: `${headerText} text-orangePrimary`,
    },
    {
      id: 5,
      phrase: "together",
      className: `${headerText} text-${theme}`,
    },
  ];

  const FIRST_LINE = NAVBARHEADER.slice(0, 3);
  const SECOND_LINE = NAVBARHEADER.slice(3);

  return (
    <div className="m-auto px-5 pb-10 lg:max-w-[1100px]" id="footer">
      <div className="grid grid-cols-1 items-center gap-y-6 md:grid-cols-[1fr_40%]">
        <div>
          <div className="flex items-center gap-x-1">
            <RegularList
              resourceName="text"
              itemComponent={Header}
              items={FIRST_LINE}
            />
          </div>

          <div className="mb-7 flex items-center gap-x-1">
            <RegularList
              resourceName="text"
              itemComponent={Header}
              items={SECOND_LINE}
            />
          </div>
        </div>

        <ScrollToTopLink to="/contact">
          <div
            className={`bg-${theme}-secondary theme-transition flex h-[60px] w-full max-w-[60px] items-center justify-center justify-self-start rounded-full md:ml-8 md:h-[100px] md:max-w-[100px]`}
          >
            <img
              src={upArrow}
              alt="arrow icon for moving to the contact page"
              loading="lazy"
              height="24"
              width="24"
            />
          </div>
        </ScrollToTopLink>
      </div>
      <div className="mt-20 grid grid-cols-1 gap-y-8 pb-10 sm:grid-cols-[3fr_1fr_1fr] lg:grid-cols-[3fr_1fr_1fr_1fr]">
        <div>
          <div className="mb-8 flex items-center gap-x-3">
            <ImageWrapper
              srcForDarkMode={LogoDarkMode}
              src={LogoLightMode}
              alt="Logo"
              width="150"
              height="34"
            />
            <div className="flex items-center gap-x-3">
              <span className="theme-transition inline-flex">
                <ImageWrapper
                  src={LineLight}
                  srcForDarkMode={Line}
                  alt="line"
                  height="100%"
                  width="100%"
                />
              </span>
              <p className={`inline-block text-[18px] text-${theme}`}>
                The Creative Agency
              </p>
            </div>
          </div>
          <div>
            <h2
              className={`theme-transition text-[20px] font-bold leading-[20px] text-orangePrimary md:leading-[30px]`}
            >
              Follow us
            </h2>
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
          mt="7"
        />

        <FooterNavDetails
          heading="support"
          items={FOOTER_2_NAV_LINKS}
          link={true}
          mt="7"
        />

        <FooterNavDetails
          heading="join community"
          link={false}
          content="Community@agency.com"
        />
      </div>

      <hr className="my-8 w-full border-b-[1px]" />

      <p className="text-center text-sm">
        Copyright <span>{currentDate}</span> all rights reserved
      </p>
    </div>
  );
};

export default Footer;
