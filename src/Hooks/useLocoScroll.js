import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll"
import "locomotive-scroll/src/locomotive-scroll.scss";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

const useLocoScroll = () => {
   useEffect(() => {
     

      const scrollEl = document.querySelector("#main-container")
      const locoScroll = new LocomotiveScroll({
         el: scrollEl,
         smooth: true,
         multiplier: 1,
         class: "is-reveal"
      })
      
       locoScroll.on("scroll", () => {
      ScrollTrigger.update();
    });
   }, [])
 
};

export default useLocoScroll;
