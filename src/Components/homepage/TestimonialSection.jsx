import { TESTIMONIALS_DETAILS } from "../../lib/data";
import TestimonialsCarousel from "../general/Carousel";



const TestimonialSection = () => {
  return (
    <div id="testimonial" className="m-auto w-full px-4 py-14 lg:max-w-[85vw]">
      <TestimonialsCarousel testimonials={TESTIMONIALS_DETAILS} />
    </div>
  );
};

export default TestimonialSection;
