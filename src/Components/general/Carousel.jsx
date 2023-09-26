import PropTypes from "prop-types";
import useCarouselSlide from "../../Hooks/useCarouselSlide";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import BlockQuote from "../../assets/Icons/Union.svg";

const TestimonialsCarousel = ({ testimonials }) => {
  const { activeSlide, sliderRef, settings, goToSlide } = useCarouselSlide();

  return (
    <article className="relative w-full">
      <Slider {...settings} ref={sliderRef} aria-live="polite">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="p-4">
            <div className="grid justify-start p-4 md:grid-cols-[120px_1fr]">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-colorDark p-2">
                <img
                  className="h-6 w-6"
                  src={BlockQuote}
                  alt="Image of the testimonial quote icon"
                  loading="lazy"
                />
              </div>

              <article className="mt-6 md:mt-0">
                <h1 className="text-[20px] leading-[30px] text-white sm:pb-5  sm:text-[30px] lg:text-[40px] lg:leading-[60px]">
                  {testimonial.text}
                </h1>
                <div className="pt-6">
                  <h2 className="text-2xl text-[20px] font-bold leading-[30px] text-white lg:leading-9">
                    {testimonial.name}
                  </h2>
                  <p className="leading-6 text-white opacity-[70%]">
                    {testimonial.address}
                  </p>
                </div>
              </article>
            </div>
          </div>
        ))}
      </Slider>
      <div className="right-0 flex items-center gap-x-4 pl-5 sm:absolute sm:bottom-[40px] sm:justify-center md:pl-0">
        {testimonials.map((_, index) => (
          <button
            aria-label={`${index} carousel button`}
            role="button"
            aria-controls="carousel"
            key={index}
            onClick={() => goToSlide(index)}
            className={`${
              activeSlide === index
                ? "h-7 bg-white"
                : "h-5 bg-white px-2 opacity-[50%] hover:bg-white hover:opacity-[100%]"
            } rounded-full px-2 py-2 theme-transition`}
          ></button>
        ))}
      </div>
    </article>
  );
};

TestimonialsCarousel.propTypes = {
  testimonials: PropTypes.array,
};

export default TestimonialsCarousel;
