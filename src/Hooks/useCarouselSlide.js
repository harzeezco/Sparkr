import { useRef, useState } from "react";


const useCarouselSlide = () => {
   const sliderRef = useRef(null);
   const [activeSlide, setActiveSlide] = useState(0);

   const settings = {
     infinite: true,
     autoplay: true,
     autoplaySpeed: 7000,
     speed: 2000,
     slidesToShow: 1,
     slidesToScroll: 1,
     beforeChange: (current, next) => {
       setActiveSlide(next);
     },
   };

   const goToSlide = (index) => {
     sliderRef.current.slickGoTo(index);
     setActiveSlide(index);
   };

  return {activeSlide, sliderRef, settings, goToSlide}
}

export default useCarouselSlide