import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useContext, useEffect, useLayoutEffect, useRef } from "react";
import { SmallScreenContext } from "../Contexts/SmallScreenContext";

const useBtnGsapScrollTrigger = () => {
  const button = useRef(null);
  const { isActive, setIsActive } = useContext(SmallScreenContext);

  useEffect(() => {
    if (isActive) setIsActive(false);
  }, []);

  useLayoutEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 868) {
        gsap.registerPlugin(ScrollTrigger);

        const scrollTrigger = ScrollTrigger.create({
          trigger: document.documentElement,
          start: 0,
          end: window.innerHeight,
          onLeave: () => {
            gsap.to(button.current, {
              scale: 1,
              duration: 0.25,
              ease: "power1.out",
            });
          },
          onEnterBack: () => {
            gsap.to(button.current, {
              scale: 0,
              duration: 0.25,
              ease: "power1.out",
            });
            setIsActive(false);
          },
        });

        return scrollTrigger;
      } else {
        button.current.style = "transform: scale(1)";
      }
    };

    let scrollTrigger = handleResize();

    window.addEventListener("resize", () => {
      if (scrollTrigger) {
        scrollTrigger.kill();
        button.current.style = "transform: scale(0)";
        setIsActive(false);
      }
      const newScrollTrigger = handleResize();
      scrollTrigger = newScrollTrigger;
    });

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
   
  return {button, isActive, setIsActive}
};

export default useBtnGsapScrollTrigger;
