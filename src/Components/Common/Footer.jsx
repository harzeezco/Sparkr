import upArrow from "../../assets/Icons/upArrow2.svg";
import Logo from "../../assets/Icons/Route.svg";
import s1 from "../../assets/Icons/Facebook.svg";
import s2 from "../../assets/Icons/Linkedin.svg";
import s3 from "../../assets/Icons/Twitter.svg";
import s4 from "../../assets/Icons/Instagram.svg";
import Line from '../../assets/Images/Line.png'


const aboutNavs = ["home", "about us", "services", "project"];
const supportNavs = ["blog", "contact", "menu"];

const Footer = () => {
  return (
    <div className="m-auto w-full  px-4 pb-14 pt-20  lg:max-w-[85vw]">
      <div className="grid grid-cols-1 items-center gap-y-6 md:grid-cols-[1fr_40%]">
        <h1 className="heading-primary">
          let’s make your <br />{" "}
          <span className="text-orangePrimary">product</span> together
        </h1>
        <button className="flex h-[60px] w-full max-w-[60px] items-center justify-center justify-self-start rounded-full bg-white md:ml-8 md:h-[100px] md:max-w-[100px]">
          <img src={upArrow} className="h-6 md:h-8" alt="" />
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
              <li className="flex items-center justify-center bg-colorDarkLight p-4">
                <a
                  aria-label="Facebook"
                  target="_blank"
                  href="https://twitter.com/QuadriMubarak4"
                  rel="noopener noreferrer"
                >
                  <img className="h-4" src={s1} alt="Facebook icon" />
                </a>
              </li>
              <li className="flex items-center justify-center bg-colorDarkLight p-4">
                <a
                  aria-label="Linkedin"
                  target="_blank"
                  href="https://www.google.com"
                  rel="noopener noreferrer"
                >
                  <img className="h-4" src={s2} alt="Linkedin icon" />
                </a>
              </li>
              <li className="flex items-center justify-center bg-colorDarkLight p-4">
                <a
                  aria-label="Twitter"
                  target="_blank"
                  href="https://www.google.com"
                  rel="noopener noreferrer"
                >
                  <img className="h-4" src={s3} alt="Twitter icon" />
                </a>
              </li>
              <li className="flex items-center justify-center bg-colorDarkLight p-4">
                <a
                  target="_blank"
                  href="https://www.google.com"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <img className="h-4" src={s4} alt="Instagram" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <nav>
          <h3 className="text-[20px] font-bold capitalize leading-8 text-white">
            about
          </h3>
          <ul className="mt-7 grid gap-y-4 capitalize text-white opacity-[70%]">
            {aboutNavs.map((items) => (
              <li key={items}>{items}</li>
            ))}
          </ul>
        </nav>

        <nav>
          <h3 className="text-[20px] font-bold capitalize leading-8 text-white">
            support
          </h3>
          <ul className="mt-7 grid gap-y-4 capitalize text-white opacity-[70%]">
            {supportNavs.map((items) => (
              <li key={items}>{items}</li>
            ))}
          </ul>
        </nav>

        <nav>
          <h3 className="text-[20px] font-bold capitalize leading-8 text-white">
            join community
          </h3>
          <ul>
            <li className="mt-7 capitalize text-white opacity-[70%]">
              Community@agency.com
            </li>
          </ul>
        </nav>
      </div>

      <hr className="my-8 w-full border-b-[1px] text-white opacity-[30%]" />

      <p className="text-center text-sm text-white opacity-[70%]">
        Copyright 2023 all rights Flowgiri reserved
      </p>
    </div>
  );
};

export default Footer;
