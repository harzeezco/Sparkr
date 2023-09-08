import VideoToggle from "../../assets/Images/VideoToggle.png";
import Video from "../../assets/Images/Video.png";
import { useRef } from "react";
import useCounter from "../../Hooks/useCounter";
import Counter from "../Common/Counter";

const HeroSection = () => {
  const domRef = useRef();
  const domRef2 = useRef();
  const domRef3 = useRef();

  const counter = useCounter(domRef);
  const counter2 = useCounter(domRef2);
  const counter3 = useCounter(domRef3);

  return (
    <div
      id="hero"
      className="m-auto w-full px-6  pb-[6rem] pt-16 lg:max-w-[85vw]"
    >
      <div className="grid">
        <h1 className="whitespace-nowrap font-primary text-4xl font-bold capitalize text-white md:hidden lg:text-[5.2rem]">
          We Are
        </h1>
        <div className="order-last block  items-center justify-between gap-x-6 md:order-first md:inline-flex">
          <h1 className="hidden whitespace-nowrap font-primary text-4xl font-bold capitalize text-white sm:text-[50px] md:block lg:text-[5rem]">
            We Are
          </h1>

          <p className="order-first leading-[30px] text-colorwhite-100 md:order-last">
            We are helping people to grow their business. We are providing the
            best designs and development service for your next dream project.
          </p>
          <img className="" src={VideoToggle} alt="" />
        </div>

        <h1 className="font-primary text-4xl font-bold capitalize leading-snug tracking-[-1px] text-orangePrimary sm:text-[50px] lg:text-[5.2rem]">
          building <span className="text-white">digital</span> brands
        </h1>
      </div>

      <div className="grid grid-cols-1 items-center pt-10  md:grid-cols-[300px_minmax(0,_1fr)]">
        <div className="order-last md:order-first">
          <Counter
            data_value="5"
            counter={counter}
            pagh_text="years of exprerience"
            percent_symb="+"
          />
          <Counter
            data_value="17"
            counter={counter2}
            pagh_text="design awards"
            percent_symb="+"
          />
          <Counter
            data_value="97"
            counter={counter3}
            pagh_text="Clients satisfactions"
            percent_symb="%"
          />
        </div>
        <figure className="justify-self-end md:w-[97%]">
          <img src={Video} alt="" />
        </figure>
      </div>
    </div>
  );
};

export default HeroSection;
