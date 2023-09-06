import VideoToggle from "../../assets/Images/VideoToggle.png";
import Video from "../../assets/Images/Video.png";
import { useEffect, useRef } from "react";

const HeroSection = () => {
  const domRef = useRef();
  const domRef1 = useRef();

  useEffect(() => {
    let initialValue = 0;
    const value = parseInt(domRef.current.dataset.value);
    const increment = Math.ceil(value / 1000)
    const el = domRef.current;
    

    const increaseCount = setInterval(() => {
      initialValue += increment;
        if (initialValue > value) {
          el.textContent = value;
          clearInterval(increaseCount);
          return;
        }
      el.textContent = initialValue;
    }, 100);

    return () => clearInterval(increaseCount);
  }, []);

   useEffect(() => {
     let initialValue = 0;
     const value = parseInt(domRef1.current.dataset.value);
     const increment = Math.ceil(value / 1000);
     const el = domRef1.current;

     const increaseCount = setInterval(() => {
       initialValue += increment;
       if (initialValue > value) {
         el.textContent = `0${value}`;
         clearInterval(increaseCount);
         return;
       }
       el.textContent = initialValue;
     }, 100);

     return () => clearInterval(increaseCount);
   }, []);

  return (
    <div
      id="hero"
      className="m-auto w-full px-6  pb-[6rem] pt-16 lg:max-w-[80vw]"
    >
      <div className="grid">
        <h1 className="whitespace-nowrap font-primary text-4xl font-bold capitalize text-white md:hidden lg:text-[5rem]">
          We Are
        </h1>
        <div className="order-last block  items-center justify-between gap-x-6 md:order-first md:inline-flex">
          <h1 className="hidden whitespace-nowrap font-primary text-4xl font-bold capitalize text-white sm:text-[50px] md:block lg:text-[5rem]">
            We Are
          </h1>

          <p className="order-first  leading-[30px] text-colorwhite-100 md:order-last ">
            We are helping people to grow their business. We are providing the
            best designs and development service for your next dream project.
          </p>
          <img className="" src={VideoToggle} alt="" />
        </div>

        <h1 className="font-primary text-4xl font-bold capitalize leading-snug text-orangePrimary sm:text-[50px] lg:text-[5.2rem]">
          building <span className="text-white">digital</span> brands
        </h1>
      </div>

      <div className="grid grid-cols-1 items-center pt-10  md:grid-cols-[300px_minmax(0,_1fr)]">
        <div className="order-last md:order-first">
          <div className=" border-b-[1px] border-colorwhite-100 pb-4">
            <h1 className="font-primary text-[30px] leading-[65px] text-white sm:text-[35px] lg:text-[54px]">
              <span data-value="05" ref={domRef1}>
                {" "}
                0
              </span>
              <span className="text-orangePrimary">+</span>
            </h1>
            <p className="text-[18px] capitalize leading-[35px] tracking-wider text-colorwhite-100">
              years of exprerience
            </p>
          </div>
          <div className=" border-b-[1px] border-colorwhite-100 pb-4 pt-2">
            <h1 className="font-primary text-[30px] leading-[65px] text-white sm:text-[35px] lg:text-[54px]">
              <span data-value="17" ref={domRef}>
                {" "}
                0
              </span>
              <span className="text-orangePrimary">+</span>
            </h1>
            <p className="text-[18px] capitalize leading-[35px] tracking-wider text-colorwhite-100">
              design awards
            </p>
          </div>
          <div className=" border-b-[1px] border-colorwhite-100 pb-4 pt-4">
            <h1 className="font-primary text-[30px] leading-[65px] text-white sm:text-[35px] lg:text-[54px]">
              <span data-value="96" ref={domRef}>
                {" "}
                0
              </span>
              <span className="text-orangePrimary ">%</span>
            </h1>
            <p className="text-[18px] capitalize leading-[35px] tracking-wider text-colorwhite-100">
              Clients satisfactions
            </p>
          </div>
        </div>
        <figure className="w-[97%] justify-self-end">
          <img className=" " src={Video} alt="" />
        </figure>
      </div>
    </div>
  );
};

export default HeroSection;
