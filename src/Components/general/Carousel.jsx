import { useRef, useState } from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialsCarousel = ({ testimonials }) => {
  const sliderRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 600,
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

  return (
    <div className="w-full">
      <Slider {...settings} ref={sliderRef}>
        {testimonials.map((testimonial, index) => (
          <div key={testimonial.id} className="p-4 text-center">
            <p className="text-lg text-gray-600">{testimonial.text}</p>
            <p className="text-lg font-semibold">{testimonial.name}</p>
            <p className="text-gray-500">{testimonial.address}</p>
          </div>
        ))}
      </Slider>
      <div className="mt-4 flex justify-center">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`${
              activeSlide === index ? "bg-blue-500" : "bg-gray-300"
            } mx-2 rounded px-4 py-2 font-bold text-white hover:bg-blue-700`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

TestimonialsCarousel.propTypes = {
  testimonials: PropTypes.array,
};

export default TestimonialsCarousel;
